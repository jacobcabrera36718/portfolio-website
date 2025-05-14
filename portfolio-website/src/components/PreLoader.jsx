'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }) {
  const barRef = useRef();
  const textRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      onComplete: () => {
        setTimeout(() => {
          setLoaded(true);
          if (onComplete) onComplete();
        }, 400);
      },
    });

    // Step 1: Animate bar from left to right
    tl.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.8,
        transformOrigin: 'left center',
      }
    );

    // Step 2: Fade in text on the left side of the bar
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1 },
      '-=1.2'
    );

    // Step 3: Split to reveal site
    tl.to(topRef.current, {
      y: '-100%',
      duration: 1.2,
    }, '+=0.3');

    tl.to(bottomRef.current, {
      y: '100%',
      duration: 1.2,
    }, '-=1.2');
  }, []);

  if (loaded) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden">
      {/* Top and bottom white split panels */}
      <div
        ref={topRef}
        className="absolute top-1/2 left-0 w-full h-1/2 bg-white z-40"
        style={{ transform: 'translateY(0%)' }}
      />
      <div
        ref={bottomRef}
        className="absolute bottom-1/2 left-0 w-full h-1/2 bg-white z-40"
        style={{ transform: 'translateY(0%)' }}
      />

      {/* Fullscreen loading bar with left-aligned text */}
      <div className="absolute top-1/2 left-0 w-full h-[100px] -translate-y-1/2 z-50 pointer-events-none">
        <div
          ref={barRef}
          className="bg-black h-full w-full scale-x-0 origin-left flex items-center"
        >
          <span
            ref={textRef}
            className="text-white text-2xl font-semibold pl-10"
          >
            Jacob Cabrera Portfolio
          </span>
        </div>
      </div>
    </div>
  );
}
