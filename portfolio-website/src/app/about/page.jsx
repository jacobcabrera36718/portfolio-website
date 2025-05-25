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

      {/* About Me Section - Centered layout with consistent proportions */}
      <section className="relative mt-66 sm:mt-70 md:mt-74 lg:mt-82 xl:mt-90 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-[#e4e2dd] w-full">
        
        {/* Container with max-width and center alignment */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">

            {/* Left Side: ABOUT ME - Responsive sizing with consistent proportions */}
            <div className="flex-shrink-0 text-center lg:text-left space-y-1 lg:space-y-2">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight ${anton.className}`}>ABOUT</h1>
              <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold leading-tight ${anton.className}`}>ME</h1>
            </div>

            {/* Right Side: Text Paragraphs - Balanced width with content */}
            <div className={`w-full max-w-2xl lg:max-w-none lg:flex-1 space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed text-center lg:text-left ${raleway.className}`}>
              <p>
                Hi, I'm <strong>Jacob Cabrera</strong> a recent Computer Science graduate from Florida State University with a passion for full-stack development, machine learning, and fintech. During my time at FSU, I built AI-powered trading bots, financial dashboards, and cross-platform eCommerce platforms that combine technical precision with real-world impact.
              </p>
              <p>
                My background includes hands-on experience with <em>Python, C++, SQL, JavaScript</em>, and modern frameworks like <em>React, Node.js, .NET MAUI, and TensorFlow</em>. I enjoy solving problems at the intersection of finance and technology, especially when it involves data-driven decision-making and scalable architectures.
              </p>
              <p>
                Outside the tech world, you'll probably find me at the beach, fishing, or hitting the gym. I believe balancing technical intensity with time outdoors helps keep my creativity and energy high.
              </p>
              <p>
                I'm always looking to build something new, improve existing systems, and learn from others. Let's build the future one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills + GitHub Section */}
      <Techstack />
      <Toolstack />
      <Github />

      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40" />
    </>
  );
}