import React from "react";
import Card from "./Card";

import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  AOS.init({ duration: 1200 });
  return (
    <div className="flex flex-col gap-10 mx-auto mt-14 max-w-[1050px]">
      <div className="flex mt-24 flex-col items-center gap-4">
        <p className="border-2 text-black rounded-lg px-2">Work</p>
        <h1 className="text-customGreen font-extrabold text-3xl text-upper sm:text-xl md:text-2xl ">
          Projects Completed ,My journey so far!
        </h1>
      </div>
      <div
        className="grid grid-cols-3 gap-10 items-stretch mx-auto max-w-[1050px] sm:grid-cols-1 md:grid-cols-2 my:grid-cols-2  "
        
      >
        <Card></Card>
      </div>
    </div>
  );
};

export default Work;
