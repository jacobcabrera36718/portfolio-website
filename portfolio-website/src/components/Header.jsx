import Link from 'next/link';
import Image from 'next/image';
import { Anton } from 'next/font/google';
import { Raleway } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

const navItems = [
  { number: '01', label: 'HOME', href: '/' },
  { number: '02', label: 'ABOUT', href: '/about-me' },
  { number: '03', label: 'PROJECTS', href: '/projects' },
  { number: '04', label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-full z-50 px-12 py-16 flex flex-col justify-between text-[#e4e2dd] tracking-wide">
      
      {/* Logo and Stacked Name */}
      <div className="flex items-center space-x-4">
        <Image src="/jc-logo.svg" alt="Logo" width={100} height={100} />
        <div className="flex flex-col justify-center h-[64px]">
          <span className={`text-[45px] leading-none uppercase ${anton.className}`}>jacob cabrera</span>
          <span className={`text-[18.5px] leading-none lowercase opacity-80 ${raleway.className}`}>
            Software Engineer / developer
          </span>
        </div>
      </div>

      {/* Navigation - centered vertically and shifted right */}
      <div className="absolute top-[38%] left-[450px]">
        <nav className="flex flex-col space-y-6">
          {navItems.map(({ number, label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative flex items-end pl-6 group h-[72px]" // reduced from pl-8 to pl-4
            >
              {/* Number aligned to bottom-left, closer */}
              <span className={`absolute left-1 bottom-1 text-xs opacity-60 group-hover:opacity-100 ${anton.className}`}>
                {number}
              </span>

              {/* Main label */}
              <span className={`text-7xl font-semibold group-hover:opacity-80 transition-opacity ${anton.className}`}>
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
