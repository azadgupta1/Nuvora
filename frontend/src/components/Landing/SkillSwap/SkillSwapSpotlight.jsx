import React from "react";

export default function SkillSwapSpotlight() {
  const stories = [
    {
      from: "Arjun",
      taught: "Guitar 🎸",
      to: "Maria",
      learned: "Spanish 🇪🇸",
      highlight: "Music met language, and both gained something new.",
    },
    {
      from: "Riya",
      taught: "Web Dev 💻",
      to: "Anjali",
      learned: "Yoga 🧘",
      highlight: "Coding stress swapped for mindfulness and balance.",
    },
    {
      from: "David",
      taught: "Photography 📸",
      to: "Kenji",
      learned: "Cooking 🍣",
      highlight: "Creativity exchanged across lenses and flavors.",
    },
  ];

  return (
    <div className="relative bg-black text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        🤝 Skill Swap <span className="text-purple-400">Spotlight</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border border-gray-700"
          >
            <div>
              <p className="text-lg font-semibold mb-3">
                {story.from} taught <span className="text-purple-400">{story.taught}</span>
              </p>
              <p className="text-lg font-semibold mb-3">
                and learned <span className="text-green-400">{story.learned}</span> from {story.to}.
              </p>
              <p className="text-gray-400 text-sm italic">“{story.highlight}”</p>
            </div>

            {/* Story vibe footer */}
            <div className="mt-6 flex justify-between text-sm text-gray-500">
              <span>🌟 Exchange Story</span>
              <span className="text-purple-400">#Nuvora</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
