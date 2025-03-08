import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SeekerDashboard from "./pages/SeekerDashboard";
import MentorDashboard from "./pages/MentorDashboard"; // Import Mentor Dashboard
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<SeekerDashboard />} />
        <Route path="/mentor/dashboard" element={<MentorDashboard />} /> {/* Add Mentor Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
