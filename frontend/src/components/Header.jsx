import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#BFA2DB] text-white">
      <div className="text-2xl font-bold">📘 LearnMate</div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search for..."
          className="p-2 pl-10 rounded-md text-black"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-600" />
      </div>

      {/* Right Side Options */}
      <div className="flex space-x-4">
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/seeker-dashboard" className="hover:underline">Seeker Dashboard</Link>
        <Link to="/mentor-dashboard" className="hover:underline">Mentor Dashboard</Link>
      </div>
    </nav>
  );
}

export default Header;
