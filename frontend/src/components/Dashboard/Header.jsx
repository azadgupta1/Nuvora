import React, { useState } from 'react';
import { FaSearch, FaUserCircle, FaBell, FaEnvelope } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi'; // 'fi' for Feather Icons
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';





export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();



  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Left: Company Name */}
        <div className="text-2xl font-bold">
          <span className="text-blue-500">Nuvora</span>
        </div>

        {/* Center: Search Bar */}
        <div className="flex flex-1 justify-center mx-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 border border-gray-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right: Profile, Messages, Notifications */}
        <div className="flex items-center space-x-6">
          {/* Message Icon */}
          <button className="relative text-xl"
            onClick={() => navigate("/dashboard/chatlayout")}
            >
            <FaEnvelope />
            Message
            {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">3</span> */}
          </button>

          {/* Notification Icon */}
          <button className="relative text-xl">
            <FaBell />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">5</span>
          </button>

          {/* Profile Icon */}
          <button className="text-xl">
            <FaUserCircle />
          </button>
        </div>

        {/* <div className='space-x-4 px-5'>
          <Link to='/create-skill' className='text-blue-500 hover:underline'>
            Create Skill
          </Link>
        </div> */}

<div className="relative px-5">
      <button onClick={() => setOpen(!open)} className="text-gray-600 hover:text-gray-800">
        <FiMoreVertical size={24} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
          <Link
            to="/create-skill"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Create Skill
          </Link>
          <Link
            to="/my-skills"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            My Skills
          </Link>
        </div>
      )}
    </div>
      </div>
    </div>
  );
}

