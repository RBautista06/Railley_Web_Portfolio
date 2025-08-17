import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Homepage from "./Pages/Homepage.tsx";
import Projects from "./Pages/ProjectsPage.tsx";
import Editing from "./Pages/EditingPage.tsx";
import About from "./Pages/AboutPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/programming" element={<Projects />} />
        <Route path="/editing" element={<Editing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
