// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy();
  const TxReceipt = await myContract.waitForDeployment();

  console.log("MyContract deployed to:", TxReceipt.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
