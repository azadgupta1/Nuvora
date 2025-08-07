import React, { useState } from 'react';
import { FaSearch, FaUserCircle, FaBell, FaEnvelope } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import Nuvora_2 from '../../assets/Nuvora_2.png';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${search}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#003344] text-white px-4 sm:px-6 py-3">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <h1 className="text-[#0DCEDA] font-extrabold text-2xl tracking-wide font-mono">Nuvora</h1>
          <img src={Nuvora_2} alt="Nuvora" className="w-8 h-8 object-contain" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-xl mt-2 sm:mt-0">
          {/* Chat */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate('/dashboard/chatlayout')}
          >
            <IoChatbubbleEllipsesOutline />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">3</span>
          </div>

          {/* Notifications */}
          <div className="relative cursor-pointer">
            <FaBell />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">1</span>
          </div>

          {/* Profile */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <FaUserCircle className="text-2xl sm:text-3xl text-white hover:text-[#0DCEDA] transition" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20 text-gray-800">
                <Link to="/edit-profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setProfileOpen(false)}>
                  Edit Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setProfileOpen(false)}>
                  Settings
                </Link>
                <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setProfileOpen(false)}>
                  Logout
                </Link>
              </div>
            )}
          </div>

          {/* More */}
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-200 hover:text-white">
              <FiMoreVertical size={22} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20 text-gray-800">
                <Link to="/create-skill" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  Create Skill
                </Link>
                <Link to="/my-skills" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  My Skills
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
