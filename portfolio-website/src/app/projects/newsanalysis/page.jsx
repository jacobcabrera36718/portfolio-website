'use client';

import NavBar from '../../../components/NavBar';
import { Anton, Raleway } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

export default function NewsAnalysisProject() {
  return (
    <>
      <NavBar />
      <section className="relative mt-[28vh] ml-[460px] text-[#e4e2dd] pr-12">
        <div className="min-w-[300px] mb-12">
          <h1 className={`text-6xl font-bold mb-2 ${anton.className}`}>NEWS ANALYSIS</h1>
          <p className={`text-lg leading-relaxed ${raleway.className}`}>
            A sentiment analysis and summarization engine that scrapes headlines and articles using BeautifulSoup, applies pre-trained transformer models (like Pegasus), and visualizes trends using Python. Built for tracking financial sentiment on companies like Tesla and Google.
          </p>
        </div>
      </section>
    </>
  );
}
