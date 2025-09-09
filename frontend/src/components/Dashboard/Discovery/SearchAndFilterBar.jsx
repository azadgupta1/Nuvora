// import React from "react";
// import { PiSlidersHorizontalBold } from "react-icons/pi";
// import { FiSearch } from "react-icons/fi";

// const SearchAndFilterBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {
//   return (
//     <div className="max-w-6xl z-60 mx-auto flex flex-row justify-between items-center gap-4 mb-5">
//       {/* White container with shadow */}
//       <div className="flex items-center w-full md:w-[70%] bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
//         <FiSearch size={20} className="text-gray-500 mr-3" />
//         <input
//           type="text"
//           placeholder="Search skills..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
//         />
//       </div>

//       {/* Filter Button */}
//       <button
//         onClick={onFilterClick}
//         className="md:hidden flex items-center gap-2 px-5 py-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition"
//       >
//         <span>Filter</span>
//         <PiSlidersHorizontalBold size={20} />
//       </button>
//     </div>
//   );
// };

// export default SearchAndFilterBar;



// import React, { useState } from "react";
// import { PiSlidersHorizontalBold } from "react-icons/pi";
// import { FiSearch } from "react-icons/fi";

// const SearchAndFilterBar = ({ searchTerm, setSearchTerm }) => {
  

//   return (
//     <>
//       <div className="max-w-6xl z-60 mx-auto flex flex-row justify-between items-center gap-4 mb-5">
//         {/* Search Input */}
//         <div className="flex items-center w-full md:w-[70%] bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
//           <FiSearch size={20} className="text-gray-500 mr-3" />
//           <input
//             type="text"
//             placeholder="Search skills..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
//           />
//         </div>

//         {/* Filter Button */}
//         <button
//           onClick={onFilterClick} // <- use prop instead of local state
//           className="md:hidden flex items-center gap-2 px-5 py-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition"
//         >
//           <span>Filter</span>
//           <PiSlidersHorizontalBold size={20} />
//         </button>

//       </div>

      
//     </>
//   );
// };

// export default SearchAndFilterBar;










// import React from "react";
// import { PiSlidersHorizontalBold } from "react-icons/pi";
// import { FiSearch } from "react-icons/fi";

// const SearchAndFilterBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {
//   return (
//     <div className="max-w-6xl z-20 mx-auto flex flex-row justify-between items-center gap-4 mb-5">
//       {/* Search Input */}
//       <div className="flex items-center w-full md:w-[70%] bg-white border border-gray-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
//         <FiSearch size={20} className="text-gray-500 mr-3" />
//         <input
//           type="text"
//           placeholder="Search skills..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
//         />
//       </div>

//       {/* Filter Button */}
//       <button
//         onClick={onFilterClick}
//         className="md:hidden flex items-center gap-2 px-5 py-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition"
//       >
//         <span>Filter</span>
//         <PiSlidersHorizontalBold size={20} />
//       </button>
//     </div>
//   );
// };

// export default SearchAndFilterBar;



import React from "react";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const SearchAndFilterBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {
  return (
    <>
      {/* Desktop container */}
      <div className="hidden sm:block w-[65%] max-w-[700px] ml-2 mr-auto bg-white border border-gray-300 rounded-lg px-4 py-3">
        <div className="flex items-center gap-3 w-full">
          {/* User Image */}
          <img
            src="https://via.placeholder.com/36"
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover"
          />

          {/* Search Input */}
          <div className="flex items-center w-full bg-white border border-gray-500 rounded-full px-3 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FiSearch size={18} className="text-gray-500 mr-2" />
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
