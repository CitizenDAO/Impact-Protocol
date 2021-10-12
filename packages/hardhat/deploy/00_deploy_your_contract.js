// deploy/00_deploy_your_contract.js
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("CitizenFixedBond", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    //args: [ "Hello", ethers.utils.parseEther("1.5") ],
    log: true,
  });
  await deploy("CitizenBondManager", {
    from: deployer,
    log: true,
  });
  await deploy("CitizenToken", {
    from: deployer,
    log: true,
  });

  const citizenFixedBond = await ethers.getContract("CitizenFixedBond", deployer);
  const citizenBondManager = await ethers.getContract("CitizenBondManager", deployer);
  const citizenToken = await ethers.getContract("CitizenToken", deployer);
  
  // Uncomment for local testing - james
  /*await citizenFixedBond.initializeBond(
    citizenBondManager.address,
    "Test Help",
    180,
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
    50,
    20,
    30,
    100000,
    citizenToken.address
  );

  await citizenBondManager.addCategory("Health");
  await citizenBondManager.addPool(0, citizenFixedBond.address);
  await citizenToken.grantRole(web3.utils.soliditySha3("MINTER_ROLE"), citizenFixedBond.address); */


  
  /*
    // Getting a previously deployed contract
    const YourContract = await ethers.getContract("YourContract", deployer);
    await YourContract.setPurpose("Hello");
  
    To take ownership of yourContract using the ownable library uncomment next line and add the 
    address you want to be the owner. 
    // yourContract.transferOwnership(YOUR_ADDRESS_HERE);

    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */

  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */
};
module.exports.tags = ["CitizenFixedBond","CitizenBondManager","CitizenToken"];
