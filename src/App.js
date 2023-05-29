import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CareerPage from './pages/CareerPage'
import EducationalPage from './pages/EducationalPage'
import HobbyPage from './pages/HobbyPage'
import FamilyPage from './pages/FamilyPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/educational" element={<EducationalPage />} />
        <Route path="/hobby" element={<HobbyPage />} />
        <Route path="/family" element={<FamilyPage />} />
      </Routes>
    </Router>
  );
}
