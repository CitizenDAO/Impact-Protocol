// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract FixedTermBondIssuer is AccessControl {
    using Counters for Counters.Counter;

    struct Bond {
        address holder;
        uint256 maturityDate;
        IERC20 asset;
        uint256 payout;
        bool redeemed;
    }

    // bonds
    mapping (uint256 => Bond) public bonds;
    Counters.Counter private bondId;

    // asset tracking
    mapping (IERC20 => uint256) public assignedAssets;
    
    function issueBond(uint256 maturityDate, IERC20 asset, uint256 apr, address to, uint256 baseAmount)
        public
        onlyRole(DEFAULT_ADMIN_ROLE) // needs specific role
        returns (uint256)
    {
        require(_isValid(to, maturityDate), "FixedTermBondIssuer: invalid bond parameters");
        uint256 payout = _calculateReturn(maturityDate, apr, baseAmount);
        uint256 assetBalance = asset.balanceOf(address(this));
        require(assetBalance - assignedAssets[asset] >= payout, "FixedTermBondIssuer: insufficient asset balance");
        
        assignedAssets[asset] += payout;
        uint256 id = bondId.current();
        bondId.increment();

        bonds[id].holder = to;
        bonds[id].maturityDate = maturityDate;
        bonds[id].asset = asset;
        bonds[id].payout = payout;

        return id;
    }

    function redeemBond(uint256 id) public returns (bool) {
        require(id < bondId.current(), "FixedTermBondIssuer: invalid bond id");
        require(!bonds[id].redeemed, "FixedTermBondIssuer: bond already redeemed");
        require(msg.sender == bonds[id].holder || hasRole(DEFAULT_ADMIN_ROLE, msg.sender), // needs specific role
                "FixedTermBondIssuer: sender cannot redeem bond");
        require(bonds[id].maturityDate <= block.timestamp, "FixedTermBondIssuer: bond not matured");

        bonds[id].redeemed = true;
        (bonds[id].asset).transfer(bonds[id].holder, bonds[id].payout);
        assignedAssets[bonds[id].asset] -= bonds[id].payout;

        return true;
        
    }

    function transferBond(uint256 id, address to) public returns (bool) {
        require(id < bondId.current(), "FixedTermBondIssuer: invalid bond id");
        require(_canTransfer(id, to), "FixedTermBondIssuer: sender cannot transfer bond");

        bonds[id].holder = to;
        return true;
    }

    function withdrawUnassignedAssets(IERC20 asset, address to, uint256 amount) public returns (bool) {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "FixedTermBondIssuer: denied");
        require(asset.balanceOf(address(this)) - assignedAssets[asset] >= amount,
                                "FixedTermCompoundingBondIssuer: invalid amount");

        asset.transfer(to, amount);
        return true;
        
    }

    function _calculateReturn(uint256 maturityDate, uint256 apr, uint256 baseAmount) public view returns (uint256) {
        uint256 duration = (maturityDate - block.timestamp) / (60 * 60 * 24);
        uint256 total = baseAmount * ((10**3 + (apr/365))/10**3)**365;
        
        return total;
    }

    function _isValid(address to, uint256 maturityDate) internal virtual returns (bool) {
        require(to != address(0x0), "FixedTermBondIssuer: cannot assign to zero address");
        require(maturityDate > block.timestamp, "FixedTermBondIssuer: maturity date cannot be in past");
        return true;
    }

    function _canTransfer(uint256 id, address to) internal virtual returns (bool) {
        return bonds[id].holder == msg.sender || hasRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function remainingAssets(IERC20 asset) public view returns (uint256) {
        return asset.balanceOf(address(this)) - assignedAssets[asset];
    }
}
