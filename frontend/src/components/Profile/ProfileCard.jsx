// ProfileCard.jsx
import React from "react";

const ProfileCard = ({ data, backendUrl, onEditClick }) => {
  return (
    <div className="w-72 bg-white shadow rounded-sm p-6">
      {data?.profilePicture ? (
        <img
          src={`${backendUrl}${data.profilePicture}`}
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto border object-cover"
        />
      ) : (
        <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <h2 className="mt-4 text-xl font-bold text-center">{data.name}</h2>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      {data.bio && <p className="text-gray-600 text-center mt-2">{data.bio}</p>}
      {data.location && <p className="text-gray-500 text-center mt-1">{data.location}</p>}
      <button
        onClick={onEditClick}
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-blue-700"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
