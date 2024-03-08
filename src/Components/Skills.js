import React from "react";
import logo from "../Images/skill1.jpg";
import AOS from "aos";

import "aos/dist/aos.css";

const Skills = () => {
  AOS.init({ duration: 1200 });
  return (
    <section id="about" className="mx-auto mt-28 max-w-[1050px]">
      <style>
        {`
          p {
            
            color: #919d9c;
            
          }
        `}
      </style>
      <div className="flex flex-col items-center gap-4 ">
        <p className="border-2 text-black rounded-lg px-2 ">Skills</p>
        <h1 className="text-customGreen font-extrabold text-3xl text-upper sm:text-xl md:text-2xl lg:text-2xl ">
          Tools and Technologies
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 mt-12 gap-20 md:gap-10">
        <div
          className="grid grid-cols-5  gap-12 sm:text-xs m-8 md:text-sm md:grid-cols-4 sm:grid-cols-3 md:gap-x-14 "
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 hover:scale-110   items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
            />
            <p>HTML</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
            />
            <p>CSS</p>
          </div>

          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            <p>Javascript</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <p>React</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            />
            <p>Express</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
            />
            <p>MongoDB</p>
          </div>

          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />
            <p>Git</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
            />
            <p>Github</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            />
            <p>Postman</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            />
            <p>VsCode</p>
          </div>

          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            />
            <p>C++</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
            />
            <p>Python</p>
          </div>
          <div className="flex flex-col hover:scale-110  gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"
            />
            <p>Pandas</p>
          </div>
        </div>
        <div className="sm:hidden md:w-[90%] md:h-auto md:mt-4">
          <img
            className="mix-blend-multiply"
            src={logo}
            alt="Some description"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
