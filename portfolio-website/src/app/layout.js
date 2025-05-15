'use client';
import '../styles/globals.css';
import Footer from '../components/footer';
import ClientShaderWrapper from '../components/ClientShaderWrapper';
import Preloader from '../components/Preloader';
import { useState } from 'react';
import Image from 'next/image';

export default function RootLayout({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen bg-black overflow-y-auto">
        <ClientShaderWrapper />

        {!loaded ? (
          <Preloader onComplete={() => setLoaded(true)} />
        ) : (
          <>
            {/* Logo in same position as Header.jsx */}
            <div className="fixed top-0 left-0 h-full z-50 px-12 py-16 flex items-start">
              <Image
                src="/jc-logo.svg"
                alt="Jacob Cabrera Logo"
                width={100}
                height={100}
                priority
              />
            </div>

            <main className="relative z-10 flex-grow">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
