'use client';
import '../styles/globals.css';
import Footer from '../components/footer';
import ClientShaderWrapper from '../components/ClientShaderWrapper';
import Preloader from '../components/Preloader';
import { useState } from 'react';

/*export const metadata = {
  title: 'My Portfolio',
  description: 'Created by Jacob',
};*/

export default function RootLayout({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen bg-black overflow-hidden">
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
        <ClientShaderWrapper />
        <main className="relative z-10 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
