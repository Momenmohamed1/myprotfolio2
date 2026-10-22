"use client";

import React from "react";
import { JavaScriptIcon, NextjsIcon, ReactIcon } from "../Icons/Icons";
import { useI18n } from "../../_i18n/LanguageProvider";

// كل تاج معاه الأيقونة والاسم اللي هيظهروا في الكارت
const TAG_META = {
  next: { label: "Next.js", icon: <NextjsIcon width={20} height={20} /> },
  react: { label: "React", icon: <ReactIcon width={20} height={20} /> },
  js: { label: "JavaScript", icon: <JavaScriptIcon width={20} height={20} /> },
};

const formatDate = (value, lang) => {
  if (!value) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

// بيختار النص حسب اللغة، ولو النص مش مترجم بيرجع زي ما هو
const pick = (value, lang, fallback) => {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  return value[lang] ?? value.en ?? fallback;
};

const CardProject = ({ project = {} }) => {
  const { lang, t } = useI18n();
  const { date, tags = [], live, github, image } = project;
  const title = pick(project.title, lang, "Project title");
  const description = pick(project.description, lang, "");

  return (
    <article className="flex h-full flex-col rounded-[10px] border-2 border-gray-200 bg-white px-4 pt-6 pb-4 text-black transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-300/40 dark:border-[#0B4078] dark:bg-[#071321] dark:text-white dark:hover:shadow-[#0B4078]/40">
      {image && (
        <a
          href={live ?? image}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 block overflow-hidden rounded-lg border border-gray-200 dark:border-[#0B4078]"
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-40 w-full object-cover object-top transition duration-300 hover:scale-105"
          />
        </a>
      )}

      {formatDate(date, lang) && (
        <time className="block text-xs text-gray-500">{formatDate(date, lang)}</time>
      )}

      <h3 className="mt-0.5 text-lg font-medium">
        {live ? (
          <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      )}

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            const meta = TAG_META[tag] ?? { label: tag };
            return (
              <span
                key={tag}
                className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full bg-gray-200 px-2 py-1 text-xs dark:bg-[#0B1A2C] dark:text-white"
              >
                {meta.icon}
                <span className="font-bold">{meta.label}</span>
              </span>
            );
          })}
        </div>
      )}

      <div className="mt-auto flex gap-3 pt-4">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-teal-400 bg-teal-600 p-2 text-white transition duration-300 hover:bg-teal-700 active:bg-teal-800"
          >
            {t.projects.liveDemo}
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-teal-600 p-2 transition duration-300 hover:border-white hover:bg-teal-800 active:bg-teal-900"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
};

export default CardProject;
