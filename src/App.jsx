import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Work from "./components/pages/Work";
import Article from "./components/pages/Article";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}
