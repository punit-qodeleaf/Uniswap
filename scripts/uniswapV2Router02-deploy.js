// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const UniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy('0x5FbDB2315678afecb367f032d93F642f64180aa3','0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9');

  await uniswapV2Router02.deployed();

  console.log("UniswapV2Router02 deployed to:", uniswapV2Router02.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
