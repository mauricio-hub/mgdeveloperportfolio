"use client";

import { motion } from "framer-motion";
import { EASE } from "./constants";

interface Props {
  text: string;
  hint: string;
  onOpen: () => void;
  onDismiss: (e: React.MouseEvent) => void;
}

export default function ProactiveBubble({ text, hint, onOpen, onDismiss }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.92 }}
      transition={{ duration: 0.4, ease: EASE }}
      onClick={onOpen}
      className="relative max-w-[220px] rounded-2xl rounded-br-sm px-4 py-3 shadow-lg cursor-pointer"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
    >
      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs"
        style={{ background: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
      >
        ×
      </button>
      <p className="text-sm font-medium leading-snug">{text}</p>
      <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{hint}</p>
    </motion.div>
  );
}
