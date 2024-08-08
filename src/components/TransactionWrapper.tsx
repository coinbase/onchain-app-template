'use client';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type { TransactionError } from '@coinbase/onchainkit/transaction';
import { mintABI, mintContractAddress } from 'src/constants';
import type { Address, ContractFunctionParameters } from 'viem';
import { parseEther } from 'viem';
import { useAccount } from 'wagmi';

const BASE_SEPOLIA_CHAIN_ID = 84532;

const collectionAddress = '0xd6915560d3bb24aec04dc42ef409921ed1931510';
const tokenId = '1';
const quantity = '1';
const mintReferral = '0x0000000000000000000000000000000000000000';
const comment = 'testing';

type TransactionWrapperParams = {
  address: Address;
};

export default function TransactionWrapper({
  address,
}: TransactionWrapperParams) {
  const account = useAccount();
  const mintTo = account.address;

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
  ] as unknown as ContractFunctionParameters[];

  const handleError = (err: TransactionError) => {
    console.error('Transaction error:', err);
  };

  const handleSuccess = (response: any) => {
    console.log('Transaction successful', response);
  };

  return (
    <div className="flex w-[450px]">
      <Transaction
        address={address}
        contracts={contracts}
        className="w-[450px]"
        chainId={BASE_SEPOLIA_CHAIN_ID}
        onError={handleError}
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
    </div>
  );
}
