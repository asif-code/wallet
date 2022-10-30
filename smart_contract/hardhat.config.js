require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/dN3A-xqqDHoFQsJXpYORm4uQWXYCmY8z",
      accounts: [
        "454b7e248b230b31177b07d42f0e1123fc75709c853a6ecceaf5c2c2905d0b37",
      ],
    },
  },
};
