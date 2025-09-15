import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaGlobe, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();

  return (
    <div>
      {/* 📌 Footer */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-800" id="contact">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {/* Brand */}
          <div>
            <h4 className="text-white font-bold text-2xl mb-4">Nuvora</h4>
            <p className="text-gray-500 text-sm leading-6">
              Exchange skills, not money. A global knowledge-sharing platform 
              where learning has no boundaries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-indigo-400 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-indigo-400 transition">
                  Stories
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-indigo-400 transition">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <p className="text-sm">Email: hello@nuvora.com</p>
            <div className="flex space-x-4 mt-4 text-lg">
              <a href="#" className="hover:text-cyan-400 transition">
                <FaGlobe />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/azad-gupta-b03a6b252/"
                className="hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-600 text-sm border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} Nuvora. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
