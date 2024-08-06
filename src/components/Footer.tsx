'use client';

import BaseSvg from './BaseSvg';

export default function Footer() {
  return (
    <section className="mt-12 mb-6 flex w-full justify-between">
      <aside className="flex items-center">
        <h3 className="mr-2 text-m">Built with love on</h3>
        <BaseSvg />
        <h3 className="ml-1 text-[#0052FF] text-m">Base</h3>
      </aside>
      <ul className="flex gap-6">
        <li className="flex">
          <a href="https://onchainkit.xyz" target="_blank" rel="noreferrer">
            Docs
          </a>
        </li>
        <li className="flex">
          <a
            href="https://github.com/coinbase/onchainkit"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="flex">
          <a
            href="https://discord.gg/8gW3h6w5"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </li>
        <li className="flex">
          <a
            href="https://www.figma.com/community/file/1370194397345450683/onchainkit"
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>
        </li>
        <li className="flex">
          <a href="https://x.com/Onchainkit" target="_blank" rel="noreferrer">
            X
          </a>
        </li>
      </ul>
    </section>
  );
}
