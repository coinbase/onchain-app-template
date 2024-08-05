'use client';
import WalletComponents from '../components/WalletComponents';

export default function Page() {
  return (
    <div className="flex w-96 flex-col md:w-[600px]">
      <section className="mb-6 flex w-full flex-col border-sky-800 border-b pb-6">
        <aside className="mb-6 flex">
          <h2 className="text-2xl">Onchain App Template</h2>
        </aside>
      </section>
      <section className="mb-6 flex w-full flex-col border-sky-800 border-b pb-6">
        <aside className="mb-6 flex">
          <h2 className="text-xl">Identity</h2>
        </aside>
        <main className="flex h-10 items-center space-x-4">
          <WalletComponents />
        </main>
      </section>
    </div>
  );
}
