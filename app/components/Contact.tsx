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
        <div className="mb-12">
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

        {/* Info grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Links */}
          <RevealItem delay={0.3}>
            <div>
              <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-accent">
                {t.contact.links}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </RevealItem>

          {/* Contact info */}
          <RevealItem delay={0.4}>
            <div>
              <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-accent">
                {t.contact.info}
              </h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li>{personal.email}</li>
                <li>{personal.phone}</li>
                <li>{personal.location}</li>
              </ul>
            </div>
          </RevealItem>
        </div>

        {/* CTA */}
        <RevealItem delay={0.5}>
          <div className="mt-12">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center border border-text-primary bg-text-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-bg-primary transition-opacity hover:opacity-80"
            >
              {t.contact.cta}
            </a>
          </div>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}

