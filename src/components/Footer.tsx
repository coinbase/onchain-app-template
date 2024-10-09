'use client';

import {
  DISCORD_LINK,
  FIGMA_LINK,
  GITHUB_LINK,
  ONCHAINKIT_LINK,
  TWITTER_LINK,
} from 'src/links';
import { motion } from 'framer-motion';
import ArrowSvg from 'src/svg/ArrowSvg';

const docLinks = [
  { href: ONCHAINKIT_LINK, title: 'Docs' },
  { href: GITHUB_LINK, title: 'Github' },
  { href: DISCORD_LINK, title: 'Discord' },
  { href: FIGMA_LINK, title: 'Figma' },
  { href: TWITTER_LINK, title: 'X' },
];

export default function Footer() {
  return (
    <section className='mt-auto mb-2 flex w-full flex-col-reverse justify-between gap-2 font-sans md:mt-8 md:mb-6 md:flex-row'>
      <aside className="flex items-center pt-2 md:pt-0">
        <h3 className="mr-2 mb-2 text-m md:mb-0">
          Built with love by{' '}
          <a
            href={ONCHAINKIT_LINK}
            target="_blank"
            rel="noreferrer"
            title="OnchainKit"
            className="font-semibold hover:text-indigo-600"
          >
            OnchainKit
          </a>
        </h3>

      </aside>
      <ul className="mt-4 flex max-w-full flex-col flex-wrap justify-center gap-3 md:mt-0 md:flex-row md:justify-start md:gap-6">
        {docLinks.map(({ href, title }) => (
          <li className="flex" key={href}>
            <motion.a
              href={href}
              target="_blank"
              rel="noreferrer"
              title={title}
              className="flex items-center gap-1 hover:text-indigo-600"
              whileHover={{ y: -5 }} 
              transition={{ type: 'spring', stiffness: 300 }} 
            >
              <p>{title}</p>
              <ArrowSvg />
            </motion.a>
          </li>
        ))}
      </ul>
    </section>
  );
}