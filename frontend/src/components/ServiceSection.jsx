// components/ServiceSection.jsx
import React from "react";

const services = [
  {
    title: "Recipe/Cooking advice by Linguini!",
    provider: "Frank C.",
    location: "New York NY",
    description:
      "I love meeting new people, helping others, and sharing my knowledge. Bartering makes more sense than currency.",
    price: "10",
    unit: "unit",
    mode: "Virtual",
    reviews: "15",
  },
  {
    title: "Help Learn Chat GPT",
    provider: "Bradley S.",
    location: "Fresno CA",
    description:
      "Simbi opens doors to a broader client base, fostering community, innovation, and business growth.",
    price: "190",
    unit: "session",
    mode: "Virtual",
    reviews: "94",
  },
  {
    title: "Edit snapshots into portraits",
    provider: "Crys K.",
    location: "Edmonton AB",
    description:
      "I'm excited to share my expertise. Let's work together to make life smoother!",
    price: "10",
    unit: "unit",
    mode: "Virtual",
    reviews: "11",
  },
  {
    title: "Develop local sustainability",
    provider: "Tony B.",
    location: "Hubbard OH",
    description:
      "Really like meeting new people and building a network of new acquaintances. Attempting to live the Time Bank way.",
    price: "10",
    unit: "hour",
    mode: "Virtual",
    reviews: "18",
  },
  {
    title: "Updating Your Resumes",
    provider: "Dylanna F.",
    location: "Edmonton AB",
    description:
      "I love sustainability and meeting new people, and Simbi makes it simple and fun to do both!",
    price: "25",
    unit: "unit",
    mode: "Virtual",
    reviews: "201",
  },
  {
    title: "Psyche Development",
    provider: "Ruby R.",
    location: "Woodinville WA",
    description:
      "Networking and building strong alliances. I also share useful resources.",
    price: "250",
    unit: "session",
    mode: "Virtual",
    reviews: "66",
  },
];

const ServiceSection = () => {
  return (
    <div>
        <h1 className="font-bold text-xl text-center">All Services</h1>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        
      {services.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{s.title}</h3>
          <p className="text-sm text-gray-500 mb-2">
            {s.provider} &bull; {s.location}
          </p>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">{s.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-700">
            <span className="font-semibold">
              {s.price} / {s.unit}
            </span>
            <span>
              {s.mode} &bull; {s.reviews} reviews
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ServiceSection;