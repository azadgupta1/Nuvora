import { FaTachometerAlt, FaBook, FaStar, FaBookmark, FaInbox } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";


export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: "/dashboard/discovery", icon: <FaTachometerAlt />, label: "Discovery" },
    { path: "/dashboard/bookings", icon: <FaBook />, label: "Bookings" },
    { path: "/dashboard/reviews?skillId=1", icon: <FaStar />, label: "Reviews" },
    { path: "/dashboard/bookmarks", icon: <FaBookmark />, label: "Bookmarks" },
    { path: "/dashboard/incoming-request", icon: <FaInbox />, label: "Incoming Requests" },
  ];

  return (
    <aside className="sticky top-18 h-[calc(100vh-5rem)] w-20 bg-white text-black shadow-xl flex flex-col p-3 border-r border-gray-700">
      

      <nav className="flex flex-col space-y-2">
        {links.map(({ path, icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
              ${
                location.pathname === path || location.search.includes(label.toLowerCase())
                  ? "bg-[#0DCEDA] text-[#001a25] font-semibold shadow-md"
                  : "hover:bg-[#0DCEDA33] hover:text-[#0DCEDA]"
              }`}
          >
            <span className="text-lg">{icon}</span>
            {/* <span className="text-base">{label}</span> */}
          </Link>
        ))}
      </nav>
    </aside>
  );
}