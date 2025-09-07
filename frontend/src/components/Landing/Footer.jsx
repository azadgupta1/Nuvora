// import React from 'react'

// function Footer() {
//   return (
//     <div>
//         {/* 🤖 AI Match (Future Teaser) */}


//             {/* 🚀 Final Call-to-Action */}
//                 <section className="py-20 bg-indigo-600 text-white text-center">
//                 <h3 className="text-4xl font-bold mb-6">Ready to Swap Skills?</h3>
//                 <p className="text-lg mb-8 max-w-2xl mx-auto">
//                     Join a growing global community where knowledge flows freely. Teach what you know, learn what you love.
//                 </p>
//                 <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">
//                     Join Nuvora Today
//                 </button>
//                 </section>


//                 {/* 📌 Footer */}
// <footer className="bg-gray-900 text-gray-300 py-10" id="contact">
//   <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
//     <div>
//       <h4 className="text-white font-bold text-xl mb-4">Nuvora</h4>
//       <p>Exchange skills, not money. A global knowledge-sharing platform.</p>
//     </div>
//     <div>
//       <h4 className="text-white font-bold mb-4">Quick Links</h4>
//       <ul className="space-y-2">
//         <li><a href="#features" className="hover:text-white">Features</a></li>
//         <li><a href="#stories" className="hover:text-white">Stories</a></li>
//         <li><a href="#categories" className="hover:text-white">Categories</a></li>
//       </ul>
//     </div>
//     <div>
//       <h4 className="text-white font-bold mb-4">Connect</h4>
//       <p>Email: hello@nuvora.com</p>
//       <div className="flex space-x-4 mt-4">
//         <a href="#" className="hover:text-white">🌐</a>
//         <a href="#" className="hover:text-white">🐦</a>
//         <a href="#" className="hover:text-white">📸</a>
//       </div>
//     </div>
//   </div>
//   <div className="text-center mt-10 text-gray-500 text-sm">
//     © {new Date().getFullYear()} Nuvora. All rights reserved.
//   </div>
// </footer>


//     </div>
//   )
// }

// export default Footer



import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaGlobe, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();

  return (
    <div>
      {/* 🚀 Final Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Swap Skills?</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join a growing global community where knowledge flows freely. 
          Teach what you know, learn what you love.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Join Nuvora Today
        </button>
      </section>

      {/* 📌 Footer */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-800" id="contact">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {/* Brand */}
          <div>
            <h4 className="text-cyan-400 font-bold text-2xl mb-4">Nuvora</h4>
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
