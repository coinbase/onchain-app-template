'use client';
import { Avatar, Name } from '@coinbase/onchainkit/identity';

export default function Page() {
  return (
    <>
      <section className="flex flex-col w-96">
        <aside className="flex mb-6">
          <h3>Identity Kit</h3>
        </aside>
        <main className="flex h-10 items-center space-x-4">
          <Avatar address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9" showAttestation />
          <div className="flex flex-col text-sm">
            <b>
              <Name address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9" />
            </b>
            <Name address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9" showAddress />
          </div>
        </main>
      </section>
    </>
  );
}
