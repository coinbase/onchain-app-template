'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { createAppKit } from '@reown/appkit/react';
import { useEffect, useState } from 'react';
import { type AppKitNetwork } from '@reown/appkit/react';
import { 
  solana, 
  mainnet, 
  arbitrum, 
  polygon,
  optimism,
  base
} from '@reown/appkit/networks';
import { SolflareWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import React from 'react';

// Create QueryClient
const queryClient = new QueryClient();

// Define supported networks as AppKitNetwork array
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  mainnet as AppKitNetwork,
  arbitrum as AppKitNetwork,
  polygon as AppKitNetwork,
  optimism as AppKitNetwork,
  base as AppKitNetwork,
  solana as AppKitNetwork
];

// Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
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
        networks,
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

  return React.createElement(
    WagmiProvider,
    { config: wagmiAdapter.wagmiConfig },
    React.createElement(
      QueryClientProvider,
      { client: queryClient },
      children
    )
  );
} 