'use client';

import { Anton, Raleway } from 'next/font/google';
import Github from '../../components/About/Github';
import NavBar from '../../components/NavBar';
import Techstack from '../../components/About/TechStack';
import Toolstack from '../../components/About/ToolStack';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

export default function AboutPage() {
  return (
    <>
      <NavBar />

      {/* About Me Section */}
      <section className="relative mt-[30vh] px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 text-[#e4e2dd] max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* Left Side: ABOUT ME */}
          <div className="min-w-[160px] lg:min-w-[260px] text-left space-y-1">
            <h1 className={`text-4xl sm:text-6xl font-bold ${anton.className}`}>ABOUT</h1>
            <h1 className={`text-7xl sm:text-9xl font-bold ${anton.className}`}>ME</h1>
          </div>

          {/* Right Side: Text Paragraphs */}
          <div className={`w-full lg:max-w-[800px] space-y-6 text-base sm:text-lg leading-relaxed ${raleway.className}`}>
            <p>
              Hi, I'm <strong>Jacob Cabrera</strong> a recent Computer Science graduate from Florida State University with a passion for full-stack development, machine learning, and fintech. During my time at FSU, I built AI-powered trading bots, financial dashboards, and cross-platform eCommerce platforms that combine technical precision with real-world impact.
            </p>
            <p>
              My background includes hands-on experience with <em>Python, C++, SQL, JavaScript</em>, and modern frameworks like <em>React, Node.js, .NET MAUI, and TensorFlow</em>. I enjoy solving problems at the intersection of finance and technology, especially when it involves data-driven decision-making and scalable architectures.
            </p>
            <p>
              Outside the tech world, you’ll probably find me at the beach, fishing, or hitting the gym. I believe balancing technical intensity with time outdoors helps keep my creativity and energy high.
            </p>
            <p>
              I'm always looking to build something new, improve existing systems, and learn from others. Let’s build the future one project at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Skills + GitHub Section */}
      <Techstack />
      <Toolstack />
      <Github />

      <div className="mb-32 md:mb-40 lg:mb-40" />
    </>
  );
}
