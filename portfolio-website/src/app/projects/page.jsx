'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

const projects = [
  {
    name: 'Trading Bot',
    href: '/projects/tradingbot',
    image: '/tradingbot-proj.svg',
    alt: 'Trading Bot SVG',
  },
  {
    name: 'Financial Dashboard',
    href: '/projects/fdashboard',
    image: '/fdashboard-proj.svg',
    alt: 'Financial Dashboard SVG',
  },
  {
    name: 'Ecommerce App',
    href: '/projects/ecommerce',
    image: '/ecommerce-proj.svg',
    alt: 'Ecommerce App SVG',
  },
  {
    name: 'News Analyzer',
    href: '/projects/newsanalysis',
    image: '/newsanalysis-proj.svg',
    alt: 'News Analyzer SVG',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      <section className="relative mt-[12vh] h-screen flex flex-col items-center justify-center text-[#e4e2dd]">
        {/* Title */}
        <div className="mb-4">
          <h1 className={`text-7xl uppercase font-bold text-center ${anton.className}`}>Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {projects.map(({ name, href, image, alt }) => (
            <Link key={name} href={href}>
              <div className="-mb-3 transition-transform transform hover:scale-105 cursor-pointer">
                <Image
                  src={image}
                  alt={alt}
                  width={400}
                  height={250}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
