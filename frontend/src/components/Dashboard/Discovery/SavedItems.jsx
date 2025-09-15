import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { RiNewsFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function SavedItems() {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col gap-2 rounded-xl text-sm border border-gray-300 p-4">
      {/* ✅ Navigate to Saved Skills */}
      <div
        onClick={() => navigate("/dashboard/saved")}
        className="flex flex-row text-md items-center gap-3 cursor-pointer hover:text-green-600 transition"
      >
        <span>
          <FaBookmark />
        </span>
        <p>Saved Items</p>
      </div>

      <div className="flex flex-row text-md items-center gap-3 cursor-pointer hover:text-green-600 transition">
        <span>
          <RiNewsFill />
        </span>
        <p>Newsletter</p>
      </div>
    </div>
  );
}

export default SavedItems;
