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

export const mintContractAddress = '0x777777722D078c97c6ad07d9f36801e653E356Ae';

export const mintABI = [
  {
    inputs: [
      { internalType: 'address', name: 'mintTo', type: 'address' },
      { internalType: 'uint256', name: 'quantity', type: 'uint256' },
      { internalType: 'address', name: 'collection', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'address', name: 'mintReferral', type: 'address' },
      { internalType: 'string', name: 'comment', type: 'string' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;
