// src/components/layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 bg-gray-700 rounded-full text-white"
        />
      </div>
      <div className="flex space-x-6">
        <Link to="/messages" className="hover:text-gray-400">
          Messages
        </Link>
        <Link to="/profile" className="hover:text-gray-400">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Header;
