import { useCallback } from 'react';
import { Swap, SwapAmountInput, SwapButton } from '@coinbase/onchainkit/swap';
import type { Token } from '@coinbase/onchainkit/token';
import { useAccount } from 'wagmi';
import type {
  BuildSwapTransaction,
  SwapError,
} from '@coinbase/onchainkit/swap';

export default function SwapComponents() {
  const { address } = useAccount();

  const fromToken: Token = {
    name: 'ETH',
    address: '',
    symbol: 'ETH',
    decimals: 18,
    image:
      'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
    chainId: 8453,
  };

  const toToken: Token = {
    name: 'USDC',
    address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    symbol: 'USDC',
    decimals: 6,
    image:
      'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/44/2b/442b80bd16af0c0d9b22e03a16753823fe826e5bfd457292b55fa0ba8c1ba213-ZWUzYjJmZGUtMDYxNy00NDcyLTg0NjQtMWI4OGEwYjBiODE2',
    chainId: 8453,
  };

  const onSubmit = useCallback((swapTransaction: BuildSwapTransaction) => {
    console.log('swapTransaction:', swapTransaction);
  }, []);

  const onError = useCallback((error: SwapError) => {
    console.error('SwapError:', error);
  }, []);

  return (
    <main className="flex items-center space-x-4">
      {address ? (
        <Swap address={address} onError={onError}>
          <SwapAmountInput label="Sell" token={fromToken} type="from" />
          <SwapAmountInput label="Buy" token={toToken} type="to" />
          <SwapButton onError={onError} onSubmit={onSubmit} />
        </Swap>
      ) : (
        <p>Connect wallet to use Swap components</p>
      )}
    </main>
  );
}
