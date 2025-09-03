import React, { useEffect, useState } from 'react';
import { getAllMySkills } from '../../services/skillServices'; // Adjust path as needed

function MySkills() {
  // State to store the skills data
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle any errors

  useEffect(() => {
    const fetchSkills = async () => {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token'); // Assuming token is stored as 'token' in localStorage

      if (!token) {
        setError('No token found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const data = await getAllMySkills(token); // Pass the token to the service function
        setSkills(data); // Set the fetched skills in state
        setLoading(false); // Update loading state

        console.log(data);
      } catch (err) {
        setError('Failed to fetch skills');
        setLoading(false);
      }
    };

    fetchSkills();
  }, []); // Empty array ensures this runs only once after the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an issue
  }

  return (
    <div>
      <h2>My Skills</h2>
      {skills.length === 0 ? (
        <p>No skills found.</p> // If no skills are fetched
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MySkills;
