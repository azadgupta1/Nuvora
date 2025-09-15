// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard } from "lucide-react";
// import { MdScheduleSend } from "react-icons/md";
// import { TbMessageStar, TbMailDown } from "react-icons/tb";
// import { LiaHeart } from "react-icons/lia";
// import { FiSettings } from "react-icons/fi";
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

//   const settingsLink = {
//     path: "/dashboard/settings",
//     icon: <FiSettings className="text-2xl" />,
//     label: "Settings",
//   };

//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-40 sm:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}


//       {/* #C5C3CC */}
//       {/* Sidebar */}

//       {/* #dedce4 */}
//       <aside
//         className={`
//           fixed sm:static top-0 left-0
//           bg-white text-black border-r border-gray-300 shadow-lg
//           transform transition-transform duration-700 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
//           flex flex-col z-50
//         `}
//         onMouseEnter={() => !isMobile && setIsHovered(true)}
//         onMouseLeave={() => !isMobile && setIsHovered(false)}
//         style={{
//           width: isMobile ? "80%" : isHovered ? "16rem" : "5rem",
//           height: "100%",
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

//         {/* Navigation */}
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
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <span className="text-lg">{icon}</span>
//                   {(isHovered || isMobile) && <span className="text-base">{label}</span>}
//                 </Link>

//                 {/* Divider after Bookmarks */}
//                 {idx === 3 && (
//                   <div className="hidden sm:block my-2">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </nav>

//         {/* Settings Link at bottom */}
//         <div className="px-2 pb-4 mt-auto">
//           <Link
//             to={settingsLink.path}
//             className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
//               ${
//                 location.pathname === settingsLink.path
//                   ? "bg-black text-white font-semibold"
//                   : "hover:bg-black hover:text-white"
//               }
//             `}
//             onClick={() => setIsOpen(false)}
//           >
//             <span className="text-lg">{settingsLink.icon}</span>
//             {(isHovered || isMobile) && <span className="text-base">{settingsLink.label}</span>}
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }



















// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard } from "lucide-react";
// import { MdScheduleSend } from "react-icons/md";
// import { TbMessageStar, TbMailDown } from "react-icons/tb";
// import { LiaHeart } from "react-icons/lia";
// import { FiSettings } from "react-icons/fi";
// import { useState, useEffect } from "react";

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const location = useLocation();
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

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

//   const settingsLink = {
//     path: "/dashboard/settings",
//     icon: <FiSettings className="text-2xl" />,
//     label: "Settings",
//   };

//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-40 sm:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed sm:static top-0 left-0
//           bg-white text-black border-r border-gray-300 shadow-lg
//           transform transition-transform duration-700 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
//           flex flex-col z-50
//         `}
//         onMouseEnter={() => !isMobile && setIsHovered(true)}
//         onMouseLeave={() => !isMobile && setIsHovered(false)}
//         style={{
//           width: isMobile ? "80%" : isHovered ? "16rem" : "5rem",
//           height: "100%",
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

//         {/* Navigation */}
//         <nav className="flex flex-col mt-5 space-y-2 flex-1 px-2">
//           {links.map(({ path, icon, label }, idx) => {
//             const isActive =
//               location.pathname === path ||
//               location.search.includes(label.toLowerCase());

//             const isCollapsed = !isHovered && !isMobile;

//             return (
//               <div key={path}>
//                 <Link
//                   to={path}
//                   className={`flex items-center gap-3 py-3 rounded-md transition-all duration-300
//                     ${isActive
//                       ? `bg-black text-white font-semibold ${
//                           isCollapsed ? "rounded-full w-12 h-12 justify-center" : ""
//                         }`
//                       : "hover:bg-black hover:text-white"}
//                     ${isCollapsed ? "justify-center px-0" : "px-4"}
//                   `}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <span className="text-lg">{icon}</span>
//                   {(isHovered || isMobile) && <span className="text-base">{label}</span>}
//                 </Link>

//                 {/* Divider after Bookmarks */}
//                 {idx === 3 && (
//                   <div className="hidden sm:block my-2">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </nav>

//         {/* Settings Link at bottom */}
//         <div className="px-2 pb-4 mt-auto">
//           <Link
//             to={settingsLink.path}
//             className={`flex items-center gap-3 py-3 rounded-md transition-all duration-300
//               ${
//                 location.pathname === settingsLink.path
//                   ? `bg-black text-white font-semibold ${
//                       !isHovered && !isMobile ? "rounded-full w-12 h-12 justify-center" : ""
//                     }`
//                   : "hover:bg-black hover:text-white"
//               }
//               ${!isHovered && !isMobile ? "justify-center px-0" : "px-4"}
//             `}
//             onClick={() => setIsOpen(false)}
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
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed sm:static top-0 left-0
          bg-white text-black border-r border-gray-200 shadow-md
          transform transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
          flex flex-col z-50
        `}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        style={{
          width: isMobile ? "80%" : isHovered ? "15rem" : "5rem",
          height: "100%",
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

        {/* Navigation */}
        <nav className="flex flex-col mt-5 space-y-2 flex-1 px-2">
          {links.map(({ path, icon, label }, idx) => {
            const isActive =
              location.pathname === path ||
              location.search.includes(label.toLowerCase());

            return (
              <div key={path}>
                <Link
                  to={path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300
                    ${
                      isHovered || isMobile
                        ? isActive
                          ? "bg-black text-white font-semibold"
                          : "hover:bg-gray-100 text-gray-700"
                        : isActive
                        ? "text-black font-semibold"
                        : "text-gray-400"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">{icon}</span>
                  {(isHovered || isMobile) && (
                    <span className="text-base">{label}</span>
                  )}
                </Link>

                {/* Divider after Bookmarks */}
                {idx === 3 && (
                  <div className="hidden sm:block my-2">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Settings Link at bottom */}
        <div className="px-2 pb-4 mt-auto">
          <Link
            to={settingsLink.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300
              ${
                isHovered || isMobile
                  ? location.pathname === settingsLink.path
                    ? "bg-black text-white font-extrabold"
                    : "hover:bg-gray-50 text-gray-700"
                  : location.pathname === settingsLink.path
                  ? "text-black font-semibold"
                  : "text-gray-400"
              }
            `}
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg">{settingsLink.icon}</span>
            {(isHovered || isMobile) && (
              <span className="text-base">{settingsLink.label}</span>
            )}
          </Link>
        </div>
      </aside>
    </>
  );
}
