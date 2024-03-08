import React from "react";
import Logo from "../Images/about3.jpg";
import AOS from "aos";

import "aos/dist/aos.css";

const About = () => {
  AOS.init({ duration: 1200 });
  return (
    <div className="grid  grid-cols-2 sm:grid-cols-1 sm:gap-4 max-w-[1050px] h-auto mt-12 mx-auto sm:p-2 sm:items-center">
      <div className="col-span-1 h-[400px] sm:h-auto   ">
        <img
          src={Logo}
          alt=""
          className=" h-[400px] sm:h-[300px] md:h-[300px] sm:ml-9 sm:shadow-2xl mix-blend-multiply"
          data-aos="fade-up"
        />
      </div>
      <div className="flex flex-col items-start gap-2 -translate-x-14 lg:translate-x-0 lg:p-2  sm:items-center md:p-2 sm:gap-2 sm:justify-center sm:translate-x-0 md:translate-x-0  ">
        <p className="border-2 text-black rounded-lg px-2">About me</p>

        <h1 className="text-customGreen font-extrabold text-3xl text-upper sm:text-xl  sm:text-center md:text-xl lg:text-2xl ">
          Code with a purpose: beautiful interfaces, seamless experiences.
        </h1>
        <p className="text-customPara tracking-wide  text-justify  sm:text-sm  md:text-sm lg:text-sm ">
          Hi There! I'm a final year B.Tech student at MNNIT Allahabad with a
          strong passion for problem-solving through data structures and
          algorithms. Proficient in competitive programming, I thrive on
          tackling complex challenges head-on. Alongside, my fascination with
          web development led me to craft various projects majorly focused on
          solving real world problems. Now, as I near graduation, I'm eager to
          channel my skills into real-world problem-solving scenarios. I'm
          enthusiastic about leveraging my expertise to make meaningful
          contributions in the field. Let's collaborate to turn ideas into
          impactful solutions!
        </p>
      </div>
    </div>
  );
};

export default About;
