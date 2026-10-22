"use client";
import React, { useEffect, useState } from "react";
import { useI18n } from "../../_i18n/LanguageProvider";

const PageUP = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label={t.pageUp}
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed end-5 bottom-5 z-40 cursor-pointer rounded-full border-2 border-teal-600 bg-white/80 p-2 text-gray-800 shadow-lg backdrop-blur transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-teal-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-[#0B4078] dark:bg-[#071321]/80 dark:text-white dark:hover:bg-teal-600 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303C18.2374 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066L12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default PageUP;
