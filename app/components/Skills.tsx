"use client";

import { useLang } from "../lib/LanguageContext";
import SectionReveal, { RevealItem } from "./SectionReveal";

export default function Skills() {
  const { t } = useLang();

  return (
    <SectionReveal
      id="skills"
      className="border-b border-border px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12">
          <RevealItem delay={0.1}>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter text-text-primary">
              {t.skills.title}
            </h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <span className="text-outline block font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter">
              {t.skills.subtitle}
            </span>
          </RevealItem>
        </div>

        {/* Editorial blocks — 2x2 grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {t.skills.blocks.map((block, i) => (
            <RevealItem
              key={i}
              delay={0.3 + i * 0.1}
              className="border border-border p-6 md:p-8"
            >
              <span className="mb-4 block font-mono text-xs text-text-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-heading text-lg font-bold uppercase tracking-wider text-text-primary">
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {block.text}
              </p>
            </RevealItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
