'use client';
import IdentityKit from '../components/IdentityKit';
import TokenKit from '../components/TokenKit';
import WalletKit from '../components/WalletKit';

export default function Page() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col w-96 mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Identity Kit</h2>
        </aside>
        <IdentityKit />
      </section>
      <section className="flex flex-col w-96 mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Token Kit</h2>
        </aside>
        <TokenKit />
      </section>
      <section className="flex flex-col w-96 mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Wallet Kit</h2>
        </aside>
        <WalletKit />
      </section>
    </div>
  );
}
