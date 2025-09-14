// // components/Profile/EditSkillModal.jsx
// import React from "react";
// import Modal from "react-modal";
// import { Upload, X } from "lucide-react";

// Modal.setAppElement("#root");

// const EditSkillModal = ({ modalIsOpen, closeModal, formData, setFormData, handleUpdate, backendUrl }) => {
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({ ...formData, image: file, previewImage: URL.createObjectURL(file) });
//     }
//   };

//   return (
//     <Modal
//       isOpen={modalIsOpen}
//       onRequestClose={closeModal}
//       overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-auto px-4 py-6"
//       className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 mt-20 relative max-h-[90vh] overflow-auto"
//     >
//       <button onClick={closeModal} className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
//         <X className="w-5 h-5 text-gray-600" />
//       </button>

//       <h3 className="text-2xl font-semibold mb-6">Edit Your Skill</h3>

//       <form onSubmit={handleUpdate} className="space-y-5">
//         {/* Image */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
//           <div className="flex flex-col gap-3 mt-2 items-center">
//             <img src={formData.previewImage || "https://via.placeholder.com/100"} alt="Preview" className="w-24 h-24 object-cover rounded-lg border" />
//             <label className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50">
//               <Upload className="w-5 h-5 text-gray-600" />
//               <span className="text-sm text-gray-700">Upload</span>
//               <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//             </label>
//           </div>
//         </div>

//         {/* Other Fields */}
//         {["skillsOffered", "skillsWanted", "category", "description", "duration", "location"].map((field) => (
//           <div key={field}>
//             <label className="block text-sm font-medium text-gray-700">{field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</label>
//             {field === "description" ? (
//               <textarea
//                 name={field}
//                 value={formData[field]}
//                 onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
//                 placeholder={`Write something about your ${field}...`}
//                 rows={3}
//                 className="mt-1 w-full border rounded-lg px-3 py-2"
//               />
//             ) : (
//               <input
//                 type="text"
//                 name={field}
//                 value={field.includes("skills") ? formData[field].join(", ") : formData[field]}
//                 onChange={(e) =>
//                   field.includes("skills")
//                     ? setFormData({ ...formData, [field]: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
//                     : setFormData({ ...formData, [field]: e.target.value })
//                 }
//                 placeholder={`e.g. ${field}`}
//                 className="mt-1 w-full border rounded-lg px-3 py-2"
//               />
//             )}
//           </div>
//         ))}

//         <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700">
//           Save Changes
//         </button>
//       </form>
//     </Modal>
//   );
// };

// export default EditSkillModal;



// // components/Profile/EditSkillModal.jsx
// import React, { useState } from "react";
// import Modal from "react-modal";
// import { Upload, X, Plus } from "lucide-react";

// Modal.setAppElement("#root");

// const categories = ["Art", "Tech", "Music", "Language", "Fitness", "Other"];

// const EditSkillModal = ({
//   modalIsOpen,
//   closeModal,
//   formData,
//   setFormData,
//   handleUpdate,
// }) => {
//   const [tempSkillOffered, setTempSkillOffered] = useState("");
//   const [tempSkillWanted, setTempSkillWanted] = useState("");

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({
//         ...formData,
//         image: file,
//         previewImage: URL.createObjectURL(file),
//       });
//     }
//   };

//   const handleAddSkill = (type) => {
//     const tempSkill = type === "offered" ? tempSkillOffered : tempSkillWanted;
//     if (tempSkill.trim()) {
//       const updatedSkills = [...formData[type === "offered" ? "skillsOffered" : "skillsWanted"], tempSkill.trim()];
//       setFormData({ ...formData, [type === "offered" ? "skillsOffered" : "skillsWanted"]: updatedSkills });
//       type === "offered" ? setTempSkillOffered("") : setTempSkillWanted("");
//     }
//   };

//   const handleRemoveSkill = (type, index) => {
//     const key = type === "offered" ? "skillsOffered" : "skillsWanted";
//     const updated = [...formData[key]];
//     updated.splice(index, 1);
//     setFormData({ ...formData, [key]: updated });
//   };

//   return (
//     <Modal
//       isOpen={modalIsOpen}
//       onRequestClose={closeModal}
//       overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start z-50 overflow-auto px-4 py-6"
//       className="bg-white/90 backdrop-blur-lg text-black w-full max-w-2xl rounded-2xl shadow-xl p-6 mt-20 relative animate-fadeIn max-h-[90vh] overflow-auto"
//     >
//       {/* Close Button */}
//       <button
//         onClick={closeModal}
//         className="absolute top-4 right-4 p-2 rounded-ful"
//       >
//         <X className="w-5 h-5 text-gray-400" />
//       </button>

//       <h3 className="text-2xl font-semibold mb-6">Edit Your Skill</h3>

//       <form onSubmit={handleUpdate} className="space-y-6">

//         {/* Thumbnail Upload */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Thumbnail</label>
//           <div className="flex flex-col gap-3 items-start">
//             <img
//               src={formData.previewImage || "https://via.placeholder.com/300x150"}
//               alt="Preview"
//               className="w-full max-w-md h-32 object-cover rounded-lg border border-gray-700"
//             />
//             <label className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-800">
//               <Upload className="w-5 h-5 text-gray-400" />
//               <span className="text-sm text-gray-400">Upload</span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//             </label>
//           </div>
//         </div>

//         {/* Skills Offered */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Skills You Can Teach</label>
//           <div className="flex flex-col sm:flex-row gap-2 mb-3">
//             <input
//               type="text"
//               value={tempSkillOffered}
//               onChange={(e) => setTempSkillOffered(e.target.value)}
//               placeholder="e.g. Guitar, Python"
//               className="flex-1 px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
//             />
//             <button
//               type="button"
//               onClick={() => handleAddSkill("offered")}
//               className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
//             >
//               <Plus size={18} /> Add
//             </button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {formData.skillsOffered?.map((s, i) => (
//               <span
//                 key={i}
//                 className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
//               >
//                 {s}
//                 <button onClick={() => handleRemoveSkill("offered", i)}>×</button>
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Skills Wanted */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Skills You Want to Learn</label>
//           <div className="flex flex-col sm:flex-row gap-2 mb-3">
//             <input
//               type="text"
//               value={tempSkillWanted}
//               onChange={(e) => setTempSkillWanted(e.target.value)}
//               placeholder="e.g. Cooking, Design"
//               className="flex-1 px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
//             />
//             <button
//               type="button"
//               onClick={() => handleAddSkill("wanted")}
//               className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
//             >
//               <Plus size={18} /> Add
//             </button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {formData.skillsWanted?.map((s, i) => (
//               <span
//                 key={i}
//                 className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
//               >
//                 {s}
//                 <button onClick={() => handleRemoveSkill("wanted", i)}>×</button>
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Category Dropdown */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Category</label>
//           <select
//             value={formData.category}
//             onChange={(e) =>
//               setFormData({ ...formData, category: e.target.value })
//             }
//             className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-700 text-black"
//           >
//             <option value="">Select a category</option>
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Description</label>
//           <textarea
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//             placeholder="Briefly describe your skill exchange preference..."
//             rows={3}
//             className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
//           />
//         </div>

//         {/* Duration */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Duration</label>
//           <input
//             type="text"
//             value={formData.duration}
//             onChange={(e) =>
//               setFormData({ ...formData, duration: e.target.value })
//             }
//             placeholder="e.g. 4 weeks, 10 sessions"
//             className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
//           />
//         </div>

//         {/* Location */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Location</label>
//           <input
//             type="text"
//             value={formData.location}
//             onChange={(e) =>
//               setFormData({ ...formData, location: e.target.value })
//             }
//             placeholder="Online / City Name"
//             className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg mt-4"
//         >
//           Save Changes
//         </button>
//       </form>
//     </Modal>
//   );
// };

// export default EditSkillModal;

















import React, { useState } from "react";
import Modal from "react-modal";
import { Upload, X, Plus } from "lucide-react";

Modal.setAppElement("#root");

const categories = ["Art", "Tech", "Music", "Language", "Fitness", "Other"];

const EditSkillModal = ({
  modalIsOpen,
  closeModal,
  formData,
  setFormData,
  handleUpdate,
}) => {
  const [tempSkillOffered, setTempSkillOffered] = useState("");
  const [tempSkillWanted, setTempSkillWanted] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        previewImage: URL.createObjectURL(file),
      });
    }
  };

  const handleAddSkill = (type) => {
    const tempSkill = type === "offered" ? tempSkillOffered : tempSkillWanted;
    if (tempSkill.trim()) {
      const updatedSkills = [...formData[type === "offered" ? "skillsOffered" : "skillsWanted"], tempSkill.trim()];
      setFormData({ ...formData, [type === "offered" ? "skillsOffered" : "skillsWanted"]: updatedSkills });
      type === "offered" ? setTempSkillOffered("") : setTempSkillWanted("");
    }
  };

  const handleRemoveSkill = (type, index) => {
    const key = type === "offered" ? "skillsOffered" : "skillsWanted";
    const updated = [...formData[key]];
    updated.splice(index, 1);
    setFormData({ ...formData, [key]: updated });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleUpdate(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start z-50 overflow-auto px-4 py-6"
      className="bg-white/90 backdrop-blur-lg text-black w-full max-w-2xl rounded-2xl shadow-xl p-6 mt-20 relative animate-fadeIn max-h-[90vh] overflow-auto"
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 p-2 rounded-full"
      >
        <X className="w-5 h-5 text-gray-400" />
      </button>

      <h3 className="text-2xl font-semibold mb-6">Edit Your Skill</h3>

      <form onSubmit={onSubmit} className="space-y-6">

        {/* Thumbnail Upload */}
        <div>
          <label className="block text-sm font-medium mb-2">Thumbnail</label>
          <div className="flex flex-col gap-3 items-start">
            <img
              src={formData.previewImage || "https://via.placeholder.com/300x150"}
              alt="Preview"
              className="w-full max-w-md h-32 object-cover rounded-lg border border-gray-700"
            />
            <label className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-800">
              <Upload className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-400">Upload</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Skills Offered */}
        <div>
          <label className="block text-sm font-medium mb-2">Skills You Can Teach</label>
          <div className="flex flex-col sm:flex-row gap-2 mb-3">
            <input
              type="text"
              value={tempSkillOffered}
              onChange={(e) => setTempSkillOffered(e.target.value)}
              placeholder="e.g. Guitar, Python"
              className="flex-1 px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
            />
            <button
              type="button"
              onClick={() => handleAddSkill("offered")}
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Plus size={18} /> Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skillsOffered?.map((s, i) => (
              <span
                key={i}
                className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {s}
                <button onClick={() => handleRemoveSkill("offered", i)}>×</button>
              </span>
            ))}
          </div>
        </div>

        {/* Skills Wanted */}
        <div>
          <label className="block text-sm font-medium mb-2">Skills You Want to Learn</label>
          <div className="flex flex-col sm:flex-row gap-2 mb-3">
            <input
              type="text"
              value={tempSkillWanted}
              onChange={(e) => setTempSkillWanted(e.target.value)}
              placeholder="e.g. Cooking, Design"
              className="flex-1 px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
            />
            <button
              type="button"
              onClick={() => handleAddSkill("wanted")}
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Plus size={18} /> Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skillsWanted?.map((s, i) => (
              <span
                key={i}
                className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {s}
                <button onClick={() => handleRemoveSkill("wanted", i)}>×</button>
              </span>
            ))}
          </div>
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-700 text-black"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Briefly describe your skill exchange preference..."
            rows={3}
            className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium mb-2">Duration</label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            placeholder="e.g. 4 weeks, 10 sessions"
            className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="Online / City Name"
            className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-700"
          />
        </div>

        {/* Submit Button with Loader */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg mt-4 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </Modal>
  );
};

export default EditSkillModal;
