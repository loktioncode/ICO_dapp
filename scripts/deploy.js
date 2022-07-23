const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_BROZ_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Bros NFT contract that you deployed in the previous module
  const CryptoBrozNFTContract = CRYPTO_BROZ_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so CryptoBrozTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const CryptoBrozTokenContract = await ethers.getContractFactory(
    "CryptoBrozToken"
  );

  // deploy the contract
  const deployedCryptoBrozTokenContract = await CryptoBrozTokenContract.deploy(
    CryptoBrozNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Broz Token Contract Address:",
    deployedCryptoBrozTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });