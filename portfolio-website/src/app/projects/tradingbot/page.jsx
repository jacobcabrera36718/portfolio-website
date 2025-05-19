'use client';

import NavBar from '../../../components/NavBar';
import { Anton, Raleway } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

export default function TradingBotProject() {
  return (
    <>
      <NavBar />
      <section className="relative mt-[28vh] ml-[460px] text-[#e4e2dd] pr-12">
        <div className="min-w-[300px] mb-12">
          <h1 className={`text-6xl font-bold mb-2 ${anton.className}`}>TRADING BOT</h1>
          <p className={`text-lg leading-relaxed ${raleway.className}`}>
            This project showcases a fully automated trading bot built with Python and integrated with real-time financial data sources. The bot leverages technical indicators and sentiment analysis to place simulated trades and evaluate strategy performance. It includes a dashboard for tracking results and visualizing signals.
          </p>
        </div>
      </section>
    </>
  );
}