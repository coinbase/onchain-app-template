'use client';

const docLinks = [
  { href: 'https://onchainkit.xyz', title: 'Docs' },
  { href: 'https://github.com/coinbase/onchainkit', title: 'Github' },
  { href: 'https://discord.gg/8gW3h6w5', title: 'Discord' },
  {
    href: 'https://www.figma.com/community/file/1370194397345450683/onchainkit',
    title: 'Figma',
  },
  { href: 'https://x.com/Onchainkit', title: 'X' },
];

export default function Footer() {
  return (
    <section className="mt-12 mb-6 flex w-full flex-col justify-between gap-2 md:flex-row ">
      <aside className="flex items-center justify-center md:justify-start">
        <h3 className="mr-2 text-m">Built with love by the OnchainKit team</h3>
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
