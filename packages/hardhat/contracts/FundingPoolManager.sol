// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


contract FundingPoolManager is IFundingPoolManager {
    
    function purchase(uint256 poolId, address to, uint256 maturityDate) external virtual payable returns (uint256) {
        return 0;
    }

    function redeem(uint256 poolId, uint256 bondId) external virtual returns (bool) {
        return true;
    }

    function transfer(uint256 poolId, uint256 bondId, address to) external virtual returns (bool) {
        return true;
    }

    function getPoolInfo(uint256 poolId) external virtual view returns (address asset, uint256 apy, uint256 outstanding) {
        return (address(0x0), 0, 0);
    }

    function getBondInfo(uint256 poolId, uint256 bondId) external virtual view returns (address, uint256, address, uint256, bool) {
        return (address(0x0), 0, address(0x0), 0, true);
    }

}
