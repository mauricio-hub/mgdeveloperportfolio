"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface MarqueeProps {
  text: string;
  repeat?: number;
}

export default function Marquee({ text, repeat = 8 }: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax: marquee shifts -20px to +20px based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const items = Array.from({ length: repeat }, (_, i) => (
    <span key={i} className="mx-4 whitespace-nowrap">
      {text} <span className="mx-4 text-text-secondary">×</span>
    </span>
  ));

  return (
    <div
      ref={ref}
      className="overflow-hidden border-y border-border py-4"
    >
      <motion.div
        style={reduced ? {} : { y }}
        className="flex"
      >
        <div className="animate-marquee flex font-heading text-lg font-bold uppercase tracking-widest text-text-primary md:text-xl">
          {items}
          {/* Duplicate for seamless loop */}
          {items}
        </div>
      </motion.div>
    </div>
  );
}

