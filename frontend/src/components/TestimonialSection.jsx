import React from "react";

const testimonials = [
  {
    name: "Francisco",
    role: "Packaging Designer",
    message:
      "Thank you, Simbi, for referring to us as people rather than ‘consumers’. I'm excited to share my talents with a community of like-minded, mini revolutionaries.",
  },
  {
    name: "Alicia",
    role: "Wellness Coach",
    message:
      "Simbi gave me an alternative to the corporate system. I’m finally doing what I love and sharing it freely!",
  },
  {
    name: "Jamal",
    role: "Web Developer",
    message:
      "I've built amazing collaborations through this community. We uplift each other through skills and trust.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="space-y-6">
        <h1 className="font-bold text-center text-2xl py-5">What members are saying</h1>
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-6 shadow-sm"
        >
          <p className="text-gray-700 text-sm italic mb-4">"{t.message}"</p>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">{t.name}</p>
            <p className="text-xs text-gray-500">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSection;
