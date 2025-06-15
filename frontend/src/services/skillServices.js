import axios from 'axios';
import { API_URL } from './authServices';
 // Base URL for skills API

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

export const getAllMySkills = async (token) =>{
  try{
    const response = await axios.get(`${API_URL}/my-skills`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
    });

    return response.data;

  }catch(error){
    console.error('Error fetching My Skills: ', error);
  }
}


export const addSkill = async (skillData, token) =>{
  try{
    const response = await axios.post(`${API_URL}`, skillData, {
      headers: {
          Authorization: `Bearer ${token}`
      }
    });

    console.log("RESPONSE is ", response);
    console.log(response.data);


    response.data;

    console.log(response.data);

  }catch(error){
    throw error.response ? error.response.data : { message: 'Network error' };
  }
}


