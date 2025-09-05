import axios from "axios";

// export const API_URL = "https://nuvora-backend-fa1q.onrender.com"; // Change based on your backend route

const backendUrl = import.meta.env.VITE_BACKEND_URL;


// export const API_URL = "http://localhost:3000";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${backendUrl}/api/auth/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong!" };
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${backendUrl}/api/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong!" };
  }
};
