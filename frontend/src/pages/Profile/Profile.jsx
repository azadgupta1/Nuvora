import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserSkillProfile from "./UserSkillProfile";
import ReceivedReviews from "../../components/Dashboard/Reviews/ReceivedReviews";
import ProfileCard from "../../components/Profile/ProfileCard";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import Spinner1 from "../../components/ui/Spinner1";


const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Profile() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", bio: "", location: "", profilePicture: null });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(`${backendUrl}/api/users/${id}`, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(`Error: ${await res.text()}`);
        const userData = await res.json();
        setData(userData);
        setFormData({
          name: userData.name || "",
          bio: userData.bio || "",
          location: userData.location || "",
          profilePicture: null,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const form = new FormData();
    form.append("name", formData.name);
    form.append("bio", formData.bio);
    form.append("location", formData.location);
    if (formData.profilePicture) form.append("profilePicture", formData.profilePicture);

    try {
      const res = await fetch(`${backendUrl}/api/users/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      if (!res.ok) throw new Error("Update failed");
      const updated = await res.json();
      setData(updated);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="flex justify-center py-10"><Spinner1 /></div>
  if (error) return <div className="p-6 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="bg-[#F9F7F1] min-h-screen py-8 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Left Sidebar: Profile Card */}
        <aside className="w-full lg:w-1/3 flex-shrink-0">
          <ProfileCard
            data={data}
            backendUrl={backendUrl}
            onEditClick={() => setIsModalOpen(true)}
          />
        </aside>

        {/* Right Content */}
        <main className="flex-1 flex flex-col gap-6">

          {/* User Skills */}
          <section className="">
            <UserSkillProfile />
          </section>

          {/* Reviews Section */}
          <section className="">
            <ReceivedReviews />
          </section>
        </main>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <EditProfileModal
          formData={formData}
          setFormData={setFormData}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
}

export default Profile;
