// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract student_ERC20 is ERC20 {

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    mapping(address => bool) StudentAddr;

    address private owner;

    constructor(string memory name, string memory symbol,address _owner) ERC20(name, symbol) {
        owner=_owner;
    }

    function gain_points(address student) onlyOwner external {
        require(StudentAddr[student] == false, "you have gained the points already!");
        _mint(student, 10000);
        StudentAddr[student] = true;
    }

    function burn(address student,uint amount) onlyOwner external {
        _burn(student, amount);
    }

    function mint(address student,uint amount) onlyOwner external {
        _mint(student, amount);
    }
}
