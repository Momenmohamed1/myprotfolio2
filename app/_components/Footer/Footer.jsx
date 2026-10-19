import Reveal from "../Reveal/Reveal";

const navLinks = [
  { label: "Home", href: "/#Home" },
  { label: "About", href: "/#AboutMe" },
  { label: "Skills", href: "/#Skills" },
  { label: "Projects", href: "/#Project" },
  { label: "Contact", href: "/#ConectMe" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Momenmohamed1",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/momen-mohamed-fadel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:momenalberann6@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="px-4 pt-16 pb-6 dark:bg-black">
      <Reveal
        direction="up"
        className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-[0_0_40px_-10px_rgba(0,212,200,0.35)] backdrop-blur dark:border-white/10 dark:bg-gray-900/80"
      >
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="bg-linear-to-r from-indigo-500 via-blue-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent">
              Momen Mohamed
            </h3>
            <p className="mt-3 max-w-xs text-sm text-gray-600 dark:text-gray-400">
              Frontend Developer building modern, responsive, and user-friendly web experiences.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Quick links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 transition hover:text-blue-500 dark:text-gray-400 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Let's connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:text-white dark:border-white/10 dark:text-gray-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Momen Mohamed. Built with Next.js and Tailwind CSS.
        </p>
      </Reveal>
    </footer>
  );
}
