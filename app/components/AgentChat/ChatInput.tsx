"use client";

interface Props {
  value: string;
  placeholder: string;
  sendLabel: string;
  loading: boolean;
  onChange: (v: string) => void;
  onSubmit: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export default function ChatInput({ value, placeholder, sendLabel, loading, onChange, onSubmit, inputRef }: Props) {
  return (
    <div className="px-4 py-3 border-t" style={{ borderColor: "var(--border)" }}>
      <form
        onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
        className="flex gap-2"
      >
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={loading}
          className="flex-1 text-xs px-3 py-2 rounded-lg outline-none transition-all"
          style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
        />
        <button
          type="submit"
          disabled={loading || !value.trim()}
          className="px-3 py-2 rounded-lg text-xs font-medium transition-all disabled:opacity-40"
          style={{ background: "var(--accent)", color: "var(--bg-primary)" }}
        >
          {sendLabel}
        </button>
      </form>


    </div>
  );
}
