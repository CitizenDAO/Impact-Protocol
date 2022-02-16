// deploy/00_deploy_your_contract.js
const Web3 = require("web3");

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("CitizenToken", {
    from: deployer,
    log: true,
  });

  const issuer = await deploy("FixedTermBondIssuer", {
    from: deployer,
    log: true,
  });
  const manager = await deploy("FundingPoolManager", {
    from: deployer,
    args: [issuer.address],
    log: true,
  });

  await deploy("CitizenNFTBond", {
    from: deployer,
    log: true,
  });

  const citizenNFTBond = await ethers.getContract("CitizenNFTBond", deployer);
  citizenNFTBond.addPool("season1", manager.address, 0);
};
module.exports.tags = [
  "CitizenFixedBond",
  "CitizenBondManager",
  "CitizenToken",
];
