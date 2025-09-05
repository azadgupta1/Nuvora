import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement('#root'); // Set for accessibility

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
    image: "",
    duration: "",
    location: "",
    availability: {},
  });

  // Fetch user's skill profile
  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${backendUrl}/api/skills/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSkill(res.data);
        setFormData(res.data); // Prefill the modal form
      } catch (error) {
        console.error("Error fetching skill:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkill();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle string arrays for skills
    if (name === "skillsOffered" || name === "skillsWanted") {
      setFormData({ ...formData, [name]: value.split(",").map(s => s.trim()) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await axios.post(`${backendUrl}/api/skills`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Refresh skill info
      setSkill({ ...formData });
      setModalIsOpen(false);
    } catch (error) {
      console.error("Error updating skill:", error);
    }
  };

  if (loading) return <p>Loading skill profile...</p>;

  if (!skill) return <p>No skill profile found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Skill Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-2">
        <p><strong>Skills Offered:</strong> {skill.skillsOffered.join(", ")}</p>
        <p><strong>Skills Wanted:</strong> {skill.skillsWanted.join(", ")}</p>
        {skill.category && <p><strong>Category:</strong> {skill.category}</p>}
        {skill.description && <p><strong>Description:</strong> {skill.description}</p>}
        {skill.duration && <p><strong>Duration:</strong> {skill.duration}</p>}
        {skill.location && <p><strong>Location:</strong> {skill.location}</p>}
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setModalIsOpen(true)}
        >
          Edit Skill
        </button>
      </div>

      {/* Modal for editing skill */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Edit Skill"
        className="bg-white p-6 rounded shadow-lg max-w-xl mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      >
        <h3 className="text-xl font-semibold mb-4">Edit Your Skill</h3>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block font-medium">Skills Offered (comma-separated)</label>
            <input
              type="text"
              name="skillsOffered"
              value={formData.skillsOffered.join(", ")}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Skills Wanted (comma-separated)</label>
            <input
              type="text"
              name="skillsWanted"
              value={formData.skillsWanted.join(", ")}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setModalIsOpen(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserSkillProfile;
