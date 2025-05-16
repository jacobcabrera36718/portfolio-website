'use client';


import { } from 'react-icons/di';
import {  SiAmazonwebservices ,SiMacos, SiGithub, SiGithubcopilot, SiOpenai  } from 'react-icons/si';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

const toolIcons = [
    //tools
    SiAmazonwebservices ,SiMacos, SiGithub, SiGithubcopilot, SiOpenai
];

export default function Toolstack({
  iconSize = 'text-7xl',
  columnGap = 'gap-x-12',
  rowGap = 'gap-y-10',
}) {
  return (
    <section className="flex flex-col items-center justify-center text-[#e4e2dd] py-24 px-4">
      <h1 className={`text-4xl uppercase md:text-5xl font-bold text-center mb-12 ${anton.className}`}>
        Tools I <span className="text-[#e4e2dd]">Use</span>
      </h1>
      <div className={`grid auto-rows-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${columnGap} ${rowGap} justify-center`}>
        {toolIcons.map((Icon, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-40 h-24 border border-[#e4e2dd] rounded-md text-[#e4e2dd] hover:scale-110 transition-transform duration-200 ${iconSize}`}
          >
            <Icon />
          </div>
        ))}
      </div>
    </section>
  );
}