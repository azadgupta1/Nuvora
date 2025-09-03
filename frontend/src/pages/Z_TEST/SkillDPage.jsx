import React from 'react';

const SkillDPage = ({ skill }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
      <img src={skill.image || '/placeholder.jpg'} alt={skill.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-3">{skill.name}</h3>
      <p className="text-gray-600 text-sm">{skill.category}</p>
      <p className="text-gray-800 mt-2 line-clamp-2">{skill.description}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-blue-600 font-medium">Duration: {skill.duration}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          View
        </button>
      </div>
    </div>
  );
};

export default SkillDPage;
