'use client';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import { mintABI, mintContractAddress } from 'src/constants';
import type { Address, ContractFunctionParameters } from 'viem';
import { useAccount } from 'wagmi';

type TransactionWrapperParams = {
  address: Address;
};

export default function TransactionWrapper({
  address,
}: TransactionWrapperParams) {
  const account = useAccount();
  
  const contracts = [
    {
      address: mintContractAddress,
      abi: mintABI,
      functionName: 'mint',
      args: [account.address, 1, 1, [], '0x'],
    },
  ] as ContractFunctionParameters[];

  return (
    <div className="flex w-[450px]">
      <Transaction
        address={address}
        contracts={contracts}
        className="w-[450px]"
      >
        <TransactionButton
          className="mt-0 mr-auto ml-auto w-[450px] text-[white]"
          text="Collect"
        />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
