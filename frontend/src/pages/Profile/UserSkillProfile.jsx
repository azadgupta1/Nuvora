// components/Profile/UserSkillProfile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillCardUser from "../../components/UserSkillUpdata/SkillCardUser";
import EditSkillModal from "../../components/UserSkillUpdata/EditSkillModal";


const backendUrl = import.meta.env.VITE_BACKEND_URL;

const UserSkillProfile = () => {
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    skillsOffered: [],
    skillsWanted: [],
    category: "",
    description: "",
    duration: "",
    location: "",
    availability: {},
    image: null,
    previewImage: "",
  });

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${backendUrl}/api/skills/user`, { headers: { Authorization: `Bearer ${token}` } });
        if (res.data) {
          setSkill(res.data);
          setFormData({
            skillsOffered: res.data.skillsOffered || [],
            skillsWanted: res.data.skillsWanted || [],
            category: res.data.category || "",
            description: res.data.description || "",
            duration: res.data.duration || "",
            location: res.data.location || "",
            availability: res.data.availability || {},
            image: null,
            previewImage: res.data.image ? `${backendUrl}${res.data.image}` : "",
          });
        }
      } catch (err) {
        console.error("Error fetching skill:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSkill();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "skillsOffered" || key === "skillsWanted") form.append(key, JSON.stringify(formData[key]));
        else if (key === "availability") formData[key] && Object.keys(formData[key]).length && form.append(key, JSON.stringify(formData[key]));
        else if (key === "image" && formData[key]) form.append(key, formData[key]);
        else if (!["previewImage"].includes(key)) form.append(key, formData[key]);
      });
      const res = await axios.post(`${backendUrl}/api/skills`, form, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } });
      setSkill(res.data.skill);
      setFormData({ ...formData, previewImage: res.data.skill.image ? `${backendUrl}${res.data.skill.image}` : formData.previewImage });
      setModalIsOpen(false);
    } catch (err) {
      console.error("Error updating skill:", err.response?.data || err.message);
    }
  };

  if (loading) return <p className="text-gray-500">Loading your skill profile...</p>;
  if (!skill) return <p className="text-gray-500">No skill profile found.</p>;

  return (
    <div className="w-full p-0">
      <SkillCardUser skill={skill} backendUrl={backendUrl} onEditClick={() => setModalIsOpen(true)} />
      <EditSkillModal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleUpdate={handleUpdate}
        backendUrl={backendUrl}
      />
    </div>
  );
};

export default UserSkillProfile;
