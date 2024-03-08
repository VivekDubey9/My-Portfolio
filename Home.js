import React from "react";
import Header from "./src/Layout/Header";
import Footer from "./src/Layout/Footer";
import Main from "./src/Components/Main";
import About from "./src/Components/About";
import Skills from "./src/Components/Skills";
import Work from "./src/Components/Work";
import Achievement from "./src/Components/Achievement";
import Query from "./src/Components/Query";

const Home = () => {
  return (
    <div className="md:p-4 lg:p-4 sm:p-4">
      
      <Main />
      <About />
      <Skills />
      <Work />
      <Achievement />
      
  
    </div>
  );
};

export default Home;
