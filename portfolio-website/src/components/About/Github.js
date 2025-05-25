'use client';

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export default function Github() {
  return (
    <section className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-[#e4e2dd] w-full">

      {/* Container with max-width and center alignment */}
      <div className="max-w-5xl mx-auto">

        {/* Heading - Centered on mobile, left on desktop */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center lg:text-left">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold leading-tight ${anton.className}`}>
            Days I Code
          </h1>
        </div>

        {/* GitHub Calendar - Centered */}
        <div className="flex justify-center">
          <GitHubCalendar
            username="jacobcabrera36718"
            blockSize={14}
            blockMargin={5}
            fontSize={16}
            theme={{
              dark: ['#1c1c1c', '#3d3d3d', '#5e5e5e', '#7f7f7f', '#a0a0a0'],
            }}
            colorScheme="dark"
          />
        </div>
      </div>
    </section>
  );
}
