import React from "react";
import { FaPlusCircle, FaSearch, FaExchangeAlt } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaPlusCircle className="text-purple-400 text-4xl" />,
      title: "Add a Skill",
      description: "Share what you know — from coding to cooking, add your skills to Nuvora.",
    },
    {
      icon: <FaSearch className="text-green-400 text-4xl" />,
      title: "Discover Skills",
      description: "Explore a galaxy of skills to learn, tailored to your passions and needs.",
    },
    {
      icon: <FaExchangeAlt className="text-blue-400 text-4xl" />,
      title: "Connect & Exchange",
      description: "Match with learners and teachers, then swap knowledge seamlessly.",
    },
  ];

  return (
    <div className="relative bg-black text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        ✨ How <span className="text-purple-400">Nuvora</span> Works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center md:w-1/3 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border border-gray-700 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>

            {/* Title + Description */}
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>

            {/* Connecting line (only between steps) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 right-[-50%] w-full border-t border-dashed border-gray-700"></div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile vertical connector */}
      <div className="flex flex-col md:hidden items-center mt-10 gap-6">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-transparent"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
