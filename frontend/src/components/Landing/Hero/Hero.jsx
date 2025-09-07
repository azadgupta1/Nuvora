// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Nuvora_2 from '../../../assets/Nuvora_2.png';
// import { useNavigate } from "react-router-dom";


// const exchangeMessages = [
//   {
//     text: "Elena exchanged Resume Editing for Headshots with Rachel",
//     highlights: ["Resume Editing", "Headshots"]
//   },
//   {
//     text: "Nita exchanged Web Design for Competitive Coding from Alex",
//     highlights: ["Web Design", "Competitive Coding"]
//   },
//   {
//     text: "Sam helped Riya with Guitar Learning for Drum lessons",
//     highlights: ["Guitar Learning", "Drum"]
//   },
//   {
//     text: "Aman taught Photography in exchange for Yoga sessions with Tara",
//     highlights: ["Photography", "Yoga"]
//   },
//   {
//     text: "Priya received Financial Planning tips in return for Marketing help from Leo",
//     highlights: ["Financial Planning", "Marketing"]
//   }
// ];

export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
      ease: "easeInOut"
    }
  }
});

// const Hero = () => {
//   const [index, setIndex] = useState(0);


//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % exchangeMessages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const current = exchangeMessages[index];

//   const renderHighlightedText = (message, highlights) => {
//     const regex = new RegExp(`(${highlights.join("|")})`, "gi");
//     const parts = message.split(regex);
//     return parts.map((part, i) =>
//       highlights.includes(part) ? (
//         <span key={i} className="text-[#0ebeca] font-semibold">
//           {part}
//         </span>
//       ) : (
//         <span key={i}>{part}</span>
//       )
//     );
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#E6F2F8] text-center py-20 px-4 md:px-8">
//       <div
//         className="absolute inset-0 bg-cover opacity-10 z-0
//                   bg-[position:47.5%_center] sm:bg-center"
//         style={{ backgroundImage: `url(${Nuvora_2})` }}
//       />


//       {/* Main Content Layer */}
//       <div className="relative z-10">
//         <h1 className="text-base md:text-lg font-semibold text-gray-700 uppercase tracking-wider mb-2">
//           Welcome to the
//         </h1>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-[#07b8c5] mb-6">
//           Skill Sharing Evolution
//         </h2>

//         {/* Rotating Message */}
//         <div className="mt-5 mb-5 h-16 flex items-center justify-center relative">
//           <AnimatePresence mode="wait">
//             <motion.p
//               key={index}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.5 }}
//               className="text-lg md:text-xl text-gray-700 font-medium absolute px-2 font-serif"
//             >
//               {renderHighlightedText(current.text, current.highlights)}
//             </motion.p>
//           </AnimatePresence>
//         </div>

//         <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10 px-2">
//           <strong>Nuvora</strong> is a platform where skills become currency. Whether it's coding for music lessons, design for yoga classes, or photography for marketing — we connect people through mutual support, learning, and collaboration. Join the new way of growing together!
//         </p>

//         <Link
//           to="/register"
//           className="inline-block bg-[#0ebeca] text-white text-lg px-8 py-3 rounded-md font-semibold hover:bg-[#0DCEDA] transition"
//         >
//           Join Nuvora
//         </Link>
//       </div>

//       {/* Diagonal Grid Decoration */}
//       <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden pointer-events-none z-0">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//           className="absolute inset-0"
//           style={{
//             opacity: 0.6,
//             maskImage: "linear-gradient(to top, white, transparent)",
//             WebkitMaskImage: "linear-gradient(to top, white, transparent)"
//           }}
//         >
//           {[...Array(10)].map((_, i) => {
//             const offset = i * 15;
//             return (
//               <line
//                 key={`diag1-${i}`}
//                 x1={offset}
//                 y1="100"
//                 x2="0"
//                 y2={100 - offset}
//                 stroke="#ffffff"
//                 strokeWidth="0.5"
//               />
//             );
//           })}
//           {[...Array(10)].map((_, i) => {
//             const offset = i * 15;
//             return (
//               <line
//                 key={`diag2-${i}`}
//                 x1={100 - offset}
//                 y1="100"
//                 x2="100"
//                 y2={100 - offset}
//                 stroke="#ffffff"
//                 strokeWidth="0.5"
//               />
//             );
//           })}
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// import { BackgroundBeams } from '../../ui/background-beams';

// export default function Home() {
//   return (
//     <div className="relative min-h-screen overflow-y-auto bg-black text-white mt-0">
    
//       {/* Foreground content */}
//       <div className="relative z-20 text-center mt-40">
//         <h1 className="text-5xl font-bold mb-4">Welcome to My Site</h1>
//         <h2 className="text-2xl mb-10">Hello world</h2>
//       </div>

//       {/* Background beams */}
//       <div className="absolute inset-0 z-0">
//         <BackgroundBeams />
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import { BackgroundBeams } from "../../ui/background-beams";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen overflow-y-auto bg-black text-white flex items-center justify-center">
//       {/* Foreground content */}
//       <div className="relative z-20 text-center max-w-3xl px-6">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//           Unlock Skills, <span className="text-purple-400">Exchange Knowledge</span>
//         </h1>
//         <h2 className="text-lg md:text-xl mb-10 text-gray-300">
//           Nuvora helps you learn and share skills with a vibrant community.  
//           Teach what you know. Learn what you love.
//         </h2>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
//           <button className="px-8 py-4 text-lg font-semibold rounded-2xl bg-purple-600 hover:bg-purple-700 shadow-lg hover:scale-105 transition">
//             Get Started
//           </button>
//           <button className="px-8 py-4 text-lg font-semibold rounded-2xl border border-gray-500 text-gray-200 hover:bg-gray-800 hover:text-white transition">
//             Learn More
//           </button>
//         </div>
//       </div>

//       {/* Background beams */}
//       <div className="absolute inset-0 z-0">
//         <BackgroundBeams />
//       </div>
//     </div>
//   );
// }




import React from "react";
import { BackgroundBeams } from "../../ui/background-beams";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();


  const skills = [
    {
      title: "Web Development",
      category: "Technology",
      description: "Learn to build full-stack applications with modern frameworks.",
      thumbnail: "https://www.mooc.org/hubfs/javascript-jpg.jpeg",
    },
    {
      title: "Photography",
      category: "Creative Arts",
      description: "Master the art of capturing stunning visuals and editing.",
      thumbnail: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Spanish Language",
      category: "Languages",
      description: "Learn conversational Spanish from native speakers.",
      thumbnail: "https://www.johnacademy.co.uk/wp-content/uploads/2023/05/How-Learning-A-Second-Language-Enriches-Your-Life.png",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-y-auto bg-black text-white">
      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Unlock Skills, <span className="text-purple-400">Exchange Knowledge</span>
        </h1>
        <h2 className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl">
          Nuvora helps you learn and share skills with a vibrant community.  
          Teach what you know. Learn what you love.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigate('/register')} className="px-8 py-4 text-lg font-semibold rounded-2xl bg-purple-600 hover:bg-purple-700 shadow-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-8 py-4 text-lg font-semibold rounded-2xl border border-gray-500 text-gray-200 hover:bg-gray-800 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Skill Preview Section */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-10">
          Explore Popular Skills
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={skill.thumbnail}
                alt={skill.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-sm text-purple-400 font-semibold">
                  {skill.category}
                </span>
                <h4 className="text-xl font-bold mt-2 mb-3">{skill.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                <button className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
    </div>
  );
}
