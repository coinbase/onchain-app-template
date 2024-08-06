import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import WalletWrapper from './WalletWrapper';

describe('WalletWrapper', () => {
  it('should renders', () => {
    render(<WalletWrapper />);
    expect(true).toBeTruthy();
  });
});
