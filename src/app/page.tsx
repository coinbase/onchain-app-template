'use client';

import { useAccount } from 'wagmi';
import { useAppKit, useAppKitAccount, useAppKitNetwork, useAppKitProvider } from '@reown/appkit/react';
import { useEffect, useState } from 'react';

export default function Page() {
  const { address } = useAccount();
  const { open } = useAppKit();
  const { isConnected, caipAddress } = useAppKitAccount();
  const { caipNetwork, chainId } = useAppKitNetwork();
  const { walletProvider } = useAppKitProvider(caipNetwork?.namespace || 'eip155');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openSwapModal = () => {
    open();
  };

  const handleConnect = () => {
    open({ view: 'Connect' });
  };

  // Format the address for display
  const formatAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-white">Chainable Guru</div>
            <div className="flex items-center space-x-4">
              {isConnected ? (
                <div className="flex items-center gap-4">
                  {address && (
                    <div className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="font-medium">{formatAddress(address)}</span>
                      {caipNetwork && (
                        <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                          {caipNetwork.name}
                        </span>
                      )}
                    </div>
                  )}
                  <button
                    onClick={() => open({ view: 'Account' })}
                    className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                  >
                    Account
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleConnect}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Cross-Chain DeFi Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Swap tokens across multiple chains with the best rates and lowest fees
          </p>
          {isConnected && address && (
            <div className="mt-4 text-lg text-gray-300 space-y-2">
              <div>Connected: <span className="font-medium">{formatAddress(address)}</span></div>
              {caipNetwork && (
                <div className="text-sm">
                  Network: <span className="font-medium">{caipNetwork.name}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Main Action Section */}
          <div className="rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm border border-gray-700">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Get Started</h2>
              {!isConnected && (
                <button
                  onClick={handleConnect}
                  className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Connect Wallet to Start
                </button>
              )}
              {isConnected && (
                <div className="space-y-4">
                  <button
                    onClick={openSwapModal}
                    className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Swap Tokens
                  </button>
                  <button
                    onClick={() => open({ view: 'OnRampProviders' })}
                    className="w-full rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                  >
                    Buy Crypto
                  </button>
                  <button
                    onClick={() => open({ view: 'Networks' })}
                    className="w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                  >
                    Switch Network
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Stats/Info Section */}
          <div className="rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm border border-gray-700">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-indigo-400">10</h3>
                <p className="mt-1 text-sm text-gray-400">Supported Chains</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-cyan-400">1000+</h3>
                <p className="mt-1 text-sm text-gray-400">Available Tokens</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-indigo-400">$0</h3>
                <p className="mt-1 text-sm text-gray-400">Platform Fees</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-cyan-400">24/7</h3>
                <p className="mt-1 text-sm text-gray-400">Support</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
