// // SkillsFilterPanel.jsx

// const SkillsFilterPanel = ({
//   categoryColors,
//   selectedCategories,
//   selectedRatings,
//   toggleCategory,
//   toggleRating,
//   resetFilters,
//   isFilterOpen,
//   setIsFilterOpen,
// }) => {
//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div className="hidden md:block w-full md:w-64">
//         <div className="sticky top-10 bg-white p-4 rounded-xl shadow-md border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter By</h3>

//           <div className="mb-6">
//             <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
//             <div className="space-y-2">
//               {Object.keys(categoryColors).map((category) => (
//                 <label key={category} className="flex items-center space-x-2 text-sm text-gray-600">
//                   <input
//                     type="checkbox"
//                     className="accent-blue-500"
//                     checked={selectedCategories.includes(category)}
//                     onChange={() => toggleCategory(category)}
//                   />
//                   <span>{category}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-sm font-medium text-gray-700 mb-2">Star Rating</h4>
//             <div className="space-y-2">
//               {[5, 4, 3, 2, 1].map((star) => (
//                 <label key={star} className="flex items-center space-x-2 text-sm text-gray-600">
//                   <input
//                     type="checkbox"
//                     className="accent-yellow-500"
//                     checked={selectedRatings.includes(star)}
//                     onChange={() => toggleRating(star)}
//                   />
//                   <span className="flex items-center">
//                     {Array.from({ length: star }).map((_, i) => (
//                       <svg
//                         key={i}
//                         className="w-4 h-4 text-yellow-500 fill-current"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M10 15l-5.878 3.09L5.5 12.18.999 8.27l6.09-.885L10 2l2.91 5.385 6.09.885-4.501 3.91 1.378 5.91z" />
//                       </svg>
//                     ))}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={resetFilters}
//             className="w-full text-sm mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition"
//           >
//             Reset Filters
//           </button>
//         </div>
//       </div>

//       {/* Mobile Modal Filter */}
//       {isFilterOpen && (
//         <div className="fixed inset-0 z-50 bg-opacity-0 flex justify-end md:hidden">
//           <div className="w-4/5 max-w-xs h-full bg-white p-5 shadow-lg overflow-y-auto relative">
//             <button
//               onClick={() => setIsFilterOpen(false)}
//               className="absolute top-3 right-4 text-gray-700 text-2xl"
//             >
//               &times;
//             </button>

//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter By</h3>

//             <div className="mb-6">
//               <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
//               <div className="space-y-2">
//                 {Object.keys(categoryColors || {}).map((category) => (
//                   <label key={category} className="flex items-center space-x-2 text-sm text-gray-600">
//                     <input
//                       type="checkbox"
//                       className="accent-blue-500"
//                       checked={selectedCategories.includes(category)}
//                       onChange={() => toggleCategory(category)}
//                     />
//                     <span>{category}</span>
//                   </label>
//                 ))}

//               </div>
//             </div>

//             <div className="mb-6">
//               <h4 className="text-sm font-medium text-gray-700 mb-2">Star Rating</h4>
//               <div className="space-y-2">
//                 {[5, 4, 3, 2, 1].map((star) => (
//                   <label
//                     key={star}
//                     className="flex items-center space-x-2 text-sm text-gray-600"
//                   >
//                     <input
//                       type="checkbox"
//                       className="accent-yellow-500"
//                       checked={selectedRatings.includes(star)}
//                       onChange={() => toggleRating(star)}
//                     />
//                     <span className="flex items-center">
//                       {Array.from({ length: star }).map((_, i) => (
//                         <svg
//                           key={i}
//                           className="w-4 h-4 text-yellow-500 fill-current"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 15l-5.878 3.09L5.5 12.18.999 8.27l6.09-.885L10 2l2.91 5.385 6.09.885-4.501 3.91 1.378 5.91z" />
//                         </svg>
//                       ))}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={resetFilters}
//               className="w-full text-sm mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition"
//             >
//               Reset Filters
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SkillsFilterPanel;











// import { FaStar } from "react-icons/fa";

// const SkillsFilterPanel = ({
//   categoryColors = {},
//   selectedCategories = [],
//   selectedRatings = [],
//   toggleCategory,
//   toggleRating,
//   resetFilters,
//   isFilterOpen,
//   setIsFilterOpen,
// }) => {
//   const ratingOptions = [5, 4, 3, 2, 1];

//   const renderStarLabel = (count) => (
//     <div className="flex items-center gap-1">
//       {Array.from({ length: count }).map((_, i) => (
//         <FaStar key={i} className="text-yellow-500 text-sm" />
//       ))}
//       <span className="text-sm text-gray-600 ml-1">{count} & up</span>
//     </div>
//   );

//   return (
//   <>
//     {/* Sidebar - Desktop */}
//     <aside className="hidden md:block w-full md:w-64">
//       <div className="sticky top-0 bg-white p-6 rounded-md shadow-md border border-gray-200">
//         <h3 className="text-lg font-bold text-gray-800 mb-6">Filters</h3>

//         {/* Category Filter */}
//         <div className="mb-8">
//           <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
//             Category
//           </h4>
//           <div className="flex flex-wrap gap-2">
//             {Object.keys(categoryColors).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => toggleCategory(category)}
//                 className={`text-xs px-3 py-1.5 rounded-full border ${
//                   selectedCategories.includes(category)
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
//                 } transition`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Ratings Filter */}
//         <div className="mb-8">
//           <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
//             Minimum Rating
//           </h4>
//           <div className="space-y-2">
//             {ratingOptions.map((rating) => (
//               <label key={rating} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-500"
//                   checked={selectedRatings.includes(rating)}
//                   onChange={() => toggleRating(rating)}
//                 />
//                 {renderStarLabel(rating)}
//               </label>
//             ))}
//           </div>
//         </div>

//         <hr className="my-6 border-gray-300" />

//         <button
//           onClick={resetFilters}
//           className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 rounded-md transition"
//         >
//           Reset Filters
//         </button>
//       </div>
//     </aside>
//   </>
// );

// };

// export default SkillsFilterPanel;










import { FaStar } from "react-icons/fa";

const SkillsFilterPanel = ({
  categoryColors = { Tech: "blue", Sports: "green", Languages: "red" }, // ✅ default categories
  selectedCategories = [],
  selectedRatings = [],
  toggleCategory = (c) => console.log("Toggled category:", c), // ✅ dummy function
  toggleRating = (r) => console.log("Toggled rating:", r), // ✅ dummy function
  resetFilters = () => console.log("Reset filters"), // ✅ dummy function
  isFilterOpen = true, // ✅ always open by default
  setIsFilterOpen = () => {}, // ✅ no-op
}) => {
  const ratingOptions = [5, 4, 3, 2, 1];

  const renderStarLabel = (count) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-yellow-500 text-sm" />
      ))}
      <span className="text-sm text-gray-600 ml-1">{count} & up</span>
    </div>
  );

  return (
    <>
      {/* Sidebar */}
      <aside className="block w-full md:w-64">
        <div className="sticky top-0 bg-white p-6 rounded-md shadow-2xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Filters</h3>

          {/* Category Filter */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Category
            </h4>
            <div className="flex flex-wrap gap-2">
              {Object.keys(categoryColors).length === 0 ? (
                <p className="text-sm text-gray-500">No categories available</p>
              ) : (
                Object.keys(categoryColors).map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`text-xs px-3 py-1.5 rounded-full border ${
                      selectedCategories.includes(category)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    } transition`}
                  >
                    {category}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Ratings Filter */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Minimum Rating
            </h4>
            <div className="space-y-2">
              {ratingOptions.map((rating) => (
                <label key={rating} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-yellow-500"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => toggleRating(rating)}
                  />
                  {renderStarLabel(rating)}
                </label>
              ))}
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <button
            onClick={resetFilters}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 rounded-md transition"
          >
            Reset Filters
          </button>
        </div>
      </aside>
    </>
  );
};

export default SkillsFilterPanel;
