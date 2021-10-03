// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "hardhat/console.sol";
import "./IBondContract.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Address.sol";

// TODO - Receiver functionality
// TODO - Direct Ether receive and default non-present function call checks
// TODO - events
// TODO - getters
contract CitizenFixedBond is
    ERC721,
    ERC721Enumerable,
    AccessControl,
    ReentrancyGuard,
    IBondContract
{
    using Counters for Counters.Counter;
    using Address for address;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    Counters.Counter private _tokenIdCounter;

    // Bond Name
    string private _name;

    // Bond Category i.e. Health, Climate etc.
    uint256 private _categoryId;

    // Bond vesting period in seconds
    uint256 private _vestingPeriod;

    // Contracts handling the funds
    address payable private _fundingContract;
    address payable private _treasury;
    address payable private _liquidityPoolContract;

    // Splits as breakdown of 100% ex: 50,20,30. Must add to 100.
    uint256 private _fundingContractSplit;
    uint256 private _treasurySplit;
    uint256 private _liquidityPoolContractSplit;

    // mapping  from tokenId to its bondProperties
    mapping(uint256 => BondProp) private _bondProperties;

    // Properties of this bond
    struct BondProp {
        // Is Bond CDAO tokens claimed
        bool isClaimed;
        // CDAO tokens in the Bond
        uint256 maturityCDAOAmount;
        // Bond start time
        uint256 startTime;
        // Bond purchase price in ethers
        uint256 purchasePrice;
    }

    constructor() ERC721("CitizenFixedBond", "CFBND") {
        //console.log(msg.sender);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
    }

    // MUST be called after constructing - this way is to avoid Stack too deep in constructor
    // TODO - apply enforcing logic
    function initializeBond(
        address citizenBondManagerContract,
        string memory name,
        uint256 categoryId,
        uint256 vestingPeriod,
        address fundingContract,
        address treasury,
        address liquidityPoolContract,
        uint256 fundingContractSplit,
        uint256 treasurySplit,
        uint256 liquidityPoolContractSplit
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        // Using Block technique to avoid Stack too deep
        // Inspired from Uinswap V2 Production contracts
        {
            // Consistent Splits
            require(
                fundingContractSplit <= 100 &&
                    treasurySplit <= 100 &&
                    liquidityPoolContractSplit <= 100,
                "Split more than 100"
            );
            require(
                fundingContractSplit +
                    treasurySplit +
                    liquidityPoolContractSplit ==
                    100,
                "Inconsistent splits"
            );
        }

        grantRole(MINTER_ROLE, citizenBondManagerContract);

        {
            // Initialize Bond variables
            _name = name;
            _categoryId = categoryId;
            _vestingPeriod = vestingPeriod;
        }

        {
            // TODO - check 'payable' usage - JAMES
            _fundingContract = payable(fundingContract);
            _treasury = payable(treasury);
            _liquidityPoolContract = payable(liquidityPoolContract);
        }

        {
            _fundingContractSplit = fundingContractSplit;
            _treasurySplit = treasurySplit;
            _liquidityPoolContractSplit = liquidityPoolContractSplit;
        }
    }

    // TODO - claim logic - will mint maturityCDAOAmount from CDAO contract to the user
    // Claim CDAO tokens
    //function claim(uint256 tokenId) external;

    // Can claim CDAO tokens? Check for vesting
    function canClaim(uint256 tokenId) external view returns (bool) {
        require(_exists(tokenId), "Bond does not exist");
        return
            _bondProperties[tokenId].startTime + _vestingPeriod >
            block.timestamp;
    }

    // Get Maturity CDAO amount
    //function getMaturityAmount(uint256 tokenId) external view returns (uint256);

    // Get Bond purchase price
    //function getPurchasePrice(uint256 tokenId) external view returns (uint256);

    // Mint the bond as an NFT and returns tokenId
    function mint() external payable override nonReentrant returns (uint256) {
        require(msg.value > 0, "Cannot purchase bonds for free");

        BondProp memory bondProp;

        bondProp.isClaimed = false;
        // TODO - calculate from liquidity pool
        bondProp.maturityCDAOAmount = 1000;
        bondProp.startTime = block.timestamp;
        bondProp.purchasePrice = msg.value;

        uint256 tokenId = _mint(msg.sender, bondProp);

        // Send the split amounts
        // TODO - check the splits logic. E.g can it happen that this.balance < any split value because of roundoff - James
        // TODO - check why address(this).sendValue throwing error
        _transferSplits(
            _fundingContract,
            (msg.value * _fundingContractSplit) / 100
        );
        _transferSplits(_treasury, (msg.value * _treasurySplit) / 100);
        _transferSplits(
            _liquidityPoolContract,
            (msg.value * _liquidityPoolContractSplit) / 100
        );

        return tokenId;
    }

    function _transferSplits(address payable to, uint256 amount) private {
        (bool success1, ) = to.call{value: amount}("");
        require(
            success1,
            "Address: unable to send value, recipient may have reverted"
        );
    }

    // TODO - check usage of 'memory' - - JAMES-
    // TODO - check whether MinterRole for contract will work this way or not - - JAMES
    function _mint(address to, BondProp memory _bondProp)
        internal
        onlyRole(MINTER_ROLE)
        returns (uint256)
    {
        uint256 tokenId = _tokenIdCounter.current();

        _bondProperties[tokenId] = _bondProp;
        _safeMint(to, tokenId);
        _tokenIdCounter.increment();

        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
