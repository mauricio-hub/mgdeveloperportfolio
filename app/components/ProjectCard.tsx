"use client";

import { useLang } from "../lib/LanguageContext";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, lang } = useLang();
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex flex-col justify-between gap-6 border border-border bg-bg-primary p-8 transition-colors duration-300 hover:bg-bg-secondary md:p-10">

      {/* Top row — number + client */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-text-secondary/40 tracking-widest">
          {num}
        </span>
        <span className="font-mono text-[11px] text-text-secondary/60 tracking-wider uppercase">
          {project.client}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none tracking-tighter text-text-primary">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary max-w-prose">
          {project.description[lang]}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Problem + Result — two columns */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <p className="font-mono text-[9px] uppercase tracking-widest text-accent">
            {t.projects.problem}
          </p>
          <p className="text-xs leading-relaxed text-text-secondary">
            {project.problem[lang]}
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="font-mono text-[9px] uppercase tracking-widest text-accent">
            {t.projects.result}
          </p>
          <p className="text-xs leading-relaxed text-text-secondary">
            {project.result[lang]}
          </p>
        </div>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="border border-border px-2.5 py-1 font-mono text-[10px] text-text-secondary transition-colors duration-200 group-hover:border-accent/30"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 6 && (
          <span className="self-center font-mono text-[10px] text-text-secondary/40">
            +{project.stack.length - 6}
          </span>
        )}
      </div>
    </article>
  );
}
