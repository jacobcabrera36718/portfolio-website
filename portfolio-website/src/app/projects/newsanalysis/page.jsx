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
      
      {/* Main Content Section - Responsive with flex direction change on mobile */}
      <section className="relative mt-20 sm:mt-24 md:mt-28 lg:mt-[28vh] ml-4 sm:ml-20 md:ml-32 lg:ml-[400px] text-[#e4e2dd] pr-4 sm:pr-8 md:pr-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
          {/* Left Side Title - Full width on mobile, constrained on desktop */}
          <div className="min-w-[200px] lg:min-w-[300px]">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 ${anton.className}`}>Financial News</h1>
            <h1 className={`text-2xl sm:text-2xl lg:text-3xl font-bold mb-4 ${anton.className}`}>Summarization and Sentiment</h1>
          </div>

          {/* Right Side Description - Full width on mobile */}
          <div className={`w-full lg:max-w-[750px] space-y-6 text-base sm:text-lg leading-relaxed lg:-ml-[10px] ${raleway.className}`}>
            <p>
              This project automates financial market intelligence by scraping news headlines across multiple sources using a Python-based aggregator built with BeautifulSoup. It applies pre-trained transformer models to summarize articles and assess sentiment polarity. To boost speed, parallel computing techniques are used for scraping and processing tasks. The output—structured summaries and sentiment scores—is formatted into CSV files for seamless reporting and analysis. Designed for scalability, the system employs custom data structures optimized for financial data streams, enabling rapid insight extraction from large datasets.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Component - Responsively positioned */}
      <FinancialNewsSentimentTools />

      {/* GitHub Link - Centered */}
      <section className="relative mt-16 flex justify-center w-full text-[#e4e2dd]">
        <Link
          href="https://github.com/jacobcabrera36718/Financial-News-Summarization-and-Sentiment-Analysis.git"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-6 py-3 mt-4 border border-[#e4e2dd] rounded-md font-semibold hover:text-black hover:bg-[#e4e2dd] transition ${raleway.className}`}
        >
          Click here to view the GitHub repository
        </Link>
      </section>

      <div className="mb-16 sm:mb-24 md:mb-30 lg:mb-40" />
    </>
  );
}