import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Calculator", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const StudentSocietyDAO = await ethers.getContractFactory("StudentSocietyDAO");
    const studentsociety = await StudentSocietyDAO.deploy();
    await studentsociety.deployed();
    return { StudentSocietyDAO, studentsociety, owner, otherAccount };
  }

  describe("Test functions", function () {
    it("sum", async function () {
      const { studentsociety } = await loadFixture(deployContractFixture);
      expect(await studentsociety.initiate('123',1667011385846,129154)).to.equal(true);
    });

  });
});
