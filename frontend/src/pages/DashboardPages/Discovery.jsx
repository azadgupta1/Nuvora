import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import SkillRequestModal from "../../components/Dashboard/Discovery/SkillRequestModal";
import SkillsFilterPanel from "../../components/Dashboard/Discovery/SkillsFilterPanel";
import SkillCard from "../../components/Dashboard/Discovery/SkillCard";
import SearchAndFilterBar from "../../components/Dashboard/Discovery/SearchAndFilterBar";
import Spinner1 from "../../components/ui/Spinner1";


const backendUrl = import.meta.env.VITE_BACKEND_URL;



const defaultCategoryColors = {
  Technology: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Languages: "bg-yellow-100 text-yellow-800",
  "Life Coach": "bg-purple-100 text-purple-800",
  Art: "bg-pink-100 text-pink-800",
  Music: "bg-indigo-100 text-indigo-800",
  Others: "bg-gray-100 text-gray-800",
};



const Discovery = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSkillId, setSelectedSkillId] = useState(null);
  const [bookmarkedSkillIds, setBookmarkedSkillIds] = useState([]);
  const [bookmarksMap, setBookmarksMap] = useState({});

  // Fetch bookmarks
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
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${backendUrl}/api/skills`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSkills(res.data.skills || []);
      } catch (e) {
        console.error("Skill fetch failed:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

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
      filtered = filtered.filter((skill) =>
        selectedRatings.includes(Math.round(skill.avgRating || 0))
      );
    }

    return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [skills, searchTerm, selectedCategories, selectedRatings]);

// return (
//   <div className="min-h-screen bg-[#F7FAFC] px-4 pt-6">
//     <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

//       <div className="sticky top-6 max-h-[calc(100vh-3rem)] self-start">
//         <SkillsFilterPanel
//           categoryColors={defaultCategoryColors}
//           selectedCategories={selectedCategories}
//           selectedRatings={selectedRatings}
//           toggleCategory={toggleCategory}
//           toggleRating={toggleRating}
//           resetFilters={() => {
//             setSearchTerm("");
//             setSelectedRatings([]);
//             setSelectedCategories([]);
//           }}
//           isFilterOpen={isFilterOpen}
//           setIsFilterOpen={setIsFilterOpen}
//         />
//       </div>



//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Search Bar */}
//         <div className="mb-4">
//           {/* <SearchAndFilterBar
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             onFilterClick={() => setIsFilterOpen(true)}
//           /> */}

//           <SearchAndFilterBar
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             onFilterClick={() => setIsFilterOpen(true)} // Pass the handler
//           />

//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
//           {loading ? (
//             <div className="col-span-full flex justify-center items-center min-h-[300px]">
//               <Spinner1 />
//             </div>

//           ) : filteredSkills.length === 0 ? (
//             <p>No skills found.</p>
//           ) : (
//             filteredSkills.map((skill) => (
//               <SkillCard
//                 key={skill.id}
//                 skill={skill}
//                 isBookmarked={bookmarkedSkillIds.includes(skill.id)}
//                 onBookmarkToggle={handleBookmarkToggle}
//                 onSendRequest={setSelectedSkillId}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </div>

    

//     {/* Skill Request Modal */}
//     {selectedSkillId && (
//       <SkillRequestModal
//         skillId={selectedSkillId}
//         onClose={() => setSelectedSkillId(null)}
//       />
//     )}

    
//   </div>
// );


// return (
//   <div className="min-h-screen bg-[#F7FAFC] px-4 pt-6">
//     <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      
//       {/* Sidebar Filter - Desktop */}
//       <div className="sticky top-6 max-h-[calc(100vh-3rem)] self-start hidden md:block">
//         <SkillsFilterPanel
//           categoryColors={defaultCategoryColors}
//           selectedCategories={selectedCategories}
//           selectedRatings={selectedRatings}
//           toggleCategory={toggleCategory}
//           toggleRating={toggleRating}
//           resetFilters={() => {
//             setSearchTerm("");
//             setSelectedRatings([]);
//             setSelectedCategories([]);
//           }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Search Bar */}
//         <div className="mb-4">
//           <SearchAndFilterBar
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             onFilterClick={() => setIsFilterOpen(true)} // opens mobile drawer
//           />
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
//           {loading ? (
//             <div className="col-span-full flex justify-center items-center min-h-[300px]">
//               <Spinner1 />
//             </div>
//           ) : filteredSkills.length === 0 ? (
//             <p>No skills found.</p>
//           ) : (
//             filteredSkills.map((skill) => (
//               <SkillCard
//                 key={skill.id}
//                 skill={skill}
//                 isBookmarked={bookmarkedSkillIds.includes(skill.id)}
//                 onBookmarkToggle={handleBookmarkToggle}
//                 onSendRequest={setSelectedSkillId}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </div>

//     {/* ✅ Mobile Filter Drawer */}
//     {isFilterOpen && (
//       <>
//         {/* Overlay */}
//         <div
//           className="fixed inset-0 z-40 bg-opacity-0"
//           onClick={() => setIsFilterOpen(false)}
//         ></div>

//         {/* Drawer */}
//         <div className="fixed right-0 top-0 h-full w-4/5 max-w-xs bg-white z-50 p-6 shadow-lg overflow-y-auto transition-transform">
//           <button
//             onClick={() => setIsFilterOpen(false)}
//             className="absolute top-3 right-4 text-gray-700 text-2xl"
//           >
//             &times;
//           </button>

//           <SkillsFilterPanel
//             categoryColors={defaultCategoryColors}
//             selectedCategories={selectedCategories}
//             selectedRatings={selectedRatings}
//             toggleCategory={toggleCategory}
//             toggleRating={toggleRating}
//             resetFilters={() => {
//               setSearchTerm("");
//               setSelectedRatings([]);
//               setSelectedCategories([]);
//             }}
//           />
//         </div>
//       </>
//     )}

//     {/* Skill Request Modal */}
//     {selectedSkillId && (
//       <SkillRequestModal
//         skillId={selectedSkillId}
//         onClose={() => setSelectedSkillId(null)}
//       />
//     )}
//   </div>
// );





return (
  <div className="min-h-screen bg-[#F7FAFC] px-4 pt-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      
      {/* Sidebar Filter - Desktop */}
      <div className="sticky top-6 max-h-[calc(100vh-3rem)] self-start hidden md:block">
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
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Search Bar */}
        <div className="mb-4">
          <SearchAndFilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onFilterClick={() => setIsFilterOpen(true)} // opens mobile drawer
          />
        </div>
        

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {loading ? (
            <div className="col-span-full flex justify-center items-center min-h-[300px]">
              <Spinner1 />
            </div>
          ) : filteredSkills.length === 0 ? (
            <p>No skills found.</p>
          ) : (
            filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                isBookmarked={bookmarkedSkillIds.includes(skill.id)}
                onBookmarkToggle={handleBookmarkToggle}
                onSendRequest={setSelectedSkillId}
              />
            ))
          )}
        </div>
      </div>
    </div>

    {/* ✅ Mobile Filter Drawer */}
    {/* ✅ Mobile Filter Fullscreen Drawer */}
{isFilterOpen && (
  <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
    {/* Close Button */}
    <button
      onClick={() => setIsFilterOpen(false)}
      className="absolute top-4 right-4 text-gray-700 text-2xl"
    >
      &times;
    </button>

    {/* Content */}
    <div className="p-6 mt-10"> 
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
        }}
      />
    </div>
  </div>
)}


    {/* Skill Request Modal */}
    {selectedSkillId && (
      <SkillRequestModal
        skillId={selectedSkillId}
        onClose={() => setSelectedSkillId(null)}
      />
    )}
  </div>
);





};


export default Discovery;
