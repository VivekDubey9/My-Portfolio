import React from "react";

import logo1 from "../Images/project1b.png";
import logo2 from "../Images/project2a.png";
import logo3 from "../Images/project3.png";
import logo4 from "../Images/project4b.png";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import AOS from "aos";

import "aos/dist/aos.css";

import projectsData from "../../Utils/projectsData";

const imgurl = [logo1, logo2, logo3, logo4];
const Card = () => {
  AOS.init();
  return (
    <>
      {projectsData.map((project, index) => {
        {
          console.log(imgurl[index]);
        }
        return (
          <>
            <div
              key={index}
              className="    border-l-2 border-t-2 shadow-lg bg-gradient-to-r  rounded-lg w-[300] flex flex-col gap-2 transition-all duration-300 hover:scale-110  border-customGreen "
              data-aos="fade-up"
            >
              <div className="h-[150px]  transition-all hover:shadow-2xl ">
                <img
                  className="max-h-full w-full rounded-t-lg "
                  src={imgurl[index]}
                ></img>
              </div>
              <div className="p-2 ">
                <div>
                  <h1 className="text-customBlack font-bold text-lg text-upper">
                    {project.name}
                  </h1>
                  <p className="text-customPara font-semibold line-clamp-4 text-sm pt-1 ">
                    {project.description}
                  </p>
                </div>
                <div>
                  {/* <h3>Tech used:</h3> */}
                  <p className="text-customGreen pt-2  ">
                    {project.techs.join(", ")}
                  </p>
                </div>
                <div className="flex justify-between pt-3 ">
                  <button className="flex gap-1 ">
                    <FaGithub />
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      className="underline"
                    >
                      Source Code
                    </a>
                  </button>
                  <button className="flex gap-1">
                    <FaLink />
                    <a
                      className="underline"
                      href={project.livedemo}
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
