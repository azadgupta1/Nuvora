import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm">
      {/* Top social section */}
      <div className="border-b py-4 px-6 flex flex-col md:flex-row justify-between items-center text-center">
        <span className="mb-2 md:mb-0">Get connected with us on social networks:</span>
        <div className="flex gap-4 text-gray-700">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {/* Company Info */}
        <div>
          <h6 className="uppercase font-bold mb-4 flex items-center gap-2 text-gray-800">
            <FaGem className="text-indigo-600" /> Company Name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>

        {/* Products */}
        <div>
          <h6 className="uppercase font-bold mb-4 text-gray-800">Products</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Angular</a></li>
            <li><a href="#" className="hover:underline">React</a></li>
            <li><a href="#" className="hover:underline">Vue</a></li>
            <li><a href="#" className="hover:underline">Laravel</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h6 className="uppercase font-bold mb-4 text-gray-800">Useful Links</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Settings</a></li>
            <li><a href="#" className="hover:underline">Orders</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="uppercase font-bold mb-4 text-gray-800">Contact</h6>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaHome /> New York, NY 10012, US</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@example.com</li>
            <li className="flex items-center gap-2"><FaPhone /> +01 234 567 88</li>
            <li className="flex items-center gap-2"><FaPrint /> +01 234 567 89</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-200 text-center py-4">
        © 2025 Copyright
        <a className="text-gray-800 font-semibold ml-1 hover:underline" href="/">
          Nuvora
        </a>
      </div>
    </footer>
  );
};

export default Footer;
