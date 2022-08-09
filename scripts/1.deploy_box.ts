import { ethers, upgrades } from "hardhat"

async function main() {
  const Box = await ethers.getContractFactory("Box")
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box, [42], {initializer: 'store'})

  console.log(box.address, "box(proxy) address")
  console.log(await upgrades.erc1967.getImplementationAddress(box.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(box.address)," getAdminAddress")
  await box.deployed();

  console.log("Box with 1 ETH deployed to:", box.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
