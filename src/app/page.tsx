'use client';
import IdentityComponents from '@/components/IdentityComponents';

export default function Page() {
  return (
    <div className="flex flex-col w-96 md:w-[600px]">
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-2xl">An onchain app in 100 components or less</h2>
        </aside>
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Identity</h2>
        </aside>
        <IdentityComponents />
      </section>
    </div>
  );
}
