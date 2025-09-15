import { FaStar } from "react-icons/fa";

const SkillsFilterPanel = ({
  categoryColors = { Tech: "blue", Sports: "green", Languages: "red" },
  selectedCategories = [],
  selectedRatings = [],
  selectedLocation = "",
  toggleCategory = (c) => console.log("Toggled category:", c),
  toggleRating = (r) => console.log("Toggled rating:", r),
  setLocation = (l) => console.log("Selected location:", l),
  resetFilters = () => console.log("Reset filters"),
  onClose = () => {}, // ✅ new prop
  isMobile = false,   // optional, default false
}) => {
  const ratingOptions = [5, 4, 3, 2, 1];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    toggleCategory(category);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const renderStarLabel = (count) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-yellow-500 text-xs" />
      ))}
      <span className="text-xs text-gray-600 ml-1">{count} & up</span>
    </div>
  );

  return (
  <div className={isMobile ? "w-full" : "w-54 mb-4"}>
    <aside className="block w-full">
      <div
        className={
          isMobile
            ? "p-3 text-sm flex flex-col h-full justify-between" // ✅ full height flex layout
            : "bg-white p-3 rounded-xl border border-gray-300 text-sm"
        }
      >
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            Filters
          </h3>

          {/* 🔽 Category Dropdown */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={selectedCategories[0] || ""}
              onChange={handleCategoryChange}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">All Categories</option>
              {Object.keys(categoryColors).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* 📍 Location Dropdown */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">All Locations</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="London">London</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* ⭐ Ratings Filter */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              Rating
            </h4>
            <div className="space-y-1">
              {ratingOptions.map((rating) => (
                <label key={rating} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    className="accent-yellow-500 h-3 w-3"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => toggleRating(rating)}
                  />
                  {renderStarLabel(rating)}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Buttons Section */}
        <div className="space-y-2 mt-4">
          <button
            onClick={resetFilters}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium py-1.5 rounded transition"
          >
            Reset Filters
          </button>

          {isMobile && (
            <button
              onClick={onClose} // ✅ use prop
              className="w-full bg-black text-white text-sm font-medium py-2 rounded-lg transition"
            >
              Apply
            </button>
          )}
        </div>
      </div>
    </aside>
  </div>
);


};

export default SkillsFilterPanel;
