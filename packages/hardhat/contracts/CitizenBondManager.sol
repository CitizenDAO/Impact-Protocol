// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./IBondContract.sol";

contract CitizenBondManager {

    mapping(uint256 => IBondContract) bondContracts;
    
}