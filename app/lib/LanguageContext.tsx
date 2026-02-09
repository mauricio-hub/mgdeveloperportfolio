"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";
import { type Lang, type Translations, getTranslations } from "./i18n";

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: getTranslations("en"),
  toggleLang: () => {},
});

export function useLang() {
  return useContext(LanguageContext);
}

/* ── localStorage as external store ── */
let langListeners: Array<() => void> = [];

function subscribeLang(cb: () => void) {
  langListeners = [...langListeners, cb];
  return () => {
    langListeners = langListeners.filter((l) => l !== cb);
  };
}

function getLangSnapshot(): Lang {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "es") return saved;
  return "en";
}

function getLangServerSnapshot(): Lang {
  return "en";
}

function writeLang(next: Lang) {
  localStorage.setItem("lang", next);
  langListeners.forEach((l) => l());
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot
  );

  const toggleLang = useCallback(() => {
    writeLang(lang === "en" ? "es" : "en");
  }, [lang]);

  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

