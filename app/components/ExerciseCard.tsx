"use client";

import { useLang } from "../lib/LanguageContext";
import type { Exercise } from "../data/exercises";
import ImageSlider from "./ImageSlider";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const { lang } = useLang();

  return (
    <article className="flex flex-col border border-border">
      {/* Image slider */}
      <ImageSlider images={exercise.images} alt={exercise.title} />

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title + links */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-text-primary">
            {exercise.title}
          </h3>
          <div className="flex shrink-0 gap-2">
            {exercise.liveUrl && exercise.liveUrl !== "#" && (
              <a
                href={exercise.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-accent transition-colors hover:text-text-primary"
                aria-label={`Live demo of ${exercise.title}`}
              >
                Live ↗
              </a>
            )}
            {exercise.repoUrl && exercise.repoUrl !== "#" && (
              <a
                href={exercise.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
                aria-label={`Source code of ${exercise.title}`}
              >
                Code ↗
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-text-secondary">
          {exercise.description[lang]}
        </p>

        {/* Stack badges */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {exercise.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
