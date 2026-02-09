"use client";

import { useLang } from "../lib/LanguageContext";
import SectionReveal, { RevealItem } from "./SectionReveal";

export default function About() {
  const { t } = useLang();

  return (
    <SectionReveal id="about" className="border-b border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12">
          <RevealItem delay={0.1}>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter text-text-primary">
              {t.about.title}
            </h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <span className="text-outline block font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter">
              {t.about.subtitle}
            </span>
          </RevealItem>
        </div>

        {/* Content — 2 column grid */}
        <div className="grid gap-8 md:grid-cols-2">
          <RevealItem delay={0.3}>
            <p className="text-base leading-relaxed text-text-secondary">
              {t.about.p1}
            </p>
          </RevealItem>
          <RevealItem delay={0.4}>
            <p className="text-base leading-relaxed text-text-secondary">
              {t.about.p2}
            </p>
          </RevealItem>
        </div>
      </div>
    </SectionReveal>
  );
}

