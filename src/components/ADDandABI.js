import React from "react";
// import web3 form 'web3';

export const ADD = '0xe2899bddFD890e320e643044c6b95B9B0b84157A';
export const ABI = [
		{
			"inputs": [],
			"stateMutability": "payable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "string",
					"name": "itemName",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "initialBidValue",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "ownerEmail",
					"type": "string"
				}
			],
			"name": "AuctionCreated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "winner",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "winningBid",
					"type": "uint256"
				}
			],
			"name": "AuctionResultDeclared",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "BidAmountTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "bidValue",
					"type": "uint256"
				}
			],
			"name": "BidPlaced",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [],
			"name": "RollbackOccurred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "email",
					"type": "string"
				}
			],
			"name": "SignupSuccessful",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "auctionBidderRegister",
			"outputs": [
				{
					"internalType": "string",
					"name": "bidderEmail",
					"type": "string"
				},
				{
					"internalType": "bytes32",
					"name": "passwordHash",
					"type": "bytes32"
				},
				{
					"internalType": "address payable",
					"name": "bidderAddress",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "auctionChain",
			"outputs": [
				{
					"internalType": "address payable",
					"name": "userAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "bidValue",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "auctionItems",
			"outputs": [
				{
					"internalType": "string",
					"name": "objectName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "ownerName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "ownerEmail",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "previousObjectHashValue",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "initialBidValue",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "paymentMethod",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "category",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "auctionResult",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "auctionManager",
			"outputs": [
				{
					"internalType": "address payable",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "chainNo",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "objectName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "ownerName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "ownerEmail",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "previousObjectHashValue",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "initialBidValue",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "paymentMethod",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "category",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				}
			],
			"name": "createAuction",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "currentAuctionItemIndex",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "declareAuctionResult",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "emailByAddress",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "userEmail",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "password",
					"type": "string"
				}
			],
			"name": "login",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "maxBidValue",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "myBidValue",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "bidderEmail",
					"type": "string"
				}
			],
			"name": "placeBid",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "regNo",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "registeredBidders",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "rollback",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "userEmail",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "password",
					"type": "string"
				}
			],
			"name": "signup",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "transferBidAmount",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "winner",
			"outputs": [
				{
					"internalType": "address payable",
					"name": "userAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "bidValue",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	
];