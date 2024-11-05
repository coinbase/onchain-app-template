'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { createAppKit, type AppKitNetwork } from '@reown/appkit/react';
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
import React from 'react';

// Create QueryClient
const queryClient = new QueryClient();

interface Metadata {
  name: string;
  description: string;
  url: string;
  icons: string[];
  verifyUrl?: string;
  redirect?: {
    native?: string;
    universal?: string;
  };
}

// Define supported networks with proper typing
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
  networks: networks.filter(n => n.id !== solana.id),
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '',
  ssr: true,
});

// Create Solana adapter with proper configuration
const solanaAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
  network: solana.id,
  rpcUrl: solana.rpcUrls.default.http[0]
});

export default function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const metadata: Metadata = {
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
        metadata,
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