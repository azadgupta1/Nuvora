// import { FaTachometerAlt, FaBook, FaStar, FaBookmark, FaInbox } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";


// export default function Sidebar() {
//   const location = useLocation();

//   const links = [
//     { path: "/dashboard/discovery", icon: <FaTachometerAlt />, label: "Discovery" },
//     { path: "/dashboard/bookings", icon: <FaBook />, label: "Bookings" },
//     { path: "/dashboard/reviews?skillId=1", icon: <FaStar />, label: "Reviews" },
//     { path: "/dashboard/bookmarks", icon: <FaBookmark />, label: "Bookmarks" },
//     { path: "/dashboard/incoming-request", icon: <FaInbox />, label: "Incoming Requests" },
//   ];

//   return (
//     <aside className="sticky top-18 h-[calc(100vh-5rem)] w-20 bg-white text-black shadow-xl flex flex-col p-3 border-r border-gray-700">
      

//       <nav className="flex flex-col space-y-2">
//         {links.map(({ path, icon, label }) => (
//           <Link
//             key={path}
//             to={path}
//             className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
//               ${
//                 location.pathname === path || location.search.includes(label.toLowerCase())
//                   ? "bg-[#0DCEDA] text-[#001a25] font-semibold shadow-md"
//                   : "hover:bg-[#0DCEDA33] hover:text-[#0DCEDA]"
//               }`}
//           >
//             <span className="text-lg">{icon}</span>
//             {/* <span className="text-base">{label}</span> */}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }










// import { useState } from "react";
// import {
//   FaTachometerAlt,
//   FaBook,
//   FaStar,
//   FaBookmark,
//   FaInbox,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";




// export default function Sidebar() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { path: "/dashboard/discovery", icon: <FaTachometerAlt />, label: "Discovery" },
//     { path: "/dashboard/bookings", icon: <FaBook />, label: "Bookings" },
//     { path: "/dashboard/reviews?skillId=1", icon: <FaStar />, label: "Reviews" },
//     { path: "/dashboard/bookmarks", icon: <FaBookmark />, label: "Bookmarks" },
//     { path: "/dashboard/incoming-request", icon: <FaInbox />, label: "Incoming Requests" },
//   ];

//   return (
//     <>
//       {/* Hamburger button for mobile */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="sm:hidden fixed top-15 left-0 z-50 bg-white border border-gray-300 p-2 rounded-md shadow-md"
//       >
//         {isOpen ? <FaTimes /> : <TbLayoutSidebarRightCollapseFilled />}
//       </button>

//       {/* Overlay on mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar drawer */}
//       <aside
//         className={`
//           fixed sm:static top-0 left-0 h-full sm:h-[calc(100vh-4.25rem)] 
//           w-64 sm:w-20 bg-white text-black shadow-xl border-r border-gray-300 z-50
//           transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
//           flex flex-col p-4 sm:p-3
//         `}
//       >

//         <nav className="flex flex-col space-y-2">
//           {links.map(({ path, icon, label }) => {
//             const isActive =
//               location.pathname === path || location.search.includes(label.toLowerCase());

//             return (
//               <Link
//                 key={path}
//                 to={path}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 ${
//                   isActive
//                     ? "bg-[#0DCEDA] text-[#001a25] font-semibold shadow-md"
//                     : "hover:bg-[#0DCEDA33] hover:text-[#0DCEDA]"
//                 }`}
//                 onClick={() => setIsOpen(false)} // Auto-close on mobile
//               >
//                 <span className="text-lg">{icon}</span>
//                 <span className="text-base sm:hidden">{label}</span>
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>
//     </>
//   );
// }

















import {
  FaTachometerAlt,
  FaBook,
  FaStar,
  FaBookmark,
  FaInbox,
} from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/dashboard/discovery", icon: <FaTachometerAlt />, label: "Discovery" },
    { path: "/dashboard/bookings", icon: <FaBook />, label: "Bookings" },
    { path: "/dashboard/reviews?skillId=1", icon: <FaStar />, label: "Reviews" },
    { path: "/dashboard/bookmarks", icon: <FaBookmark />, label: "Bookmarks" },
    { path: "/dashboard/incoming-request", icon: <FaInbox />, label: "Incoming Requests" },
  ];

  return (
    <>
      {/* Custom vertical toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          sm:hidden fixed top-16 left-0 z-50
          h-12 w-6 flex items-center justify-center
          bg-[#003344]
          text-white rounded-r-md shadow-md
        "
      >
        {isOpen ? <MdKeyboardArrowLeft size={24} /> : <MdKeyboardArrowRight size={24} />}
      </button>

      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-0 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      

      {/* Sidebar drawer */}
<aside
  className={`
    fixed sm:static top-[68px] sm:top-0 left-0 h-full sm:h-[calc(100vh-4.25rem)] 
    w-64 sm:w-20 bg-white text-black shadow-xl border-r border-gray-300 z-50
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
    flex flex-col p-4 sm:p-3
  `}
>
  {/* Close button - visible only on mobile */}
  <button
    className="sm:hidden self-end mb-4 text-2xl text-gray-500 hover:text-black"
    onClick={() => setIsOpen(false)}
    aria-label="Close sidebar"
  >
    &times; {/* This is the '×' character */}
  </button>

  <nav className="flex flex-col space-y-2">
    {links.map(({ path, icon, label }) => {
      const isActive =
        location.pathname === path || location.search.includes(label.toLowerCase());

      return (
        <Link
          key={path}
          to={path}
          className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-[#0DCEDA] text-[#001a25] font-semibold shadow-md"
              : "hover:bg-[#0DCEDA33] hover:text-[#0DCEDA]"
          }`}
          onClick={() => setIsOpen(false)} // Close sidebar on mobile tap
        >
          <span className="text-lg">{icon}</span>
          <span className="text-base sm:hidden">{label}</span>
        </Link>
      );
    })}
  </nav>
</aside>
    </>
  );
}













{/* Sidebar drawer */}
      {/* <aside
        className={`
          fixed sm:static top-0 left-0 h-full sm:h-[calc(100vh-4.25rem)] 
          w-64 sm:w-20 bg-white text-black shadow-xl border-r border-gray-300 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
          flex flex-col p-4 sm:p-3
        `}
      >
        <nav className="flex flex-col space-y-2">
          {links.map(({ path, icon, label }) => {
            const isActive =
              location.pathname === path || location.search.includes(label.toLowerCase());

            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-[#0DCEDA] text-[#001a25] font-semibold shadow-md"
                    : "hover:bg-[#0DCEDA33] hover:text-[#0DCEDA]"
                }`}
                onClick={() => setIsOpen(false)} // Close sidebar on mobile tap
              >
                <span className="text-lg">{icon}</span>
                <span className="text-base sm:hidden">{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside> */}