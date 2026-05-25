"use client";

interface Props {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: Props) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {/* antenna */}
              <line x1="12" y1="2" x2="12" y2="5"/>
              <circle cx="12" cy="2" r="1" fill="var(--accent)" stroke="none"/>
              {/* head */}
              <rect x="4" y="5" width="16" height="11" rx="3"/>
              {/* eyes */}
              <circle cx="9" cy="10" r="1.5" fill="var(--accent)" stroke="none"/>
              <circle cx="15" cy="10" r="1.5" fill="var(--accent)" stroke="none"/>
              {/* mouth */}
              <path d="M9 13.5h6" strokeWidth="1.5"/>
              {/* ears / arms */}
              <line x1="4" y1="9" x2="2" y2="9"/>
              <line x1="20" y1="9" x2="22" y2="9"/>
              {/* body stub */}
              <path d="M9 16v2h6v-2"/>
            </svg>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[var(--bg-card)]" />
        </div>
        <div>
          <p className="text-xs font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
            Mauricio&apos;s AI Agent
          </p>
          <p className="text-[10px] mt-0.5" style={{ color: "var(--text-secondary)" }}>
            Active · Ready to help
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        aria-label="Close chat"
        className="w-7 h-7 rounded-full flex items-center justify-center text-sm hover:opacity-70"
        style={{ color: "var(--text-secondary)" }}
      >
        ×
      </button>
    </div>
  );
}
