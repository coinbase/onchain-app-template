'use client';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import { clickContractAbi, clickContractAddress } from 'src/constants';
import type { Address, ContractFunctionParameters } from 'viem';

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
        <TransactionButton className="mt-0 mr-auto ml-auto w-[450px] text-[white]" />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
