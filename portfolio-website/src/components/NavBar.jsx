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
    <nav className={`fixed top-20 right-20 z-40 flex space-x-6 text-[#e4e2dd] text-sm tracking-wide uppercase ${anton.className}`}>
      {navLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="hover:opacity-80 transition-opacity"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
