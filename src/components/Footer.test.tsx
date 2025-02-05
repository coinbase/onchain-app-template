import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  DISCORD_LINK,
  FIGMA_LINK,
  GITHUB_LINK,
  ONCHAINKIT_LINK,
  TWITTER_LINK,
} from '../links';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer component', () => {
    render(<Footer />);

    expect(screen.getByText(/Built with love by/i)).toBeInTheDocument();

    const onchainKitLink = screen.getByTitle('OnchainKit');
    expect(onchainKitLink).toBeInTheDocument();
    expect(onchainKitLink).toHaveAttribute('href', ONCHAINKIT_LINK);
  });

  it('renders all doc links correctly', () => {
    render(<Footer />);

    const links = [
      { href: ONCHAINKIT_LINK, title: 'Docs' },
      { href: GITHUB_LINK, title: 'Github' },
      { href: DISCORD_LINK, title: 'Discord' },
      { href: FIGMA_LINK, title: 'Figma' },
      { href: TWITTER_LINK, title: 'X' },
    ];

    for (const { href, title } of links) {
      const link = screen.getByTitle(title);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    }
  });
});
