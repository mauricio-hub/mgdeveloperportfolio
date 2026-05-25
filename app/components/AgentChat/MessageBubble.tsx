"use client";

import { motion } from "framer-motion";
import { EASE } from "./constants";
import type { Message } from "./types";

export default function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className="max-w-[85%] text-xs px-3 py-2 leading-relaxed"
        style={
          isUser
            ? { background: "var(--accent)", color: "var(--bg-primary)", borderRadius: "12px 12px 4px 12px" }
            : { background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border)", borderRadius: "12px 12px 12px 4px" }
        }
      >
        {msg.content}
      </div>
    </motion.div>
  );
}
