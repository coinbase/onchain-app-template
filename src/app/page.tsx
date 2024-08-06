'use client';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { useAccount } from 'wagmi';
import WalletWrapper from 'src/components/WalletWrapper';
import TransactionWrapper from 'src/components/TransactionWrapper';
import BaseSvg from 'src/components/BaseSvg';

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
        <aside className="flex items-center">
          <h3 className="text-m mr-2">Built with love on</h3>
          <BaseSvg />
          <h3 className="text-m ml-1 text-[#0052FF]">Base</h3>
        </aside>
        <ul className="flex gap-6">
          <li className="flex">
            <a href="https://onchainkit.xyz" target="_blank">
              Docs
            </a>
          </li>
          <li className="flex">
            <a href="https://github.com/coinbase/onchainkit" target="_blank">
              Github
            </a>
          </li>
          <li className="flex">
            <a href="https://discord.gg/8gW3h6w5" target="_blank">
              Discord
            </a>
          </li>
          <li className="flex">
            <a
              href="https://www.figma.com/community/file/1370194397345450683/onchainkit"
              target="_blank"
            >
              Figma
            </a>
          </li>
          <li className="flex">
            <a href="https://x.com/Onchainkit" target="_blank">
              X
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
