// import React, { useState } from 'react';
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { BsGrid3X3GapFill } from "react-icons/bs";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from 'react-router-dom';
// import Nuvora_2 from '../../../assets/Nuvora_2.png';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // #003344

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 py-3 px-3 bg-black border-b-gray-400 shadow-md backdrop-blur-sm">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="max-w-screen-xl mx-auto flex justify-between items-center"
//       >
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <h1 className="font-extrabold text-[#0DCEDA] text-3xl tracking-normal font-mono">Nuvora</h1>
//           <img src={Nuvora_2} alt="Nuvora" className="w-10 mt-1 h-auto object-contain" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center divide-x divide-white/30">
//   <button className="text-white hover:text-[#0DCEDA] text-xl px-4">
//     <BsGrid3X3GapFill />
//   </button>
//   <a href="#" className="text-white hover:text-[#0DCEDA] font-medium text-lg px-4 transition-all duration-200">
//     How it Works
//   </a>
//   <Link to="/login" className="text-white hover:text-[#0DCEDA] font-medium text-lg px-4 transition-all duration-200">
//     Login
//   </Link>
//   <Link to="/register" className="text-white hover:text-[#0DCEDA] font-medium text-lg px-4 transition-all duration-200">
//     Join
//   </Link>
//   <a href="#" className="text-white hover:text-[#0DCEDA] font-medium text-lg px-4 transition-all duration-200">
//     Support
//   </a>
// </div>


//         {/* Mobile Menu Toggle */}
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
//               <li>
//                 <button className="flex items-center gap-2 text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
//                   <BsGrid3X3GapFill /> Menu
//                 </button>
//               </li>
//               <li>
//                 <a href="#" className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
//                   How it Works
//                 </a>
//               </li>
//               <li>
//                 <Link to="/login" className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/register" className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
//                   Join
//                 </Link>
//               </li>
//               <li>
//                 <a href="#" className="block text-gray-800 text-base font-medium hover:text-[#0077C8] transition">
//                   Support
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


// export default Navbar;






// import React, { useState } from 'react';
// import Nuvora_2 from '../../../assets/Nuvora_2.png';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="relative z-60 bg-black">
//       <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
//         <div className="flex items-center justify-between">
//           <a href="#">
//             <img
//               className="w-auto h-6 sm:h-7"
//               src={Nuvora_2}
//               alt=""
//             />
//             Nuvora
//           </a>

//           {/* Mobile menu button */}
//           <div className="flex lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
//               aria-label="toggle menu"
//             >
//               {!isOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 8h16M4 16h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black dark:bg-black md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
//             isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
//           }`}
//         >
//           <div className="flex flex-col md:flex-row md:mx-6">
//             <a
//               className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
//               href="#"
//             >
//               Home
//             </a>
//             <a
//               className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
//               href="#"
//             >
//               About Us
//             </a>
//             <a
//               className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
//               href="#"
//             >
//               Login
//             </a>
//             <a
//               className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
//               href="#"
//             >
//               Join
//             </a>
//           </div>

//           <div className="flex justify-center md:block">
//             <a
//               className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
//               href="#"
//             >
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Nuvora_2 from '../../../assets/Nuvora_2.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="relative z-60 bg-black">
//       <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="flex items-center gap-2">
//             <img className="w-auto h-6 sm:h-7" src={Nuvora_2} alt="Nuvora" />
//             <span className="text-white font-bold text-xl">Nuvora</span>
//           </Link>

//           {/* Mobile menu button */}
//           <div className="flex lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-gray-500 dark:text-gray-200 hover:text-gray-300 focus:outline-none"
//               aria-label="toggle menu"
//             >
//               {!isOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Menu Items */}
//         {/* <div
//           className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
//             isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
//           }`}
//         > */}

//         <div
//           className={`${
//             isOpen ? 'block' : 'hidden'
//           } absolute inset-x-0 z-20 w-full px-6 py-4 bg-black md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
//         >

//           <div className="flex flex-col md:flex-row md:mx-6">
//             <Link
//               to="/"
//               className="my-2 text-gray-300 transition-colors duration-300 transform hover:text-[#0DCEDA] md:mx-4 md:my-0"
//             >
//               Home
//             </Link>
//             <a
//               href="#"
//               className="my-2 text-gray-300 transition-colors duration-300 transform hover:text-[#0DCEDA] md:mx-4 md:my-0"
//             >
//               How it Works
//             </a>
//             <Link
//               to="/login"
//               className="my-2 text-gray-300 transition-colors duration-300 transform hover:text-[#0DCEDA] md:mx-4 md:my-0"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="my-2 text-gray-300 transition-colors duration-300 transform hover:text-[#0DCEDA] md:mx-4 md:my-0"
//             >
//               Join
//             </Link>
//             <a
//               href="#"
//               className="my-2 text-gray-300 transition-colors duration-300 transform hover:text-[#0DCEDA] md:mx-4 md:my-0"
//             >
//               Support
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Nuvora_2 from '../../../assets/Nuvora_2.png';
// import { ColourfulText } from '../../ui/colourful-text';
// import { HoverBorderGradient } from '../../ui/hover-border-gradient';
// // import NuvoraPNG from '../../../assets/NuvoraPNG.png';



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <span className="font-bold text-xl text-white">Nuvora</span>
//           {/* <ColourfulText text="Nuvora" /> */}
//           <img className="h-7 w-auto bg-black" src={Nuvora_2} alt="Nuvora" />
//         </Link>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-white focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>

//         {/* Desktop menu */}
//         <div className="hidden lg:flex items-center gap-6 ml-5">
//           <NavLinks />
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="lg:hidden px-6 pb-4 bg-black">
//           <div className="flex flex-col gap-3">
//             <NavLinks />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };


// const NavLinks = () => (
//   <>
//     <Link to="/" className="hover:text-[#0DCEDA] transition flex items-center">
//       Home
//     </Link>
//     <a href="#" className="hover:text-[#0DCEDA] transition flex items-center">
//       How it Works
//     </a>

//     <Link to="/login" className="flex items-center">
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         as="button"
//         className="dark:bg-black bg-white text-black dark:text-white flex items-center px-4 py-1 hover:bg-white/10"
//       >
//         <span>Login</span>
//       </HoverBorderGradient>
//     </Link>

//     <Link to="/register" className="flex items-center">
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         as="button"
//         className=" bg-white text-black hover:bg-gray-200 flex items-center px-4 py-1"
//       >
//         <span>Join</span>
//       </HoverBorderGradient>
//     </Link>

//     <a href="#" className="hover:text-[#0DCEDA] transition flex items-center">
//       Support
//     </a>
//   </>
// );


// export default Navbar;


























// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Nuvora_2 from '../../../assets/Nuvora_2.png';
// import { ColourfulText } from '../../ui/colourful-text';
// import { HoverBorderGradient } from '../../ui/hover-border-gradient';
// // import NuvoraPNG from '../../../assets/NuvoraPNG.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
//           <span className="font-bold text-xl text-white">Nuvora</span>
//           {/* <ColourfulText text="Nuvora" /> */}
//           <img className="h-7 w-auto bg-black" src={Nuvora_2} alt="Nuvora" />
//         </Link>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-white focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>

//         {/* Desktop menu */}
//         <div className="hidden lg:flex items-center gap-6 ml-5">
//           <NavLinks setIsOpen={setIsOpen} />
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="lg:hidden px-6 pb-4 bg-black">
//           <div className="flex flex-col gap-3">
//             <NavLinks setIsOpen={setIsOpen} />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavLinks = ({ setIsOpen }) => {
//   const handleClick = () => {
//     if (setIsOpen) setIsOpen(false);
//   };

//   return (
//     <>
//       <Link
//         to="/"
//         onClick={handleClick}
//         className="hover:text-[#0DCEDA] transition flex items-center"
//       >
//         Home
//       </Link>

//       <a
//         href="#"
//         onClick={handleClick}
//         className="hover:text-[#0DCEDA] transition flex items-center"
//       >
//         How it Works
//       </a>

//       <Link to="/login" onClick={handleClick} className="flex items-center">
//         <HoverBorderGradient
//           containerClassName="rounded-full"
//           as="button"
//           className="dark:bg-black bg-white text-black dark:text-white flex items-center px-4 py-1 hover:bg-white/10"
//         >
//           <span>Login</span>
//         </HoverBorderGradient>
//       </Link>

//       <Link to="/register" onClick={handleClick} className="flex items-center">
//         <HoverBorderGradient
//           containerClassName="rounded-full"
//           as="button"
//           className="bg-white text-black hover:bg-gray-200 flex items-center px-4 py-1"
//         >
//           <span>Join</span>
//         </HoverBorderGradient>
//       </Link>

//       <a
//         href="#"
//         onClick={handleClick}
//         className="hover:text-[#0DCEDA] transition flex items-center"
//       >
//         Support
//       </a>
//     </>
//   );
// };

// export default Navbar;




























import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nuvora_2 from '../../../assets/Nuvora_2.png';
import { ColourfulText } from '../../ui/colourful-text';
import { HoverBorderGradient } from '../../ui/hover-border-gradient';
// import NuvoraPNG from '../../../assets/NuvoraPNG.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="bg-black text-white relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <span className="font-bold text-xl text-white">Nuvora</span>
            <img className="h-7 w-auto bg-black" src={Nuvora_2} alt="Nuvora" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-6 ml-5">
            <NavLinks setIsOpen={setIsOpen} />
          </div>
        </div>

        {/* Animated mobile menu */}
        <div
          className={`fixed top-16 left-0 right-0 bg-black transition-all duration-300 ease-in-out overflow-hidden z-40 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } lg:hidden px-6 pb-6`}
        >
          <div className="flex flex-col gap-4">
            <NavLinks setIsOpen={setIsOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

const NavLinks = ({ setIsOpen }) => {
  const handleClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <>
      <Link
        to="/"
        onClick={handleClick}
        className="hover:text-[#0DCEDA] transition flex items-center py-2 text-lg"
      >
        Home
      </Link>

      <a
        href="#"
        onClick={handleClick}
        className="hover:text-[#0DCEDA] transition flex items-center py-2 text-lg"
      >
        How it Works
      </a>

      <Link to="/login" onClick={handleClick} className="flex items-center py-2">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center px-4 py-1 hover:bg-white/10 w-full justify-center"
        >
          <span>Login</span>
        </HoverBorderGradient>
      </Link>

      <Link to="/register" onClick={handleClick} className="flex items-center py-2">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-white text-black hover:bg-gray-200 flex items-center px-4 py-1 w-full justify-center"
        >
          <span>Join</span>
        </HoverBorderGradient>
      </Link>

      <a
        href="#"
        onClick={handleClick}
        className="hover:text-[#0DCEDA] transition flex items-center py-2 text-lg"
      >
        Support
      </a>
    </>
  );
};

export default Navbar;














































// const NavLinks = () => (
//   <>
//     <Link to="/" className="hover:text-[#0DCEDA] transition">
//       Home
//     </Link>
//     <a href="#" className="hover:text-[#0DCEDA] transition">
//       How it Works
//     </a>
//     <Link to="/login" className="hover:text-[#0DCEDA] transition">
//       Login
//     </Link>

//     <Link to="/login">
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         as="button"
//         className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
//       >
//         {/* <AceternityLogo /> */}
//         <span>Login</span>
//       </HoverBorderGradient>
//     </Link>


//     <Link to="/register" className="hover:text-[#0DCEDA] transition">
//       Join
//     </Link>
//     <a href="#" className="hover:text-[#0DCEDA] transition">
//       Support
//     </a>
//   </>
// );

// export default Navbar;
