import { ethers } from "hardhat";

async function main() {
  const StudentSocietyDAO = await ethers.getContractFactory("StudentSocietyDAO");
  const studentSocietyDAO = await StudentSocietyDAO.deploy();
  await studentSocietyDAO.deployed();

  console.log(`StudentSocietyDAO deployed to ${studentSocietyDAO.address}`);

 // const StudentERC20 = await ethers.getContractFactory("student_ERC20");
  //const studenterc20 = await StudentERC20.deploy("123","123");
  const studenterc20=await studentSocietyDAO.proposal_account();
  console.log(`studenterc20 deployed to ${studenterc20}`);

  const ERC721=await studentSocietyDAO.bonus();
  console.log(`bonus deployed to ${ERC721}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});