"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
      <div
        className="px-3 py-2"
        style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "12px 12px 12px 4px" }}
      >
        <span className="flex gap-1 items-center">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="w-1.5 h-1.5 rounded-full animate-bounce"
              style={{ background: "var(--text-secondary)", animationDelay: `${delay}ms` }}
            />
          ))}
        </span>
      </div>
    </motion.div>
  );
}
