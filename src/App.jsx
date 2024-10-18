import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Portfolio from "./pages/Portfolio.jsx";
import Experience from "./pages/Experience.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Contactme from "./pages/Contactme.jsx";
import Hero from "./layout/Hero.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/contact" element={<Contactme />} />
      </Routes>
    </Router>
  );
};

export default App;
