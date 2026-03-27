'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const COLORS = ['#4a5d23', '#8da171', '#d4a373', '#1a2e1a'];

class Particle {
  x = 0;
  y = 0;
  size = 0;
  speedX = 0;
  speedY = 0;
  opacity = 0;
  angle = 0;
  spin = 0;
  color = '#4a5d23';

  constructor(private w: number, private h: number) {
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * this.w;
    this.y = initial ? Math.random() * this.h : this.h + 50;
    this.size = Math.random() * 15 + 5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 + 0.2;
    this.opacity = Math.random() * 0.3;
    this.angle = Math.random() * Math.PI * 2;
    this.spin = Math.random() * 0.02 - 0.01;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]!;
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
    this.angle += this.spin;

    if (this.y < -50) {
      this.reset();
      this.y = this.h + 50;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.moveTo(0, -this.size);
    ctx.quadraticCurveTo(this.size, 0, 0, this.size);
    ctx.quadraticCurveTo(-this.size, 0, 0, -this.size);
    ctx.fill();

    ctx.restore();
  }
}

export default function HeroOrganicCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const title = titleRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const w = Math.max(1, wrap.clientWidth);
      const h = Math.max(1, wrap.clientHeight);
      canvas.width = w;
      canvas.height = h;
      const count = Math.max(10, Math.floor(w / 40));
      particlesRef.current = Array.from({ length: count }, () => new Particle(w, h));
    };

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (const p of particlesRef.current) {
        p.update();
        p.draw(ctx);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!title) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const moveX = (e.clientX - w / 2) * 0.01;
      const moveY = (e.clientY - h / 2) * 0.01;
      title.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(wrap);
    resize();
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      if (title) title.style.transform = '';
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--organic-earth)] font-organic text-[var(--organic-forest)]">
      <div ref={wrapRef} className="organic-canvas-wrap">
        <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />
      </div>

      <div className="relative z-10 flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-4 text-center md:pt-8">
        <div className="absolute left-[15%] top-10 hidden opacity-10 lg:block">
          <svg width="160" height="160" viewBox="0 0 100 100" className="animate-pulse" aria-hidden>
            <path d="M50 0 C70 30 90 50 50 100 C10 50 30 30 50 0" fill="#4a5d23" />
          </svg>
        </div>

        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full border border-[#4a5d23] bg-white/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#4a5d23]">
            Nourish Your Roots
          </span>

          <h1
            ref={titleRef}
            className="mb-8 text-5xl text-[#1a2e1a] transition-transform will-change-transform md:text-7xl lg:text-8xl"
          >
            <span className="organic-hero-title">Wisdom</span>{' '}
            <span className="font-organic align-baseline font-normal not-italic text-[#1a2e1a]">
              of a
            </span>
            <br />
            <span className="font-organic font-normal not-italic text-[#1a2e1a]">Plant Based</span>
            <br />
            <span className="organic-hero-title relative inline-block">
              Lifestyle
              <svg
                className="absolute -bottom-4 left-0 w-full"
                height="12"
                viewBox="0 0 400 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 10C50 3 150 3 398 10"
                  stroke="#d4a373"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl">
            The best information available on delicious recipes, vegan cookbooks, cooking tips, and
            healthy nutrition. Through{' '}
            <span className="font-semibold text-[#4a5d23] underline decoration-[#d4a373]">
              proper lifestyle choices
            </span>{' '}
            and sensible ingredients, optimum nutritional health is available to everyone.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/bio"
              className="organic-btn w-full rounded-2xl bg-[#4a5d23] px-10 py-5 text-center text-lg font-bold text-white shadow-xl shadow-green-900/20 sm:w-auto group"
            >
              About Brook
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/recipes"
              className="organic-glass-card organic-btn w-full rounded-2xl border border-white px-10 py-5 text-center text-lg font-bold text-[#1a2e1a] transition-all hover:bg-white sm:w-auto"
            >
              View Recipes
            </Link>
          </div>
        </div>

        <a
          href="#home-content"
          className="mt-16 cursor-pointer text-[#4a5d23] animate-bounce"
          aria-label="Scroll to site content"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
