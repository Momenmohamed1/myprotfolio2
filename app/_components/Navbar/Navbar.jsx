"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAVS = [
  { name: "Home", href: "/#Home", id: "Home" },
  { name: "About", href: "/#AboutMe", id: "AboutMe" },
  { name: "Skills", href: "/#Skills", id: "Skills" },
  { name: "Projects", href: "/#Project", id: "Project" },
  { name: "Contact", href: "/#ConectMe", id: "ConectMe" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // ظل/خلفية أقوى لما المستخدم يعمل سكرول
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // تحديد السكشن النشط أثناء السكرول (scroll spy)
  useEffect(() => {
    const sections = NAVS.map((nav) => document.getElementById(nav.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // اقفل القائمة تلقائياً لما الشاشة تكبر أو المستخدم يعمل سكرول
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const onBreakpoint = (event) => {
      if (event.matches) setOpen(false);
    };
    mq.addEventListener("change", onBreakpoint);
    return () => mq.removeEventListener("change", onBreakpoint);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <nav
        className={`w-full max-w-150 rounded-3xl border bg-white/70 p-3 backdrop-blur-md transition-all duration-500 dark:bg-[#071321]/70 ${
          scrolled
            ? "border-teal-500/40 shadow-xl shadow-teal-500/20 dark:border-[#0B4078] dark:shadow-[#0B4078]/30"
            : "border-white/20 shadow-lg shadow-teal-200/50 dark:shadow-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="/#Home"
            className="logo text-lg font-bold transition-colors duration-300 hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
          >
            Momen
          </a>

          {/* روابط الديسكتوب */}
          <ul className="hidden items-center justify-center gap-1 text-sm font-bold sm:flex">
            {NAVS.map((nav) => {
              const isActive = active === nav.id;
              return (
                <li key={nav.id}>
                  <a
                    href={nav.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-full px-3 py-2 transition-colors duration-300 hover:text-teal-600 dark:hover:text-teal-400  ${
                      isActive ? "text-teal-600 dark:text-teal-400" : "dark:text-white"
                    }`}
                  >
                    {nav.name}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-indigo-500 to-teal-400 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* أدوات اليمين */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-800 transition-colors duration-300 hover:bg-teal-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 sm:hidden dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-500 ${open ? "rotate-90" : "rotate-0"}`}
              >
                {open ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.46967 6.46967C6.76256 6.17678 7.23744 6.17678 7.53033 6.46967L12 10.9393L16.4697 6.46967C16.7626 6.17678 17.2374 6.17678 17.5303 6.46967C17.8232 6.76256 17.8232 7.23744 17.5303 7.53033L13.0607 12L17.5303 16.4697C17.8232 16.7626 17.8232 17.2374 17.5303 17.5303C17.2374 17.8232 16.7626 17.8232 16.4697 17.5303L12 13.0607L7.53033 17.5303C7.23744 17.8232 6.76256 17.8232 6.46967 17.5303C6.17678 17.2374 6.17678 16.7626 6.46967 16.4697L10.9393 12L6.46967 7.53033C6.17678 7.23744 6.17678 6.76256 6.46967 6.46967Z"
                    fill="currentColor"
                  />
                ) : (
                  <>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H20.25C20.6642 5.25 21 5.58579 21 6C21 6.41421 20.6642 6.75 20.25 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H20.25C20.6642 17.25 21 17.5858 21 18C21 18.4142 20.6642 18.75 20.25 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
                      fill="currentColor"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* قائمة الموبايل: بتنزل بسلاسة عن طريق max-height + stagger للعناصر */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out sm:hidden ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-1 pt-3 font-bold">
            {NAVS.map((nav, index) => {
              const isActive = active === nav.id;
              return (
                <li
                  key={nav.id}
                  style={{ transitionDelay: open ? `${index * 60}ms` : "0ms" }}
                  className={`transition-all duration-300 ease-out ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                  }`}
                >
                  <a
                    href={nav.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-teal-500/10 hover:text-teal-600 dark:text-white dark:hover:text-teal-400 ${
                      isActive ? "bg-teal-500/10 text-teal-600 dark:text-teal-400" : ""
                    }`}
                  >
                    {nav.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
