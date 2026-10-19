import Image from "next/image";
import React from "react";

import AboutSide from "./AboutSide";
import TitleSection from "../TitleSection/TitleSection";
import Reveal from "../Reveal/Reveal";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="min-h-screen dark:bg-black dark:text-white">
      <TitleSection title="About Me" />
      <div className="justify-around lg:flex">
        <Reveal direction="left" className="flex items-center">
          <Image src="/3.png" width={1000} height={1000} alt="About Momen Mohamed" />
        </Reveal>

        <Reveal direction="up" delay={120} className="p-3 text-[15px]/7 font-semibold text-gray-500">
          <p>
            Hi, I'm <span className="text-teal-600">Momen</span>
            <br />
            I'm a passionate web developer and a <span className="text-teal-600">Mechatronics</span>{" "}
            student at{" "}
            <span className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              New Cairo Technological University.
            </span>
            My passion for programming motivates me to continuously learn, explore new technologies,
            and build modern web applications.
            <br />
            I've learned{" "}
            <span className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              Frontend Development
            </span>{" "}
            and worked with technologies like HTML, CSS, JavaScript, React.js, Next.js, and Tailwind
            CSS. Currently, I'm learning <span className="text-teal-600">Backend Development</span>{" "}
            to expand my skills and work toward becoming a{" "}
            <span className="text-teal-600">Full-Stack Developer.</span>
            <br />
            I enjoy turning ideas into interactive web experiences, solving problems, and improving
            my skills through hands-on projects.
            <br />
            My goal is to become a skilled{" "}
            <span className="text-teal-600">Full-Stack Developer</span> and build useful,
            high-quality web applications.
          </p>
          <div className="mt-3 flex items-center">
            <button className="mr-5 flex cursor-pointer gap-2 rounded-xl bg-linear-to-r from-blue-500 to-teal-400 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:opacity-95">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                    fill="currentColor"
                  />
                  <path
                    d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Download CV
            </button>
            <div className="flex cursor-pointer items-center gap-2 text-teal-600">
              <a href="/#ConectMe" className="cursor-pointer underline">
                Let's Connect
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal
          direction="right"
          delay={200}
          className="m-2 min-w-90 rounded-2xl border-2 border-teal-500 dark:border-[#123B60] dark:bg-[#071321]"
        >
          <AboutSide />
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
