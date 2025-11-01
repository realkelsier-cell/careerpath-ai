import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Results from './pages/results';
import Resume from './pages/resume';
import Simulator from './pages/simulator';
import Skills from './pages/skills';
import Interview from './pages/interview';
import Relocation from './pages/relocation';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/relocation" element={<Relocation />} />
      </Routes>
    </BrowserRouter>
  );
}
