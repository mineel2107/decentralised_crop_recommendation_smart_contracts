require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
      // gas: 2100000,
      // gasPrice: 8000000000,
      // saveDeployments: true,
    },
  },
};
