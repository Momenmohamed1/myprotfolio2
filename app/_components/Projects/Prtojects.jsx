import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import CardProject from "./CardProject";
import Reveal from "../Reveal/Reveal";

/**
 * ضيف مشاريعك هنا — كل مشروع بنفس الشكل ده:
 *
 * {
 *   title: "اسم المشروع",
 *   date: "2025-03-01",            // اختياري
 *   description: "وصف قصير",        // اختياري
 *   tags: ["next", "react", "js"],  // المتاح حالياً: next | react | js
 *   live: "https://demo.com",       // اختياري
 *   github: "https://github.com/..", // اختياري
 * }
 *
 * بمجرد ما تضيف عناصر هنا الكروت هتظهر تلقائياً،
 * ولو لسه فاضية هيظهر مكان "coming soon".
 */
const projects = [];

const Prtojects = () => {
  return (
    <section id="Project" className="dark:bg-black">
      <TitleSection title="My Projects" />

      {projects.length > 0 ? (
        <div className="grid gap-3 p-2 sm:grid-cols-2 md:grid-cols-3 md:p-5 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.title} direction="up" delay={(index % 4) * 90}>
              <CardProject project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal direction="up" className="mx-auto max-w-2xl px-6 pb-16">
          <div className="rounded-2xl border-2 border-dashed border-teal-500/50 p-10 text-center dark:border-[#123B60] dark:bg-[#071321]">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              🚧 Projects coming soon
            </p>
            <p className="mt-2 text-sm text-gray-500">
              I'm currently building new projects — they'll be featured here very soon.
            </p>
          </div>
        </Reveal>
      )}
    </section>
  );
};

export default Prtojects;
