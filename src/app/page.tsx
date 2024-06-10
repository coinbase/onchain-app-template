'use client';
import IdentityKit from '../components/IdentityKit';
import TokenKit from '../components/TokenKit';
import WalletKit from '../components/WalletKit';

export default function Page() {
  return (
    <div className="flex flex-col">
      <IdentityKit />
      <TokenKit />
      <WalletKit />
    </div>
  );
}
