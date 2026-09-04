import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const menuItems = [
  { name: 'Home', link: '/', external: false },
  { name: 'Policy', link: '/policy', external: false },
  { name: 'GitHub', link: 'https://github.com/bgpcheap/website', external: true },
];

export default function Header() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="bgp.cheap home">
        <Image src="/img/icon.svg" alt="" width={58} height={58} priority />
        <span>bgp.cheap</span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
      >
        <span>Menu</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
          <path d="M3 6.5h18M3 12h18M3 17.5h18" />
        </svg>
      </button>

      <nav
        id="primary-navigation"
        className={`primary-nav${isOpen ? ' is-open' : ''}`}
        aria-label="Primary navigation"
      >
        {menuItems.map((item) => {
          const active = !item.external && pathname === item.link;

          return (
            <Link
              key={item.name}
              href={item.link}
              className={active ? 'is-active' : undefined}
              aria-current={active ? 'page' : undefined}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              {item.external && (
                <svg className="external-icon" aria-hidden="true" viewBox="0 0 16 16">
                  <path d="M6 3H3v10h10v-3M8 2h6v6M14 2 7 9" />
                </svg>
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
