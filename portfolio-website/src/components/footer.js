import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`mt-auto z-20 bg-transparent backdrop-filter backdrop-blur-[1px] py-3 ${raleway.className} text-[#e4e2dd]`}>
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm gap-2 px-4 md:px-8">
        
        {/* left section */}
        <div className="w-full md:w-1/3 text-left">
          <h3 className="font-medium text-xs">
            Designed by <span className="font-semibold">Jacob Cabrera</span>
          </h3>
        </div>

        {/* middle section */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="font-medium text-xs">&copy; {year} JC</h3>
        </div>

        {/* right section */}
        <div className="w-full md:w-1/3 flex justify-end gap-4 pr-4 md:pr-0 text-lg text-right">
          <a
            href="https://github.com/jacobcabrera36718"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://linkedin.com/in/jacobcabrera"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="/jacob-cabrera-resume.pdf"
            download
            className="hover:text-blue-400 transition"
            title="Download Resume"
          >
            <BsFillFileEarmarkPersonFill />
          </a>
        </div>
      </div>
    </footer>
  );
}
