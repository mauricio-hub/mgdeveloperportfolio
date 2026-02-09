"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1.0] as const;

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionReveal({
  children,
  className = "",
  id,
  delay = 0,
}: SectionRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: EASE,
        delay,
      }}
      viewport={{ once: true, margin: "-15%" }}
    >
      {children}
    </motion.section>
  );
}

/* Staggered child wrapper — use inside SectionReveal */
export function RevealItem({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: EASE,
        delay,
      }}
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.div>
  );
}

