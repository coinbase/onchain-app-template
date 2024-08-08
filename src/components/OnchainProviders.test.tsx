import { render, screen } from '@testing-library/react';
import { base } from 'viem/chains';
import { describe, expect, it, vi } from 'vitest';
import { http, createConfig } from 'wagmi';
import { mock } from 'wagmi/connectors';
import OnchainProviders from './OnchainProviders';

vi.mock('../wagmi', () => ({
  useWamigConfig: () =>
    createConfig({
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
    }),
}));

describe('OnchainProviders', () => {
  it('should render', () => {
    render(
      <OnchainProviders>
        <div data-testid="child">Child Component</div>
      </OnchainProviders>,
    );
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
  });
});
