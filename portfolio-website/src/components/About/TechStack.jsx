'use client';

import { CgCPlusPlus } from "react-icons/cg";


import { DiPython, DiJavascript1, DiJava, DiHtml5, DiCss3, DiReact, DiNodejs} from 'react-icons/di';
import { SiNextdotjs, SiTensorflow, SiPytorch, SiDotnet, SiOpencv, SiNumpy, SiSqlite} from 'react-icons/si';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

const techIcons = [
    // Programming Languages
    DiPython, DiJavascript1, DiJava, CgCPlusPlus, DiHtml5, DiCss3,
    // Frameworks & Libraries
    DiReact, DiNodejs, SiNextdotjs, SiDotnet, , SiTensorflow, SiPytorch,
    // AI / ML / NLP
    SiOpencv, SiNumpy,
    // Database
    SiSqlite
];

export default function Techstack({
  iconSize = 'text-7xl',
  columnGap = 'gap-x-12',
  rowGap = 'gap-y-10',
}) {
  return (
    <section className="flex flex-col items-center justify-center text-[#e4e2dd] py-24 px-4">
      <h1 className={`text-4xl uppercase md:text-5xl font-bold text-center mb-12 ${anton.className}`}>
        Professional <span className="text-[#e4e2dd]">Skillset</span>
      </h1>
      <div className={`grid auto-rows-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${columnGap} ${rowGap} justify-center`}>
        {techIcons.map((Icon, index) => (
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
