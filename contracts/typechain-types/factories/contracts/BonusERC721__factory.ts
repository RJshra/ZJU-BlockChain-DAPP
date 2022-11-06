/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BonusERC721,
  BonusERC721Interface,
} from "../../contracts/BonusERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "Tokenid",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "student",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnTokenId",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnURI",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200323b3803806200323b833981810160405281019062000037919062000371565b8282816000908051906020019062000051929190620000bf565b5080600190805190602001906200006a929190620000bf565b50505080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060078190555050505062000470565b828054620000cd906200043a565b90600052602060002090601f016020900481019282620000f157600085556200013d565b82601f106200010c57805160ff19168380011785556200013d565b828001600101855582156200013d579182015b828111156200013c5782518255916020019190600101906200011f565b5b5090506200014c919062000150565b5090565b5b808211156200016b57600081600090555060010162000151565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001d8826200018d565b810181811067ffffffffffffffff82111715620001fa57620001f96200019e565b5b80604052505050565b60006200020f6200016f565b90506200021d8282620001cd565b919050565b600067ffffffffffffffff82111562000240576200023f6200019e565b5b6200024b826200018d565b9050602081019050919050565b60005b83811015620002785780820151818401526020810190506200025b565b8381111562000288576000848401525b50505050565b6000620002a56200029f8462000222565b62000203565b905082815260208101848484011115620002c457620002c362000188565b5b620002d184828562000258565b509392505050565b600082601f830112620002f157620002f062000183565b5b8151620003038482602086016200028e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000339826200030c565b9050919050565b6200034b816200032c565b81146200035757600080fd5b50565b6000815190506200036b8162000340565b92915050565b6000806000606084860312156200038d576200038c62000179565b5b600084015167ffffffffffffffff811115620003ae57620003ad6200017e565b5b620003bc86828701620002d9565b935050602084015167ffffffffffffffff811115620003e057620003df6200017e565b5b620003ee86828701620002d9565b925050604062000401868287016200035a565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200045357607f821691505b602082108114156200046a57620004696200040b565b5b50919050565b612dbb80620004806000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80636352211e116100a2578063a22cb46511610071578063a22cb465146102b8578063b88d4fde146102d4578063c87b56dd146102f0578063d0def52114610320578063e985e9c51461033c5761010b565b80636352211e1461021c57806370a082311461024c57806383a4813a1461027c57806395d89b411461029a5761010b565b80630c343522116100de5780630c343522146101aa57806323b872dd146101c857806342842e0e146101e457806342966c68146102005761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611c0f565b61036c565b6040516101379190611c57565b60405180910390f35b61014861044e565b6040516101559190611d0b565b60405180910390f35b61017860048036038101906101739190611d63565b6104e0565b6040516101859190611dd1565b60405180910390f35b6101a860048036038101906101a39190611e18565b610526565b005b6101b261063e565b6040516101bf9190611f64565b60405180910390f35b6101e260048036038101906101dd9190611f86565b610821565b005b6101fe60048036038101906101f99190611f86565b610881565b005b61021a60048036038101906102159190611d63565b6108a1565b005b61023660048036038101906102319190611d63565b610907565b6040516102439190611dd1565b60405180910390f35b61026660048036038101906102619190611fd9565b6109b9565b6040516102739190612015565b60405180910390f35b610284610a71565b60405161029191906120ee565b60405180910390f35b6102a2610b0c565b6040516102af9190611d0b565b60405180910390f35b6102d260048036038101906102cd919061213c565b610b9e565b005b6102ee60048036038101906102e991906122b1565b610bb4565b005b61030a60048036038101906103059190611d63565b610c16565b6040516103179190611d0b565b60405180910390f35b61033a600480360381019061033591906123d5565b610c7e565b005b61035660048036038101906103519190612431565b610d92565b6040516103639190611c57565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610447575061044682610e26565b5b9050919050565b60606000805461045d906124a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610489906124a0565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b5050505050905090565b60006104eb82610e90565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061053182610907565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059990612544565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105c1610edb565b73ffffffffffffffffffffffffffffffffffffffff1614806105f057506105ef816105ea610edb565b610d92565b5b61062f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610626906125d6565b60405180910390fd5b6106398383610ee3565b505050565b60606000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156106cb57602002820191906000526020600020905b8154815260200190600101908083116106b7575b505050505090506000815167ffffffffffffffff8111156106ef576106ee612186565b5b60405190808252806020026020018201604052801561072257816020015b606081526020019060019003908161070d5790505b50905060005b82518110156108185760086000848381518110610748576107476125f6565b5b602002602001015181526020019081526020016000208054610769906124a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610795906124a0565b80156107e25780601f106107b7576101008083540402835291602001916107e2565b820191906000526020600020905b8154815290600101906020018083116107c557829003601f168201915b50505050508282815181106107fa576107f96125f6565b5b6020026020010181905250808061081090612654565b915050610728565b50809250505090565b61083261082c610edb565b82610f9c565b610871576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108689061270f565b60405180910390fd5b61087c838383611031565b505050565b61089c83838360405180602001604052806000815250610bb4565b505050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108fb57600080fd5b61090481611298565b50565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a79061277b565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a219061280d565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610afe57602002820191906000526020600020905b815481526020019060010190808311610aea575b505050505090508091505090565b606060018054610b1b906124a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b47906124a0565b8015610b945780601f10610b6957610100808354040283529160200191610b94565b820191906000526020600020905b815481529060010190602001808311610b7757829003601f168201915b5050505050905090565b610bb0610ba9610edb565b83836113b5565b5050565b610bc5610bbf610edb565b83610f9c565b610c04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfb9061270f565b60405180910390fd5b610c1084848484611522565b50505050565b6060610c2182610e90565b6000610c2b61157e565b90506000815111610c4b5760405180602001604052806000815250610c76565b80610c5584611595565b604051602001610c66929190612869565b6040516020818303038152906040525b915050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cd857600080fd5b610ce4826007546116f6565b806008600060075481526020019081526020016000209080519060200190610d0d929190611b00565b50600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600754908060018154018082558091505060019003906000526020600020016000909190919091505560076000815480929190610d8990612654565b91905055505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610e99816118d0565b610ed8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ecf9061277b565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610f5683610907565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610fa883610907565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610fea5750610fe98185610d92565b5b8061102857508373ffffffffffffffffffffffffffffffffffffffff16611010846104e0565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661105182610907565b73ffffffffffffffffffffffffffffffffffffffff16146110a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109e906128ff565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611117576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110e90612991565b60405180910390fd5b61112283838361193c565b61112d600082610ee3565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461117d91906129b1565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111d491906129e5565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611293838383611941565b505050565b60006112a382610907565b90506112b18160008461193c565b6112bc600083610ee3565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461130c91906129b1565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46113b181600084611941565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141b90612a87565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115159190611c57565b60405180910390a3505050565b61152d848484611031565b61153984848484611946565b611578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156f90612b19565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156115dd576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506116f1565b600082905060005b6000821461160f5780806115f890612654565b915050600a826116089190612b68565b91506115e5565b60008167ffffffffffffffff81111561162b5761162a612186565b5b6040519080825280601f01601f19166020018201604052801561165d5781602001600182028036833780820191505090505b5090505b600085146116ea5760018261167691906129b1565b9150600a856116859190612b99565b603061169191906129e5565b60f81b8183815181106116a7576116a66125f6565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116e39190612b68565b9450611661565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175d90612c16565b60405180910390fd5b61176f816118d0565b156117af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a690612c82565b60405180910390fd5b6117bb6000838361193c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461180b91906129e5565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46118cc60008383611941565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006119678473ffffffffffffffffffffffffffffffffffffffff16611add565b15611ad0578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611990610edb565b8786866040518563ffffffff1660e01b81526004016119b29493929190612cf7565b602060405180830381600087803b1580156119cc57600080fd5b505af19250505080156119fd57506040513d601f19601f820116820180604052508101906119fa9190612d58565b60015b611a80573d8060008114611a2d576040519150601f19603f3d011682016040523d82523d6000602084013e611a32565b606091505b50600081511415611a78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6f90612b19565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611ad5565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054611b0c906124a0565b90600052602060002090601f016020900481019282611b2e5760008555611b75565b82601f10611b4757805160ff1916838001178555611b75565b82800160010185558215611b75579182015b82811115611b74578251825591602001919060010190611b59565b5b509050611b829190611b86565b5090565b5b80821115611b9f576000816000905550600101611b87565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611bec81611bb7565b8114611bf757600080fd5b50565b600081359050611c0981611be3565b92915050565b600060208284031215611c2557611c24611bad565b5b6000611c3384828501611bfa565b91505092915050565b60008115159050919050565b611c5181611c3c565b82525050565b6000602082019050611c6c6000830184611c48565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611cac578082015181840152602081019050611c91565b83811115611cbb576000848401525b50505050565b6000601f19601f8301169050919050565b6000611cdd82611c72565b611ce78185611c7d565b9350611cf7818560208601611c8e565b611d0081611cc1565b840191505092915050565b60006020820190508181036000830152611d258184611cd2565b905092915050565b6000819050919050565b611d4081611d2d565b8114611d4b57600080fd5b50565b600081359050611d5d81611d37565b92915050565b600060208284031215611d7957611d78611bad565b5b6000611d8784828501611d4e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611dbb82611d90565b9050919050565b611dcb81611db0565b82525050565b6000602082019050611de66000830184611dc2565b92915050565b611df581611db0565b8114611e0057600080fd5b50565b600081359050611e1281611dec565b92915050565b60008060408385031215611e2f57611e2e611bad565b5b6000611e3d85828601611e03565b9250506020611e4e85828601611d4e565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000611ea082611c72565b611eaa8185611e84565b9350611eba818560208601611c8e565b611ec381611cc1565b840191505092915050565b6000611eda8383611e95565b905092915050565b6000602082019050919050565b6000611efa82611e58565b611f048185611e63565b935083602082028501611f1685611e74565b8060005b85811015611f525784840389528151611f338582611ece565b9450611f3e83611ee2565b925060208a01995050600181019050611f1a565b50829750879550505050505092915050565b60006020820190508181036000830152611f7e8184611eef565b905092915050565b600080600060608486031215611f9f57611f9e611bad565b5b6000611fad86828701611e03565b9350506020611fbe86828701611e03565b9250506040611fcf86828701611d4e565b9150509250925092565b600060208284031215611fef57611fee611bad565b5b6000611ffd84828501611e03565b91505092915050565b61200f81611d2d565b82525050565b600060208201905061202a6000830184612006565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61206581611d2d565b82525050565b6000612077838361205c565b60208301905092915050565b6000602082019050919050565b600061209b82612030565b6120a5818561203b565b93506120b08361204c565b8060005b838110156120e15781516120c8888261206b565b97506120d383612083565b9250506001810190506120b4565b5085935050505092915050565b600060208201905081810360008301526121088184612090565b905092915050565b61211981611c3c565b811461212457600080fd5b50565b60008135905061213681612110565b92915050565b6000806040838503121561215357612152611bad565b5b600061216185828601611e03565b925050602061217285828601612127565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6121be82611cc1565b810181811067ffffffffffffffff821117156121dd576121dc612186565b5b80604052505050565b60006121f0611ba3565b90506121fc82826121b5565b919050565b600067ffffffffffffffff82111561221c5761221b612186565b5b61222582611cc1565b9050602081019050919050565b82818337600083830152505050565b600061225461224f84612201565b6121e6565b9050828152602081018484840111156122705761226f612181565b5b61227b848285612232565b509392505050565b600082601f8301126122985761229761217c565b5b81356122a8848260208601612241565b91505092915050565b600080600080608085870312156122cb576122ca611bad565b5b60006122d987828801611e03565b94505060206122ea87828801611e03565b93505060406122fb87828801611d4e565b925050606085013567ffffffffffffffff81111561231c5761231b611bb2565b5b61232887828801612283565b91505092959194509250565b600067ffffffffffffffff82111561234f5761234e612186565b5b61235882611cc1565b9050602081019050919050565b600061237861237384612334565b6121e6565b90508281526020810184848401111561239457612393612181565b5b61239f848285612232565b509392505050565b600082601f8301126123bc576123bb61217c565b5b81356123cc848260208601612365565b91505092915050565b600080604083850312156123ec576123eb611bad565b5b60006123fa85828601611e03565b925050602083013567ffffffffffffffff81111561241b5761241a611bb2565b5b612427858286016123a7565b9150509250929050565b6000806040838503121561244857612447611bad565b5b600061245685828601611e03565b925050602061246785828601611e03565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806124b857607f821691505b602082108114156124cc576124cb612471565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061252e602183611c7d565b9150612539826124d2565b604082019050919050565b6000602082019050818103600083015261255d81612521565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006125c0603e83611c7d565b91506125cb82612564565b604082019050919050565b600060208201905081810360008301526125ef816125b3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061265f82611d2d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561269257612691612625565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006126f9602e83611c7d565b91506127048261269d565b604082019050919050565b60006020820190508181036000830152612728816126ec565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612765601883611c7d565b91506127708261272f565b602082019050919050565b6000602082019050818103600083015261279481612758565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006127f7602983611c7d565b91506128028261279b565b604082019050919050565b60006020820190508181036000830152612826816127ea565b9050919050565b600081905092915050565b600061284382611c72565b61284d818561282d565b935061285d818560208601611c8e565b80840191505092915050565b60006128758285612838565b91506128818284612838565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006128e9602583611c7d565b91506128f48261288d565b604082019050919050565b60006020820190508181036000830152612918816128dc565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061297b602483611c7d565b91506129868261291f565b604082019050919050565b600060208201905081810360008301526129aa8161296e565b9050919050565b60006129bc82611d2d565b91506129c783611d2d565b9250828210156129da576129d9612625565b5b828203905092915050565b60006129f082611d2d565b91506129fb83611d2d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a3057612a2f612625565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612a71601983611c7d565b9150612a7c82612a3b565b602082019050919050565b60006020820190508181036000830152612aa081612a64565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612b03603283611c7d565b9150612b0e82612aa7565b604082019050919050565b60006020820190508181036000830152612b3281612af6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612b7382611d2d565b9150612b7e83611d2d565b925082612b8e57612b8d612b39565b5b828204905092915050565b6000612ba482611d2d565b9150612baf83611d2d565b925082612bbf57612bbe612b39565b5b828206905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612c00602083611c7d565b9150612c0b82612bca565b602082019050919050565b60006020820190508181036000830152612c2f81612bf3565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612c6c601c83611c7d565b9150612c7782612c36565b602082019050919050565b60006020820190508181036000830152612c9b81612c5f565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612cc982612ca2565b612cd38185612cad565b9350612ce3818560208601611c8e565b612cec81611cc1565b840191505092915050565b6000608082019050612d0c6000830187611dc2565b612d196020830186611dc2565b612d266040830185612006565b8181036060830152612d388184612cbe565b905095945050505050565b600081519050612d5281611be3565b92915050565b600060208284031215612d6e57612d6d611bad565b5b6000612d7c84828501612d43565b9150509291505056fea264697066735822122032b8255c136c9a5a3fc3a10e7e46358e0fc31b4842334b95af4cd2a2a1803c2864736f6c63430008090033";

type BonusERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BonusERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BonusERC721__factory extends ContractFactory {
  constructor(...args: BonusERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BonusERC721> {
    return super.deploy(
      name,
      symbol,
      _owner,
      overrides || {}
    ) as Promise<BonusERC721>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, _owner, overrides || {});
  }
  override attach(address: string): BonusERC721 {
    return super.attach(address) as BonusERC721;
  }
  override connect(signer: Signer): BonusERC721__factory {
    return super.connect(signer) as BonusERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BonusERC721Interface {
    return new utils.Interface(_abi) as BonusERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BonusERC721 {
    return new Contract(address, _abi, signerOrProvider) as BonusERC721;
  }
}