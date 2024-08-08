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
import { useState } from 'react';
import { parseEther } from 'viem';

type TransactionWrapperParams = {
  address: Address;
};

export default function TransactionWrapper({
  address,
}: TransactionWrapperParams) {
  const account = useAccount();
  const [error, setError] = useState<string | null>(null);

  const mintTo = account.address;
  const collectionAddress = '0xd6915560d3bb24aec04dc42ef409921ed1931510';
  const tokenId = "1";
  const quantity = "1";
  const mintReferral = '0x0000000000000000000000000000000000000000';
  const comment = 'testing';

  const contracts = [
    {
      address: mintContractAddress,
      abi: mintABI,
      functionName: 'mint',
      args: [
        mintTo,
        BigInt(quantity),
        collectionAddress,
        BigInt(tokenId),
        mintReferral,
        comment,
      ],
      value: parseEther('0.000111'),
    },
  ] as ContractFunctionParameters[];

  const handleError = (err: Error) => {
    console.error('Transaction error:', err);
    setError(err.message);
  };

  const handleSuccess = () => {
    console.log('Transaction successful');
  };

  return (
    <div className="flex flex-col w-[450px]">
      <Transaction
        address={address}
        contracts={contracts}
        className="w-[450px]"
        onError={(e) => handleError(e as unknown as Error)}
        onSuccess={handleSuccess}
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
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}