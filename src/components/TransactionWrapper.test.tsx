import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TransactionWrapper from './TransactionWrapper';
import { http, WagmiProvider, createConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'wagmi/chains';
import { mock } from 'wagmi/connectors';

const config = createConfig({
  chains: [base],
  connectors: [
    mock({
      accounts: [
        '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
        '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
      ],
    }),
  ],
  transports: {
    [base.id]: http(),
  },
});
const queryClient = new QueryClient();

const renderWithProviders = (component: JSX.Element) => {
  return render(
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    </WagmiProvider>,
  );
};

describe('TransactionWrapper', () => {
  it('should renders', () => {
    renderWithProviders(<TransactionWrapper address='0x' />);
    const transaction = screen.getByText('Collect');
    expect(transaction).toBeInTheDocument();
  });
});
