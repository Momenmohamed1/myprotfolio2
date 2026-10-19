import React from "react";
import Reveal from "../Reveal/Reveal";

const TitleSection = ({ title }) => {
  return (
    <Reveal
      as="div"
      direction="up"
      className="flex justify-center md:p-10 lg:w-[26%] lg:justify-normal"
    >
      <p className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-4xl my-3 font-bold text-transparent">
        {title}
      </p>
    </Reveal>
  );
};

export default TitleSection;
