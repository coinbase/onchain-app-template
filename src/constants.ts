export const clickContractAddress =
  '0x67c97D1FB8184F038592b2109F854dfb09C77C75';
export const clickContractAbi = [
  {
    type: 'function',
    name: 'click',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
];

export const mintContractAddress = '0xd6915560d3bb24aec04dc42ef409921ed1931510';
export const mintABI = [
  {
    inputs: [
      { internalType: "contract IMinter1155", name: "minter", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "uint256", name: "quantity", type: "uint256" },
      {
        internalType: "address[]",
        name: "rewardsRecipients",
        type: "address[]",
      },
      { internalType: "bytes", name: "minterArguments", type: "bytes" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  }
];