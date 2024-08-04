import { Address, Avatar, Identity, Name } from '@coinbase/onchainkit/identity';

export default function IdentityComponents() {
  return (
    <main className="flex h-10 items-center space-x-4">
      <Identity address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9">
        <Avatar />
        <Name />
        <Address />
      </Identity>
    </main>
  );
}
