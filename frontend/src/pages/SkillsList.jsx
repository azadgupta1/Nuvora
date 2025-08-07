// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SkillsList = () => {
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/skills");
//         const data = await response.json();
//         setSkills(data.skills);
//       } catch (error) {
//         console.error("Error fetching skills:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Available Skills</h1>
//       {loading ? (
//         <p className="text-center text-gray-600">Loading skills...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {skills.map((skill) => (
//             <div key={skill.id} className="bg-white shadow-md rounded-lg p-4">
//               <img
//                 src={skill.image || "https://via.placeholder.com/150"}
//                 alt={skill.name}
//                 className="w-full h-40 object-cover rounded-md mb-3"
//               />
//               <h2 className="text-xl font-semibold">{skill.name}</h2>
//               <p className="text-gray-500 text-sm">{skill.category}</p>
//               <p className="mt-2 text-gray-700">{skill.description}</p>
//               <p className="mt-2 text-blue-600 font-semibold">
//                 Wants to learn: {skill.skillWantedInReturn}
//               </p>
//               <button
//                 onClick={() => navigate(`/Dashboard/skill/${skill.id}`)}
//                 className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SkillsList;

// import { useEffect, useState } from "react";
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

// const SkillsList = () => {
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/skills");
//         const data = await response.json();
//         setSkills(data.skills);
//       } catch (error) {
//         console.error("Error fetching skills:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   const getCategoryClass = (category) => {
//     return categoryColors[category] || categoryColors["Others"];
//   };

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
//         🔥 Explore Skills for Exchange
//       </h1>

//       {loading ? (
//         <p className="text-center text-gray-600 text-lg">Loading skills...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
//           {skills.map((skill) => (
//             <div
//               key={skill.id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-4 flex flex-col"
//             >
//               <div className="relative">
//                 <img
//                   src={skill.image || "https://via.placeholder.com/300x200"}
//                   alt={skill.name}
//                   className="w-full h-44 object-cover rounded-xl"
//                 />
//                 <div
//                   className={`absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full ${getCategoryClass(
//                     skill.category
//                   )}`}
//                 >
//                   {skill.category}
//                 </div>
//               </div>

//               <div className="flex-grow flex flex-col justify-between mt-4">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">
//                     {skill.name}
//                   </h2>
//                   <p className="text-sm text-blue-600 mt-1 line-clamp-3">
//                     {skill.description}
//                   </p>
//                 </div>

//                 <p className="mt-3 text-sm text-blue-600 font-semibold">
//                   Wants to learn: {skill.skillWantedInReturn}
//                 </p>

//                 <button
//                   onClick={() => navigate(`/Dashboard/skill/${skill.id}`)}
//                   className="mt-4 bg-blue-500 hover:bg-blue-600 transition-all text-white font-medium py-2 rounded-lg text-sm"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SkillsList;



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch, FiFilter } from "react-icons/fi";

// const categoryColors = {
//   Technology: "bg-blue-50 text-blue-700",
//   Sports: "bg-green-50 text-green-700",
//   Languages: "bg-yellow-50 text-yellow-700",
//   "Life Coach": "bg-purple-50 text-purple-700",
//   Art: "bg-pink-50 text-pink-700",
//   Music: "bg-indigo-50 text-indigo-700",
//   Others: "bg-gray-50 text-gray-700",
// };

// const filters = ["Latest", "Relevant", "Popular"];
// const sections = ["Recommended", "Technology", "Art", "Music", "Languages", "Others"];

// const SkillsList = () => {
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("Latest");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/skills");
//         const data = await response.json();
//         setSkills(data.skills);
//       } catch (error) {
//         console.error("Error fetching skills:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   const getCategoryClass = (category) => categoryColors[category] || categoryColors["Others"];

//   const filteredSkills = skills
//     .filter((skill) => skill.description.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => {
//       if (filter === "Latest") return new Date(b.createdAt) - new Date(a.createdAt);
//       if (filter === "Popular") return b.likes - a.likes;
//       return 0;
//     });

//   const renderSection = (sectionTitle) => {
//     const sectionSkills = sectionTitle === "Recommended"
//       ? filteredSkills.slice(0, 8)
//       : filteredSkills.filter((s) => s.category === sectionTitle);

//     if (!sectionSkills.length) return null;

//     return (
//       <div key={sectionTitle} className="mb-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionTitle}</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//           {sectionSkills.map((skill) => (
//             <div
//               key={skill.id}
//               className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
//             >
//               <div className="relative">
//                 <img
//                   src={skill.image || "https://via.placeholder.com/300x200"}
//                   alt={skill.name}
//                   className="w-full h-40 object-cover"
//                 />
//                 <span
//                   className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full ${getCategoryClass(
//                     skill.category
//                   )}`}
//                 >
//                   {skill.category}
//                 </span>
//               </div>
//               <div className="p-4 flex flex-col h-full">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   {skill.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-2 line-clamp-3">
//                   {skill.description}
//                 </p>
//                 <p className="text-sm text-blue-600 font-medium mt-auto">
//                   Wants to learn: {skill.skillWantedInReturn}
//                 </p>
//                 <button
//                   onClick={() => navigate(`/Dashboard/skill/${skill.id}`)}
//                   className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="px-6 py-10 max-w-[1400px] mx-auto">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
//         <div className="flex flex-1 items-center bg-white border rounded-full shadow-sm overflow-hidden">
//           <FiSearch className="mx-3 text-gray-400 text-xl" />
//           <input
//             type="text"
//             placeholder="Search skills..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full py-2 px-2 focus:outline-none"
//           />
//         </div>

//         <div className="flex items-center gap-2">
//           <FiFilter className="text-xl text-gray-500" />
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-700"
//           >
//             {filters.map((f) => (
//               <option key={f} value={f}>{f}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {loading ? (
//         <p className="text-center text-gray-600 text-lg">Loading skills...</p>
//       ) : (
//         <div>
//           {sections.map((section) => renderSection(section))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SkillsList;





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

//     // Add more sort logic for other filters like Relevant if needed

//     return filtered;
//   }, [skills, searchTerm, selectedFilter]);

//   // Group skills by category
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

//       {/* Skills Section */}
//       {loading ? (
//         <p className="text-center text-gray-600 text-lg">Loading skills...</p>
//       ) : (
//         <div className="max-w-6xl mx-auto space-y-12">
//           {/* Recommended Section */}
//           {filteredSkills.length > 0 && (
//             <Section
//               title="Recommended For You"
//               skills={filteredSkills.slice(0, 6)}
//               getCategoryClass={getCategoryClass}
//               navigate={navigate}
//             />
//           )}

//           {/* Grouped by Category */}
//           {Object.entries(groupedSkills).map(([category, skills]) => (
//             <Section
//               key={category}
//               title={category}
//               skills={skills}
//               getCategoryClass={getCategoryClass}
//               navigate={navigate}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Section Component
// const Section = ({ title, skills, getCategoryClass, navigate }) => (
//   <div>
//     <h2 className="text-2xl font-semibold text-gray-800 mb-5 px-1">{title}</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
//               className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md text-sm transition"
//             >
//               View Details
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

const categoryColors = {
  Technology: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Languages: "bg-yellow-100 text-yellow-800",
  "Life Coach": "bg-purple-100 text-purple-800",
  Art: "bg-pink-100 text-pink-800",
  Music: "bg-indigo-100 text-indigo-800",
  Others: "bg-gray-100 text-gray-800",
};

const filterOptions = ["Latest", "Relevant"];

const SkillsFeed = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Latest");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/skills");
        const data = await response.json();
        setSkills(data.skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const filteredSkills = useMemo(() => {
    let filtered = [...skills];

    if (searchTerm) {
      filtered = filtered.filter((skill) =>
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFilter === "Latest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return filtered;
  }, [skills, searchTerm, selectedFilter]);

  const groupedSkills = useMemo(() => {
    const groups = {};
    filteredSkills.forEach((skill) => {
      const cat = skill.category || "Others";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(skill);
    });
    return groups;
  }, [filteredSkills]);

  const getCategoryClass = (category) =>
    categoryColors[category] || categoryColors["Others"];

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
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {filterOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Main Content with Sidebar and Feed */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        {/* <div className="w-full md:w-64 bg-white p-4 rounded-xl shadow-md border border-gray-200"> */}
        
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
            <input type="checkbox" className="accent-blue-500" />
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
            <input type="checkbox" className="accent-yellow-500" />
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
    <button className="w-full text-sm mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition">
      Reset Filters
    </button>
  </div>
</div>


        {/* Feed Section */}
        <div className="flex-1 space-y-12">
          {loading ? (
            <p className="text-center text-gray-600 text-lg">Loading skills...</p>
          ) : (
            <>
              {filteredSkills.length > 0 && (
                <Section
                  title="Recommended For You"
                  skills={filteredSkills.slice(0, 6)}
                  getCategoryClass={getCategoryClass}
                  navigate={navigate}
                />
              )}

              {Object.entries(groupedSkills).map(([category, skills]) => (
                <Section
                  key={category}
                  title={category}
                  skills={skills}
                  getCategoryClass={getCategoryClass}
                  navigate={navigate}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Section Component
const Section = ({ title, skills, getCategoryClass, navigate }) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-5 px-1">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-4 flex flex-col"
        >
          <div className="relative">
            <img
              src={skill.image || "https://via.placeholder.com/300x200"}
              alt={skill.name}
              className="w-full h-44 object-cover rounded-xl"
            />
            <div
              className={`absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full ${getCategoryClass(
                skill.category
              )}`}
            >
              {skill.category}
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-between mt-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                {skill.description}
              </p>
            </div>

            <p className="mt-3 text-sm text-blue-600 font-medium">
              Wants to learn: {skill.skillWantedInReturn}
            </p>

            <button
              onClick={() => navigate(`/Dashboard/skill/${skill.id}`)}
              className="mt-4 bg-black hover:bg-black text-white font-medium py-2 rounded-md text-sm transition"
            >
              Send Request
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);



export default SkillsFeed;
