import React, { useEffect } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import logo from "../Images/logo4.jpg";

import "./main.css";

import AOS from "aos";

import "aos/dist/aos.css";

const Main = () => {
  
    AOS.init({ duration: 1200 });
  
  return (
    <div
      id="home"
      className=" relative max-w-[1050px] mx-auto h-auto mt-8 grid grid-cols-2 sm:grid-cols-1 place-items-stretch gap-10"
    >
      <div
        className="flex flex-col justify-center gap-2 sm:order-last sm:p-4 sm:items-center sm:mb-2 "
        data-aos="fade-up"
        data-aos-once="false"
      >
        <p className="text-customBlack font-semibold tracking-wider text-2xl sm:text-xl">
          Hi, I'm
        </p>
        <h1 className="text-customBlack font-extrabold text-5xl text-upper sm:text-3xl ">
          Vivek Dubey,
        </h1>
        <p className="text-customPara tracking-wide text-left sm:text-center">
          I am a passionate{" "}
          <span className="text-customGreen">
            &lt;frontend web developer /&gt;
          </span>
          with a knack for problem-solving and building user-friendly websites.
        </p>
        <button className="text-white flex gap-2 mt-6 w-[30%] bg-customGreen hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-1.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all duration-300 lg:mb-1 sm:p-2">
          <a
            className="px-2 "
            href="https://drive.google.com/file/d/1WtcRWOXvVOW63vGdnmk0qoUNtyb9Kwg_/view?usp=sharing"
            download=""
            target="_blank"
          >
            Download CV{" "}
          </a>
          <LiaDownloadSolid size={18} />
        </button>
      </div>
      <div className="">
        <img
          className=" w-[100%] mix-blend-multiply scale-[1] translate-[-20px] h-[450px] lg:w-[80%] lg:h-[300px] sm:w-[60%] sm:h-[200px] sm:ml-16 "
          data-aos="fade-up"
          data-aos-once="false"
          src={logo}
          alt="3d image here"
        />
      </div>
      <div className="custom-shape-divider-bottom-1708772230 sm:h-3 lg:h-3">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Main;
