import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  // Solidity compiler version
  solidity: "0.8.9",
  networks: {
    ganache: {
      // Change the url according to your ganache configuration
      url: 'http://127.0.0.1:7545',
  
      // Change these accounts private keys according to your ganache configuration.
      accounts: [
        '1f80db9b4a0c4c1c33b8f94da36d3bbfed4473661ebe5e95fcae96c84bf0d1dc',
      ]
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};

export default config;
