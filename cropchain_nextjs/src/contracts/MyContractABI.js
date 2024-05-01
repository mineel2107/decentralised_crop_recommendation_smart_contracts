export const MyContractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_landArea",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_cropName",
        "type": "string"
      }
    ],
    "name": "ModifyCrop",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "recommendCrop",
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
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_landArea",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_cropName",
        "type": "string"
      }
    ],
    "name": "registerCrop",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
