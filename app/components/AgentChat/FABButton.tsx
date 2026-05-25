"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function FABButton({ open, onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Open AI assistant"
      className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center relative"
      style={{ background: "var(--accent)", color: "var(--bg-primary)" }}
    >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="text-xl leading-none"
          >
            ×
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {/* antenna */}
              <line x1="12" y1="2" x2="12" y2="5"/>
              <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none"/>
              {/* head */}
              <rect x="4" y="5" width="16" height="11" rx="3"/>
              {/* eyes */}
              <circle cx="9" cy="10" r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="15" cy="10" r="1.5" fill="currentColor" stroke="none"/>
              {/* mouth */}
              <path d="M9 13.5h6" strokeWidth="1.5"/>
              {/* ears */}
              <line x1="4" y1="9" x2="2" y2="9"/>
              <line x1="20" y1="9" x2="22" y2="9"/>
              {/* body stub */}
              <path d="M9 16v2h6v-2"/>
            </svg>
          </motion.span>
        )}
      </AnimatePresence>

      {!open && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ border: "2px solid var(--accent)" }}
          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </motion.button>
  );
}
