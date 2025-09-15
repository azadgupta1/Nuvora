import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${backendUrl}/api/auth/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
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
