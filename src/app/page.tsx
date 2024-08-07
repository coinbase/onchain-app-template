'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row md:gap-0">
          <h2 className="text-3xl">Onchainkit</h2>
          <div className="flex gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="templateSection flex w-full grow flex-col items-center justify-center gap-4 rounded-xl md:bg-gray-100">
        <div className="flex h-[450px] w-[450px] max-w-full items-center justify-center rounded-xl bg-[#030712]">
          <div className="rounded-xl bg-[#F3F4F6] px-4 py-[11px]">
            <p className="font-normal text-indigo-600 text-xl not-italic tracking-[-1.2px]">
              npm install @coinbase/onchainkit
            </p>
          </div>
        </div>
        {address ? (
          <TransactionWrapper address={address} />
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to collect"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
