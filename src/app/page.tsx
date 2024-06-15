'use client';
import IdentityComponents from '@/components/IdentityComponents';
import SwapComponents from '@/components/SwapComponents';
import TokenComponents from '@/components/TokenComponents';
import WalletComponents from '@/components/WalletComponents';

export default function Page() {
  return (
    <div className="flex flex-col w-96 md:w-[600px]">
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-2xl">An onchain app in 100 components or less</h2>
        </aside>
        <main className="flex flex-col space-x-4">
          <p className="text-body text-white mb-4">
            This is a demo app that showcases the OnchainKit components in a
            simple interface. The app is built with Next.js and Tailwind CSS.
          </p>
          <p className="text-body text-white">Useful links:</p>
          <ul className="list-disc">
            <li>
              <a href="https://onchainkit.xyz/">OnchainKit docs</a>
            </li>
            <li>
              <a href="https://github.com/Zizzamia/an-onchain-app-in-100-components">
                GitHub repo
              </a>
            </li>
            <li>
              <a href="https://portal.cdp.coinbase.com/products/node">
                Get API KEY
              </a>
            </li>
            <li>
              <a href="https://x.com/onchainkit">Stay in touch on X</a>
            </li>
          </ul>
        </main>
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Identity</h2>
        </aside>
        <IdentityComponents />
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Token</h2>
        </aside>
        <TokenComponents />
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Wallet</h2>
        </aside>
        <WalletComponents />
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex flex-col mb-6">
          <h2 className="text-xl  mb-6">Swap</h2>
          <p className="text-body bold text-white">
            Alert! Component is actively in development. Stay tuned for upcoming
            releases.
          </p>
          <p className="text-body italic text-white">
            Note: The Swap component only prepares the transaction. The
            developer needs to use Viem on their website to sign and send the
            transaction to the blockchain.
          </p>
        </aside>
        <SwapComponents />
      </section>
    </div>
  );
}
