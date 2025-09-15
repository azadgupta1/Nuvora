// ProfileCard.jsx
import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const ProfileCard = ({ data, backendUrl, onEditClick }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-xs bg-white rounded-xl border-2 border-gray-200 p-6 mx-auto">
      {data?.profilePicture ? (
        <img
          src={`${data.profilePicture}`}
          alt="Profile"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto border object-cover"
        />
      ) : (
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <h2 className="mt-4 text-xl font-bold text-center break-words">
        {data.name}
      </h2>

      {data.bio && (
        <p className="text-gray-600 text-center mt-2 break-words">{data.bio}</p>
      )}

      <button
        onClick={onEditClick}
        className="my-4 w-full bg-black text-white py-2 rounded hover:bg-black/80"
      >
        Edit Profile
      </button>

      <div className="flex items-center gap-2 text-sm sm:text-base mt-2 break-all">
        <IoIosMail className="text-lg" />
        <span>{data.email}</span>
      </div>

      <div className="flex items-center gap-2 text-sm sm:text-base mt-2 break-words">
        <IoLocationOutline className="text-lg" />
        <span>{data.location || "Not specified"}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
