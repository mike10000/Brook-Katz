'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const scrollAmount = Math.max(0, -rect.top);
        setOffset(scrollAmount * 0.35);
      } else if (rect.top >= window.innerHeight) {
        setOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] overflow-hidden px-6 py-20 text-center text-white md:py-28"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
        aria-hidden
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 via-primary/75 to-primary-dark/90"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center">
        <h1 className="font-display mx-auto max-w-4xl text-4xl font-bold tracking-tight drop-shadow-lg md:text-5xl">
          Wisdom of a Plant Based Lifestyle
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-95 drop-shadow-md md:text-xl">
          Here you&apos;ll find the best information available on delicious recipes, vegan cookbooks,
          cooking tips, and healthy nutrition. Through proper lifestyle choices and sensible
          ingredients, optimum nutritional health is available to everyone.
        </p>
        <div className="mt-8 inline-block rounded-full bg-white/20 px-7 py-3 text-sm backdrop-blur-sm">
          Grateful to mentors <strong>Dr. Michael Klaper</strong> &amp; <strong>Dr. Michael Greger</strong>
        </div>
      </div>
    </section>
  );
}
