import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    //blurred background with dark overlay
    <footer className="bg-[rgba(10,10,10,0.6)] backdrop-blur-md text-white py-6">
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm gap-4 px-4 md:px-8">
        
        {/* left section */}
        <div className="w-full md:w-1/3 text-left">
          <h3 className="font-medium">
            Designed and Developed by <span className="font-semibold">Jacob Cabrera</span>
          </h3>
        </div>

        {/* middle section*/}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="font-medium">&copy; {year} JC</h3>
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
