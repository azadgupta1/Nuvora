// import axios from "axios";

// const API_URL = "http://localhost:3000/api/auth"; // Update this if needed

// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/signup`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: "Signup failed!" };
//   }
// };

// export const login = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, userData);
//     localStorage.setItem("token", response.data.token); // Store token
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: "Login failed!" };
//   }
// };

// export const logout = () => {
//   localStorage.removeItem("token");
// };


import axios from "axios";

const API_URL = "http://localhost:3000/api/auth"; // Update if needed

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Signup failed!" };
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem("token", response.data.token); // Store JWT token
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed!" };
  }
};
