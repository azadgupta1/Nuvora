import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WorldGif_1 from "../../../assets/World_1.gif";

// Animation utility
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="w-full bg-[#e0e7ff] min-h-screen pt-24 flex items-center justify-center px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Skill Exchange Made <span className="text-[#0077C8]">Effortless</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Join Nuvora to teach, learn, and grow through real human connections.
            Trade your skills with others in a beautiful, seamless experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#0077C8] text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition hover:bg-[#0062a8]">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white border border-[#0077C8] text-[#0077C8] hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 flex justify-center"
        >
          <img
            src={WorldGif_1}
            alt="Hero Illustration"
            className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
