// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./IFundingPoolManager.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract CitizenNFTBond is ERC721Enumerable, AccessControl {
    using Counters for Counters.Counter;

    string private _baseURI;

    struct Pool {
        string name;
        uint256 season;
        IFundingPoolManager poolManager;
        uint256 poolId;
    }

    struct Bond {
        IFundingPoolManager;
        uint256 poolId;
        uint256 bondId;
    }

    mapping (uint256 => Pool) private boondPools;
    Counters.Counter private poolCounter;

    constructor() {} // TODO: write me

    function addPool(string name, uint256 season, IFundingPoolManager poolManager, uint256 poolId) {} // TODO: write me

    function purchaseBond(uint256 bondPoolId, uint256 maturityDate) external payable returns (uint256) {} // TODO: write me

    function redeemBond(uint256 nftId) external returns (bool) {} // TODO: write me
    
    function setBaseURI(string memory uri) public onlyRole(DEFAULT_ADMIN_ROLE) returns (bool) {
        _baseURI = uri;
        return true;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseURI;
    }

}

