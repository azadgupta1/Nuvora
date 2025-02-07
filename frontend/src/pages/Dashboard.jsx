// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import Header from "../components/dashboard/Header";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <div>Welcome to the Dashboard</div>;
      case "bookings":
        return <div>Your Bookings</div>;
      case "bookmarks":
        return <div>Your Bookmarks</div>;
      case "reviews":
        return <div>Your Reviews</div>;
      default:
        return <div>Welcome to LearnMate</div>;
    }
  };

  return (
    <div className="flex">
      {/* Vertical Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Horizontal Header */}
        <Header />
        
        {/* Content Area */}
        <div className="p-6 flex-grow bg-gray-100">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
