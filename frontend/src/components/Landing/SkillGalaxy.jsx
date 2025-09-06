import React, { useState } from "react";

export default function SkillGalaxy() {
  const categories = ["Technology", "Arts", "Sports", "Languages", "Life Coaching"];
  const skills = [
    { title: "Web Dev", category: "Technology" },
    { title: "UI/UX Design", category: "Arts" },
    { title: "Football", category: "Sports" },
    { title: "Spanish", category: "Languages" },
    { title: "Mindfulness", category: "Life Coaching" },
    { title: "AI/ML", category: "Technology" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="relative bg-black text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        🎨 Discover by <span className="text-purple-400">Category</span>
      </h2>

      {/* Bubbles */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
            activeCategory === "All"
              ? "bg-purple-600 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          All
        </button>
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
              activeCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills as constellation nodes */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="relative group px-6 py-4 rounded-full bg-gray-900 border border-gray-700 shadow-lg hover:scale-110 transition"
          >
            <span className="text-purple-300 font-semibold">{skill.title}</span>
            <div className="absolute w-2 h-2 rounded-full bg-purple-500 top-1/2 left-full transform -translate-y-1/2 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
