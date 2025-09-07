// import React from "react";
// import { FaPlusCircle, FaSearch, FaExchangeAlt } from "react-icons/fa";
// import { TbWorldSearch } from "react-icons/tb";
// import { RiExchangeFill } from "react-icons/ri";
// import { TypewriterEffect } from "../../ui/typewriter-effect";
// import { ClipboardPenLine, UserPen } from 'lucide-react';


// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <UserPen className="text-purple-400 text-20xl" />,
//       title: "Add a Skill",
//       description: "Share what you know — from coding to cooking, add your skills to Nuvora.",
//     },
//     {
//       icon: <TbWorldSearch className="text-green-400 text-4xl" />,
//       title: "Discover Skills",
//       description: "Explore a galaxy of skills to learn, tailored to your passions and needs.",
//     },
//     {
//       icon: <RiExchangeFill className="text-blue-400 text-4xl" />,
//       title: "Connect & Exchange",
//       description: "Match with learners and teachers, then swap knowledge seamlessly.",
//     },
//   ];

//   return (
//     <div className="relative bg-black text-white py-20 px-6">
//       <TypewriterEffect
//         words={[
//           { text: "How ", className: "text-white" },
//           { text: "Nuvora ", className: "text-purple-400" },
//           { text: "Works?", className: "text-white" },
//         ]}
//         className="text-4xl md:text-6xl font-extrabold"
//         cursorClassName="bg-blue-500"
//       />


//       <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col items-center text-center md:w-1/3 group"
//           >
//             {/* Icon */}
//             <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-800 border border-gray-700 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
//               {step.icon}
//             </div>

//             {/* Title + Description */}
//             <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//             <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>

//             {/* Connecting line (only between steps) */}
//             {index < steps.length - 1 && (
//               <div className="hidden md:block absolute top-10 right-[-50%] w-full border-t border-dashed border-gray-700"></div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Mobile vertical connector */}
//       <div className="flex flex-col md:hidden items-center mt-10 gap-6">
//         {steps.map((step, index) => (
//           <React.Fragment key={index}>
//             <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-transparent"></div>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }










// import React from "react";
// import { UserPen, Search, Handshake } from "lucide-react"; // clean icons
// import { TypewriterEffect } from "../../ui/typewriter-effect";

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <UserPen className="w-8 h-8 text-indigo-400" />,
//       title: "Add a Skill",
//       description:
//         "Share what you know — from coding to cooking, add your skills to Nuvora.",
//     },
//     {
//       icon: <Search className="w-8 h-8 text-cyan-400" />,
//       title: "Discover Skills",
//       description:
//         "Explore a galaxy of skills to learn, tailored to your passions and needs.",
//     },
//     {
//       icon: <Handshake className="w-8 h-8 text-purple-400" />,
//       title: "Connect & Exchange",
//       description:
//         "Match with learners and teachers, then swap knowledge seamlessly.",
//     },
//   ];

//   return (
//     <div className="relative bg-black text-white py-20 px-6">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <TypewriterEffect
//           words={[
//             { text: "How ", className: "text-white" },
//             { text: "Nuvora ", className: "text-indigo-400" },
//             { text: "Works?", className: "text-white" },
//           ]}
//           className="text-4xl md:text-6xl font-extrabold"
//           cursorClassName="bg-cyan-400"
//         />
//       </div>

//       {/* Steps */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col items-center text-center md:w-1/3 group"
//           >
//             {/* Icon with consistent bg */}
//             <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-700/40 to-purple-700/40 border border-gray-700 shadow-[0_0_15px_rgba(99,102,241,0.4)] mb-6 group-hover:scale-110 transition-transform duration-300">
//               {step.icon}
//             </div>

//             {/* Title + Description */}
//             <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//             <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>

//             {/* Connector line with spacing */}
//             {index < steps.length - 1 && (
//               <div className="hidden md:block absolute top-1/2 right-[-55%] w-full border-t-2 border-dashed border-gray-700"></div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Mobile vertical connectors */}
//       <div className="flex flex-col md:hidden items-center mt-10 gap-6">
//         {steps.map((_, index) =>
//           index < steps.length - 1 ? (
//             <div
//               key={index}
//               className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-purple-500"
//             ></div>
//           ) : null
//         )}
//       </div>
//     </div>
//   );
// }






import React from "react";
import { UserPen, Search, Handshake } from "lucide-react"; 
import { TypewriterEffect } from "../../ui/typewriter-effect";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPen className="w-8 h-8 text-indigo-400" />,
      title: "Add a Skill",
      description:
        "Share what you know — from coding to cooking, add your skills to Nuvora.",
    },
    {
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      title: "Discover Skills",
      description:
        "Explore a galaxy of skills to learn, tailored to your passions and needs.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-purple-400" />,
      title: "Connect & Exchange",
      description:
        "Match with learners and teachers, then swap knowledge seamlessly.",
    },
  ];

  return (
    <div className="relative bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <TypewriterEffect
          words={[
            { text: "How ", className: "text-white" },
            { text: "Nuvora ", className: "text-indigo-400" },
            { text: "Works?", className: "text-white" },
          ]}
          className="text-4xl md:text-6xl font-extrabold"
          cursorClassName="bg-cyan-400"
        />
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center md:w-1/3 group"
          >
            {/* Icon with consistent bg */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-700/40 to-purple-700/40 border border-gray-700 shadow-[0_0_15px_rgba(99,102,241,0.4)] mb-6 group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>

            {/* Title + Description */}
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>

            {/* Desktop horizontal line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-50%] w-[85%] ml-6 border-t-2 border-dashed border-gray-700"></div>
            )}

            {/* Mobile vertical line (placed between cards) */}
            {index < steps.length - 1 && (
              <div className="md:hidden w-1 h-12 bg-gradient-to-b from-indigo-500 to-purple-500 mt-6"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}




















