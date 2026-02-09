"use client";

import { useLang } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="font-mono text-xs text-text-secondary">
          © {year} Mauricio González. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

