pragma solidity >=0.8.0 <0.9.0;

contract IBondContract {

    uint256 apy;
    address fundingContract;
    address treasury;
    uint256 percentToTreasury;

    function mint() returns (uint256){
        // funds in -> (treasury / funding);
    };
    function canMint(uint256 value);
    function claim() ;
    function canClaim(int);


    function getCDAOValue(uint value) returns (cdaoAmount);

    function addAPY(uint cdaoAmount) return (matureAmount);
}
