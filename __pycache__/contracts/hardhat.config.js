require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, INFURA_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/$51edb11ec0d846219513d82b1e80b9ab`,  // Replace with your Infura Project ID
      accounts: [`0x$9c02f9c4f86f60a22193cb3412ec447b8ddedac1cc7d661c2438a79c8c604b5a`],                        // Replace with your private key
    },
  },
};
