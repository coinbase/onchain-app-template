import { ConnectAccount } from '@coinbase/onchainkit/wallet';

export default function WalletKit() {
  return (
    <section className="flex flex-col w-96 my-6 pb-4 border-b border-sky-800">
      <aside className="flex mb-6">
        <h2 className="text-xl">Wallet Kit</h2>
      </aside>
      <main className="flex h-10 items-center space-x-4">
        <ConnectAccount />
      </main>
    </section>
  );
}
