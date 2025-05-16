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

export default function Toolstack({
  iconSize = 'text-7xl',
  columnGap = 'gap-x-12',
  rowGap = 'gap-y-10',
}) {
  return (
    <section className="relative mt-16 ml-[460px] text-[#e4e2dd] pr-12">
      {/* Left-Aligned Heading */}
      <div className="min-w-[300px] mb-12">
        <h1 className={`text-5xl uppercase font-bold ${anton.className}`}>
          Tools
        </h1>
      </div>

      {/* Grid Below Heading */}
      <div className="max-w-[1000px]">
        <div className={`grid grid-cols-5 ${columnGap} ${rowGap} justify-start`}>
          {toolIcons.map((Icon, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-40 h-24 border border-[#e4e2dd] rounded-md text-[#e4e2dd] hover:scale-110 transition-transform duration-200 ${iconSize}`}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
