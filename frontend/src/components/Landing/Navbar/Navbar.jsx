// import React, { useState } from 'react';
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from 'react-router-dom';
// import Nuvora_2 from '../../../assets/Nuvora_2.png';

// const NavbarMenu = [
//   { id: 1, title: "Home", path: "/" },
//   { id: 2, title: "Services", path: "#" },
//   { id: 3, title: "About Us", path: "#" },
//   { id: 4, title: "Our Team", path: "#" },
//   { id: 5, title: "Contact Us", path: "#" },
// ];

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // #1F1F1F   
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 p-3 bg-[#003344] border-b-gray-400 shadow-md backdrop-blur-sm">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="max-w-screen-xl mx-auto py-1 px-6 flex justify-between items-center"
//       >
//         {/* Logo Section */}
//         <div className="flex items-center gap-1">
//           <h1 className="font-extrabold text-[#0DCEDA] text-4xl tracking-normal font-mono">Nuvora</h1>
//           <img src={Nuvora_2} alt="Nuvora" className="w-12 mt-2 h-auto object-contain" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-10">
//           {NavbarMenu.map((menu) => (
//             <a
//               key={menu.id}
//               href={menu.path}
//               className="text-white hover:text-[#0077C8] font-medium text-lg transition-all duration-200"
//             >
//               {menu.title}
//             </a>
//           ))}
//           <Link to="/login">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-gray-100 hover:bg-[#005b9f] text-black font-semibold px-6 py-2.5 rounded-full shadow transition duration-300"
//             >
//               Sign In
//             </motion.button>
//           </Link>
//         </div>

//         {/* Mobile Toggle Button */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? (
//               <IoMdClose className="text-3xl text-[#0DCEDA]" />
//             ) : (
//               <IoMdMenu className="text-3xl text-[#0DCEDA]" />
//             )}
//           </button>
//         </div>
//       </motion.div>

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             key="mobileMenu"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="lg:hidden bg-white px-6 py-4 border-t border-gray-200 shadow"
//           >
//             <ul className="space-y-4">
//               {NavbarMenu.map((menu) => (
//                 <li key={menu.id}>
//                   <a
//                     href={menu.path}
//                     className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition"
//                   >
//                     {menu.title}
//                   </a>
//                 </li>
//               ))}
//               <li>
//                 <Link to="/login">
//                   <button className="w-full bg-[#003344] hover:bg-[#005b9f] text-white font-semibold px-5 py-2 rounded-full transition duration-300">
//                     Sign In
//                   </button>
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>

//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import Nuvora_2 from '../../../assets/Nuvora_2.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-3 px-3 bg-[#003344] border-b-gray-400 shadow-md backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-screen-xl mx-auto flex justify-between items-center"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="font-extrabold text-[#0DCEDA] text-3xl tracking-normal font-mono">Nuvora</h1>
          <img src={Nuvora_2} alt="Nuvora" className="w-10 mt-1 h-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center divide-x divide-white/30">
  <button className="text-white hover:text-[#0DCEDA] text-xl px-4">
    <BsGrid3X3GapFill />
  </button>
  <a href="#" className="text-white hover:text-[#0DCEDA] font-medium text-lg px-4 transition-all duration-200">
    How it Works
  </a>
  <Link to="/login" className="text-white hover:text-[#0DCEDA] font-medium text-lg px-4 transition-all duration-200">
    Login
  </Link>
  <Link to="/register" className="text-white hover:text-[#0DCEDA] font-medium text-lg px-4 transition-all duration-200">
    Join
  </Link>
  <a href="#" className="text-white hover:text-[#0DCEDA] font-medium text-lg px-4 transition-all duration-200">
    Support
  </a>
</div>


        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoMdClose className="text-3xl text-[#0DCEDA]" />
            ) : (
              <IoMdMenu className="text-3xl text-[#0DCEDA]" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white px-6 py-4 border-t border-gray-200 shadow"
          >
            <ul className="space-y-4">
              <li>
                <button className="flex items-center gap-2 text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
                  <BsGrid3X3GapFill /> Menu
                </button>
              </li>
              <li>
                <a href="#" className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
                  How it Works
                </a>
              </li>
              <li>
                <Link to="/login" className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/join" className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
                  Join
                </Link>
              </li>
              <li>
                <a href="#" className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
                  Support
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

