// import React from "react";
// import { FaRegBookmark, FaBookmark } from "react-icons/fa";
// import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
// import {DefaultIMG} from '../assets/DefaultLM.png';

// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-0 text-[#f19812] text-sm">
//       {[...Array(fullStars)].map((_, i) => <MdStarRate key={`full-${i}`} />)}
//       {hasHalfStar && <MdOutlineStarHalf />}
//       {[...Array(emptyStars)].map((_, i) => <MdStarBorder key={`empty-${i}`} />)}
//     </div>
//   );
// };

// const SkillCard = ({
//   skill,
//   isBookmarked,
//   onBookmarkToggle,
//   onSendRequest,
// }) => {
//   return (
//     <div className="relative bg-white rounded-x shadow-sm hover:shadow-md transition duration-200 border border-gray-100 p-3 flex flex-col space-y-2">
//       <button
//         onClick={() => onBookmarkToggle(skill.id)}
//         className="absolute top-3 right-3 text-xl text-gray-500"
//       >
//         {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
//       </button>

//       <div className="flex items-center gap-2">
//         {skill.user?.profilePicture ? (
//           <img
//             src={`http://localhost:3000${skill.user.profilePicture}`}
//             alt={skill.user.name}
//             className="w-8 h-8 rounded-full object-cover"
//           />
//         ) : (
//           <div className="w-8 h-8 rounded-full bg-green-200 text-white flex items-center justify-center text-xs font-bold uppercase">
//             {skill.user?.name?.slice(0, 2) || "NA"}
//           </div>
//         )}

//         <div className="flex flex-col">
//           <span className="font-semibold text-gray-800 text-sm">
//             {skill.user?.name || "Unknown User"}
//           </span>
//           <div className="flex items-center gap-1 text-xs text-gray-500">
//             {renderStars(skill.averageRating || 0)}
//             <span className="ml-1 text-gray-500">({skill.reviewCount || 0})</span>
//           </div>
//         </div>
//       </div>

//       <div className="mt-4">
//         <p className="text-sm font-medium text-gray-700 mb-2">Skills I Can Teach:</p>
//         <div className="flex flex-wrap gap-2">
//           {skill.skillsOffered?.map((s, i) => (
//             <span key={i} className="px-2 py-[2px] bg-blue-100 text-blue-700 text-xs rounded-full">
//               {s}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="mt-4">
//         <p className="text-sm font-medium text-gray-700 mb-2">Skills I Want to Learn:</p>
//         <div className="flex flex-wrap gap-2">
//           {skill.skillsWanted?.map((s, i) => (
//             <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
//               {s}
//             </span>
//           ))}
//         </div>
//       </div>

//       <hr className="my-3" />

//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 gap-2">
//         <span>
//           Member since{" "}
//           {skill.user?.createdAt
//             ? new Date(skill.user.createdAt).toLocaleString("en-US", {
//                 month: "long",
//                 year: "numeric",
//               })
//             : "July"}
//         </span>
//         <button
//           onClick={() => onSendRequest(skill.id)}
//           className="bg-black text-white px-4 py-2 sm:py-1 rounded-md text-sm hover:bg-gray-800 transition"
//         >
//           Send Request
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SkillCard;















// import React from "react";
// import { FaRegBookmark, FaBookmark } from "react-icons/fa";
// import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
// import DefaultIMG from "../../../assets/DefaultLM.png"; // ✅ Make sure it's a default export or use curly braces if it's named
// const backendUrl = import.meta.env.VITE_BACKEND_URL;





// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-0 text-[#f19812] text-sm">
//       {[...Array(fullStars)].map((_, i) => <MdStarRate key={`full-${i}`} />)}
//       {hasHalfStar && <MdOutlineStarHalf />}
//       {[...Array(emptyStars)].map((_, i) => <MdStarBorder key={`empty-${i}`} />)}
//     </div>
//   );
// };

// const SkillCard = ({
//   skill,
//   isBookmarked,
//   onBookmarkToggle,
//   onSendRequest,
// }) => {



//   console.log("SkillCard is : ", skill);

//   return (
//     <div className="relative bg-white rounded-x shadow-sm hover:shadow-md transition duration-200 border border-gray-100 p-3 flex flex-col space-y-2">

//       {/* Bookmark Icon */}
//       <button
//         onClick={() => onBookmarkToggle(skill.id)}
//         className="absolute top-3 right-3 text-xl text-gray-500"
//       >
//         {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
//       </button>

//       {/* Profile Header */}
//       <div className="flex items-center gap-2">
//         {skill.user?.profilePicture ? (
//           // <img
//           //   src={`${backendUrl}${skill.user.profilePicture}`}
//           //   alt={skill.user.name}
//           //   className="w-8 h-8 rounded-full object-cover"
//           // />

//           <img
//             src={`${backendUrl.replace(/\/$/, '')}${skill.user.profilePicture}`}
//             alt={skill.user.name}
//             className="w-8 h-8 rounded-full object-cover"
//           />

//         ) : (
//           <div className="w-8 h-8 rounded-full bg-green-200 text-white flex items-center justify-center text-xs font-bold uppercase">
//             {skill.user?.name?.slice(0, 2) || "NA"}
//           </div>
//         )}

//         <div className="flex flex-col">
//           <span className="font-semibold text-gray-800 text-sm">
//             {skill.user?.name || "Unknown User"}
//           </span>
//           <div className="flex items-center gap-1 text-xs text-gray-500">
//             {renderStars(skill.averageRating || 0)}
//             <span className="ml-1 text-gray-500">({skill.reviewCount || 0})</span>
//           </div>
//         </div>
//       </div>

//       {/* Default Header Image Strip */}
//       <div className="w-full mt-4">
//         <img
//           src={DefaultIMG}
//           alt="Default Skill Header"
//           className="w-full h-24 object-cover rounded-md"
//         />
//       </div>

//       {/* Skills Offered */}
//       <div className="mt-4">
//         <p className="text-sm font-medium text-gray-700 mb-2">Skills Offered:</p>
//         <div className="flex flex-wrap gap-2">
//           {skill.skillsOffered?.map((s, i) => (
//             <span key={i} className="px-2 py-[2px] bg-blue-100 text-blue-700 text-xs rounded-full">
//               {s}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Skills Wanted */}
//       <div className="mt-4">
//         <p className="text-sm font-medium text-gray-700 mb-2">Seeking to Learn:</p>
//         <div className="flex flex-wrap gap-2">
//           {skill.skillsWanted?.map((s, i) => (
//             <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
//               {s}
//             </span>
//           ))}
//         </div>
//       </div>

//       <hr className="my-3" />

//       {/* Footer */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 gap-2">
//         <span>
//           Member since{" "}
//           {skill.user?.createdAt
//             ? new Date(skill.user.createdAt).toLocaleString("en-US", {
//                 month: "long",
//                 year: "numeric",
//               })
//             : "July"}
//         </span>
//         <button
//           onClick={() => onSendRequest(skill.id)}
//           className="bg-black text-white px-4 py-2 sm:py-1 rounded-md text-sm hover:bg-gray-800 transition"
//         >
//           Send Request
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SkillCard;





import React from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
import DefaultIMG from "../../../assets/DefaultLM.png";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

// ⭐ Utility to normalize image URLs
const getImageUrl = (path, fallback = DefaultIMG) => {
  if (!path) return fallback;
  const normalizedPath = path.startsWith("/") ? path.substring(1) : path;
  return `${backendUrl.replace(/\/$/, '')}/${normalizedPath}`;
};

// ⭐ Render stars for rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0 text-[#f19812] text-sm">
      {[...Array(fullStars)].map((_, i) => <MdStarRate key={`full-${i}`} />)}
      {hasHalfStar && <MdOutlineStarHalf />}
      {[...Array(emptyStars)].map((_, i) => <MdStarBorder key={`empty-${i}`} />)}
    </div>
  );
};

const SkillCard = ({ skill, isBookmarked, onBookmarkToggle, onSendRequest }) => {

  console.log("SkillCard is : ", skill);

  // #1F2333

  // #22263A

  // #242A3B

  // #2A2F45

  // #eeecf5

  return (
    <div className="relative bg-white rounded-sm hover:shadow-md transition duration-200 border border-gray-300 p-3 flex flex-col space-y-2">

      {/* Bookmark Icon */}
      <button
        onClick={() => onBookmarkToggle(skill.id)}
        className="absolute top-3 right-3 text-xl text-gray-500"
      >
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </button>

      {/* Profile Header */}
      <div className="flex items-center gap-2">
        <img
          src={getImageUrl(skill.user?.profilePicture)}
          alt={skill.user?.name || "User"}
          className="w-8 h-8 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 text-sm">
            {skill.user?.name || "Unknown User"}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            {renderStars(skill.averageRating || 0)}
            <span className="ml-1 text-gray-500">({skill.reviewCount || 0})</span>
          </div>
        </div>
      </div>

      {/* Skill Image */}
      <div className="w-full mt-4">
        <img
          src={getImageUrl(skill.image)}
          alt="Skill"
          className="w-full h-24 object-cover rounded-md"
        />
      </div>

      {/* Skills Offered */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Skills Offered:</p>
        <div className="flex flex-wrap gap-2">
          {skill.skillsOffered?.map((s, i) => (
            <span key={i} className="px-2 py-[2px] bg-blue-100 text-blue-700 text-xs rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Skills Wanted */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Seeking to Learn:</p>
        <div className="flex flex-wrap gap-2">
          {skill.skillsWanted?.map((s, i) => (
            <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>

      <hr className="my-3" />

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 gap-2">
        <span>
          Member since{" "}
          {skill.user?.createdAt
            ? new Date(skill.user.createdAt).toLocaleString("en-US", { month: "long", year: "numeric" })
            : "July"}
        </span>
        <button
          onClick={() => onSendRequest(skill.id)}
          className="bg-black text-white px-4 py-2 sm:py-1 rounded-md text-sm hover:bg-gray-800 transition"
        >
          Send Request
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
