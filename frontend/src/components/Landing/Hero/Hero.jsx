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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight mt-10 sm:mt-0">
          Unlock Skills, <span className="text-purple-400">Exchange Knowledge</span>
        </h1>
        <h2 className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl">
          Nuvora helps you learn and share skills with a vibrant community.  
          Teach what you know. Learn what you love.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigate('/register')} className="px-8 py-4 text-lg font-semibold rounded-2xl bg-purple-600 hover:bg-purple-700 hover:cursor-pointer shadow-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-8 py-4 text-lg font-semibold rounded-2xl border border-gray-500 text-gray-200 hover:bg-gray-800 hover:cursor-pointer hover:text-white transition">
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
