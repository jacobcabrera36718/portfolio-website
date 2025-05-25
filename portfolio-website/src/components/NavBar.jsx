'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-40 top-6 right-4 sm:top-8 sm:right-6 md:top-10 md:right-8 lg:top-12 lg:right-12
      text-[#e4e2dd] text-xs sm:text-sm md:text-base tracking-wider uppercase flex space-x-4 sm:space-x-6 md:space-x-8
      ${anton.className} transition-all duration-300
      ${scrolled ? 'border-b border-white/10 backdrop-blur bg-black/20 px-4 py-2 rounded-xl' : ''}`}
    >
      {navLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="hover:text-white transition-colors duration-150"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
