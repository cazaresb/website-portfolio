import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Import the Home layout from the pages directory.  This file orchestrates
// the landing page layout (Hero, About + Projects grid, Contact).
import Home from "./pages/Home";
import SoftwareTestingAgent from "./components/SoftwareTestingAgent";
import MemorySystem from "./components/MemorySystem";
import ProjectsPage from "./pages/ProjectsPage";

// The root component sets up routing and persistent layout elements.
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/software-testing-agent"
            element={<SoftwareTestingAgent />}
          />
          <Route path="/memory-system" element={<MemorySystem />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

