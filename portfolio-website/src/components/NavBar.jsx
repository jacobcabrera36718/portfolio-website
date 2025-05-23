'use client';

import Link from 'next/link';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  return (
    <nav
      className={`fixed z-40 flex space-x-4 sm:space-x-6 text-[#e4e2dd] text-xs sm:text-sm tracking-wider uppercase ${anton.className}
        top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 lg:top-12 lg:right-12`}
    >
      {navLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="hover:opacity-80 transition-opacity duration-150"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
