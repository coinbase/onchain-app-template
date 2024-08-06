'use client';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { useAccount } from 'wagmi';
import WalletWrapper from 'src/components/WalletWrapper';
import TransactionWrapper from 'src/components/TransactionWrapper';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex w-96 flex-col md:w-[1008px] h-full">
      <section className="mb-6 mt-6 flex w-full flex-col">
        <div className="flex justify-between w-full items-center">
          <h2 className="text-3xl">Onchainkit</h2>
          <div className="flex gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 gap-4 flex w-full flex-col rounded-xl items-center justify-center grow">
        <div className="flex items-center justify-center h-[450px] w-[450px] bg-[#030712] rounded-xl">
          <div className="bg-[#F3F4F6] px-4 py-[11px] rounded-xl">
            <p className="text-indigo-600 text-xl not-italic font-normal tracking-[-1.2px]">
              npm install @coinbase/onchainkit
            </p>
          </div>
        </div>
        {address ? (
          <TransactionWrapper address={address} />
        ) : (
          <WalletWrapper className="w-[450px]" text="Sign in to collect" />
        )}
      </section>
      <section className="mb-6 mt-12 flex w-full justify-between">
        <aside className="flex">
          <h3 className="text-m">Built with love on Base</h3>
        </aside>
        <ul className="flex gap-6">
          <li className="flex">
            <p>Docs</p>
          </li>
          <li className="flex">
            <p>Github</p>
          </li>
          <li className="flex">
            <p>Discord</p>
          </li>
          <li className="flex">
            <p>Figma</p>
          </li>
          <li className="flex">
            <p>X</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
