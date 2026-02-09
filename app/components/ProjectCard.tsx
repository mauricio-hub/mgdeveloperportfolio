"use client";

import { useLang } from "../lib/LanguageContext";
import type { Project } from "../data/projects";
import ImageSlider from "./ImageSlider";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, lang } = useLang();
  const hasGallery = project.images.length > 0;

  return (
    <article className="flex flex-col border border-border">
      {/* Image */}
      {hasGallery ? (
        <ImageSlider images={project.images} alt={project.title} />
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-bg-secondary">
          <span className="font-mono text-xs text-text-secondary/40">Screenshot</span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-text-primary">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-text-secondary">{project.client}</span>
        </div>

        <p className="text-sm leading-relaxed text-text-secondary">{project.description[lang]}</p>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">{t.projects.problem}</p>
          <p className="text-sm leading-relaxed text-text-secondary">{project.problem[lang]}</p>
        </div>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">{t.projects.role}</p>
          <p className="text-sm leading-relaxed text-text-secondary">{project.role[lang]}</p>
        </div>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">{t.projects.result}</p>
          <p className="text-sm leading-relaxed text-text-secondary">{project.result[lang]}</p>
        </div>

        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-text-secondary">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
