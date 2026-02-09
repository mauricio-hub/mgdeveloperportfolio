"use client";

import { createContext, useContext, useEffect, useState } from "react";
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

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && (saved === "en" || saved === "es")) {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

