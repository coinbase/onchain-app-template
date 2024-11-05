'use client';

import { useAccount } from 'wagmi';
import { useAppKit, useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react';
import { useEffect, useState } from 'react';

export default function Page() {
  const { address } = useAccount();
  const { open } = useAppKit();
  const { isConnected, caipAddress } = useAppKitAccount();
  const { caipNetwork, chainId } = useAppKitNetwork();
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

  const handleNetworkSelect = () => {
    open({ view: 'Networks' });
  };

  // Format the address for display based on network type
  const formatAddress = (addr: string) => {
    if (!addr) return '';
    // Check if it's a Solana address (they're 44 characters long)
    if (addr.length === 44) {
      return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
    }
    // For EVM addresses
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // Get the current address based on network
  const getCurrentAddress = () => {
    if (!caipAddress) return '';
    // Extract the actual address from CAIP format (e.g., eip155:1:0x... or solana:mainnet:...)
    const addressParts = caipAddress.split(':');
    return addressParts[addressParts.length - 1];
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
                  {caipAddress && (
                    <div className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="font-medium">{formatAddress(getCurrentAddress())}</span>
                      <button
                        onClick={handleNetworkSelect}
                        className="px-2 py-1 bg-gray-800 rounded-md text-xs hover:bg-gray-700 flex items-center gap-1"
                      >
                        {caipNetwork?.name}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
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
                <>
                  <button
                    onClick={handleNetworkSelect}
                    className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                  >
                    Select Network
                  </button>
                  <button
                    onClick={handleConnect}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Connect Wallet
                  </button>
                </>
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
          
          {/* Wallet Info Section */}
          {isConnected && caipAddress && (
            <div className="mt-8 p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 max-w-md mx-auto">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Address:</span>
                  <span className="font-medium">{formatAddress(getCurrentAddress())}</span>
                </div>
                {caipNetwork && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Network:</span>
                    <button
                      onClick={handleNetworkSelect}
                      className="font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      {caipNetwork.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
                {chainId && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Chain ID:</span>
                    <span className="font-medium text-gray-300">{chainId}</span>
                  </div>
                )}
              </div>
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
