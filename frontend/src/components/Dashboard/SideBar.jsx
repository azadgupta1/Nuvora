// import {
//   FaTachometerAlt,
//   FaBook,
//   FaStar,
//   FaBookmark,
//   FaInbox,
// } from "react-icons/fa";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { LayoutDashboard } from 'lucide-react';
// import { TbMailDown } from "react-icons/tb";
// import { MdScheduleSend } from "react-icons/md";
// import { TbMessageStar } from "react-icons/tb";
// import { LiaHeart } from "react-icons/lia";


// export default function Sidebar({ isOpen, setIsOpen }) {
//   const location = useLocation();
//   // const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { path: "/dashboard/discovery", icon: <LayoutDashboard className="text-3xl" />, label: "Discovery" },
//     { path: "/dashboard/bookings", icon: <MdScheduleSend className="text-3xl" />, label: "Bookings" },
//     { path: "/dashboard/reviews?skillId=1", icon: <TbMessageStar className="text-3xl" />, label: "Reviews" },
//     { path: "/dashboard/bookmarks", icon: <LiaHeart className="text-3xl" />, label: "Bookmarks" },
//     { path: "/dashboard/incoming-request", icon: <TbMailDown className="text-3xl" />, label: "Incoming Requests" },
//   ];

//   return (
//     <>

//       {/* Overlay on mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-opacity-0 z-40 sm:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

      

//       {/* Sidebar drawer */}
//       <aside
//         className={`
//           fixed sm:static top-0 sm:top-0 left-0 h-full sm:h-[calc(100vh-4.25rem)] 
//           w-64 sm:w-20 bg-white text-black shadow-xl border-r border-gray-300 z-50
//           transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
//           flex flex-col p-4 sm:p-3
//         `}
//       >
//         {/* Close button - visible only on mobile */}
//         <button
//           className="sm:hidden self-end mb-4 text-2xl text-white hover:text-black 
//                     w-10 h-10 flex items-center justify-center rounded-full 
//                     bg-gray-200/20 hover:bg-gray-300 transition-colors"
//           onClick={() => setIsOpen(false)}
//           aria-label="Close sidebar"
//         >
//           <span className="transform -translate-y-[2px]">&times;</span>
//         </button>


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
//                     ? "bg-purple-300 text-black font-semibold shadow-md"
//                     : "hover:bg-black hover:text-white"
//                 }`}
//                 onClick={() => setIsOpen(false)} // Close sidebar on mobile tap
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











// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard } from "lucide-react";
// import { MdScheduleSend } from "react-icons/md";
// import { TbMessageStar, TbMailDown } from "react-icons/tb";
// import { LiaHeart } from "react-icons/lia";
// import { useState } from "react";

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const location = useLocation();
//   const [isHovered, setIsHovered] = useState(false);

//   const links = [
//     { path: "/dashboard/discovery", icon: <LayoutDashboard className="text-2xl" />, label: "Discovery" },
//     { path: "/dashboard/bookings", icon: <MdScheduleSend className="text-2xl" />, label: "Bookings" },
//     { path: "/dashboard/reviews?skillId=1", icon: <TbMessageStar className="text-2xl" />, label: "Reviews" },
//     { path: "/dashboard/bookmarks", icon: <LiaHeart className="text-2xl" />, label: "Bookmarks" },
//     { path: "/dashboard/incoming-request", icon: <TbMailDown className="text-2xl" />, label: "Incoming Requests" },
//   ];

//   return (
//     <>
//       {/* ✅ Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-40 sm:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* ✅ Sidebar */}
//       <aside
//         className={`
//           fixed sm:static top-0 left-0 h-full sm:h-screen
//           bg-white text-black border-r border-gray-300 shadow-lg
//           transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
//           flex flex-col z-50
//         `}
//         // Hover expand only for desktop
//         onMouseEnter={() => window.innerWidth >= 640 && setIsHovered(true)}
//         onMouseLeave={() => window.innerWidth >= 640 && setIsHovered(false)}
//         style={{
//           width: isHovered ? "16rem" : "5rem", // Expanded vs Collapsed (desktop only)
//           transition: "width 0.3s ease",
//         }}
//       >
//         {/* Close button (mobile only) */}
//         <button
//           className="sm:hidden self-end m-4 text-2xl text-black 
//                      w-10 h-10 flex items-center justify-center rounded-full 
//                      hover:bg-gray-200 transition-colors"
//           onClick={() => setIsOpen(false)}
//           aria-label="Close sidebar"
//         >
//           &times;
//         </button>

//         {/* ✅ Navigation */}
//         <nav className="flex flex-col mt-5 space-y-2 flex-1 px-2">
//           {links.map(({ path, icon, label }) => {
//             const isActive =
//               location.pathname === path ||
//               location.search.includes(label.toLowerCase());

//             return (
//               <Link
//                 key={path}
//                 to={path}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
//                   ${isActive ? "bg-black text-white font-semibold" : "hover:bg-black hover:text-white"}
//                 `}
//                 onClick={() => setIsOpen(false)} // close on mobile tap
//               >
//                 {/* Icon */}
//                 <span className="text-lg">{icon}</span>

//                 {/* Label: shown only when expanded (desktop) */}
//                 {isHovered && <span className="text-base">{label}</span>}
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>
//     </>
//   );
// }












// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard } from "lucide-react";
// import { MdScheduleSend } from "react-icons/md";
// import { TbMessageStar, TbMailDown } from "react-icons/tb";
// import { LiaHeart } from "react-icons/lia";
// import { useState, useEffect } from "react";

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const location = useLocation();
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   // Handle screen resizing
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const links = [
//     { path: "/dashboard/discovery", icon: <LayoutDashboard className="text-2xl" />, label: "Discovery" },
//     { path: "/dashboard/bookings", icon: <MdScheduleSend className="text-2xl" />, label: "Bookings" },
//     { path: "/dashboard/reviews?skillId=1", icon: <TbMessageStar className="text-2xl" />, label: "Reviews" },
//     { path: "/dashboard/bookmarks", icon: <LiaHeart className="text-2xl" />, label: "Bookmarks" },
//     { path: "/dashboard/incoming-request", icon: <TbMailDown className="text-2xl" />, label: "Incoming Requests" },
//   ];

//   return (
//     <>
//       {/* ✅ Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-40 sm:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* ✅ Sidebar */}
//       <aside
//         className={`
//           fixed sm:static top-0 left-0 h-full sm:h-screen
//           bg-white text-black border-r border-gray-300 shadow-lg
//           transform transition-transform duration-700 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
//           flex flex-col z-50
//         `}
//         onMouseEnter={() => !isMobile && setIsHovered(true)}
//         onMouseLeave={() => !isMobile && setIsHovered(false)}
//         style={{
//           width: isMobile ? "80%" : isHovered ? "16rem" : "5rem",
//           transition: "width 0.3s ease",
//         }}
//       >
//         {/* Close button (mobile only) */}
//         <button
//           className="sm:hidden self-end m-4 text-2xl text-black 
//                      w-10 h-10 flex items-center justify-center rounded-full 
//                      hover:bg-gray-200 transition-colors"
//           onClick={() => setIsOpen(false)}
//           aria-label="Close sidebar"
//         >
//           &times;
//         </button>

//         {/* ✅ Navigation */}
//         <nav className="flex flex-col mt-5 space-y-2 flex-1 px-2">
//           {links.map(({ path, icon, label }) => {
//             const isActive =
//               location.pathname === path ||
//               location.search.includes(label.toLowerCase());

//             return (
//               <Link
//                 key={path}
//                 to={path}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
//                   ${isActive ? "bg-black text-white font-semibold" : "hover:bg-black hover:text-white"}
//                 `}
//                 onClick={() => setIsOpen(false)} // close on mobile tap
//               >
//                 {/* Icon */}
//                 <span className="text-lg">{icon}</span>

//                 {/* Label: show if hovered on desktop or always on mobile */}
//                 {(isHovered || isMobile) && <span className="text-base">{label}</span>}
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>
//     </>
//   );
// }














// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard } from "lucide-react";
// import { MdScheduleSend } from "react-icons/md";
// import { TbMessageStar, TbMailDown } from "react-icons/tb";
// import { LiaHeart } from "react-icons/lia";
// import { FiSettings } from "react-icons/fi"; // ✅ New settings icon
// import { useState, useEffect } from "react";

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const location = useLocation();
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   // Handle screen resizing
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const links = [
//     { path: "/dashboard/discovery", icon: <LayoutDashboard className="text-2xl" />, label: "Discovery" },
//     { path: "/dashboard/bookings", icon: <MdScheduleSend className="text-2xl" />, label: "Bookings" },
//     { path: "/dashboard/reviews?skillId=1", icon: <TbMessageStar className="text-2xl" />, label: "Reviews" },
//     { path: "/dashboard/bookmarks", icon: <LiaHeart className="text-2xl" />, label: "Bookmarks" },
//     // Divider will be inserted after this item
//     { path: "/dashboard/incoming-request", icon: <TbMailDown className="text-2xl" />, label: "Incoming Requests" },
//   ];

//   const settingsLink = {
//     path: "/dashboard/settings",
//     icon: <FiSettings className="text-2xl" />,
//     label: "Settings",
//   };

//   return (
//     <>
//       {/* ✅ Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-40 sm:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* ✅ Sidebar */}

      
//       <aside
//         className={`
//           fixed sm:static top-0 left-0 h-full sm:h-screen
//           bg-white text-black border-r border-gray-300 shadow-lg
//           transform transition-transform duration-700 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
//           flex flex-col z-50
//         `}
//         onMouseEnter={() => !isMobile && setIsHovered(true)}
//         onMouseLeave={() => !isMobile && setIsHovered(false)}
//         style={{
//           width: isMobile ? "80%" : isHovered ? "16rem" : "5rem",
//           transition: "width 0.3s ease",
//         }}
//       >
//         {/* Close button (mobile only) */}
//         <button
//           className="sm:hidden self-end m-4 text-2xl text-black 
//                      w-10 h-10 flex items-center justify-center rounded-full 
//                      hover:bg-gray-200 transition-colors"
//           onClick={() => setIsOpen(false)}
//           aria-label="Close sidebar"
//         >
//           &times;
//         </button>

//         {/* ✅ Navigation */}
//         <nav className="flex flex-col mt-5 space-y-2 flex-1 px-2">
//           {links.map(({ path, icon, label }, idx) => {
//             const isActive =
//               location.pathname === path ||
//               location.search.includes(label.toLowerCase());

//             return (
//               <div key={path}>
//                 <Link
//                   to={path}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
//                     ${isActive ? "bg-black text-white font-semibold" : "hover:bg-black hover:text-white"}
//                   `}
//                   onClick={() => setIsOpen(false)} // close on mobile tap
//                 >
//                   {/* Icon */}
//                   <span className="text-lg">{icon}</span>

//                   {/* Label */}
//                   {(isHovered || isMobile) && <span className="text-base">{label}</span>}
//                 </Link>

//                 {/* ✅ Insert fading line after Bookmarks (index 3) */}
//                 {idx === 3 && (
//                   <div className="hidden sm:block my-2">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </nav>

//         {/* ✅ Settings link at the bottom */}
//         <div className="px-2 pb-4">
//           <Link
//             to={settingsLink.path}
//             className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
//               ${
//                 location.pathname === settingsLink.path
//                   ? "bg-black text-white font-semibold"
//                   : "hover:bg-black hover:text-white"
//               }
//             `}
//             onClick={() => setIsOpen(false)} // close on mobile
//           >
//             <span className="text-lg">{settingsLink.icon}</span>
//             {(isHovered || isMobile) && <span className="text-base">{settingsLink.label}</span>}
//           </Link>
//         </div>
//       </aside>



//     </>


//   );
// }























import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { MdScheduleSend } from "react-icons/md";
import { TbMessageStar, TbMailDown } from "react-icons/tb";
import { LiaHeart } from "react-icons/lia";
import { FiSettings } from "react-icons/fi"; 
import { useState, useEffect } from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { path: "/dashboard/discovery", icon: <LayoutDashboard className="text-2xl" />, label: "Discovery" },
    { path: "/dashboard/bookings", icon: <MdScheduleSend className="text-2xl" />, label: "Bookings" },
    { path: "/dashboard/reviews?skillId=1", icon: <TbMessageStar className="text-2xl" />, label: "Reviews" },
    { path: "/dashboard/bookmarks", icon: <LiaHeart className="text-2xl" />, label: "Bookmarks" },
    { path: "/dashboard/incoming-request", icon: <TbMailDown className="text-2xl" />, label: "Incoming Requests" },
  ];

  const settingsLink = {
    path: "/dashboard/settings",
    icon: <FiSettings className="text-2xl" />,
    label: "Settings",
  };

  return (
    <>
      {/* ✅ Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ✅ Sidebar */}
      <aside
        className={`
          fixed sm:static top-0 left-0 h-full sm:h-screen
          bg-white text-black border-r border-gray-300 shadow-lg
          transform transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
          flex flex-col z-50
        `}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        style={{
          width: isMobile ? "80%" : isHovered ? "16rem" : "5rem",
          transition: "width 0.3s ease",
        }}
      >
        {/* Close button (mobile only) */}
        <button
          className="sm:hidden self-end m-4 text-2xl text-black 
                     w-10 h-10 flex items-center justify-center rounded-full 
                     hover:bg-gray-200 transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          &times;
        </button>

        {/* ✅ Navigation */}
        <nav className="flex flex-col mt-5 space-y-2 flex-1 px-2">
          {links.map(({ path, icon, label }, idx) => {
            const isActive =
              location.pathname === path ||
              location.search.includes(label.toLowerCase());

            return (
              <div key={path}>
                <Link
                  to={path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
                    ${isActive ? "bg-black text-white font-semibold" : "hover:bg-black hover:text-white"}
                  `}
                  onClick={() => setIsOpen(false)} // close on mobile tap
                >
                  {/* Icon */}
                  <span className="text-lg">{icon}</span>

                  {/* Label */}
                  {(isHovered || isMobile) && <span className="text-base">{label}</span>}
                </Link>

                {/* Divider after Bookmarks */}
                {idx === 3 && (
                  <div className="hidden sm:block my-2">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ✅ Settings link always at bottom */}
        <div className="px-2 pb-4 mt-auto">
          <Link
            to={settingsLink.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
              ${
                location.pathname === settingsLink.path
                  ? "bg-black text-white font-semibold"
                  : "hover:bg-black hover:text-white"
              }
            `}
            onClick={() => setIsOpen(false)} // close on mobile
          >
            <span className="text-lg">{settingsLink.icon}</span>
            {(isHovered || isMobile) && <span className="text-base">{settingsLink.label}</span>}
          </Link>
        </div>
        
      </aside>
    </>
  );
}
