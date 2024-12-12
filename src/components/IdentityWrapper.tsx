import { IdentityCard } from '@coinbase/onchainkit/identity'; 
import { base } from 'viem/chains';
import { useAccount } from 'wagmi';
    
export default function IdentityWrapper() {
  const { address } = useAccount();

  return (
    <IdentityCard
      address={address}
      schemaId={address}
      chain={base}
    /> 
  );
}