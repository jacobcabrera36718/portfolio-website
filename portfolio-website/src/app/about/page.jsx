import { Anton } from 'next/font/google';
import { Raleway } from 'next/font/google';
import Github from '../../components/About/Github';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

export default function AboutPage() {
  return (
    <>
      <section className="relative mt-[28vh] ml-[460px] text-[#e4e2dd] flex gap-16 pr-12">
        {/* Left Side (Title or Profile Pic) */}
        <div className="min-w-[300px]">
          <h1 className={`text-6xl font-bold mb-2 ${anton.className}`}>ABOUT</h1>
          <h1 className={`text-9xl font-bold mb-4 ${anton.className}`}>ME</h1>
          {/* Optional: Profile picture can go here */}
          {/* <img src="/profile.jpg" alt="Jacob Cabrera" className="rounded-lg mt-4 w-48" /> */}
        </div>

        {/* Right Side (Text with Raleway font) */}
        <div className={`max-w-[800px] space-y-8 text-lg -ml-[45px] leading-relaxed ${raleway.className}`}>
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
      </section>

      <Github />
    </>
  );
}
