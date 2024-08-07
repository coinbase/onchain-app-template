'use client';

import {
  DISCORD_LINK,
  FIGMA_LINK,
  GITHUB_LINK,
  ONCHAINKIT_LINK,
  TWITTER_LINK,
} from 'src/links';

const docLinks = [
  { href: ONCHAINKIT_LINK, title: 'Docs' },
  { href: GITHUB_LINK, title: 'Github' },
  { href: DISCORD_LINK, title: 'Discord' },
  { href: FIGMA_LINK, title: 'Figma' },
  { href: TWITTER_LINK, title: 'X' },
];

export default function Footer() {
  return (
    <section className="mt-12 mb-6 flex w-full flex-col justify-between gap-2 md:flex-row ">
      <aside className="flex items-center justify-center md:justify-start">
        <h3 className="mr-2 text-m">
          Built with love by{' '}
          <a
            href={ONCHAINKIT_LINK}
            target="_blank"
            rel="noreferrer"
            title="OnchainKit"
          >
            OnchainKit
          </a>
        </h3>
      </aside>
      <ul className="flex justify-center gap-6 md:justify-start">
        {docLinks.map(({ href, title }) => (
          <li className="flex" key={href}>
            <a href={href} target="_blank" rel="noreferrer" title={title}>
              <p>{title}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
