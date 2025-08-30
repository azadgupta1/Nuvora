// SkillsFilterPanel.jsx

const SkillsFilterPanel = ({
  categoryColors,
  selectedCategories,
  selectedRatings,
  toggleCategory,
  toggleRating,
  resetFilters,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-full md:w-64">
        <div className="sticky top-28 bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter By</h3>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
            <div className="space-y-2">
              {Object.keys(categoryColors).map((category) => (
                <label key={category} className="flex items-center space-x-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Star Rating</h4>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <label key={star} className="flex items-center space-x-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="accent-yellow-500"
                    checked={selectedRatings.includes(star)}
                    onChange={() => toggleRating(star)}
                  />
                  <span className="flex items-center">
                    {Array.from({ length: star }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09L5.5 12.18.999 8.27l6.09-.885L10 2l2.91 5.385 6.09.885-4.501 3.91 1.378 5.91z" />
                      </svg>
                    ))}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={resetFilters}
            className="w-full text-sm mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Mobile Modal Filter */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-opacity-0 flex justify-end md:hidden">
          <div className="w-4/5 max-w-xs h-full bg-white p-5 shadow-lg overflow-y-auto relative">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-3 right-4 text-gray-700 text-2xl"
            >
              &times;
            </button>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter By</h3>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
              <div className="space-y-2">
                {Object.keys(categoryColors).map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-500"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Star Rating</h4>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <label
                    key={star}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      className="accent-yellow-500"
                      checked={selectedRatings.includes(star)}
                      onChange={() => toggleRating(star)}
                    />
                    <span className="flex items-center">
                      {Array.from({ length: star }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09L5.5 12.18.999 8.27l6.09-.885L10 2l2.91 5.385 6.09.885-4.501 3.91 1.378 5.91z" />
                        </svg>
                      ))}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={resetFilters}
              className="w-full text-sm mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsFilterPanel;
