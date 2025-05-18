'use client';
import { useState } from 'react';
import NavBar from '../../components/NavBar';
import { Anton, Raleway } from 'next/font/google';

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/mwpoygdd', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  };

  return (
    <>
      <NavBar />
      <section className="relative mt-[28vh] ml-[460px] text-[#e4e2dd] flex gap-16 pr-12">
        {/* Left Side: Main Title */}
        <div className="min-w-[300px]">
          <h1 className={`text-5xl uppercase font-bold mb-2 ${anton.className}`}>contact</h1>
          <h1 className={`text-9xl uppercase font-bold mb-4 ${anton.className}`}>me</h1>
        </div>

        {/* Right Side: Form */}
        <div className={`max-w-[725px] space-y-6 -ml-[50px] ${raleway.className}`}>
          {submitted ? (
            <div className="p-6 border border-[#e4e2dd] rounded-md bg-black text-[#e4e2dd]">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-transparent border border-[#e4e2dd] rounded-md text-[#e4e2dd]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-transparent border border-[#e4e2dd] rounded-md text-[#e4e2dd]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                className="w-full p-3 bg-transparent border border-[#e4e2dd] rounded-md text-[#e4e2dd]"
              />
              <button
                type="submit"
                className={`px-6 py-3 bg-[#e4e2dd] text-black font-semibold rounded-md hover:bg-[#cfcfcf] transition ${anton.className}`}
              >
                Send
              </button>
            </form>
          )}

          {/* Additional Contact Info Section */}
          <div className="flex gap-16 pt-20">
            {/* Left Subheading */}
            <div className="min-w-[300px] space-y-6 -ml-[330px]">
              <h1 className={`text-7xl uppercase font-bold mb-2 ${anton.className}`}>I'm also</h1>
              <h1 className={`text-5xl uppercase font-bold mb-4 ${anton.className}`}>available at</h1>
            </div>

            {/* Right Side Info */}
            <div className={`max-w-[725px]space-y-4 -ml-[.00001px] text-lg ${raleway.className}`}>
                <p>
                    <strong>Email:</strong>{' '}
                    <a
                    href="mailto:jacobtcabrera@gmail.com"
                    className="underline hover:text-blue-400 transition"
                    >
                    jacobtcabrera@gmail.com
                    </a>
                </p>              <p>
                <strong>On the Internet:</strong>{' '}
                <a
                  href="https://linkedin.com/in/jacobcabrera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>{' '}
                |{' '}
                <a
                  href="https://github.com/jacobcabrera36718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400 transition"
                >
                  GitHub
                </a>
              </p>
              <p>
                <strong>CV:</strong>{' '}
                <a
                  href="/jacob-cabrera-resume.pdf"
                  download
                  className="underline hover:text-blue-400 transition"
                >
                  Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
    <div className="mb-32 md:mb-30 lg:mb-20"/>

    </>
  );
}
