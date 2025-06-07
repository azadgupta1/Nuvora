// import { FaTachometerAlt, FaBook, FaStar, FaBookmark } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <div className="h-screen w-64 bg-blue-500 text-white flex flex-col p-6 shadow-lg">
//       <nav className="space-y-4">
//         <Link
//           to="/dashboard/dash"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaTachometerAlt className="mr-3" /> Dashboard
//         </Link>
//         <Link
//           to="/dashboard/bookings"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaBook className="mr-3" /> Bookings
//         </Link>
//         <Link
//           to="/dashboard/reviews?skillId=1"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaStar className="mr-3" /> Reviews
//         </Link>
//         <Link
//           to="/dashboard/bookmarks"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaBookmark className="mr-3" /> Bookmark
//         </Link>
//         <Link
//           to="/dashboard/incoming-request"
//           className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//         >
//           <FaBookmark className="mr-3" /> Incoming Requests
//         </Link>
//       </nav>
//     </div>
//   );
// }

import { FaTachometerAlt, FaBook, FaStar, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sticky top-16 h-[calc(100vh-4rem)] w-64 bg-blue-500 text-white flex flex-col p-6 shadow-lg overflow-y-auto">

      <nav className="space-y-4">
        <Link
          to="/dashboard/dash"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaTachometerAlt className="mr-3" /> Dashboard
        </Link>
        <Link
          to="/dashboard/bookings"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaBook className="mr-3" /> Bookings
        </Link>
        <Link
          to="/dashboard/reviews?skillId=1"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaStar className="mr-3" /> Reviews
        </Link>
        <Link
          to="/dashboard/bookmarks"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaBookmark className="mr-3" /> Bookmark
        </Link>
        <Link
          to="/dashboard/incoming-request"
          className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaBookmark className="mr-3" /> Incoming Requests
        </Link>
      </nav>
    </div>
  );
}
