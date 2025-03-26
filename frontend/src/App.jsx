import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import SkillDPage from './pages/skillDPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        
        {/* Wrap protected routes with ProtectedRoute */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dash"
          element={
            <ProtectedRoute>
              <SkillDPage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>

  )
}

export default App


