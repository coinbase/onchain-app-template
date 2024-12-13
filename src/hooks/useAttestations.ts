import { useContractRead } from 'wagmi';

const EAS_ADDRESS = '0xC2679fBD37d54388Ce493F1DB75320D236e1815e'; // Sepolia address

export function useAttestations(address: string) {
  const { data: attestations } = useContractRead({
    address: EAS_ADDRESS,
    abi: [/* EAS ABI */],
    functionName: 'getAttestations',
    args: [address],
  });

  return { attestations };
} 