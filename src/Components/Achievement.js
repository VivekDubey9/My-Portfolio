import React from "react";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import logo from "../Images/coding1.png";
import logo2 from "../Images/coding2.png";
import logo3 from "../Images/coding3.png";
import AOS from "aos";

import "aos/dist/aos.css";


const Achievement = () => {
  AOS.init();
  return (
    <>
      <div class="max-w-[1050px] mx-auto flex flex-col items-center gap-10 mt-28">
        <div class="flex flex-col gap-4 items-center">
          <p className="border-2 text-black rounded-lg px-2">Achievements</p>
          <h1 className="text-2xl font-bold text-customGreen md:text-xl sm:text-xl sm:text-center ">
            Competitve programming and open-source highlights{" "}
          </h1>
        </div>
      </div>

      <div data-aos="fade-up" className=" max-w-[1050px] mx-auto mt-12 flex   sm:flex-col sm:items-center sm:justify-center justify-between">
        <div class="  w-[30%] h-auto border-t-4 sm:mb-8 sm:w-[50%] border-customGreen  ">
          <div className="flex relative flex-col gap-4 transition-all hover:scale-110 duration-300 mt-4 border-2 border-white rounded-lg">
            <div>
              <img className="" src={logo} alt="codeforces logo here" />
              <div className="w-full h-1 left-0 top-0 border-2 border-white absolute"></div>
              <div class="flex px-2 gap-2 mt-2">
                {" "}
                <h1 class="text-black font-bold">
                  <a
                    class="cursor-pointer"
                    href="https://codeforces.com/profile/sttranzerr"
                    target="_blank"
                  >
                    Codeforces
                  </a>
                </h1>
                <div class="m-1">
                  <LuExternalLink />
                </div>
              </div>
            </div>
            <p className="text-customGreen px-2 ">
              Specialist ,Contest rating: 1493
            </p>
            <p className="px-2 pb-2">Solved 300+ problems</p>
          </div>
        </div>
        <div class="  w-[30%] h-auto border-t-4 sm:mb-8 sm:w-[50%] border-customGreen ">
          <div className="flex flex-col gap-4 mt-4 transition-all hover:scale-110 duration-300 border-2 border-white rounded-lg">
            <div>
              <img
                class="rounded-t-sm"
                src={logo2}
                alt="codeforces logo here"
              />
              <div class="flex px-2 gap-2 mt-2">
                {" "}
                <h1 class="text-black font-bold">
                  <a
                    class="cursor-pointer"
                    href="https://leetcode.com/vivek_dubey9/"
                    target="_blank"
                  >
                    Leetcode
                  </a>
                </h1>
                <div class="m-1">
                  <LuExternalLink />
                </div>
              </div>
            </div>
            <p className="text-customGreen px-2">Contest rating: 1758</p>
            <p class="px-2 pb-2">Solved 550+ problems</p>
          </div>
        </div>
        <div class="  w-[30%] h-auto border-t-4 sm:mb-8 sm:w-[50%] border-customGreen ">
          <div className="flex flex-col gap-4 mt-4 transition-all hover:scale-110 duration-300 border-2 border-white rounded-lg">
            <div>
              <img
                src={logo3}
                className="h-[67px] w-full"
                alt="github logo here"
              />
              <div class="flex gap-2 px-2 mt-2">
                {" "}
                <h1 class="text-black font-bold">
                  <a
                    class="cursor-pointer"
                    href="https://codeforces.com/profile/sttranzerr"
                    target="_blank"
                  >
                    Github
                  </a>
                </h1>
                <div class="m-1">
                  <LuExternalLink />
                </div>
              </div>
            </div>
            <p className="text-customGreen px-2">Hacktoberfest winner</p>
            <p class="pb-2 px-2">Overall 250+ contributions </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
