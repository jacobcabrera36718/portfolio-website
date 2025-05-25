'use client';
import './globals.css';
import Footer from '../components/footer';
import ClientShaderWrapper from '../components/ClientShaderWrapper';
import Preloader from '../components/Preloader';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Simple hook to safely handle client-side only code
function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
}

export default function RootLayout({ children }) {
  const [loaded, setLoaded] = useState(false);
  const isClient = useIsClient();
  
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen bg-black overflow-y-auto">
        <ClientShaderWrapper />

        {!loaded ? (
          <Preloader onComplete={() => setLoaded(true)} />
        ) : (
          <>
            {/* Logo positioned to match Header.jsx spacing exactly */}
            <div className="fixed top-0 left-0 z-50 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 flex items-start">
              <Image
                src="/jc-logo.svg"
                alt="Jacob Cabrera Logo"
                width={100}
                height={100}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28" 
                priority
              />
            </div>

            <main className="relative z-10 flex-grow w-full">
              {children}
            </main>
            
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
