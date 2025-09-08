// components/Profile/SkillCard.jsx
import React from "react";

const Badge = ({ children, color = "indigo" }) => (
  <span
    className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${color}-100 text-${color}-800`}
  >
    {children}
  </span>
);

const SkillCardUser = ({ skill, backendUrl, onEditClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 relative max-w-3xl mx-auto">
      <button
        onClick={onEditClick}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
      >
        ✎
      </button>

      <div className="flex flex-col items-center text-center">
        <img
          src={skill.image ? `${backendUrl}${skill.image}` : "https://via.placeholder.com/150"}
          alt="Skill Thumbnail"
          className="w-32 h-32 rounded-xl object-cover border shadow-sm"
        />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">{skill.category || "Uncategorized Skill"}</h3>
        <p className="text-gray-600 mt-1">{skill.description || "No description provided."}</p>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6 text-center sm:text-left">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Skills Offered</h4>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {skill.skillsOffered?.length > 0 ? skill.skillsOffered.map((s, i) => <Badge key={i}>{s}</Badge>) : <p className="text-gray-500 text-sm">No skills listed</p>}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Skills Wanted</h4>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {skill.skillsWanted?.length > 0 ? skill.skillsWanted.map((s, i) => <Badge key={i} color="emerald">{s}</Badge>) : <p className="text-gray-500 text-sm">No skills listed</p>}
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-gray-700 text-center sm:text-left">
        {skill.duration && <p>⏳ <strong>Duration:</strong> {skill.duration}</p>}
        {skill.location && <p>📍 <strong>Location:</strong> {skill.location}</p>}
      </div>
    </div>
  );
};

export default SkillCardUser;
