"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../lib/LanguageContext";
import type { Experience } from "../data/experience";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export default function ExperienceItem({
  experience,
  index,
}: ExperienceItemProps) {
  const [open, setOpen] = useState(true);
  const { lang } = useLang();

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-6 py-6 text-left transition-colors hover:bg-bg-secondary/50 px-2"
        aria-expanded={open}
      >
        {/* Index number */}
        <span className="font-mono text-sm text-text-secondary">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Company + Role */}
        <div className="flex-1">
          <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-text-primary md:text-xl">
            {experience.company}
          </h3>
          <p className="text-sm text-text-secondary">
            {experience.role[lang]} · {experience.period}
            {experience.status[lang] && (
              <span className="ml-2 text-accent">({experience.status[lang]})</span>
            )}
          </p>
        </div>

        {/* Toggle icon */}
        <span className="shrink-0 text-xl text-text-secondary">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-6 pl-14">
              {/* Achievements */}
              <ul className="mb-4 space-y-2">
                {experience.achievements[lang].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-2">
                {experience.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
