"use client";

import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import CardProject from "./CardProject";
import Reveal from "../Reveal/Reveal";
import { useI18n } from "../../_i18n/LanguageProvider";

/**
 * ضيف مشاريعك هنا — كل مشروع بنفس الشكل ده:
 *
 * {
 *   title: { en: "Project name", ar: "اسم المشروع" },
 *   date: "2025-03-01",                       // اختياري
 *   description: { en: "...", ar: "..." },    // اختياري
 *   tags: ["next", "react", "js"],            // المتاح حالياً: next | react | js
 *   live: "https://demo.com",                 // اختياري
 *   github: "https://github.com/..",          // اختياري
 *   image: "/projects/cover.png",             // اختياري
 * }
 *
 * بمجرد ما تضيف عناصر هنا الكروت هتظهر تلقائياً،
 * ولو لسه فاضية هيظهر مكان "coming soon".
 */
const projects = [
  {
    title: { en: "E-Commerce Store", ar: "متجر إلكتروني" },
    date: "2026-10-21",
    description: {
      en: "Full-stack store with Next.js 16 and Clerk authentication, backed by a Strapi 5 headless CMS. Includes product browsing, cart, and user profile.",
      ar: "متجر إلكتروني كامل بـ Next.js 16 مع تسجيل دخول عبر Clerk، ومبني على Strapi 5 كـ Headless CMS. بيشمل تصفّح المنتجات، السلة، وملف المستخدم.",
    },
    tags: ["next", "react", "js"],
    live: "https://ecomerce-blush-eight.vercel.app",
    image: "/projects/ecommerce.png",
  },
];

const Prtojects = () => {
  const { t } = useI18n();

  return (
    <section id="Project" className="dark:bg-black">
      <TitleSection title={t.projects.title} />

      {projects.length > 0 ? (
        <div className="grid gap-3 p-2 sm:grid-cols-2 md:grid-cols-3 md:p-5 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.title.en} direction="up" delay={(index % 4) * 90}>
              <CardProject project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal direction="up" className="mx-auto max-w-2xl px-6 pb-16">
          <div className="rounded-2xl border-2 border-dashed border-teal-500/50 p-10 text-center dark:border-[#123B60] dark:bg-[#071321]">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {t.projects.emptyTitle}
            </p>
            <p className="mt-2 text-sm text-gray-500">{t.projects.emptyText}</p>
          </div>
        </Reveal>
      )}
    </section>
  );
};

export default Prtojects;
