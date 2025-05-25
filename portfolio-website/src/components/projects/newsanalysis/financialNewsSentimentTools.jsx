'use client';

import { DiPython } from 'react-icons/di';
import { FaFileExcel } from "react-icons/fa";
import {
  SiPytorch,
  SiHuggingface,
  SiJupyter 
} from 'react-icons/si';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export default function FinancialNewsSentimentTools({
  iconSize = 'text-6xl',
  columnGap = 'gap-x-12',
  rowGap = 'gap-y-10',
}) {
  const tools = [
    DiPython,
    SiPytorch,
    FaFileExcel,
    SiHuggingface,
    SiJupyter 
  ];

  return (
    <section className="relative mt-16 sm:mt-20 ml-4 sm:ml-20 md:ml-32 lg:ml-[400px] text-[#e4e2dd] pr-4 sm:pr-8 md:pr-12">
      <div className="min-w-[200px] sm:min-w-[300px] mb-6 sm:mb-8">
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl uppercase font-bold ${anton.className}`}>
          Tools Used
        </h1>
      </div>

      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-60 sm:${columnGap} ${rowGap} max-w-full sm:max-w-[800px]`}>
        {tools.map((Icon, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-full h-24 sm:w-40 sm:h-24 md:w-40 md:h-24 border border-[#e4e2dd] rounded-md text-[#e4e2dd] hover:scale-110 transition-transform duration-200 text-7xl sm:${iconSize}`}
          >
            <Icon />
          </div>
        ))}
      </div>
    </section>
  );
}
