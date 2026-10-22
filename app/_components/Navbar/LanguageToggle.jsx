"use client";

import { useI18n } from "../../_i18n/LanguageProvider";

/**
 * زر تبديل اللغة — زرار دائري زي زرار الثيم بالظبط:
 *   وانت إنجليزي بيظهر "ع"  (للتحويل للعربي)
 *   وانت عربي بيظهر "EN"    (للتحويل للإنجليزي)
 */
export default function LanguageToggle({ className = "" }) {
  const { lang, toggle, t } = useI18n();
  const isArabic = lang === "ar";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isArabic ? t.nav.switchToEnglish : t.nav.switchToArabic}
      title={isArabic ? t.nav.switchToEnglish : t.nav.switchToArabic}
      className={`relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-800 transition-colors duration-300 hover:bg-teal-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-white ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute font-arabic text-lg leading-none font-bold transition-all duration-500 ease-in-out ${
          isArabic ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      >
        ع
      </span>
      <span
        aria-hidden="true"
        className={`absolute text-sm leading-none font-bold transition-all duration-500 ease-in-out ${
          isArabic ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
      >
        EN
      </span>
    </button>
  );
}
