import { expect } from "chai";
import { ethers, upgrades } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box", function () {
  let box:Contract;

  beforeEach(async function () {
    const Box = await ethers.getContractFactory("Box")

    box = await upgrades.deployProxy(Box, [42], {initializer: 'store'})
  })

  it("should retrieve value previously stored", async function () {
    await box.store(42)
    expect(await box.retrieve()).to.equal(BigNumber.from('42'))

    await box.store(100)
    expect(await box.retrieve()).to.equal(BigNumber.from('100'))
  })
})