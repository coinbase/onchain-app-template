export const BASE_SEPOLIA_CHAIN_ID = 84532;

export const clickContractAddress =
  '0x67c97D1FB8184F038592b2109F854dfb09C77C75';

export const clickContractABI = [
  {
    type: 'function',
    name: 'click',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;

export const collectionAddress = '0xd6915560d3bb24aec04dc42ef409921ed1931510';
export const comment = 'testing';
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
export const mintReferral = '0x0000000000000000000000000000000000000000';
export const quantity = '1';
export const tokenId = '1';
