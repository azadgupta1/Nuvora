import React from "react";

export default function CommunityMap() {
  const locations = [
    { top: "30%", left: "40%" }, // Example: Europe
    { top: "60%", left: "25%" }, // Example: South America
    { top: "50%", left: "70%" }, // Example: Asia
    { top: "40%", left: "85%" }, // Example: Japan
  ];

  return (
    <div className="relative bg-black text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        🌍 Global Skill <span className="text-purple-400">Network</span>
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Background world map image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
          alt="World Map"
          className="w-full opacity-30"
        />

        {/* Glowing dots */}
        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-purple-500 rounded-full animate-ping"
            style={{ top: loc.top, left: loc.left }}
          ></div>
        ))}
        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{ top: loc.top, left: loc.left }}
          ></div>
        ))}
      </div>
    </div>
  );
}
