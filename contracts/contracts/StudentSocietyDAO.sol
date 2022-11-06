// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment the line to use openzeppelin/ERC20
// You can use this dependency directly because it has been installed already
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import './studentERC20.sol';
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import './bonusERC721.sol';
// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract StudentSocietyDAO {

    uint32 public VOTE_AMOUNT=100;
    uint32 public INITIATE_AMOUNT=500;
    struct Proposal {
        uint32 index;      // index of this proposal
        address proposer;  // who make this proposal
        uint startTime; // proposal start time
        uint duration;  // proposal duration
        string name;       // proposal name
        //address[] voters;
        mapping(address => bool) have_voted;
        bool isEnd;
        uint32 approve;
        uint32 reject;
        uint32 amounts;
    }
    mapping(address=>uint32)bonusCount;
    mapping(address=>uint32[])student_to_proposal;
    mapping(uint32 => Proposal) proposals; 
    student_ERC20 public proposal_account;
    bonusERC721 public bonus;

    uint32 public proposal_num;

    constructor(){
        proposal_account=new student_ERC20("votePoints","votePointsSymbol",address(this));
        bonus=new bonusERC721("bonus","bonusSymbol",address(this));
        proposal_num=0;
       
    }

    function help_gain_points() public{
        proposal_account.gain_points(msg.sender);
    }

    function initiate(string memory proposal_name,uint start,uint duration_time) public{

        require(proposal_account.balanceOf(msg.sender)>=VOTE_AMOUNT,'you have no enough points');
        Proposal storage current_proposal=proposals[proposal_num++];
        
        // proposal_account.approve(msg.sender, INITIATE_AMOUNT);
        // proposal_account.transferFrom(msg.sender,address(this),INITIATE_AMOUNT);
        proposal_account.burn(msg.sender, INITIATE_AMOUNT);
        current_proposal.index=proposal_num-1;
        current_proposal.proposer=msg.sender;
        current_proposal.name=proposal_name;
        current_proposal.isEnd=false;
        current_proposal.approve=0;
        current_proposal.reject=0;
        current_proposal.amounts=0;
        current_proposal.duration=duration_time;
        current_proposal.startTime=start;
        student_to_proposal[msg.sender].push(proposal_num-1);
        return;
    }

   function vote(uint32 index,bool approval) public payable{
    
        Proposal storage current_proposal=proposals[index];
        update(index);
        require(current_proposal.isEnd==false,"the vote is over!");
        require(current_proposal.have_voted[msg.sender]==false,"you have voted already!");
        
        require((proposal_account.balanceOf(msg.sender)>=VOTE_AMOUNT),'you have no enough points');
        current_proposal.have_voted[msg.sender]=true;

        proposal_account.burn(msg.sender, VOTE_AMOUNT);
        current_proposal.amounts+=VOTE_AMOUNT;
        if(approval)
            proposals[index].approve++;
        else
            proposals[index].reject++;
        return;
   }

    function update(uint32 index) private{
        if((block.timestamp*1000>=(proposals[index].startTime+proposals[index].duration))&&proposals[index].isEnd==false)
            end(index);
    }

    function end(uint32 index) public payable{
        Proposal storage current_proposal=proposals[index];
        current_proposal.isEnd=true;
        if(current_proposal.approve>current_proposal.reject){

            proposal_account.mint(current_proposal.proposer,current_proposal.amounts);
            uint32[] memory his_proposals=student_to_proposal[current_proposal.proposer];
            uint32 count=0;
            for(uint32 i=0;i<his_proposals.length;i++){
                if(proposals[his_proposals[i]].isEnd==false)continue;
                if(proposals[his_proposals[i]].approve>proposals[his_proposals[i]].reject)
                    count++;
            }
                
            if((count%3)==0){
                bonusCount[current_proposal.proposer]++;

            }
        }
       
    }

    function getBonusCount() external view returns(uint32){
        return bonusCount[msg.sender];
    }

    function recieveBonus(string memory name) public{
        require(bonusCount[msg.sender]>0,'you do not have bonus to recieve yet');
        bonus.mint(msg.sender,name);
        bonusCount[msg.sender]--;
    }

    struct list{
        address propaser;
        string name;
        uint startTime; 
        uint duration;  
        bool isEnd;
        bool pass;
        uint32 approve;
        uint32 reject;
    }

    function updateAll() public{
        for(uint32 i=0;i<proposal_num;i++){
            update(i);
        }
    }

    function updateOnePerson() public{
        uint32[] memory index = student_to_proposal[msg.sender];
        for(uint32 i=0;i<index.length;i++)
            update(index[i]);
    }

    function return_all_proposals() public view returns(list[] memory){
        list[] memory result=new list[](proposal_num);
        for(uint32 i=0;i<proposal_num;i++){
            bool pass=(proposals[i].approve>proposals[i].reject);
            list memory temp=list(proposals[i].proposer,proposals[i].name,proposals[i].startTime,
            proposals[i].duration,
            proposals[i].isEnd,pass,proposals[i].approve,proposals[i].reject);
            result[i]=temp;
        }
        return result;
    }
    
    
    function return_person_index() public view returns(uint32[] memory){
        return student_to_proposal[msg.sender];
    }

    function return_person_proposals() public view returns(list[] memory){
        uint32[] memory idx=student_to_proposal[msg.sender];
        list[] memory result=new list[](idx.length);
        for(uint32 j=0;j<idx.length;j++){
            uint32 i=idx[j];
            bool pass=(proposals[i].approve>proposals[i].reject);
            list memory temp=list(proposals[i].proposer,proposals[i].name,proposals[i].startTime,
            proposals[i].duration,
            proposals[i].isEnd,pass,proposals[i].approve,proposals[i].reject);
            result[i]=temp;
        }
        return result;
    }

    function return_single_proposal(uint32 index) public view returns(list memory){
        bool pass=(proposals[index].approve>proposals[index].reject);
        return list(proposals[index].proposer,proposals[index].name,proposals[index].startTime,
            proposals[index].duration,
        proposals[index].isEnd,pass,proposals[index].approve,proposals[index].reject);
    }

   
}
