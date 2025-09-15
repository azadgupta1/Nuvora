import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function UserCard() {
  const [receiver, setReceiver] = useState(null);

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const senderId = user?.userId;

  useEffect(() => {
    const fetchReceiverData = async () => {
      if (!senderId || !token) return;

      try {
        const res = await axios.get(
          `${backendUrl}/api/users/${senderId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setReceiver(res.data);
      } catch (err) {
        console.error("Failed to fetch Receiverd Data: ", err);
      }
    };

    fetchReceiverData();
  }, [senderId, token]);

  if (!receiver) return null; // avoid rendering before data is ready

  return (
    <div className="hidden md:block bg-white rounded-xl border-2 border-gray-200 w-54 ml-10 mt-15 overflow-hidden relative">
      
      {/* Top Skill Image (Banner) */}
      <div className="w-full h-24 bg-gray-100">
        <img
          src={receiver.skill?.image}
          alt="Skill Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Picture (Overlapping Circle) */}
      <div className="absolute top-16 left-4">
        <img
          src={receiver.profilePicture}
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
        />
      </div>

      {/* Info Section */}
      <div className="mt-10 px-4 pb-4 text-left">
        <h2 className="text-lg font-semibold text-black">{receiver.name}</h2>
        <p className="text-sm text-gray-500">{receiver.location}</p>
        <p className="text-sm text-gray-800 mt-2">{receiver.bio}</p>
      </div>
    </div>
  );
}

export default UserCard;
