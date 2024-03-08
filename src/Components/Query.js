import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "aos/dist/aos.css";

const Query = () => {
  AOS.init();
  return (
    <div
      className="max-w-[750px] shadow-md bg-gradient-to-r transition-all duration-300 hover:scale-110 from-customGrad1 to-customGrad2 translate-y-20 mx-auto border-2 mt-32 min-h-[150px] border-white rounded-lg md:p-2 "
      
    >
      <div className="flex  h-[150]  gap-2 p-2 justify-around items-center md:flex-col">
        <h1 className="text-white text-2xl md:text-xl sm:text-xl">
          Let's Collaborate!
        </h1>
        <p className="text-sm md:text-xs">
          have a project in mind lets talk about this
        </p>
        <Link to="/contact">
          <button
            class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Contact me!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Query;
