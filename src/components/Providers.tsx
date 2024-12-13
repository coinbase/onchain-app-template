'use client';
import dynamic from 'next/dynamic';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return <OnchainProviders>{children}</OnchainProviders>;
} 