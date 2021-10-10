// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./IFundingPoolManager.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract CitizenNFTBond is ERC721Enumerable, AccessControl {
    using Counters for Counters.Counter;

    string private _baseURI;

    /**
     * @dev A Pool represents a pool of CDAO tokens from which bonds can be purchased
     */
    struct Pool {
        string name;
        IFundingPoolManager poolManager;
        uint256 poolId;
    }

    struct Bond {
        Pool pool;
        uint256 bondId;
    }

    mapping (uint256 => Pool) private bondPools;
    Counters.Counter private poolCounter;

    mapping (uint256 => Bond) private bonds;
    Counters.Counter private bondCounter;

    constructor() {} // TODO: write me

    function addPool(string name, IFundingPoolManager poolManager, uint256 poolId)
        public
        onlyRole(DEFAULT_ADMIN_ROLE) // TODO: add specific role
        returns (uint256)
    {
        uint256 id = poolCounter.current();
        bondPools[id].name = name;
        bondPools[id].poolManager = poolManager;
        bondPools[id].poolId = poolId;

        return id;
    }

    function purchaseBond(uint256 bondPoolId, uint256 maturityDate) external payable returns (uint256) {
        require(bondPoolId < poolCounter.current(), "CitizenNFTBond: invalid pool id");

        uint256 bondId = bondPools[bondPoolId].poolManager
            .purchase{value: msg.value}(bondPools[bondPoolId].poolId, msg.sender, maturityDate);
        uint256 nftId = bondCounter.current();
        bondCounter.increase();
        bonds[nftId].pool = bondPools[bondPoolId];
        bonds[nftId].bondId = bondId;

        _safeMint(msg.sender, nftId);
        return nftId;
    }

    function redeemBond(uint256 nftId) external returns (bool) {
        require(msg.sender == ownerOf(nftId), "CitizenNFTBond: only bond holder can redeem bond");

        return bonds[nftId].pool.poolManager.redeem(bonds[nftId].pool.poolId, bonds[nftId].bondId);
    }

    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        super._transfer(from, to, tokenId);
        bonds[nftId].pool.poolManager.transfer(bonds[nftId].pool.poolId, bonds[nft].bondId, to);
    }
    
    function setBaseURI(string memory uri) public onlyRole(DEFAULT_ADMIN_ROLE) returns (bool) {
        _baseURI = uri;
        return true;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseURI;
    }

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

