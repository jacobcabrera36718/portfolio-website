'use client';

import NavBar from '../../../components/NavBar';
import { Anton, Raleway } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

export default function DashboardProject() {
  return (
    <>
      <NavBar />
      <section className="relative mt-[28vh] ml-[460px] text-[#e4e2dd] pr-12">
        <div className="min-w-[300px] mb-12">
          <h1 className={`text-6xl font-bold mb-2 ${anton.className}`}>FINANCIAL DASHBOARD</h1>
          <p className={`text-lg leading-relaxed ${raleway.className}`}>
            A modern financial dashboard built using React, Next.js, and ApexCharts. It displays real-time stock data, financial indicators, and customizable portfolio tracking. The dashboard is optimized for performance and visual clarity across devices.
          </p>
        </div>
      </section>
    </>
  );
}
