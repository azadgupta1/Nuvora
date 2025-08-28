// import { useEffect, useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";

// const categoryColors = {
//   Technology: "bg-blue-100 text-blue-800",
//   Sports: "bg-green-100 text-green-800",
//   Languages: "bg-yellow-100 text-yellow-800",
//   "Life Coach": "bg-purple-100 text-purple-800",
//   Art: "bg-pink-100 text-pink-800",
//   Music: "bg-indigo-100 text-indigo-800",
//   Others: "bg-gray-100 text-gray-800",
// };

// const filterOptions = ["Latest", "Relevant"];

// const SkillsFeed = () => {
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("Latest");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/skills");
//         const data = await response.json();
//         setSkills(data.skills);
//         console.log("Data is : ", data);
//       } catch (error) {
//         console.error("Error fetching skills:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   const filteredSkills = useMemo(() => {
//     let filtered = [...skills];

//     if (searchTerm) {
//       filtered = filtered.filter((skill) =>
//         skill.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (selectedFilter === "Latest") {
//       filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     }

//     return filtered;
//   }, [skills, searchTerm, selectedFilter]);

//   const groupedSkills = useMemo(() => {
//     const groups = {};
//     filteredSkills.forEach((skill) => {
//       const cat = skill.category || "Others";
//       if (!groups[cat]) groups[cat] = [];
//       groups[cat].push(skill);
//     });
//     return groups;
//   }, [filteredSkills]);

//   const getCategoryClass = (category) =>
//     categoryColors[category] || categoryColors["Others"];

//   return (
//     <div className="min-h-screen bg-[#F7FAFC] px-6 py-10">
//       {/* Top Bar */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
//         <input
//           type="text"
//           placeholder="Search skills..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full md:w-[60%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//         />
//         <select
//           value={selectedFilter}
//           onChange={(e) => setSelectedFilter(e.target.value)}
//           className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           {filterOptions.map((option) => (
//             <option key={option}>{option}</option>
//           ))}
//         </select>
//       </div>

//       {/* Main Content with Sidebar and Feed */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
//         {/* Sidebar Filter */}
//         {/* <div className="w-full md:w-64 bg-white p-4 rounded-xl shadow-md border border-gray-200"> */}
        
//         {/* Sidebar Filter */}
// <div className="w-full md:w-64">
//   <div className="sticky top-28 bg-white p-4 rounded-xl shadow-md border border-gray-200">
//     <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter By</h3>

//     {/* Categories */}
//     <div className="mb-6">
//       <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
//       <div className="space-y-2">
//         {Object.keys(categoryColors).map((category) => (
//           <label
//             key={category}
//             className="flex items-center space-x-2 text-sm text-gray-600"
//           >
//             <input type="checkbox" className="accent-blue-500" />
//             <span>{category}</span>
//           </label>
//         ))}
//       </div>
//     </div>

//     {/* Star Rating */}
//     <div className="mb-6">
//       <h4 className="text-sm font-medium text-gray-700 mb-2">Star Rating</h4>
//       <div className="space-y-2">
//         {[5, 4, 3, 2, 1].map((star) => (
//           <label
//             key={star}
//             className="flex items-center space-x-2 text-sm text-gray-600"
//           >
//             <input type="checkbox" className="accent-yellow-500" />
//             <span className="flex items-center">
//               {Array.from({ length: star }).map((_, i) => (
//                 <svg
//                   key={i}
//                   className="w-4 h-4 text-yellow-500 fill-current"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M10 15l-5.878 3.09L5.5 12.18.999 8.27l6.09-.885L10 2l2.91 5.385 6.09.885-4.501 3.91 1.378 5.91z" />
//                 </svg>
//               ))}
//             </span>
//           </label>
//         ))}
//       </div>
//     </div>

//     {/* Reset Button */}
//     <button className="w-full text-sm mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition">
//       Reset Filters
//     </button>
//   </div>
// </div>


//         {/* Feed Section */}
//         <div className="flex-1 space-y-12">
//           {loading ? (
//             <p className="text-center text-gray-600 text-lg">Loading skills...</p>
//           ) : (
//             <>
//               {filteredSkills.length > 0 && (
//                 <Section
//                   title="Recommended For You"
//                   skills={filteredSkills.slice(0, 6)}
//                   getCategoryClass={getCategoryClass}
//                   navigate={navigate}
//                 />
//               )}

//               {Object.entries(groupedSkills).map(([category, skills]) => (
//                 <Section
//                   key={category}
//                   title={category}
//                   skills={skills}
//                   getCategoryClass={getCategoryClass}
//                   navigate={navigate}
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Section Component
// const Section = ({ title, skills, getCategoryClass, navigate }) => (
//   <div>
//     <h2 className="text-2xl font-semibold text-gray-800 mb-5 px-1">{title}</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
//       {skills.map((skill) => (
//         <div
//           key={skill.id}
//           className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-4 flex flex-col"
//         >
//           <div className="relative">
//             <img
//               src={skill.image || "https://via.placeholder.com/300x200"}
//               alt={skill.name}
//               className="w-full h-44 object-cover rounded-xl"
//             />
//             <div
//               className={`absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full ${getCategoryClass(
//                 skill.category
//               )}`}
//             >
//               {skill.category}
//             </div>
//           </div>

//           <div className="flex-grow flex flex-col justify-between mt-4">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {skill.name}
//               </h3>
//               <p className="text-sm text-gray-600 mt-1 line-clamp-3">
//                 {skill.description}
//               </p>
//             </div>

//             <p className="mt-3 text-sm text-blue-600 font-medium">
//               Wants to learn: {skill.skillWantedInReturn}
//             </p>

//             <button
//               onClick={() => navigate(`/Dashboard/skill/${skill.id}`)}
//               className="mt-4 bg-black hover:bg-black text-white font-medium py-2 rounded-md text-sm transition"
//             >
//               Send Request
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );



// export default SkillsFeed;













import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SkillRequestModal from "./SkillRequestModal";
import axios from "axios";


const categoryColors = {
  Technology: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Languages: "bg-yellow-100 text-yellow-800",
  "Life Coach": "bg-purple-100 text-purple-800",
  Art: "bg-pink-100 text-pink-800",
  Music: "bg-indigo-100 text-indigo-800",
  Others: "bg-gray-100 text-gray-800",
};

const SkillsFeed = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const [selectedSkillId, setSelectedSkillId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
  const fetchSkills = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/api/skills", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSkills(response.data.skills || []);
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchSkills();
}, []);


  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedRatings([]);
    setSearchTerm("");
  };

  const filteredSkills = useMemo(() => {
    let filtered = [...skills];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (skill) =>
          skill.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.skillsOffered?.some((s) =>
            s.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          skill.skillsWanted?.some((s) =>
            s.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((skill) =>
        selectedCategories.includes(skill.category || "Others")
      );
    }

    // Star rating filter
    if (selectedRatings.length > 0) {
      filtered = filtered.filter((skill) =>
        selectedRatings.includes(Math.round(skill.avgRating || 0))
      );
    }

    // Sort by latest
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return filtered;
  }, [skills, searchTerm, selectedCategories, selectedRatings]);

  return (
    <div className="min-h-screen bg-[#F7FAFC] px-6 py-10">
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-[60%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <div className="w-full md:w-64">
          <div className="sticky top-28 bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter By</h3>

            {/* Categories */}
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

            {/* Star Rating */}
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

            {/* Reset Button */}
            <button
              onClick={resetFilters}
              className="w-full text-sm mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center text-gray-600 text-lg">Loading skills...</p>
          ) : filteredSkills.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">No skills found.</p>
          ) : (
            filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-4 flex flex-col"
              >
                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={skill.user?.profilePicture || "https://via.placeholder.com/40"}
                    alt={skill.user?.name || "User"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-semibold text-gray-800">
                    {skill.user?.name || "Unknown User"}
                  </span>
                </div>

                {/* Skills Offered */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Skills I Can Teach:</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skillsOffered?.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills Wanted */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Skills I Want to Learn:</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skillsWanted?.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <hr className="my-4" />
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>
                    Member since{" "}
                    {skill.user?.createdAt
                      ? new Date(skill.user.createdAt).toLocaleString("en-US", {
                          month: "long",
                          year: "numeric",
                        })
                      : "Unknown"}
                  </span>
                  <button
                    // onClick={() => navigate(`/Dashboard/skill/${skill.id}`)}
                    onClick={() => setSelectedSkillId(skill.id)}
                    className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition"
                  >
                    Send Request
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedSkillId && (
      <SkillRequestModal
        skillId={selectedSkillId}
        onClose={() => setSelectedSkillId(null)}
      />
      )}

    </div>
  );


};

export default SkillsFeed;
