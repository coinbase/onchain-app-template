import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import WalletComponents from './WalletComponents';

describe('WalletComponents', () => {
  it('should renders', () => {
    render(<WalletComponents />);
    expect(true).toBeTruthy();
  });
});
