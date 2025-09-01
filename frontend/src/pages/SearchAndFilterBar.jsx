import React from "react";
import { PiSlidersHorizontalBold } from "react-icons/pi";

const SearchAndFilterBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {
  return (
    <div className="max-w-6xl mx-auto flex flex-row md:flex-row justify-between items-center gap-4 mb-5">
      <input
        type="text"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-[60%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        onClick={onFilterClick}
        className="md:hidden flex items-center gap-2 px-5 py-2 text-black rounded-full border-1 border-gray-400 hover:bg-gray-100 transition"
      >
        <span>Filter</span>
        <PiSlidersHorizontalBold size={20} />
      </button>
    </div>
  );
};

export default SearchAndFilterBar;
