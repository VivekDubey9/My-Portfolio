import React from "react";

const How = () => {
  return (
    <div className="max-w-[1050px] mx-auto mt-18">
      <div className="flex flex-col gap-4 mt-14 sm:text-sm sm:p-4">
        <p className="text-customPara">
          {" "}
          Dev Secrets which no one will tell you xD 😁
        </p>
        <h1 className="text-customGreen font-extrabold text-3xl text-upper">
          Behind the Scenes:Building this website{" "}
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-customPara  ">
            1.Taking desing/layout inspiration from plateforms like
            Dribble,Behance,Awwards I take this design inspiration from behance
            by Rayan Ramazan
          </p>
          <p className="text-customPara ">
            {" "}
            2.Knowing the correct color combination for your website it is good
            practice to not use much colors to your website.Various color
            palatte generator plateforms like color hunt.io ,paletton are there.
          </p>
          <p className="text-customPara ">
            3.Typography: Use at max.2 fonts to your website I used urbanist and
            poppins available on google fonts
          </p>
          <p className="text-customPara ">
            4.Used Css concepts like grid ,flex,animation,transition.Various
            tools used to give different look to the website are box-shadow from
            get css scans.com, for beautiful background used uigradient &
            mycolorspace.com
          </p>
          <p className="text-customPara ">
            5.Used Only React to create this website and apply styling to
            components using Tailwind.
          </p>
          <p className="text-customPara ">
            6.Also used react-router-dom library to create routing to this
            website.
          </p>
          <p className="text-customPara ">
            7.Used react-icons library for various icons also used devicons
            website for programming related colorful icons
          </p>
          <p className="text-customPara ">
            7.Used email js library to enable mailing.
          </p>
          <p className="text-customPara ">
            7.Used AOS plugin for adding animation to website.
          </p>

          <p className="text-customPara mt-4 ">
            Bonus: Extensions which will definitely ease your dev journey:
            pesticide for chrome to distinguish between various divs, html tree
            generator,design ruler(awesome tool),mobile simulator(for responsive
            deisgns,react-dev-tools)
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
