// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import WorldGif_1 from "../../../assets/World_1.gif";

// // Animation utility

// const Hero = () => {
//   return (
//     <section className="w-full bg-[#AACCDD] min-h-screen pt-24 flex items-center justify-center px-4 md:px-12 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left: Text Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="z-10 text-center md:text-left"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
//             Skill Exchange Made <span className="text-[#0077C8]">Effortless</span>
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
//             Join Nuvora to teach, learn, and grow through real human connections.
//             Trade your skills with others in a beautiful, seamless experience.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <button className="bg-[#0077C8] text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition hover:bg-[#0062a8]">
//               Get Started <ArrowRight className="w-4 h-4" />
//             </button>
//             <button className="bg-white border border-[#0077C8] text-[#0077C8] hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold transition">
//               Learn More
//             </button>
//           </div>
//         </motion.div>

//         {/* Right: Hero Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="z-10 flex justify-center"
//         >
//           <img
//             src={WorldGif_1}
//             alt="Hero Illustration"
//             className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px]"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Nuvora_2 from '../../../assets/Nuvora_2.png'

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

// export const FadeUp = (delay) => ({
//   initial: { opacity: 0, y: 50 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       duration: 0.5,
//       delay: delay,
//       ease: "easeInOut"
//     }
//   }
// });

// const Hero = () => {
//   const [index, setIndex] = useState(0);

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
//         className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
//         style={{ backgroundImage: `url(${Nuvora_2})` }}
//       >

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
//           to="/join"
//           className="inline-block bg-[#0ebeca] text-white text-lg px-8 py-3 rounded-md font-semibold hover:bg-[#0DCEDA] transition"
//         >
//           Join Nuvora
//         </Link>
//       </div>

//       {/* Clean Diagonal Grid with Fade */}
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




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Nuvora_2 from '../../../assets/Nuvora_2.png';

const exchangeMessages = [
  {
    text: "Elena exchanged Resume Editing for Headshots with Rachel",
    highlights: ["Resume Editing", "Headshots"]
  },
  {
    text: "Nita exchanged Web Design for Competitive Coding from Alex",
    highlights: ["Web Design", "Competitive Coding"]
  },
  {
    text: "Sam helped Riya with Guitar Learning for Drum lessons",
    highlights: ["Guitar Learning", "Drum"]
  },
  {
    text: "Aman taught Photography in exchange for Yoga sessions with Tara",
    highlights: ["Photography", "Yoga"]
  },
  {
    text: "Priya received Financial Planning tips in return for Marketing help from Leo",
    highlights: ["Financial Planning", "Marketing"]
  }
];

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

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % exchangeMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = exchangeMessages[index];

  const renderHighlightedText = (message, highlights) => {
    const regex = new RegExp(`(${highlights.join("|")})`, "gi");
    const parts = message.split(regex);
    return parts.map((part, i) =>
      highlights.includes(part) ? (
        <span key={i} className="text-[#0ebeca] font-semibold">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#E6F2F8] text-center py-20 px-4 md:px-8">

      {/* Background Image Layer */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${Nuvora_2})` }}
      /> */}
      <div
        className="absolute inset-0 bg-cover opacity-10 z-0
                  bg-[position:47.5%_center] sm:bg-center"
        style={{ backgroundImage: `url(${Nuvora_2})` }}
      />


      {/* Main Content Layer */}
      <div className="relative z-10">
        <h1 className="text-base md:text-lg font-semibold text-gray-700 uppercase tracking-wider mb-2">
          Welcome to the
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#07b8c5] mb-6">
          Skill Sharing Evolution
        </h2>

        {/* Rotating Message */}
        <div className="mt-5 mb-5 h-16 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-gray-700 font-medium absolute px-2 font-serif"
            >
              {renderHighlightedText(current.text, current.highlights)}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10 px-2">
          <strong>Nuvora</strong> is a platform where skills become currency. Whether it's coding for music lessons, design for yoga classes, or photography for marketing — we connect people through mutual support, learning, and collaboration. Join the new way of growing together!
        </p>

        <Link
          to="/join"
          className="inline-block bg-[#0ebeca] text-white text-lg px-8 py-3 rounded-md font-semibold hover:bg-[#0DCEDA] transition"
        >
          Join Nuvora
        </Link>
      </div>

      {/* Diagonal Grid Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0"
          style={{
            opacity: 0.6,
            maskImage: "linear-gradient(to top, white, transparent)",
            WebkitMaskImage: "linear-gradient(to top, white, transparent)"
          }}
        >
          {[...Array(10)].map((_, i) => {
            const offset = i * 15;
            return (
              <line
                key={`diag1-${i}`}
                x1={offset}
                y1="100"
                x2="0"
                y2={100 - offset}
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            );
          })}
          {[...Array(10)].map((_, i) => {
            const offset = i * 15;
            return (
              <line
                key={`diag2-${i}`}
                x1={100 - offset}
                y1="100"
                x2="100"
                y2={100 - offset}
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>
    </section>
  );
};

export default Hero;
