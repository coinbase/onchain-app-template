import { parseEther } from 'viem';
import { useWriteContract } from 'wagmi';

export function useDonate() {
  const { writeContract } = useWriteContract();

  const donate = async (to: string, amount: string) => {
    try {
      const value = parseEther(amount);
      
      const hash = await writeContract({
        abi: [{
          name: 'transfer',
          type: 'function',
          stateMutability: 'payable',
          inputs: [],
          outputs: [],
        }],
        address: to as `0x${string}`,
        functionName: 'transfer',
        value,
      });

      return hash;
    } catch (error) {
      console.error('Error donating:', error);
      throw error;
    }
  };

  return { donate };
} 