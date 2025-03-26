import axios from 'axios';

const API_URL = 'http://localhost:3000/api/skills'; // Base URL for skills API

// Fetch all skills
export const fetchSkills = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};
