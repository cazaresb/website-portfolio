import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SoftwareTestingAgent from './components/SoftwareTestingAgent';
import MemorySystem from './components/MemorySystem';
import ProjectsPage from './pages/ProjectsPage';

// The root component sets up routing and persistent layout elements.
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software-testing-agent" element={<SoftwareTestingAgent />} />
        <Route path="/memory-system" element={<MemorySystem />} />
        {/* Dedicated listing page for projects */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;