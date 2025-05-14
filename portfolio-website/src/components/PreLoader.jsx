'use client';
import { useEffect, useState } from 'react';
import ClientShaderWrapper from './ClientShaderWrapper';

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);
  const [typedText, setTypedText] = useState('');

  // Updated to just your full name
  const fullText = 'Jacob Cabrera Portfolio';
  const typingSpeed = 100; // ms per character

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);

        // After typing finishes, hold for 2s then fade out
        setTimeout(() => {
          setFade(true);
          setTimeout(() => {
            setVisible(false);
            if (onComplete) onComplete();
          }, 1000); // fade-out
        }, 1000); // hold duration
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fade ? 0 : 1 }}
    >
      <ClientShaderWrapper />
      <h1 className="z-10 text-#e4e2dd text-3xl font-bold tracking-widest font-mono">
        {typedText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}