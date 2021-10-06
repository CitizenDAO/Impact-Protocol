// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IBondContract {
    // Mint the bond as an NFT and returns tokenId
    function mint(address to) external payable returns (uint256);

    // Claim CDAO tokens
    function claim(uint256 tokenId) external;

    // Is the pool active?
    function isPoolExpired() external returns (bool);
}
