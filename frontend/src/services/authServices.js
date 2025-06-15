import axios from "axios";

export const API_URL = "https://nuvora-backend-fa1q.onrender.com"; // Change based on your backend route

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong!" };
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong!" };
  }
};
