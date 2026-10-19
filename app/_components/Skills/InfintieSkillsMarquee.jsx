import {
  HTML5Icon,
  CSSIcon,
  JavaScriptIcon,
  ReactIcon,
  NextjsIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "../Icons/Icons";
import Reveal from "../Reveal/Reveal";

export default function SkillsMarquee() {
  const skills = [
    { name: "HTML", icon: <HTML5Icon width={60} height={60} /> },
    { name: "CSS", icon: <CSSIcon width={60} height={60} /> },
    { name: "JS", icon: <JavaScriptIcon width={60} height={60} /> },
    { name: "React", icon: <ReactIcon width={60} height={60} /> },
    { name: "Next", icon: <NextjsIcon width={60} height={60} /> },
    { name: "Tailwind", icon: <TailwindCSSIcon width={60} height={60} /> },
    { name: "Type", icon: <TypeScriptIcon width={60} height={60} /> },
  ];

  return (
    <Reveal as="section" direction="up" className="overflow-hidden py-8">
      <div className="group flex overflow-hidden">
        {[0, 1].map((item) => (
          <div
            key={item}
            className="flex shrink-0 animate-marquee items-center gap-8 pr-8 motion-reduce:animate-none group-hover:[animation-play-state:paused]"
            aria-hidden={item === 1}
          >
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="mb-4 flex min-h-19 min-w-19 items-center justify-center rounded-2xl border border-teal-600 p-1 text-lg font-semibold shadow-xl transition hover:shadow-2xl hover:shadow-teal-900 dark:border-[#123B60] dark:text-white hover:dark:shadow-[#123B60]"
              >
                {skill.icon}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
