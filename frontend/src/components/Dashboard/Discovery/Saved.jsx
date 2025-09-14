// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SkillCard from "./SkillCard"; // ✅ adjust path if needed

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// function Saved() {
//   const [savedSkills, setSavedSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSavedSkills = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("User not authenticated.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await axios.get(`${backendUrl}/api/bookmark`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setSavedSkills(res.data); // ✅ should be an array of skills
//       } catch (err) {
//         console.error(err);
//         setError(err.response?.data?.message || "Failed to fetch saved skills.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSavedSkills();
//   }, []);

//   if (loading) return <p className="p-4">Loading saved skills...</p>;
//   if (error) return <p className="p-4 text-red-600">{error}</p>;

//   return (
//     <div className="p-6 mx-30">
//       <h1 className="text-xl font-semibold mb-4">Saved Skills</h1>

//       {savedSkills.length === 0 ? (
//         <p className="text-gray-500">No saved skills yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {savedSkills.map((skill) => (
//             <SkillCard key={skill.id} skill={skill} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Saved;












import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillCard from "./SkillCard"; // ✅ adjust path if needed

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Saved() {
  const [savedSkills, setSavedSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSavedSkills = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${backendUrl}/api/bookmark`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSavedSkills(res.data); // ✅ should be an array of skills
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to fetch saved skills.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedSkills();
  }, []);

  if (loading) return <p className="p-4">Loading saved skills...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 sm:mx-25">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left ">
        Saved Skills
      </h1>

      {savedSkills.length === 0 ? (
        <p className="text-gray-500 text-center">No saved skills yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Saved;
