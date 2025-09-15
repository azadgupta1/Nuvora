import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillCard from "./SkillCard"; // ✅ adjust path if needed
import toast from "react-hot-toast";
import Spinner1 from "../../ui/Spinner1";


const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Saved() {
  const [savedSkills, setSavedSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSavedSkills = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${backendUrl}/api/bookmark`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSavedSkills(res.data); // ✅ should be an array of skills
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to fetch saved skills.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedSkills();
  }, []);

  const handleSendRequest = async (skillId) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
        await axios.post(
        `${backendUrl}/api/bookings`,
        { skillId }, // adjust payload if needed
        { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Request sent successfully 🚀");
    } catch (err) {
        console.error(err);
        toast.error("Failed to send request ❌");
    }
    };





  if (loading) return <div className="flex justify-center py-10"><Spinner1 /></div>
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 sm:mx-25">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left ">
        Saved Skills
      </h1>

      {savedSkills.length === 0 ? (
        <p className="text-gray-500 text-center">No saved skills yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* {savedSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))} */}

          {savedSkills.map((skill) => (
            <SkillCard
                key={skill.id}
                skill={skill}
                isBookmarked={true}
                onBookmarkToggle={() => {}} // you can hook this up later
                onSendRequest={handleSendRequest} // ✅ FIXED
            />
            ))}



        </div>
      )}
    </div>
  );
}

export default Saved;