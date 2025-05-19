'use client';

import NavBar from '../../../components/NavBar';
import { Anton, Raleway } from 'next/font/google';
import Link from 'next/link';
import FinancialNewsSentimentTools from '../../../components/projects/newsanalysis/financialNewsSentimentTools';
const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

export default function NewsAnalysisProject() {
  return (
    <>
      <NavBar />
      <section className="relative mt-[28vh] ml-[460px] text-[#e4e2dd] flex gap-16 pr-12">
        {/* Left Side Title */}
        <div className="min-w-[300px]">
          <h1 className={`text-6xl font-bold mb-2 ${anton.className}`}>Financial News</h1>
          <h1 className={`text-3xl font-bold mb-4 ${anton.className}`}>Summarization and Sentiment</h1>
        </div>

        {/* Right Side Description */}
        <div className={`max-w-[725px] space-y-6 text-lg -ml-[100px] leading-relaxed ${raleway.className}`}>
          <p>
            This project automates financial market intelligence by scraping news headlines across multiple sources using a Python-based aggregator built with BeautifulSoup. It applies pre-trained transformer models to summarize articles and assess sentiment polarity. To boost speed, parallel computing techniques are used for scraping and processing tasks. The output—structured summaries and sentiment scores—is formatted into CSV files for seamless reporting and analysis. Designed for scalability, the system employs custom data structures optimized for financial data streams, enabling rapid insight extraction from large datasets.
          </p>
        </div>
      </section>

      {/* Tools Component */}
      <FinancialNewsSentimentTools />

      {/* GitHub Link */}
      <section className="relative mt-16 ml-[460px] text-[#e4e2dd] pr-12">
        <Link
          href="https://github.com/jacobcabrera36718/financial-news-sentiment"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mt-4 border border-[#e4e2dd] rounded-md font-semibold hover:text-black hover:bg-[#e4e2dd] transition"
        >
          Click here to view the GitHub repository
        </Link>
      </section>

      <div className="mb-32 md:mb-30 lg:mb-40" />
    </>
  );
}
