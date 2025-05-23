'use client';

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export default function Github() {
  return (
    <section className="relative mt-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 text-[#e4e2dd] max-w-screen-xl mx-auto">
      
      {/* Heading */}
      <div className="mb-10">
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-left ${anton.className}`}>
          Days I Code
        </h1>
      </div>

      {/* GitHub Calendar */}
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
    </section>
  );
}
