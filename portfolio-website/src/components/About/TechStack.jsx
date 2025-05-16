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
  // Total = 15 icons for 5x3 grid
  DiPython, DiJavascript1, DiJava, CgCPlusPlus, DiHtml5,
  DiCss3, DiReact, DiNodejs, SiNextdotjs, SiDotnet,
  SiTensorflow, SiPytorch, SiOpencv, SiNumpy, SiSqlite,
];

export default function Techstack({
  iconSize = 'text-7xl',
  columnGap = 'gap-x-12',
  rowGap = 'gap-y-10',
}) {
  return (
    <section className="relative mt-30 ml-[460px] text-[#e4e2dd] pr-12">
      {/* Left-Aligned Heading */}
      <div className="min-w-[300px] mb-12">
        <h1 className={`text-5xl uppercase font-bold mb-2 ${anton.className}`}>PROFESSIONAL SKILLSET</h1>
      </div>

      {/* 5x3 Grid */}
      <div className="max-w-[1000px]">
        <div className={`grid grid-cols-5 ${columnGap} ${rowGap} justify-start`}>
          {techIcons.slice(0, 15).map((Icon, index) => (
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
