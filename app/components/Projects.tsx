"use client";

import { useLang } from "../lib/LanguageContext";
import { projects } from "../data/projects";
import SectionReveal, { RevealItem } from "./SectionReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLang();

  return (
    <SectionReveal
      id="projects"
      className="border-b border-border px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12">
          <RevealItem delay={0.1}>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter text-text-primary">
              {t.projects.title}
            </h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <span className="text-outline block font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter">
              {t.projects.subtitle}
            </span>
          </RevealItem>
        </div>

        {/* Project grid — 2 columns on desktop */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <RevealItem key={project.id} delay={0.3 + i * 0.1}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
