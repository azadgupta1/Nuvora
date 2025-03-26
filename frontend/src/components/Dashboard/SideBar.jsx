// import { FaTachometerAlt, FaBook, FaStar, FaBookmark } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     <div className="h-screen w-64 bg-gradient-to-b from-aqua-500 to-aqua-700 text-white flex flex-col p-6 shadow-lg">
//       <h1 className="text-2xl font-extrabold mb-8 text-center">EduPortal</h1>
//       <nav className="space-y-4">
//         <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-aqua-600 transition-all duration-300">
//           <FaTachometerAlt className="mr-3" /> Dashboard
//         </a>
//         <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-aqua-600 transition-all duration-300">
//           <FaBook className="mr-3" /> Bookings
//         </a>
//         <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-aqua-600 transition-all duration-300">
//           <FaStar className="mr-3" /> Reviews
//         </a>
//         <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-aqua-600 transition-all duration-300">
//           <FaBookmark className="mr-3" /> Bookmark
//         </a>
//       </nav>
//     </div>
//   );
// }

// import { FaTachometerAlt, FaBook, FaStar, FaBookmark } from 'react-icons/fa';

// export default function Sidebar() {
//   return (
//     <div className="h-screen w-64 bg-blue-500 text-white flex flex-col p-6 shadow-lg">
//       {/* <h1 className="text-2xl font-extrabold mb-8 text-center">LearnMate</h1> */}
//       <nav className="space-y-4">
//         <a
//           href="#"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaTachometerAlt className="mr-3" /> Dashboard
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaBook className="mr-3" /> Bookings
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaStar className="mr-3" /> Reviews
//         </a>
//         <a
//           href="#"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaBookmark className="mr-3" /> Bookmark
//         </a>
//       </nav>
//     </div>
//   );
// }

import { FaTachometerAlt, FaBook, FaStar, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-blue-500 text-white flex flex-col p-6 shadow-lg">
      <nav className="space-y-4">
        <Link
          to="/dash"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaTachometerAlt className="mr-3" /> Dashboard
        </Link>
        <Link
          to="/bookings"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaBook className="mr-3" /> Bookings
        </Link>
        <Link
          to="/reviews"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaStar className="mr-3" /> Reviews
        </Link>
        <Link
          to="/bookmarks"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaBookmark className="mr-3" /> Bookmark
        </Link>
      </nav>
    </div>
  );
}
