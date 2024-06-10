import { ConnectAccount } from '@coinbase/onchainkit/wallet';

export default function WalletKit() {
  return (
    <main className="flex h-10 items-center space-x-4">
      <ConnectAccount />
    </main>
  );
}
