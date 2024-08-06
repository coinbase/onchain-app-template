'use client';
import BaseSvg from 'src/components/BaseSvg';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 flex-col md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-3xl">Onchainkit</h2>
          <div className="flex gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="flex w-full grow flex-col items-center justify-center gap-4 rounded-xl bg-gray-100">
        <div className="flex h-[450px] w-[450px] items-center justify-center rounded-xl bg-[#030712]">
          <div className="rounded-xl bg-[#F3F4F6] px-4 py-[11px]">
            <p className="font-normal text-indigo-600 text-xl not-italic tracking-[-1.2px]">
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
      <section className="mt-12 mb-6 flex w-full justify-between">
        <aside className="flex items-center">
          <h3 className="mr-2 text-m">Built with love on</h3>
          <BaseSvg />
          <h3 className="ml-1 text-[#0052FF] text-m">Base</h3>
        </aside>
        <ul className="flex gap-6">
          <li className="flex">
            <a href="https://onchainkit.xyz" target="_blank" rel="noreferrer">
              Docs
            </a>
          </li>
          <li className="flex">
            <a
              href="https://github.com/coinbase/onchainkit"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="flex">
            <a
              href="https://discord.gg/8gW3h6w5"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </li>
          <li className="flex">
            <a
              href="https://www.figma.com/community/file/1370194397345450683/onchainkit"
              target="_blank"
              rel="noreferrer"
            >
              Figma
            </a>
          </li>
          <li className="flex">
            <a href="https://x.com/Onchainkit" target="_blank" rel="noreferrer">
              X
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
