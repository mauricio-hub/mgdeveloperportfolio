"use client";

import { useLang } from "../lib/LanguageContext";
import { experience } from "../data/experience";
import SectionReveal, { RevealItem } from "./SectionReveal";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const { t } = useLang();

  return (
    <SectionReveal
      id="experience"
      className="border-b border-border px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12">
          <RevealItem delay={0.1}>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter text-text-primary">
              {t.experience.title}
            </h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <span className="text-outline block font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter">
              {t.experience.subtitle}
            </span>
          </RevealItem>
        </div>

        {/* Accordion list */}
        <RevealItem delay={0.3}>
          <div className="border-t border-border">
            {experience.map((exp, i) => (
              <ExperienceItem key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}

