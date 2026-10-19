import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Momen Mohamed | Frontend Developer",
    template: "%s | Momen Mohamed",
  },
  description:
    "Momen Mohamed — Frontend Developer specialized in React.js, Next.js and Tailwind CSS. Building modern, responsive and user-friendly web experiences.",
  keywords: [
    "Momen Mohamed",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Momen Mohamed", url: "https://github.com/Momenmohamed1" }],
  creator: "Momen Mohamed",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Momen Mohamed | Frontend Developer",
    description:
      "Frontend Developer building modern, responsive and user-friendly web experiences with React.js, Next.js and Tailwind CSS.",
    siteName: "Momen Mohamed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momen Mohamed | Frontend Developer",
    description:
      "Frontend Developer building modern, responsive and user-friendly web experiences.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#071321" },
  ],
};

// سكربت صغير يمنع "فلاش" الثيم الخاطئ قبل أول paint
const themeInitScript = `
try {
  var stored = localStorage.getItem('theme');
  var isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth scroll-pt-[6.5rem] font-sans antialiased [-webkit-tap-highlight-color:transparent] [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-teal-500 [&::-webkit-scrollbar-track]:bg-transparent dark:[&::-webkit-scrollbar-thumb]:bg-[#0B4078]`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden selection:bg-teal-500/40 dark:bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
