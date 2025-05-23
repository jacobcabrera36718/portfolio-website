'use client';

import {
  SiAmazonwebservices,
  SiMacos,
  SiGithub,
  SiGithubcopilot,
  SiOpenai,
} from 'react-icons/si';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

const toolIcons = [
  SiAmazonwebservices,
  SiMacos,
  SiGithub,
  SiGithubcopilot,
  SiOpenai,
];

export default function Toolstack() {
  return (
    <section className="relative mt-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 text-[#e4e2dd] max-w-screen-xl mx-auto">
      
      {/* Heading */}
      <div className="mb-10">
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-left ${anton.className}`}>
          Tools
        </h1>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-14 gap-y-8">
        {toolIcons.map((Icon, index) => (
          <div
            key={index}
            className="w-40 h-24 sm:w-32 sm:h-32 md:w-40 md:h-24 flex items-center justify-center border border-[#e4e2dd] rounded-md hover:scale-110 transition-transform duration-200 text-2xl sm:text-7xl"
          >
            <Icon />
          </div>
        ))}
      </div>
    </section>
  );
}
