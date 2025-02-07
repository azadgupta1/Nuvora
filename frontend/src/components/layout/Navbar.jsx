import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          LearnMate
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:relative bg-white md:bg-transparent w-full md:w-auto left-0 px-6 py-4 md:p-0 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
