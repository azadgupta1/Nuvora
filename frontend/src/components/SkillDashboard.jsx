import React, { useEffect, useState } from 'react';
import { fetchSkills } from '../services/skillService';
import SkillCard from '../components/SkillCard';

const Dashboard = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const skillsData = await fetchSkills();
        setSkills(skillsData);
      } catch (err) {
        setError('Failed to load skills. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explore Skills</h1>

      {loading && <p className="text-gray-500">Loading skills...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.length > 0 ? (
            skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)
          ) : (
            <p className="text-gray-500">No skills available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
