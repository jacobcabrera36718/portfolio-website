'use client';

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export default function Github() {
  return (
    <section className="relative mt-16 ml-[460px] text-[#e4e2dd] pr-12">
      {/* Heading */}
      <div className="min-w-[300px] mb-8">
        <h1 className={`text-5xl uppercase font-bold ${anton.className}`}>
          Days I Code
        </h1>
      </div>

      {/* Calendar */}
      <div className="max-w">
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
