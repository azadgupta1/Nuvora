// // components/Profile/EditProfileModal.jsx
// import React from "react";

// const EditProfileModal = ({ formData, setFormData, onClose, onSubmit }) => {
//   return (
//     <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm flex justify-center items-center px-4 py-10">
//       <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fadeIn">
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-6 text-gray-500 hover:text-gray-800 text-2xl transition"
//         >
//           &times;
//         </button>

//         <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//           Edit Profile
//         </h2>

//         <form onSubmit={onSubmit} className="space-y-6">
//           <input
//             type="text"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             placeholder="Name"
//           />
//           <textarea
//             value={formData.bio}
//             onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             placeholder="Bio"
//             rows="3"
//           ></textarea>
//           <input
//             type="text"
//             value={formData.location}
//             onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             placeholder="Location"
//           />
//           <hr className="border-gray-200" />

//           <label
//             htmlFor="profileUpload"
//             className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-indigo-400 transition cursor-pointer"
//           >
//             <svg
//               className="w-12 h-12 text-gray-400 mb-2"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5m0 0l5 5m-5-5v12"
//               />
//             </svg>
//             <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
//             <p className="text-xs text-gray-400">PNG, JPG, JPEG up to 2MB</p>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setFormData({ ...formData, profilePicture: e.target.files[0] })
//               }
//               className="hidden"
//               id="profileUpload"
//             />
//           </label>

//           <div className="flex justify-end gap-3 pt-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfileModal;















import React from "react";

const EditProfileModal = ({ formData, setFormData, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4 py-6 sm:py-10 overflow-auto">
      <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-md p-6 sm:p-8 mx-auto animate-fadeIn max-h-[90vh] overflow-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl transition"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Edit Profile
        </h2>

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">

          {/* Name */}
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            placeholder="Name"
          />

          {/* Bio */}
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
            placeholder="Bio"
            rows="3"
          ></textarea>

          {/* Location */}
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            placeholder="Location"
          />

          <hr className="border-gray-200 my-2" />

          {/* Profile Picture Upload */}
          <label
            htmlFor="profileUpload"
            className="border-2 border-dashed border-gray-300 rounded-lg p-5 flex flex-col items-center justify-center text-center hover:border-indigo-400 transition cursor-pointer"
          >
            <svg
              className="w-12 h-12 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400">PNG, JPG, JPEG up to 2MB</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, profilePicture: e.target.files[0] })}
              className="hidden"
              id="profileUpload"
            />
          </label>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] w-full sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
