"use client";

import { motion } from "framer-motion";

interface Props {
  welcome: string;
  suggested: string[];
  onSelect: (q: string) => void;
}

export default function WelcomeScreen({ welcome, suggested, onSelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15 }}
      className="space-y-3"
    >
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {welcome}
      </p>
      <div className="flex flex-col gap-2">
        {suggested.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="text-left text-xs px-3 py-2 rounded-lg hover:opacity-80 transition-all"
            style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
          >
            {q}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
