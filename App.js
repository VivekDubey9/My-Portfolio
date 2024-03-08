import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./src/Layout/Header";
import Footer from "./src/Layout/Footer";
import Main from "./src/Components/Main";
import About from "./src/Components/About";
import Skills from "./src/Components/Skills";
import Work from "./src/Components/Work";
import Achievement from "./src/Components/Achievement";
import Query from "./src/Components/Query";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import How from "./src/Components/How";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how" element={<How />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Query />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
