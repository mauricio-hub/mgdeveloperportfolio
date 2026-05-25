"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

import { EASE, COPY } from "./constants";
import type { Message } from "./types";
import ProactiveBubble from "./ProactiveBubble";
import ChatHeader from "./ChatHeader";
import WelcomeScreen from "./WelcomeScreen";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";
import FABButton from "./FABButton";

export default function AgentChat() {
  const { lang } = useLang();
  const copy = COPY[lang];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const [proactiveDismissed, setProactiveDismissed] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show proactive bubble after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open && !proactiveDismissed) setShowProactive(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [open, proactiveDismissed]);

  // Focus input and hide proactive when opening
  useEffect(() => {
    if (open) {
      setShowProactive(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];

    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.text }]);
    } catch {
      setMessages([...next, { role: "assistant", content: copy.error }]);
    } finally {
      setLoading(false);
    }
  }

  function dismissProactive(e: React.MouseEvent) {
    e.stopPropagation();
    setShowProactive(false);
    setProactiveDismissed(true);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      <AnimatePresence>
        {showProactive && !open && (
          <ProactiveBubble
            text={copy.proactive}
            hint={copy.hint}
            onOpen={() => setOpen(true)}
            onDismiss={dismissProactive}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="w-[340px] sm:w-[380px] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ background: "var(--bg-primary)", border: "1px solid var(--border)", maxHeight: "520px" }}
          >
            <ChatHeader onClose={() => setOpen(false)} />

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
              {messages.length === 0 && (
                <WelcomeScreen
                  welcome={copy.welcome}
                  suggested={copy.suggested}
                  onSelect={sendMessage}
                />
              )}
              {messages.map((msg, i) => (
                <MessageBubble key={i} msg={msg} />
              ))}
              {loading && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            <ChatInput
              value={input}
              placeholder={copy.placeholder}
              sendLabel={copy.send}
              loading={loading}
              onChange={setInput}
              onSubmit={() => sendMessage(input)}
              inputRef={inputRef}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <FABButton open={open} onClick={() => setOpen((v) => !v)} />
    </div>
  );
}
