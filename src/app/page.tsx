'use client';
import { useAccount } from 'wagmi';
import Footer from 'src/components/Footer';
import IdentityWrapper from 'src/components/IdentityWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import WalletWrapper from 'src/components/WalletWrapper';
import { motion } from 'framer-motion';

const ORGANIZATIONS = [
  { name: "Red Cross", buttonText: "Donate to Red Cross" },
  { name: "UNICEF", buttonText: "Support UNICEF" },
  { name: "Save the Children", buttonText: "Help CATS" },
  { name: "WHO", buttonText: "Support WHO?" }
];

export default function Page() {
  const { isConnected } = useAccount();

  return (
    <div className='flex h-full w-96 max-w-full flex-col px-1 font-sans md:w-[1008px]'>
      <section className='mt-6 mb-6 flex w-full flex-col items-center md:flex-row'>
        <div className='flex w-full flex-row items-center justify-between gap-2 md:gap-0'>
          <div className="flex-1"></div>
          <h1 className="text-2xl font-bold flex-1 text-center">Crypto Care</h1>
          <div className="flex items-center gap-3 flex-1 justify-end">
            <WalletWrapper />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-4 rounded-xl px-2 py-4 md:grow">
        {isConnected ? (
          <>
            <div className='flex w-full max-w-md flex-col items-center rounded-lg bg-gray-50/50 p-6 backdrop-blur-sm'>
              <motion.h1 
                className='mb-4 text-center font-bold text-4xl'
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: [0, -5, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 1.0,
                  rotate: { duration: 0.7, delay: 0.8 }
                }}
              > 
                Here are the organizations need your help! 
              </motion.h1>
              
              <div className="grid grid-cols-2 gap-6 w-full max-w-2xl mt-4">
                {ORGANIZATIONS.map((org, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                       onClick={() => window.location.href = `/organization/${index + 1}`}
                  >
                    <div className="w-24 h-24 mb-3 bg-gray-200 rounded-full">
                      {/* Placeholder for organization image */}
                    </div>
                    <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                      {org.buttonText}
                    </button>
                  </div>
                ))}
              </div>
              
              <div className='flex flex-col items-center mt-6'>
                <p className='text-center'>
                  Click to find what each oragnization does!
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-48 w-full max-w-md items-center justify-center rounded-lg bg-gray-100 p-6 text-center text-gray-600">
            Please connect your account to see your profile
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
