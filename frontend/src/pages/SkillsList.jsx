import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SkillsList = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/skills");
        const data = await response.json();
        setSkills(data.skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Available Skills</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading skills...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={skill.image || "https://via.placeholder.com/150"}
                alt={skill.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
              <p className="text-gray-500 text-sm">{skill.category}</p>
              <p className="mt-2 text-gray-700">{skill.description}</p>
              <p className="mt-2 text-blue-600 font-semibold">
                Wants to learn: {skill.skillWantedInReturn}
              </p>
              <button
                onClick={() => navigate(`/Dashboard/skill/${skill.id}`)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsList;
