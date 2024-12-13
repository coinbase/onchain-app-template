'use client';
import { useAccount, useBalance } from 'wagmi';
import { useState, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WalletWrapper from 'src/components/WalletWrapper';
import { toast } from 'sonner';
import Link from 'next/link';

const ORGANIZATIONS = [
  { 
    id: 1,
    name: "Red Cross",
    description: "Red Cross is a humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education.",
    address: "0x3C352eA32DFBb757CCdf4b457E52daF6eCC21917", // Replaced with random address
    image: "/images/red-cross.jpg"
  },
  { 
    id: 2,
    name: "Save the Kittens",
    description: "Help us save the kittens! They are in danger of being killed by the evil cat killers. We need to raise $1000 to save them. This is written by AI.",
    address: "0xd8ea779b8ffc1096ca422d40588c4c0641709890", // Replace with actual address
    image: "images/cat.jpg"
  },
  { 
    id: 3,
    name: "Forgot the name",
    description: "Help us save the kittens! They are in danger of being killed by the evil cat killers. We need to raise $1000 to save them. This is written by AI.",
    address: "0xd8ea779b8ffc1096ca422d40588c4c0641709890 ", // Replace with actual address
    image: "images/cat.jpg"
  },
  { 
    id: 4,
    name: "WHO?",
    description: "Who is this organization? I don't know. Let's find out. Here is a description: This is written by AI.",
    address: "0x123...789", // Replace with actual address
    image: "images/who.jpg"
  },
];

export default function OrganizationPage({ params }: { params: { id: string } }) {
  const id = use(params).id;
  const { isConnected } = useAccount();
  const [donationAmount, setDonationAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  
  const organization = ORGANIZATIONS.find(org => org.id === parseInt(id));
  
  const { data: balance, isError: balanceError, isLoading: balanceLoading, refetch } = useBalance({
    address: organization?.address as `0x${string}`,
  });

  if (!organization) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center p-6 bg-red-50 rounded-lg">
          <h2 className="text-xl text-red-600">Organization not found</h2>
          <a href="/" className="text-blue-500 hover:underline mt-4 block">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  const handleDonate = async () => {
    try {
      setIsLoading(true);
      setTxHash(null);

      if (!donationAmount || isNaN(Number(donationAmount))) {
        throw new Error('Please enter a valid amount');
      }

      // Implement actual donation logic here
      const hash = await sendDonation(organization.address, donationAmount);
      setTxHash(hash);
      
      toast.success('Donation successful!', {
        description: `Transaction hash: ${hash.slice(0, 6)}...${hash.slice(-4)}`,
        action: {
          label: 'View Transaction',
          onClick: () => window.open(`https://basescan.org/tx/${hash}`, '_blank'),
        },
      });

      setDonationAmount('');
    } catch (error) {
      console.error('Donation error:', error);
      toast.error('Donation failed', {
        description: error instanceof Error ? error.message : 'Unknown error occurred',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderBalanceSection = () => {
    if (balanceLoading) {
      return <div className="animate-pulse h-4 bg-gray-200 rounded w-24" />;
    }
    if (balanceError) {
      return <div className="text-red-500">Error loading balance</div>;
    }
    return (
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-600">
          Balance: {balance?.formatted} {balance?.symbol}
        </p>
        <button 
          onClick={() => refetch()} 
          className="p-1 rounded-full hover:bg-gray-100"
          title="Refresh balance"
        >
          <svg 
            className="w-4 h-4 text-gray-600" 
            fill="none" 
            strokeWidth="2" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className='flex h-full w-96 max-w-full flex-col px-1 font-sans md:w-[1008px]'>
      <div className="py-4 px-2">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            strokeWidth="2" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
      
      <section className="flex w-full flex-col items-center justify-center gap-4 rounded-xl px-2 py-4">
        {isConnected ? (
          <motion.div 
            className='w-full max-w-md flex flex-col items-center rounded-lg bg-gray-50/50 p-6 backdrop-blur-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Organization details section */}
            <div className="w-full mb-6">
              <h2 className="text-2xl font-semibold mb-2">{organization.name}</h2>
              <p className="text-gray-600 mb-4">{organization.description}</p>
            </div>
            
            <div className="w-full mb-6">
              <h2 className="text-xl font-semibold mb-2">Wallet Details</h2>
              <p className="text-sm text-gray-600">Address: {organization.address}</p>
              {renderBalanceSection()}
            </div>

            <div className="w-full mb-6">
              <h2 className="text-xl font-semibold mb-2">Make a Donation</h2>
              <div className="relative">
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                  placeholder="Amount in USDC"
                  disabled={isLoading}
                />
                {isLoading && (
                  <div className="absolute right-3 top-2.5">
                    <div className="animate-spin h-5 w-5 border-2 border-gray-500 border-t-transparent rounded-full" />
                  </div>
                )}
              </div>
              <button
                onClick={handleDonate}
                disabled={isLoading}
                className={`w-full py-2 rounded transition-colors ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {isLoading ? 'Processing...' : 'Donate'}
              </button>
            </div>

            <AnimatePresence>
              {txHash && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full mb-6 bg-green-50 p-4 rounded-lg"
                >
                  <h3 className="font-medium text-green-800">Transaction Successful!</h3>
                  <a
                    href={`https://basescan.org/tx/${txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:underline"
                  >
                    View on BaseScan
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Attestations section remains the same */}
          </motion.div>
        ) : (
          <div className="flex h-48 w-full max-w-md items-center justify-center rounded-lg bg-gray-100 p-6 text-center text-gray-600">
            Please connect your account to see organization details
          </div>
        )}
      </section>
    </div>
  );
} 