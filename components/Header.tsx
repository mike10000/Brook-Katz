'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/bio', label: 'Bio' },
  { href: '/recipes', label: 'Recipes' },
  { href: '/books', label: 'Books' },
  { href: '/events', label: 'Events' },
  { href: '/links', label: 'Links' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--organic-sage)_35%,transparent)] bg-gradient-to-br from-[var(--organic-forest)] via-[var(--organic-moss)] to-[#3d4f1c] text-[var(--organic-earth)] shadow-[0_4px_24px_rgba(26,46,26,0.38)]">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-0">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--organic-earth)] transition hover:opacity-90"
        >
          Brook<span className="text-[var(--organic-gold)]">Katz</span>.com
        </Link>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition hover:bg-[color-mix(in_srgb,var(--organic-earth)_12%,transparent)] md:hidden"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--organic-earth)] transition duration-300 ${
              navOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--organic-earth)] transition duration-300 ${navOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--organic-earth)] transition duration-300 ${
              navOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>

        <nav
          className={`absolute left-0 right-0 top-full border-t border-[color-mix(in_srgb,var(--organic-sage)_35%,transparent)] bg-[var(--organic-forest)] shadow-xl md:static md:border-t-0 md:bg-transparent md:shadow-none ${
            navOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <ul className="flex flex-col gap-1 p-4 md:flex-row md:gap-1 md:p-0">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setNavOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition md:px-3 md:py-2 ${
                      isActive
                        ? 'bg-[color-mix(in_srgb,var(--organic-earth)_14%,transparent)] text-[var(--organic-earth)]'
                        : 'text-[color-mix(in_srgb,var(--organic-earth)_88%,transparent)] hover:bg-[color-mix(in_srgb,var(--organic-sage)_35%,transparent)] hover:text-[var(--organic-earth)]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
