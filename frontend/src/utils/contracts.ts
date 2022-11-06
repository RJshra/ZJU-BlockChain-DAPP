import Addresses from './contract-addresses.json'
import StudentSocietyDAO from './abis/StudentSocietyDAO.json'
import student_ERC20 from './abis/student_ERC20.json'
import ERC721 from './abis/ERC721.json'
const Web3 = require('web3');

// @ts-ignore
let web3 = new Web3(window.web3.currentProvider)

const societydaoAddress = Addresses.StudentSocietydao
const societydaoABI = StudentSocietyDAO.abi
const ERC20Address = Addresses.studenterc20
const ERC20ABI = student_ERC20.abi
const bonusERC721 = Addresses.bonusERC
const bonusABI = ERC721.abi
// 获取合约实例
const societyDaoContract = new web3.eth.Contract(societydaoABI, societydaoAddress);
const ERC20Contract = new web3.eth.Contract(ERC20ABI, ERC20Address);
const ERC721Contract = new web3.eth.Contract(bonusABI,bonusERC721)
// 导出web3实例和其它部署的合约
export {web3, societyDaoContract, ERC20Contract,ERC721Contract}