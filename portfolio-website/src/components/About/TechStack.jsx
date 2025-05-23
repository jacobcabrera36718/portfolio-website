'use client';

import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiJavascript1,
  DiJava,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejs,
} from 'react-icons/di';
import {
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiDotnet,
  SiOpencv,
  SiNumpy,
  SiSqlite,
} from 'react-icons/si';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

const techIcons = [
  DiPython, DiJavascript1, DiJava, CgCPlusPlus, DiHtml5,
  DiCss3, DiReact, DiNodejs, SiNextdotjs, SiDotnet,
  SiTensorflow, SiPytorch, SiOpencv, SiNumpy, SiSqlite,
];

export default function Techstack() {
  return (
    <section className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-[#e4e2dd] w-full">
      
      {/* Container with max-width and center alignment */}
      <div className="max-w-5xl mx-auto">
        {/* Heading - Centered on mobile, left on desktop */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center lg:text-left">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold leading-tight ${anton.className}`}>
            Professional Skillset
          </h1>
        </div>

        {/* Icon Grid - Fixed 5 columns, 3 rows */}
        <div className="grid grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center max-w-6xl mx-auto">
          {techIcons.map((Icon, index) => (
            <div
              key={index}
              className="w-24 h-8 sm:w-28 sm:h-12 md:w-32 md:h-16 lg:w-36 lg:h-20 xl:w-40 xl:h-24 flex items-center justify-center border border-[#e4e2dd] rounded-md hover:scale-105 hover:border-white transition-all duration-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}