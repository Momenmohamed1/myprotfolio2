import React from "react";
import Card from "../Card/Card";
import {
  HTML5Icon,
  CSSIcon,
  JavaScriptIcon,
  ReactIcon,
  NextjsIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "../Icons/Icons";
import TitleSection from "../TitleSection/TitleSection";
import InfintieSkillsMarquee from "./InfintieSkillsMarquee";
import Reveal from "../Reveal/Reveal";

const SkillsData = [
  { title: "HTML", disc: "Markup Language", img: <HTML5Icon /> },
  { title: "CSS", disc: "Styling Language", img: <CSSIcon /> },
  { title: "JavaScript", disc: "Programming Language", img: <JavaScriptIcon /> },
  { title: "React.js", disc: "Frontend Library", img: <ReactIcon /> },
  { title: "Next.js", disc: "React Framework", img: <NextjsIcon /> },
  { title: "Tailwind CSS", disc: "Utility-First CSS", img: <TailwindCSSIcon /> },
  { title: "TypeScript", disc: "Typed Superset of JavaScript", img: <TypeScriptIcon /> },
];

const Skills = () => {
  return (
    <section id="Skills" className="dark:bg-black dark:text-white">
      <TitleSection title="My Skills" />
      <div className="grid p-2 sm:grid-cols-2 sm:p-4 md:grid-cols-4 dark:bg-black dark:text-white">
        {SkillsData.map((data, index) => (
          <Reveal
            key={data.title}
            direction="up"
            delay={index * 80}
            duration={700}
            className="my-2 sm:m-3"
          >
            <div className="h-full rounded-2xl border-2 border-teal-600 p-5 font-bold shadow-md shadow-teal-300 transition-transform duration-300 hover:-translate-y-2 md:text-sm dark:border-[#123B60] dark:bg-[#071321] dark:shadow-[#123B60]">
              <Card title={data.title} disc={data.disc} img={data.img} />
            </div>
          </Reveal>
        ))}
      </div>
      <InfintieSkillsMarquee />
    </section>
  );
};

export default Skills;
