'use client';

import {
  DiPython,
  DiJavascript1,
} from 'react-icons/di';
import {
  SiTensorflow,
  SiPytorch,
  SiBeautifulsoup,
  SiNextdotjs,
  SiReact,
  SiNumpy
} from 'react-icons/si';

export default function FinancialNewsSentimentTools({
  iconSize = 'text-6xl',
  columnGap = 'gap-x-12',
  rowGap = 'gap-y-10',
}) {
  const tools = [
    DiPython,
    //DiJavascript1,
    //SiBeautifulsoup,
    SiTensorflow,
    SiPytorch,
    SiNumpy,
    //SiReact,
    //SiNextdotjs,
  ];

  return (
    <section className="relative mt-20 ml-[460px] text-[#e4e2dd] pr-12">
      <div className="min-w-[300px] mb-8">
        <h1 className={`text-5xl uppercase font-bold`}>Tools Used</h1>
      </div>

      <div className={`grid grid-cols-4 ${columnGap} ${rowGap} max-w-[800px]`}>
        {tools.map((Icon, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-32 h-24 border border-[#e4e2dd] rounded-md text-[#e4e2dd] hover:scale-110 transition-transform duration-200 ${iconSize}`}
          >
            <Icon />
          </div>
        ))}
      </div>
    </section>
  );
}
