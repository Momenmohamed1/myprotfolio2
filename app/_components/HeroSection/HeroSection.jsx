"use client";

import Image from "next/image";
import React from "react";
import Buttons from "../Buttons/Buttons";
import Reveal from "../Reveal/Reveal";
import { useI18n } from "../../_i18n/LanguageProvider";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="Home"
      className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white px-5 pt-32 pb-10 text-black md:flex-row md:px-10 sm:px-8 dark:bg-black dark:text-white"
    >
      <Reveal direction="left" className="sideBar md:w-200">
        <p className="text-2xl font-bold text-black/85 md:text-5xl dark:text-white">
          {t.hero.hello}
          <span className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            {" "}
            {t.hero.name}{" "}
          </span>
          {t.hero.role}{" "}
          <span className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            React.js
          </span>
        </p>
        <br />
        <div className="text-md font-bold text-gray-500">{t.hero.bio}</div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Buttons title={t.hero.contact} href="/#ConectMe" />
          <a
            href="/#Project"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-all duration-300 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {t.hero.projects}
          </a>
        </div>
      </Reveal>

      <Reveal direction="scale" delay={150} className="mt-6 flex items-center justify-center">
        <div className="relative">
          <Image
            className="flex animate-float items-center object-contain drop-shadow-2xl motion-reduce:animate-none"
            src="/2.png"
            width={790}
            height={800}
            priority
            alt={t.hero.imageAlt}
          />
        </div>
      </Reveal>
    </section>
  );
};

export default HeroSection;
