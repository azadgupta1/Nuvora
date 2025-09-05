import React from "react";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const SearchAndFilterBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {
  return (
    <div className="max-w-6xl mx-auto flex flex-row justify-between items-center gap-4 mb-5">
      {/* White container with shadow */}
      <div className="flex items-center w-full md:w-[70%] bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
        <FiSearch size={20} className="text-gray-500 mr-3" />
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Filter Button */}
      <button
        onClick={onFilterClick}
        className="md:hidden flex items-center gap-2 px-5 py-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition"
      >
        <span>Filter</span>
        <PiSlidersHorizontalBold size={20} />
      </button>
    </div>
  );
};

export default SearchAndFilterBar;
