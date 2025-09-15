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
            className="lg:hidden text-white my-3 focus:outline-none"
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
          <div className="flex flex-col gap-1">
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
          className="dark:bg-black bg-white text-black dark:text-white flex items-center px-4 py-1 hover:bg-white/10 hover:cursor-pointer  w-full justify-center"
        >
          <span>Login</span>
        </HoverBorderGradient>
      </Link>

      <Link to="/register" onClick={handleClick} className="flex items-center py-2">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-white text-black hover:bg-gray-200 hover:cursor-pointer flex items-center px-4 py-1 w-full justify-center"
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