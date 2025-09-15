import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import axios from "axios";
import SkillRequestModal from "../../components/Dashboard/Discovery/SkillRequestModal";
import SkillsFilterPanel from "../../components/Dashboard/Discovery/SkillsFilterPanel";
import SkillCard from "../../components/Dashboard/Discovery/SkillCard";
import SearchAndFilterBar from "../../components/Dashboard/Discovery/SearchAndFilterBar";
import Spinner1 from "../../components/ui/Spinner1";
import CategoryFilterBar from "../../components/Dashboard/Discovery/CategoryFilterBar";
import SavedItems from "../../components/Dashboard/Discovery/SavedItems";



const backendUrl = import.meta.env.VITE_BACKEND_URL;

const defaultCategoryColors = {
  Technology: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Coding: "bg-indigo-100 text-indigo-800",
  Languages: "bg-yellow-100 text-yellow-800",
  "Life Coach": "bg-purple-100 text-purple-800",
  Art: "bg-pink-100 text-pink-800",
  Music: "bg-indigo-100 text-indigo-800",
  Others: "bg-gray-100 text-gray-800",
};

const Discovery = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 Initial / top loading
  const [loadingMore, setLoadingMore] = useState(false); // 🔹 Infinite scroll loading
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSkillId, setSelectedSkillId] = useState(null);
  const [bookmarkedSkillIds, setBookmarkedSkillIds] = useState([]);
  const [bookmarksMap, setBookmarksMap] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("");


  const observer = useRef();
  const lastSkillElementRef = useCallback(
    (node) => {
      if (loadingMore || loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, loadingMore, hasMore]
  );

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${backendUrl}/api/bookmark`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const map = {};
        res.data.forEach((b) => (map[b.skillId] = b.id));
        setBookmarksMap(map);
        setBookmarkedSkillIds(Object.keys(map));
      } catch (e) {
        console.error("Bookmark fetch failed:", e);
      }
    };
    fetchBookmarks();
  }, []);

  const handleBookmarkToggle = async (skillId) => {
    const token = localStorage.getItem("token");

    try {
      if (bookmarkedSkillIds.includes(skillId)) {
        const bookmarkId = bookmarksMap[skillId];
        await axios.delete(`${backendUrl}/api/bookmark/${bookmarkId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookmarkedSkillIds((prev) => prev.filter((id) => id !== skillId));
        setBookmarksMap((prev) => {
          const newMap = { ...prev };
          delete newMap[skillId];
          return newMap;
        });
      } else {
        const res = await axios.post(
          `${backendUrl}/api/bookmark`,
          { skillId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setBookmarkedSkillIds((prev) => [...prev, skillId]);
        setBookmarksMap((prev) => ({ ...prev, [skillId]: res.data.id }));
      }
    } catch (error) {
      console.error("Bookmark toggle failed:", error);
    }
  };

  useEffect(() => {
    const fetchSkills = async () => {
      if (page === 1) {
        setLoading(true); // 🔹 Top spinner
      } else {
        setLoadingMore(true); // 🔹 Bottom spinner
      }

      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${backendUrl}/api/skills`, {
          params: { page, limit: 3 },
          headers: { Authorization: `Bearer ${token}` },
        });
        const newSkills = res.data.skills || [];

        setSkills((prevSkills) => {
          if (page === 1) return newSkills; // 🔹 Reset list on new fetch
          const ids = new Set(prevSkills.map((s) => s.id));
          const merged = [...prevSkills];
          newSkills.forEach((s) => {
            if (!ids.has(s.id)) merged.push(s);
          });
          return merged;
        });

        setHasMore(newSkills.length > 0);
      } catch (e) {
        console.error("Skill fetch failed:", e);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };
    fetchSkills();
  }, [page]);

  const toggleCategory = (category) =>
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );

  const toggleRating = (rating) =>
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );

  const filteredSkills = useMemo(() => {
    let filtered = [...skills];

    if (searchTerm) {
      filtered = filtered.filter((skill) =>
        skill.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.skillsOffered?.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
        skill.skillsWanted?.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((skill) =>
        selectedCategories.includes(skill.category || "Others")
      );
    }

    if (selectedRatings.length > 0) {
      const threshold = Math.min(...selectedRatings);
      filtered = filtered.filter((skill) => {
        const rating = skill.averageRating || 0; // ✅ use correct field
        return rating >= threshold;
      });
    }



    if (selectedLocation) {
      filtered = filtered.filter(
        (skill) =>
          skill.location?.toLowerCase() === selectedLocation.toLowerCase()
      );
    }


    return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [skills, searchTerm, selectedCategories, selectedRatings]);

  return (
    <div className="min-h-screen bg-[#F9F7F1] px-4 pt-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

        <div className="sticky top-6 h-[calc(100vh-3rem)] self-start hidden md:block w-54">
          <div className="flex flex-col h-full gap-0"> {/* Fixed gap here */}
            
            {/* SkillsFilterPanel takes available space */}
            <div className="flex overflow-auto">
              <SkillsFilterPanel
                categoryColors={defaultCategoryColors}
                selectedCategories={selectedCategories}
                selectedRatings={selectedRatings}
                selectedLocation={selectedLocation}
                toggleCategory={toggleCategory}
                toggleRating={toggleRating}
                setLocation={setSelectedLocation}
                resetFilters={() => {
                  setSearchTerm("");
                  setSelectedRatings([]);
                  setSelectedCategories([]);
                  setSelectedLocation("");
                  setPage(1);
                }}
              />

            </div>

            {/* SavedItems takes only needed height, scrolls if overflow */}
            <div className="flex-shrink-0 max-h-48 overflow-auto"> {/* Adjust max-h as needed */}
              <SavedItems />
            </div>
          </div>
        </div>





        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Search Bar */}
          <div className="mb-2">
            <SearchAndFilterBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onFilterClick={() => setIsFilterOpen(true)}
            />
          </div>

          <CategoryFilterBar
            categories={Object.keys(defaultCategoryColors)}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            resetCategories={() => {
              setSelectedCategories([]);
              setPage(1); // 🔹 Reset when categories cleared
            }}
          />

          {/* 🔹 Top Spinner */}
          {loading && page === 1 ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Spinner1 />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredSkills.length === 0 && !loading && <p>No skills found.</p>}

              {filteredSkills.map((skill, index) => {
                if (filteredSkills.length === index + 1) {
                  return (
                    <div ref={lastSkillElementRef} key={skill.id}>
                      <SkillCard
                        skill={skill}
                        isBookmarked={bookmarkedSkillIds.includes(skill.id)}
                        onBookmarkToggle={handleBookmarkToggle}
                        onSendRequest={setSelectedSkillId}
                      />
                    </div>
                  );
                } else {
                  return (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      isBookmarked={bookmarkedSkillIds.includes(skill.id)}
                      onBookmarkToggle={handleBookmarkToggle}
                      onSendRequest={setSelectedSkillId}
                    />
                  );
                }
              })}

              {/* 🔹 Bottom Spinner */}
              {loadingMore && (
                <div className="col-span-full flex justify-center items-center min-h-[100px]">
                  <Spinner1 />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>

            {/* Full-width panel */}
            <div className="p-4 mt-10">
              <SkillsFilterPanel
                categoryColors={defaultCategoryColors}
                selectedCategories={selectedCategories}
                selectedRatings={selectedRatings}
                toggleCategory={toggleCategory}
                toggleRating={toggleRating}
                resetFilters={() => {
                  setSearchTerm("");
                  setSelectedRatings([]);
                  setSelectedCategories([]);
                  setPage(1);
                }}
                onClose={() => setIsFilterOpen(false)} // ✅ new prop
                isMobile={true} // you already have this check
              />
            </div>
          </div>
        )}



      {/* Skill Request Modal */}
      {selectedSkillId && (
        <SkillRequestModal skillId={selectedSkillId} onClose={() => setSelectedSkillId(null)} />
      )}
    </div>
  );
};

export default Discovery;