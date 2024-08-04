'use client';
import IdentityComponents from '@/components/IdentityComponents';

export default function Page() {
  return (
    <div className="flex w-96 flex-col md:w-[600px]">
      <section className="mb-6 flex w-full flex-col border-sky-800 border-b pb-6">
        <aside className="mb-6 flex">
          <h2 className="text-2xl">An onchain app in 100 components or less</h2>
        </aside>
      </section>
      <section className="mb-6 flex w-full flex-col border-sky-800 border-b pb-6">
        <aside className="mb-6 flex">
          <h2 className="text-xl">Identity</h2>
        </aside>
        <IdentityComponents />
      </section>
    </div>
  );
}
