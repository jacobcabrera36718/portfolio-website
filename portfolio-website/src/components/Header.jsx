import Link from 'next/link';
import { Anton } from 'next/font/google';
import { Raleway } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

const navItems = [
  { number: '01', label: 'HOME', href: '/' },
  { number: '02', label: 'PROJECTS', href: '/projects' },
  { number: '03', label: 'ABOUT', href: '/about' },
  { number: '04', label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-full z-40 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-between text-[#e4e2dd] tracking-wide">
      {/* Logo space removed - now handled by layout.js */}
      
      {/* Name - positioned directly after where logo would be */}
      <div className="flex flex-col justify-center h-14 sm:h-16 md:h-20 lg:h-24 xl:h-[120px] pl-16 sm:pl-20 md:pl-24 lg:pl-28 xl:pl-32">
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-none uppercase ${anton.className}`}>
          jacob cabrera
        </span>
        <span className={`text-xs sm:text-sm md:text-base lg:text-[18.5px] leading-none lowercase opacity-80 ${raleway.className}`}>
          Software Engineer / developer
        </span>
      </div>

      {/* Navigation - now fully responsive */}
      <div className="absolute top-1/3 sm:top-[38%] left-4 sm:left-24 md:left-44 lg:left-56 xl:left-[450px]">
        <nav className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
          {navItems.map(({ number, label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative flex items-end pl-4 sm:pl-5 md:pl-6 group h-8 sm:h-12 md:h-16 lg:h-[72px]"
            >
              {/* Number aligned to bottom-left */}
              <span className={`absolute left-1 bottom-1 text-[8px] sm:text-xs opacity-60 group-hover:opacity-100 ${anton.className}`}>
                {number}
              </span>

              {/* Main label */}
              <span className={`text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold group-hover:opacity-80 transition-opacity ${anton.className}`}>
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}