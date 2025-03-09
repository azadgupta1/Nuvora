import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/"
  },
  {
    id: 2,
    title: "Services",
    link: "#"
  },
  {
    id: 3,
    title: "About Us",
    link: "#"
  },
  {
    id: 4,
    title: "Our Team",
    link: "#"
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#"
  }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  return (
    <nav className="relative z-20">
      <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container py-10 flex justify-between items-center">
      {/* Logo Section */}
      <div>
        <h1 className="font-bold text-4xl">LearnMate</h1>
      </div>

      {/* Menu Section for Large Screens */}
      <div className="hidden lg:block">
        <ul className='flex items-center gap-4'>
          {
            NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.path} className="inline-block py-2 px-3 hover:text-secondary relative group">
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))
          }
          <Link to="/login">
            <button className="inline-block bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 duration-200 shadow-[0px_10px_8px_-7px_#ffd978] hover:shadow-[0px_10px_8px_-7px_#69a79c] py-2 px-6">
              Sign In
            </button>
          </Link>
        </ul>
      </div>

      {/* Mobile Hamburger Menu Section */}
      <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IoMdMenu className="text-4xl" />
      </div>
    </motion.div>
    </nav>
  );
}

export default Navbar;
