// components/CategoryFilterBar.jsx
import React from "react";

const CategoryFilterBar = ({
  categories,
  selectedCategories,
  toggleCategory,
  resetCategories,
}) => {
  return (
    <div className="w-full overflow-x-auto mt-0 mb-4 scrollbar-hide">
      <div className="flex gap-2 w-max px-2">
        {/* "All" button */}
        <button
          onClick={resetCategories}
          className={`whitespace-nowrap px-4 py-1 rounded-md border transition-colors ${
            selectedCategories.length === 0
              ? "bg-black text-white border-black"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {/* Category buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`whitespace-nowrap px-4 py-1 rounded-lg transition-colors ${
              selectedCategories.includes(category)
                ? "bg-black text-white"
                : "bg-gray-400/20 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilterBar;
