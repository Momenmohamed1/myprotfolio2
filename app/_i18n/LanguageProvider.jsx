"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANG, dictionaries } from "./dictionary";

const LanguageContext = createContext(null);

export const STORAGE_KEY = "lang";

function applyLanguage(lang) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
}

export default function LanguageProvider({ children }) {
  // الافتراضي إنجليزي دايمًا (نفس الـ SSR) لتجنّب اختلاف الهيدريشن
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* التخزين مش متاح */
    }
    const initial = stored === "ar" || stored === "en" ? stored : DEFAULT_LANG;
    setLangState(initial);
    applyLanguage(initial);
  }, []);

  const setLang = useCallback((next) => {
    const value = next === "ar" ? "ar" : "en";
    setLangState(value);
    applyLanguage(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* تجاهل */
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  const value = useMemo(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      isArabic: lang === "ar",
      setLang,
      toggle,
      t: dictionaries[lang] ?? dictionaries[DEFAULT_LANG],
    }),
    [lang, setLang, toggle]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used inside <LanguageProvider>");
  }
  return context;
}
