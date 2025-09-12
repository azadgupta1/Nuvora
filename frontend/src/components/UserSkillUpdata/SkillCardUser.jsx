// // components/Profile/SkillCard.jsx
// import React from "react";

// const Badge = ({ children, color = "indigo" }) => (
//   <span
//     className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${color}-100 text-${color}-800`}
//   >
//     {children}
//   </span>
// );

// const SkillCardUser = ({ skill, backendUrl, onEditClick }) => {
//   return (
//     <div className="bg-white rounded-xl p-6 border-2 border-gray-200 relative w-full">
//       <button
//         onClick={onEditClick}
//         className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//       >
//         ✎
//       </button>

//       <div className="flex flex-col items-center text-center">
//         <img
//           src={skill.image ? `${backendUrl}${skill.image}` : "https://via.placeholder.com/150"}
//           alt="Skill Thumbnail"
//           className="w-32 h-32 rounded-xl object-cover border shadow-sm"
//         />
//         <h3 className="text-xl font-semibold text-gray-900 mt-4">{skill.category || "Uncategorized Skill"}</h3>
//         <p className="text-gray-600 mt-1">{skill.description || "No description provided."}</p>
//       </div>

//       <div className="mt-6 grid sm:grid-cols-2 gap-6 text-center sm:text-left">
//         <div>
//           <h4 className="font-semibold text-gray-700 mb-2">Skills Offered</h4>
//           <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
//             {skill.skillsOffered?.length > 0 ? skill.skillsOffered.map((s, i) => <Badge key={i}>{s}</Badge>) : <p className="text-gray-500 text-sm">No skills listed</p>}
//           </div>
//         </div>
//         <div>
//           <h4 className="font-semibold text-gray-700 mb-2">Skills Wanted</h4>
//           <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
//             {skill.skillsWanted?.length > 0 ? skill.skillsWanted.map((s, i) => <Badge key={i} color="emerald">{s}</Badge>) : <p className="text-gray-500 text-sm">No skills listed</p>}
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 space-y-2 text-gray-700 text-center sm:text-left">
//         {skill.duration && <p>⏳ <strong>Duration:</strong> {skill.duration}</p>}
//         {skill.location && <p>📍 <strong>Location:</strong> {skill.location}</p>}
//       </div>
//     </div>
//   );
// };

// export default SkillCardUser;





import React from "react";
import { Pencil } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";



const Badge = ({ children, color = "indigo" }) => (
  <span
    className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-${color}-500/10 text-${color}-600 border border-${color}-500/20`}
  >
    {children}
  </span>
);

const SkillCardUser = ({ skill, backendUrl, onEditClick }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden relative w-full">
      
      {/* Edit Button */}
      <button
        onClick={onEditClick}
        className="absolute top-3 right-3 p-2 rounded-full bg-black/70  transition"
        title="Edit Skill"
      >
        <MdEditSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Thumbnail */}
      <img
        src={skill.image ? `${skill.image}` : "https://via.placeholder.com/600x200"}
        alt="Skill Thumbnail"
        className="w-full h-48 object-cover"
      />


      {/* Content */}
      <div className="p-6">
        {/* Category + Description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {skill.category || "Uncategorized Skill"}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {skill.description || "No description provided."}
        </p>

        <hr className="py-3 text-gray-300" />
        {/* Skills Offered & Wanted */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="inline-block text-sm font-semibold text-gray-900 bg-gray-200 py-1 px-3 rounded-lg mb-2">Skills You Can Teach</h4>
            <div className="flex flex-wrap gap-2">
              {skill.skillsOffered?.length > 0 ? (
                skill.skillsOffered.map((s, i) => (
                  <Badge key={i}>{s}</Badge>
                ))
              ) : (
                <p className="text-gray-400 text-sm">None listed</p>
              )}
            </div>
          </div>
          <div>
            <h4 className="inline-block text-sm font-semibold text-gray-900 bg-gray-200 py-1 px-3 rounded-lg mb-2">Skills You Want to Learn</h4>
            <div className="flex flex-wrap gap-2">
              {skill.skillsWanted?.length > 0 ? (
                skill.skillsWanted.map((s, i) => (
                  <Badge key={i} color="emerald">{s}</Badge>
                ))
              ) : (
                <p className="text-gray-400 text-sm">None listed</p>
              )}
            </div>
          </div>
        </div>

        <hr className="py-3 text-gray-300" />

        {/* Extra Info */}
        <div className="space-y-1 text-md text-gray-700">
          {skill.duration && (
            <p className="flex flex-row gap-1 items-center">
                <span className="text-red-300"><CiTimer /></span>
               <span className="font-medium"> Duration:</span> {skill.duration}
            </p>
          )}
          {skill.location && (
            <p className="flex flex-row gap-1 items-center">
              <span className="text-blue-400"><IoLocationOutline /></span>
              <span className="font-medium">Location:</span> {skill.location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCardUser;
