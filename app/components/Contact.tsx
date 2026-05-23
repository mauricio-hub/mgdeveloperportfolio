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
                <li>{personal.location}</li>
                <li>
                  <a
                    href={`https://wa.me/${personal.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-text-secondary transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </RevealItem>
        </div>

        {/* CTA */}
        {/* <RevealItem delay={0.5}>
          <div className="mt-12">
            <a
              href="/Mauricio-Gonzalez-CV.pdf"
              download
              className="inline-flex items-center border border-text-primary bg-text-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-bg-primary transition-opacity hover:opacity-80"
            >
              {t.contact.cta}
            </a>
          </div>
        </RevealItem> */}
      </div>
    </SectionReveal>
  );
}

