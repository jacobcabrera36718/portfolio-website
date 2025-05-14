'use client';
import '../styles/globals.css';
import Footer from '../components/footer';
import ClientShaderWrapper from '../components/ClientShaderWrapper';
import Preloader from '../components/Preloader';
import { useState } from 'react';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen bg-black overflow-hidden">
        <ClientShaderWrapper />
        
        {!loaded ? (
          <Preloader onComplete={() => setLoaded(true)} />
        ) : (
          <>
            <Header />
            <main className="relative z-10 flex-grow">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}