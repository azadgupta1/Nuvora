import React from "react";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;


const SearchAndFilterBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {

  const [receiver, setReceiver] = useState("");

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const senderId = user?.userId;

  useEffect(() => {
      const fetchReceiverData = async () =>{
        if(!senderId || !token) return;

        try{
          const res = await axios.get(
            `${backendUrl}/api/users/${senderId}`,
              { headers: { Authorization: `Bearer ${token}` } }
          );

          setReceiver(res.data);

        } catch (err){
          console.error("Failed to fetch Receiver Data: ", err);
        }
      }

      fetchReceiverData();
    },  [senderId, token]);


  return (
    <>
      {/* Desktop container */}
      <div className="hidden sm:block w-[65%] max-w-[700px] ml-2 mr-auto bg-white border border-gray-300 rounded-lg px-4 py-3">
        <div className="flex items-center gap-3 w-full">
          {/* User Image */}
          <img
            src={receiver.profilePicture}
            alt="User Avatar"
            className="w-10 h-10 aspect-square rounded-full object-cover"
          />

          {/* Search Input */}
          <div className="flex items-center w-full bg-white border border-gray-400 rounded-full px-3 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FiSearch size={18} className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
        
      </div>

      {/* Mobile: no container, no image */}
      <div className="sm:hidden flex items-center gap-2 px-2">
        {/* Search Input full width */}
        <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-full px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-500 transition">
          <FiSearch size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition text-sm"
        >
          <span>Filter</span>
          <PiSlidersHorizontalBold size={18} />
        </button>
      </div>
    </>
  );
};

export default SearchAndFilterBar;
