"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLang } from "../lib/LanguageContext";
import { personal } from "../data/personal";

const EASE = [0.25, 0.1, 0.25, 1.0] as const;

function useMouseOffset(enabled: boolean) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const handle = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // Very subtle: max ±12px
      setOffset({
        x: ((e.clientX - cx) / cx) * 12,
        y: ((e.clientY - cy) / cy) * 12,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [enabled]);

  return offset;
}

export default function Hero() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const y = reduced ? 0 : 40;
  const mouse = useMouseOffset(!reduced);
  const scrollRef = useRef<HTMLAnchorElement>(null);

  return (
    <section className="relative flex min-h-screen flex-col justify-center border-b border-border px-6 pt-24 pb-16">
      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mb-6 font-mono text-xs uppercase tracking-widest text-text-secondary"
        >
          {t.hero.greeting} {personal.name}
        </motion.p>

        {/* Main title */}
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: reduced ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="font-heading text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tighter text-text-primary"
          >
            {t.hero.title}
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, y: reduced ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="text-outline block font-heading text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tighter"
          >
            {t.hero.subtitle}
          </motion.span>
        </div>

        {/* Summary + Photo area */}
        <div className="inline-flex flex-col items-center gap-8 text-left md:flex-row md:items-end md:gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="relative h-56 w-44 shrink-0 overflow-hidden grayscale md:h-72 md:w-56"
          >
            <Image
              src="/images/mg.png"
              alt={personal.name}
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="object-cover"
              priority
              unoptimized
            />
          </motion.div>

          {/* Summary text */}
          <motion.div
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
            className="max-w-md"
          >
            <p className="mb-8 text-base leading-relaxed text-text-secondary">
              {t.hero.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-6 py-3 text-sm font-medium uppercase tracking-wider text-bg-primary transition-opacity hover:opacity-80"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-medium uppercase tracking-wider text-text-primary transition-colors hover:bg-bg-secondary"
              >
                {t.hero.cta2}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — mouse-reactive circle */}
        <motion.a
          ref={scrollRef}
          href="#about"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            x: mouse.x,
            y: mouse.y,
          }}
          transition={{ duration: 1, ease: EASE, delay: 0.9 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 md:flex"
          aria-label="Scroll down"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent">
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path d="M7 1v12M1 8l6 6 6-6" />
            </motion.svg>
          </span>
        </motion.a>
      </div>
    </section>
  );
}

