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





// import React from "react";
// import { FaRegBookmark, FaBookmark } from "react-icons/fa";
// import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
// import DefaultIMG from "../../../assets/DefaultLM.png";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// // ⭐ Utility to normalize image URLs
// const getImageUrl = (path, fallback = DefaultIMG) => {
//   if (!path) return fallback;
//   const normalizedPath = path.startsWith("/") ? path.substring(1) : path;
//   return `${backendUrl.replace(/\/$/, '')}/${normalizedPath}`;
// };

// // ⭐ Render stars for rating
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

// const SkillCard = ({ skill, isBookmarked, onBookmarkToggle, onSendRequest }) => {

//   console.log("SkillCard is : ", skill);

//   // #1F2333

//   // #22263A

//   // #242A3B

//   // #2A2F45

//   // #eeecf5

//   return (
//     <div className="relative bg-white rounded-sm hover:shadow-md transition duration-200 border border-gray-300 p-3 flex flex-col space-y-2">

//       {/* Bookmark Icon */}
//       <button
//         onClick={() => onBookmarkToggle(skill.id)}
//         className="absolute top-3 right-3 text-xl text-gray-500"
//       >
//         {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
//       </button>

//       {/* Profile Header */}
//       <div className="flex items-center gap-2">
//         <img
//           src={getImageUrl(skill.user?.profilePicture)}
//           alt={skill.user?.name || "User"}
//           className="w-8 h-8 rounded-full object-cover"
//         />

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

//       {/* Skill Image */}
//       <div className="w-full mt-4">
//         <img
//           src={skill.image}
//           alt="Skill"
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
//             ? new Date(skill.user.createdAt).toLocaleString("en-US", { month: "long", year: "numeric" })
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
// import { HiOutlinePaperAirplane } from "react-icons/hi2";
// import { BsCalendar3 } from "react-icons/bs";
// import DefaultIMG from "../../../assets/DefaultLM.png";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// // ⭐ Utility to normalize image URLs
// const getImageUrl = (path, fallback = DefaultIMG) => {
//   if (!path) return fallback;
//   const normalizedPath = path.startsWith("/") ? path.substring(1) : path;
//   return `${backendUrl.replace(/\/$/, "")}/${normalizedPath}`;
// };

// // ⭐ Render stars for rating
// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-0 text-[#f19812] text-sm">
//       {[...Array(fullStars)].map((_, i) => (
//         <MdStarRate key={`full-${i}`} />
//       ))}
//       {hasHalfStar && <MdOutlineStarHalf />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <MdStarBorder key={`empty-${i}`} />
//       ))}
//     </div>
//   );
// };

// const SkillCard = ({ skill, isBookmarked, onBookmarkToggle, onSendRequest }) => {
//   return (
//     <div className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col">
//       {/* Skill Image */}
//       <div className="relative w-full h-32">
//         <img
//           src={skill.image}
//           alt="Skill"
//           className="w-full h-full object-cover"
//         />
//         {/* Bookmark Icon */}
//         <button
//           onClick={() => onBookmarkToggle(skill.id)}
//           className="absolute top-3 right-3 text-xl text-gray-600 hover:text-indigo-600 transition"
//         >
//           {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
//         </button>
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col space-y-4">
//         {/* Profile & Rating */}
//         <div className="flex items-center gap-3">
//           <img
//             src={getImageUrl(skill.user?.profilePicture)}
//             alt={skill.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover border"
//           />
//           <div>
//             <h3 className="font-semibold text-gray-900 text-sm">
//               {skill.user?.name || "Unknown User"}
//             </h3>
//             <div className="flex items-center gap-1 text-xs text-gray-500">
//               {renderStars(skill.averageRating || 0)}
//               <span className="ml-1 text-gray-500">
//                 ({skill.reviewCount || 0})
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Skills Offered */}
//         <div>
//           <p className="text-xs font-medium text-gray-600 mb-2">
//             Skills Offered
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {skill.skillsOffered?.map((s, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Skills Wanted */}
//         <div>
//           <p className="text-xs font-medium text-gray-600 mb-2">
//             Seeking to Learn
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {skill.skillsWanted?.map((s, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3">
//           <div className="flex items-center gap-1">
//             <BsCalendar3 className="text-gray-400" />
//             <span>
//               {skill.user?.createdAt
//                 ? new Date(skill.user.createdAt).toLocaleString("en-US", {
//                     month: "long",
//                     year: "numeric",
//                   })
//                 : "July 2023"}
//             </span>
//           </div>
//           <button
//             onClick={() => onSendRequest(skill.id)}
//             className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-indigo-700 transition"
//           >
//             <HiOutlinePaperAirplane className="text-sm" />
//             Send Request
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillCard;











































// import React, { useState } from "react";
// import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
// import { HiOutlinePaperAirplane } from "react-icons/hi2";
// import { BsCalendar3 } from "react-icons/bs";
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import DefaultIMG from "../../../assets/DefaultLM.png";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// // ⭐ Utility to normalize image URLs
// const getImageUrl = (path, fallback = DefaultIMG) => {
//   if (!path) return fallback;
//   const normalizedPath = path.startsWith("/") ? path.substring(1) : path;
//   return `${backendUrl.replace(/\/$/, "")}/${normalizedPath}`;
// };

// // ⭐ Render stars for rating
// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-0 text-[#f19812] text-sm">
//       {[...Array(fullStars)].map((_, i) => (
//         <MdStarRate key={`full-${i}`} />
//       ))}
//       {hasHalfStar && <MdOutlineStarHalf />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <MdStarBorder key={`empty-${i}`} />
//       ))}
//     </div>
//   );
// };

// const SkillCard = ({ skill, onBookmarkToggle, onSendRequest }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [toast, setToast] = useState(null);

//   // Show toast
//   const showToast = (message) => {
//     setToast(message);
//     setTimeout(() => setToast(null), 3000); // auto-hide after 3s
//   };

//   return (
//     <div className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col">
//       {/* Skill Image */}
//       <div className="relative w-full h-32">
//         <img
//           src={skill.image}
//           alt="Skill"
//           className="w-full h-full object-cover"
//         />

//         {/* Three Dots Menu */}
//         <div className="absolute top-3 right-3">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-xl text-gray-700 hover:text-indigo-600 transition"
//           >
//             <HiOutlineDotsVertical />
//           </button>

//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md text-sm z-10">
//               <button
//                 onClick={() => {
//                   onBookmarkToggle(skill.id);
//                   showToast("Skill bookmarked!");
//                   setMenuOpen(false);
//                 }}
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 📑 Bookmark this skill
//               </button>
//               <button
//                 onClick={() => {
//                   showToast("Reported this skill!");
//                   setMenuOpen(false);
//                 }}
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 🚩 Report skill
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col space-y-4">
//         {/* Profile & Rating */}
//         <div className="flex items-center gap-3">
//           <img
//             src={getImageUrl(skill.user?.profilePicture)}
//             alt={skill.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover border"
//           />
//           <div>
//             <h3 className="font-semibold text-gray-900 text-sm">
//               {skill.user?.name || "Unknown User"}
//             </h3>
//             <div className="flex items-center gap-1 text-xs text-gray-500">
//               {renderStars(skill.averageRating || 0)}
//               <span className="ml-1 text-gray-500">
//                 ({skill.reviewCount || 0})
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Skills Offered */}
//         <div>
//           <p className="text-xs font-medium text-gray-600 mb-2">
//             Skills Offered
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {skill.skillsOffered?.map((s, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Skills Wanted */}
//         <div>
//           <p className="text-xs font-medium text-gray-600 mb-2">
//             Seeking to Learn
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {skill.skillsWanted?.map((s, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3">
//           <div className="flex items-center gap-1">
//             <BsCalendar3 className="text-gray-400" />
//             <span>
//               {skill.user?.createdAt
//                 ? new Date(skill.user.createdAt).toLocaleString("en-US", {
//                     month: "long",
//                     year: "numeric",
//                   })
//                 : "July 2023"}
//             </span>
//           </div>
//           <button
//             onClick={() => onSendRequest(skill.id)}
//             className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-indigo-700 transition"
//           >
//             <HiOutlinePaperAirplane className="text-sm" />
//             Send Request
//           </button>
//         </div>
//       </div>

//       {/* Toast Notification */}
//       {toast && (
//         <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in-out">
//           <span>{toast}</span>
//           <button
//             onClick={() => setToast(null)}
//             className="ml-2 text-white font-bold hover:text-gray-300"
//           >
//             ✕
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SkillCard;














// import React, { useState } from "react";
// import { FaEllipsisV } from "react-icons/fa";
// import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
// import { HiOutlinePaperAirplane } from "react-icons/hi2";
// import { BsCalendar3 } from "react-icons/bs";
// import DefaultIMG from "../../../assets/DefaultLM.png";

// import Tech_1 from "../../../assets/Tech_1.jpg";
// import Tech_2 from "../../../assets/Tech_2.png";
// import Tech_3 from "../../../assets/Tech_3.jpg";

// import Cod_1 from "../../../assets/Cod_1.png";
// import Cod_2 from "../../../assets/Cod_2.jpg";
// import Cod_3 from "../../../assets/Cod_3.jpg";

// import Lan_1 from "../../../assets/Lan_1.jpg";
// import Lan_2 from "../../../assets/Lan_2.png";
// import Lan_3 from "../../../assets/Lan_3.png";

// import Art_1 from "../../../assets/Art_1.jpg";
// import Art_2 from "../../../assets/Art_2.png";


// import LF_1 from "../../../assets/LF_1.jpeg";
// import LF_2 from "../../../assets/LF_2.jpg";

// import GM_1 from "../../../assets/GM_1.jpg";
// import GM_2 from "../../../assets/GM_2.jpg";


// import Mus_1 from "../../../assets/Mus_1.jpg";
// import Mus_2 from "../../../assets/Mus_2.jpg";
// import Mus_3 from "../../../assets/Mus_3.png";


// import toast, { Toaster } from "react-hot-toast";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// // ⭐ Utility to normalize image URLs
// const getImageUrl = (path, fallback = DefaultIMG) => {
//   if (!path) return fallback;
//   const normalizedPath = path.startsWith("/") ? path.substring(1) : path;
//   return `${backendUrl.replace(/\/$/, "")}/${normalizedPath}`;
// };

// // ⭐ Render stars for rating
// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-0 text-[#f19812] text-sm">
//       {[...Array(fullStars)].map((_, i) => (
//         <MdStarRate key={`full-${i}`} />
//       ))}
//       {hasHalfStar && <MdOutlineStarHalf />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <MdStarBorder key={`empty-${i}`} />
//       ))}
//     </div>
//   );
// };

// const SkillCard = ({ skill, isBookmarked, onBookmarkToggle, onSendRequest }) => {
//   const [menuOpen, setMenuOpen] = useState(false);


//   console.log("Skill data is : ",skill);

//   const handleBookmark = () => {
//     onBookmarkToggle(skill.id);
//     toast.success("Bookmarked this skill 🤝", {
//       style: {
//         background: "#000",
//         color: "#fff",
//         fontSize: "14px",
//       },
//       icon: "✅",
//     });
//     setMenuOpen(false);
//   };

//   return (
//     <div className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col">
//       {/* Skill Image */}
//       <div className="relative w-full h-32">
//         <img
//           src={skill.image || GM_2}





//           alt="Skill"
//           className="w-full h-full object-cover"
//         />

//         {/* Three Dots Menu */}
//         <div className="absolute top-3 right-3">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-xl text-gray-700 hover:text-indigo-600"
//           >
//             <FaEllipsisV />
//           </button>

//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
//               <button
//                 onClick={handleBookmark}
//                 className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//               >
//                 {isBookmarked ? "Remove Bookmark" : "Bookmark this Skill"}
//               </button>
//               <button
//                 onClick={() => {
//                   toast("Coming soon 🚀", {
//                     style: { background: "#000", color: "#fff" },
//                   });
//                   setMenuOpen(false);
//                 }}
//                 className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//               >
//                 Share Skill
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col space-y-4">
//         {/* Profile & Rating */}
//         <div className="flex items-center gap-3">
//           {/* <img
//             src={skill.user.profilePicture}
//             alt={skill.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover border"
//           /> */}

//           <img
//             src={
//               skill.user.profilePicture
//                 ? skill.user.profilePicture
//                 : `https://ui-avatars.com/api/?name=${encodeURIComponent(skill.user.name || 'User')}&background=random`
//             }
//             alt={skill.user?.name || 'User'}
//             className="w-10 h-10 rounded-full object-cover border"
//           />



//           <div>
//             <h3 className="font-semibold text-gray-900 text-sm">
//               {skill.user?.name || "Unknown User"}
//             </h3>
//             <div className="flex items-center gap-1 text-xs text-gray-500">
//               {renderStars(skill.averageRating || 0)}
//               <span className="ml-1 text-gray-500">
//                 ({skill.reviewCount || 0})
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Skills Offered */}
//         <div>
//           <p className="text-xs font-medium text-gray-600 mb-2">Skills Offered</p>
//           <div className="flex flex-wrap gap-2">
//             {skill.skillsOffered?.map((s, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Skills Wanted */}
//         <div>
//           <p className="text-xs font-medium text-gray-600 mb-2">Seeking to Learn</p>
//           <div className="flex flex-wrap gap-2">
//             {skill.skillsWanted?.map((s, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3">
//           <div className="flex items-center gap-1">
//             <BsCalendar3 className="text-gray-400" />
//             <span>
//               {skill.user?.createdAt
//                 ? new Date(skill.user.createdAt).toLocaleString("en-US", {
//                     month: "long",
//                     year: "numeric",
//                   })
//                 : "July 2023"}
//             </span>
//           </div>
//           <button
//             onClick={() => onSendRequest(skill.id)}
//             className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-indigo-700 transition"
//           >
//             <HiOutlinePaperAirplane className="text-sm" />
//             Send Request
//           </button>
//         </div>
//       </div>

//       {/* Toaster inside SkillCard (works globally) */}
//       <Toaster position="top-right" />
//     </div>
//   );
// };

// export default SkillCard;























import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { BsCalendar3 } from "react-icons/bs";
import DefaultIMG from "../../../assets/DefaultLM.png";
import { IoMdSend } from "react-icons/io";


import Tech_1 from "../../../assets/Tech_1.jpg";
import Tech_2 from "../../../assets/Tech_2.png";
import Tech_3 from "../../../assets/Tech_3.jpg";

import Cod_1 from "../../../assets/Cod_1.png";
import Cod_2 from "../../../assets/Cod_2.jpg";
import Cod_3 from "../../../assets/Cod_3.jpg";

import Lan_1 from "../../../assets/Lan_1.jpg";
import Lan_2 from "../../../assets/Lan_2.png";
import Lan_3 from "../../../assets/Lan_3.png";

import Art_1 from "../../../assets/Art_1.jpg";
import Art_2 from "../../../assets/Art_2.png";

import LF_1 from "../../../assets/LF_1.jpeg";
import LF_2 from "../../../assets/LF_2.jpg";

import GM_1 from "../../../assets/GM_1.jpg";
import GM_2 from "../../../assets/GM_2.jpg";

import Mus_1 from "../../../assets/Mus_1.jpg";
import Mus_2 from "../../../assets/Mus_2.jpg";
import Mus_3 from "../../../assets/Mus_3.png";

import toast, { Toaster } from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

// ⭐ Category → Images mapping
const categoryImages = {
  Technology: [Tech_1, Tech_2, Tech_3],
  Coding: [Cod_1, Cod_2, Cod_3],
  Languages: [Lan_1, Lan_2, Lan_3],
  Art: [Art_1, Art_2],
  LifeCoach: [LF_1, LF_2],
  Sports: [GM_1, GM_2],
  Music: [Mus_1, Mus_2, Mus_3],
};

// ⭐ Get random image based on category
const getRandomCategoryImage = (category) => {
  const images = categoryImages[category];
  if (!images || images.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// ⭐ Render stars for rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0 text-[#f19812] text-sm">
      {[...Array(fullStars)].map((_, i) => (
        <MdStarRate key={`full-${i}`} />
      ))}
      {hasHalfStar && <MdOutlineStarHalf />}
      {[...Array(emptyStars)].map((_, i) => (
        <MdStarBorder key={`empty-${i}`} />
      ))}
    </div>
  );
};

const SkillCard = ({ skill, isBookmarked, onBookmarkToggle, onSendRequest }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ⭐ Decide which image to show
  const randomCategoryImage = getRandomCategoryImage(skill.category);
  const imageToShow = skill.image || randomCategoryImage || DefaultIMG;

  const handleBookmark = () => {
    onBookmarkToggle(skill.id);
    toast.success("Bookmarked this skill 🤝", {
      style: {
        background: "#000",
        color: "#fff",
        fontSize: "14px",
      },
      icon: "✅",
    });
    setMenuOpen(false);
  };

  return (
    <div className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col">
      {/* Skill Image */}
      <div className="relative w-full h-32">
        <img
          src={imageToShow}
          alt="Skill"
          className="w-full h-full object-cover"
        />

        {/* Three Dots Menu */}
        <div className="absolute top-3 right-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-gray-700 hover:text-indigo-600"
          >
            <FaEllipsisV />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
              <button
                onClick={handleBookmark}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {isBookmarked ? "Remove Bookmark" : "Bookmark this Skill"}
              </button>
              <button
                onClick={() => {
                  toast("Coming soon 🚀", {
                    style: { background: "#000", color: "#fff" },
                  });
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Share Skill
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col space-y-4">
        {/* Profile & Rating */}
        <div className="flex items-center gap-3">
          <img
            src={
              skill.user.profilePicture
                ? skill.user.profilePicture
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    skill.user.name || "User"
                  )}&background=random`
            }
            alt={skill.user?.name || "User"}
            className="w-10 h-10 rounded-full object-cover border"
          />

          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              {skill.user?.name || "Unknown User"}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              {renderStars(skill.averageRating || 0)}
              <span className="ml-1 text-gray-500">
                ({skill.reviewCount || 0})
              </span>
            </div>
          </div>
        </div>

        {/* Skills Offered */}
        <div>
          <p className="text-xs font-medium text-gray-600 mb-2">Skills Offered</p>
          <div className="flex flex-wrap gap-2">
            {skill.skillsOffered?.map((s, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-black text-white text-xs rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Wanted */}
        <div>
          <p className="text-xs font-medium text-gray-600 mb-2">Seeking to Learn</p>
          <div className="flex flex-wrap gap-2">
            {skill.skillsWanted?.map((s, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-green-100 text-green-900 text-xs rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3">
          <div className="flex items-center gap-1">
            <BsCalendar3 className="text-gray-400" />
            <span>
              {skill.user?.createdAt
                ? new Date(skill.user.createdAt).toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })
                : "July 2023"}
            </span>
          </div>
          <button
            onClick={() => onSendRequest(skill.id)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-indigo-700 transition"
          >
            <IoMdSend className="text-lg" />
            Send Request
          </button>
        </div>
      </div>

      {/* Toaster inside SkillCard (works globally) */}
      <Toaster position="top-right" />
    </div>
  );
};

export default SkillCard;
