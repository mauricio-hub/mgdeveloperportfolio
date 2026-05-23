"use client";

import { useLang } from "../lib/LanguageContext";
import { personal } from "../data/personal";
import SectionReveal, { RevealItem } from "./SectionReveal";

export default function Contact() {
  const { t } = useLang();

  return (
    <SectionReveal
      id="contact"
      className="border-b border-border px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-10">
          <RevealItem delay={0.1}>
            <h2 className="font-heading text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter text-text-primary">
              {t.contact.title}
            </h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <span className="text-outline block font-heading text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter">
              {t.contact.subtitle}
            </span>
          </RevealItem>
        </div>

        {/* CTA */}
        <RevealItem delay={0.3}>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-text-secondary">
            {t.contact.description}
          </p>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-text-primary bg-text-primary px-8 py-4 font-mono text-sm uppercase tracking-wider text-bg-primary transition-opacity hover:opacity-80"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            {t.contact.cta}
          </a>

          <p className="mt-6 font-mono text-xs text-text-secondary/40">
            {personal.location}
          </p>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}
