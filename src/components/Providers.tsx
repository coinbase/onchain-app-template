'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { createAppKit } from '@reown/appkit/react';
import { useEffect, useState } from 'react';
import { 
  solana, 
  mainnet, 
  arbitrum, 
  polygon,
  optimism,
  base
} from '@reown/appkit/networks';
import { SolflareWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { type Chain } from 'viem';

const OnchainProviders = dynamic(
  () => import('src/components/Providers'),
  {
    ssr: false,
  },
);

// Create QueryClient
const queryClient = new QueryClient();

// Define supported networks
const evmNetworks = [mainnet, arbitrum, polygon, optimism, base];
const solanaNetworks = [solana];

// Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks: evmNetworks,
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '',
  ssr: true,
});

// Create Solana adapter
const solanaAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const metadata = {
        name: 'Chainable Guru',
        description: 'Cross-Chain DeFi Platform',
        url: process.env.NEXT_PUBLIC_ENVIRONMENT || '',
        icons: ['https://avatars.githubusercontent.com/u/179229932']
      };

      // Initialize AppKit with both adapters
      createAppKit({
        adapters: [wagmiAdapter, solanaAdapter],
        networks: [...evmNetworks, ...solanaNetworks],
        projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '',
        metadata: metadata,
        features: {
          onramp: true,
          swaps: true
        }
      });
      
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {mounted && <OnchainProviders>{children}</OnchainProviders>}
      </QueryClientProvider>
    </WagmiProvider>
  );
} 