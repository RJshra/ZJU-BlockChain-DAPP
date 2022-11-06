// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract bonusERC721 is ERC721 {

    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    address private owner;

    uint256 private id;

    mapping(uint256=>string)myURI;

    mapping(address=>uint256[])findToken;

    constructor(string memory name, string memory symbol,address _owner) ERC721(name, symbol) {
        owner=_owner;
        id=0;
    }

    function burn(uint256 Tokenid) onlyOwner external {
        _burn(Tokenid);
    }
    
    function mint(address student,string memory tokenURI) onlyOwner external {
        _mint(student, id);
        myURI[id]=tokenURI;
        findToken[student].push(id);
        id++;
    }

    function returnTokenId()external view returns(uint256[] memory){
        uint256[] memory res = findToken[msg.sender];
        return res;
    }

    function returnURI()external view returns(string[] memory){
        
        uint256[] memory addr=findToken[msg.sender];
        string[] memory res = new string[](addr.length);
        for(uint i=0;i<addr.length;i++)
            res[i]=(myURI[addr[i]]);
        return res;
    }
}   
