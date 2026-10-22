"use client";

import { useI18n } from "../../_i18n/LanguageProvider";

const OPTIONS = [
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "ع", name: "العربية" },
];

/**
 * زر تبديل اللغة (EN / ع) — بيشتغل جنب زر الثيم في الناف بار.
 * الاختيار محفوظ في localStorage، والاتجاه (RTL/LTR) بيتغيّر تلقائيًا.
 */
export default function LanguageToggle({ className = "" }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      title={t.nav.langLabel}
      className={`flex items-center gap-0.5 rounded-full border border-gray-200/90 bg-gray-100/80 p-0.5 dark:border-white/10 dark:bg-white/10 ${className}`}
    >
      {OPTIONS.map((option) => {
        const isActive = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={isActive}
            aria-label={option.name}
            lang={option.code}
            className={`cursor-pointer rounded-full px-2 py-1 text-xs leading-none font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
              isActive
                ? "bg-white text-teal-600 shadow-sm dark:bg-[#0B4078] dark:text-teal-300"
                : "text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
