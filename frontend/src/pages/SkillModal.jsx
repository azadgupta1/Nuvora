// import { useState } from "react";
// // import { addOrUpdateSkill } from "../../services/skillServices";

// export default function SkillModal({ isOpen, onClose }) {
//   const [skillsOffered, setSkillsOffered] = useState([]);
//   const [skillsWanted, setSkillsWanted] = useState([]);
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [location, setLocation] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await addOrUpdateSkill({
//         skillsOffered,
//         skillsWanted,
//         category,
//         description,
//         location,
//       });
//       onClose(); // Close modal after success
//     } catch (err) {
//       setError(err.message || "Failed to save skill profile");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-xl p-6 w-full max-w-lg">
//         <h2 className="text-xl font-bold mb-4 text-blue-700">Set Up Your Skills</h2>
//         {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Offered Skills */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Skills You Can Teach</label>
//             <input
//               type="text"
//               placeholder="e.g. Guitar, Python"
//               className="w-full p-2 border rounded mt-1"
//               onChange={(e) => setSkillsOffered(e.target.value.split(","))}
//             />
//             <p className="text-xs text-gray-500">Separate with commas</p>
//           </div>

//           {/* Wanted Skills */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Skills You Want to Learn</label>
//             <input
//               type="text"
//               placeholder="e.g. Cooking, Design"
//               className="w-full p-2 border rounded mt-1"
//               onChange={(e) => setSkillsWanted(e.target.value.split(","))}
//             />
//           </div>

//           {/* Optional Fields */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Category</label>
//             <input
//               type="text"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               placeholder="Music, Tech, Arts..."
//               className="w-full p-2 border rounded mt-1"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Briefly describe your skill exchange preference"
//               className="w-full p-2 border rounded mt-1"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">Location</label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="Online / City Name"
//               className="w-full p-2 border rounded mt-1"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//           >
//             Save Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }














import { useState } from "react";
import axios from "axios";

export default function SkillModal({ isOpen, onClose }) {
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("User is not authenticated.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/skills",
        {
          skillsOffered,
          skillsWanted,
          category,
          description,
          location,
          availability: [], // You can add availability handling later
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Skill profile saved:", res.data);
      onClose(); // Close modal on success
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to save skill profile.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-blue-700">Set Up Your Skills</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Skills Offered */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Skills You Can Teach
            </label>
            <input
              type="text"
              placeholder="e.g. Guitar, Python"
              className="w-full p-2 border rounded mt-1"
              onChange={(e) => setSkillsOffered(e.target.value.split(",").map(s => s.trim()))}
            />
            <p className="text-xs text-gray-500">Separate with commas</p>
          </div>

          {/* Skills Wanted */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Skills You Want to Learn
            </label>
            <input
              type="text"
              placeholder="e.g. Cooking, Design"
              className="w-full p-2 border rounded mt-1"
              onChange={(e) => setSkillsWanted(e.target.value.split(",").map(s => s.trim()))}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Music, Tech, Arts..."
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe your skill exchange preference"
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Online / City Name"
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
