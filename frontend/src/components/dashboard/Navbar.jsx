// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center p-4">
        <h2 className="text-2xl font-semibold">LearnMate</h2>
      </div>
      <div className="flex-grow flex flex-col">
        <Link
          to="/dashboard"
          onClick={() => setActiveNav("dashboard")}
          className={`px-6 py-3 hover:bg-gray-700 ${
            activeNav === "dashboard" ? "bg-gray-700" : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/bookings"
          onClick={() => setActiveNav("bookings")}
          className={`px-6 py-3 hover:bg-gray-700 ${
            activeNav === "bookings" ? "bg-gray-700" : ""
          }`}
        >
          Bookings
        </Link>
        <Link
          to="/bookmarks"
          onClick={() => setActiveNav("bookmarks")}
          className={`px-6 py-3 hover:bg-gray-700 ${
            activeNav === "bookmarks" ? "bg-gray-700" : ""
          }`}
        >
          Bookmarks
        </Link>
        <Link
          to="/reviews"
          onClick={() => setActiveNav("reviews")}
          className={`px-6 py-3 hover:bg-gray-700 ${
            activeNav === "reviews" ? "bg-gray-700" : ""
          }`}
        >
          Reviews
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
