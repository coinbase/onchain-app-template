'use client';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type { Address, ContractFunctionParameters } from 'viem';

const clickContractAddress = '0x67c97D1FB8184F038592b2109F854dfb09C77C75';
const clickContractAbi = [
  {
    type: 'function',
    name: 'click',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
];

type TransactionWrapperParams = {
  address: Address;
};

export default function TransactionWrapper({
  address,
}: TransactionWrapperParams) {
  const contracts = [
    {
      address: clickContractAddress,
      abi: clickContractAbi,
      functionName: 'click',
      args: [],
    },
    {
      address: clickContractAddress,
      abi: clickContractAbi,
      functionName: 'click',
      args: [],
    },
  ] as ContractFunctionParameters[];

  return (
    <div className="flex w-[450px]">
      <Transaction
        address={address}
        contracts={contracts}
        className="w-[450px]"
      >
        <TransactionButton className="w-[450px] mr-auto ml-auto mt-0 text-[white]" />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
