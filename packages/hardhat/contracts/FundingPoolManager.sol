// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./IFundingPoolManager.sol";
import "./FixedTermBondIssuer.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract FundingPoolManager is IFundingPoolManager, AccessControl {
    using Counters for Counters.Counter;

    AggregatorV3Interface internal priceFeed;
    FixedTermBondIssuer internal bondIssuer;
    

    struct Pool {
        IERC20 token;
        uint256 apr;
        address fundingAddress;
    }
    Counters.Counter private poolCounter;
    mapping (uint256 => Pool) private pools;

    constructor(FixedTermBondIssuer issuer) {
        // KOVAN
        priceFeed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
        bondIssuer = issuer;
    }

    function addPool(IERC20 token, uint256 apr, address fundingAddress)
        public onlyRole(DEFAULT_ADMIN_ROLE) returns (uint256) {
        uint256 id = poolCounter.current();
        poolCounter.increment();
        pools[id].token = token;
        pools[id].apr = apr;
        pools[id].fundingAddress = fundingAddress;
        return id;
    }
    
    function purchase(uint256 poolId, address to, uint256 maturityDate) external virtual payable returns (uint256) {
        require (poolId < poolCounter.current(), "FundingPoolManager: invalid pool id");
        uint256 baseAmount = getTokenAmount(msg.value);
        uint256 id = bondIssuer.issueBond(maturityDate, pools[poolId].token, pools[poolId].apr, to, baseAmount);
        pools[poolId].fundingAddress.call.value(msg.value)("");
        return id;
    }

    function getTokenAmount(uint256 ethIn) public view returns (uint256) {
        // using chainlink
        (
         uint80 roundID,
         int price,
         uint startedAt,
         uint timeStamp,
                     uint80 answeredInRound
         ) = priceFeed.latestRoundData();
        return price * 10 * ethIn;
    }

    function redeem(uint256 poolId, uint256 bondId) external virtual returns (bool) {
        return bondIssuer.redeemBond(bondId);
    }

    function transfer(uint256 poolId, uint256 bondId, address to) external virtual returns (bool) {
        return bondIssuer.transferBond(bondId, to);
    }

    /* function getPoolInfo(uint256 poolId) external virtual view returns (address asset, uint256 apy, uint256 outstanding) { */
    /*     return (address(0x0), 0, 0); */
    /* } */

    /* function getBondInfo(uint256 poolId, uint256 bondId) external virtual view returns (address, uint256, address, uint256, bool) { */
    /*     return (address(0x0), 0, address(0x0), 0, true); */
    /* } */

}
