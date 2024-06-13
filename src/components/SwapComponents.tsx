import { useCallback } from 'react';
import {
  getSwapQuote
} from '@coinbase/onchainkit/swap';
import type { Token } from '@coinbase/onchainkit/token';


export default function SwapComponents() {

  const getQuote = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    async function getData(value: string) {
      const quote = await getSwapQuote({
        from: fromToken,
        to: toToken,
        amount: '0.001',
      });
      console.log('quote', quote);
    }
    getData(event.currentTarget.value);
  }, []);

  const fromToken: Token = {
    name: 'ETH',
    address: '',
    symbol: 'ETH',
    decimals: 18,
    image: 'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
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

  return (
    <main className="flex items-center space-x-4">
      <button onClick={getQuote}>Get Quote</button>
    </main>
  );
}
