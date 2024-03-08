import React from "react";
import "../../index.css";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex  items-center justify-between max-w-[1050px] h-auto mt-8 border-2 border-customGrey rounded-lg mx-auto font-semibold md:flex-col lg:flex-col sm:border-none     ">
      <Link to="/">
        <div className="p-4 font-bold text-lg md:text-base">
          <h2>
            {" "}
            <span className="text-customGreen">&lt;S</span>ttranzerr{" "}
            <span className="text-customGreen">/&gt;</span>
          </h2>
        </div>
      </Link>
      <div className="flex items-center text-customPara md:mb-2 lg:mb-2 ">
        <ul className="flex items-center gap-8  sm:gap-3 sm:text-xs sm:font-extrabold">
          {" "}
          <li className="transition-colors duration-300 hover:text-customBlack hover:border-b-2 border-customGreen cursor-pointer">
            <Link to="/">
              <a href="" className="active:text-customBlack">
                Home
              </a>
            </Link>
          </li>
          <li className="transition-colors duration-300 hover:text-customBlack hover:border-b-2 border-customGreen cursor-pointer active:text-customBlack">
            <Link to="/about">About</Link>
          </li>
          <Link to="/skills">
            <li className="transition-colors duration-300 hover:text-customBlack hover:border-b-2 border-customGreen cursor-pointer">
              Skills
            </li>
          </Link>
          <Link to="/work">
            <li className="transition-colors duration-300 hover:text-customBlack hover:border-b-2 border-customGreen cursor-pointer">
              Work
            </li>
          </Link>
          <Link to="/achievements">
            <li className="transition-colors duration-300 hover:text-customBlack hover:border-b-2 border-customGreen cursor-pointer">
              Achievements
            </li>
          </Link>
          <Link to="/how">
            <li className="transition-colors duration-300 hover:text-customBlack hover:border-b-2 border-customGreen cursor-pointer">
              For Curious Minds!
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center justify-center pt-2">
        <Link to="/contact">
          <button className="text-white bg-customGreen hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-1.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all duration-300">
            Contact Me!
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
