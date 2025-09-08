// components/Profile/EditSkillModal.jsx
import React from "react";
import Modal from "react-modal";
import { Upload, X } from "lucide-react";

Modal.setAppElement("#root");

const EditSkillModal = ({ modalIsOpen, closeModal, formData, setFormData, handleUpdate, backendUrl }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file, previewImage: URL.createObjectURL(file) });
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-auto px-4 py-6"
      className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 mt-20 relative max-h-[90vh] overflow-auto"
    >
      <button onClick={closeModal} className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <X className="w-5 h-5 text-gray-600" />
      </button>

      <h3 className="text-2xl font-semibold mb-6">Edit Your Skill</h3>

      <form onSubmit={handleUpdate} className="space-y-5">
        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
          <div className="flex flex-col gap-3 mt-2 items-center">
            <img src={formData.previewImage || "https://via.placeholder.com/100"} alt="Preview" className="w-24 h-24 object-cover rounded-lg border" />
            <label className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50">
              <Upload className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">Upload</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Other Fields */}
        {["skillsOffered", "skillsWanted", "category", "description", "duration", "location"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700">{field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</label>
            {field === "description" ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                placeholder={`Write something about your ${field}...`}
                rows={3}
                className="mt-1 w-full border rounded-lg px-3 py-2"
              />
            ) : (
              <input
                type="text"
                name={field}
                value={field.includes("skills") ? formData[field].join(", ") : formData[field]}
                onChange={(e) =>
                  field.includes("skills")
                    ? setFormData({ ...formData, [field]: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
                    : setFormData({ ...formData, [field]: e.target.value })
                }
                placeholder={`e.g. ${field}`}
                className="mt-1 w-full border rounded-lg px-3 py-2"
              />
            )}
          </div>
        ))}

        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700">
          Save Changes
        </button>
      </form>
    </Modal>
  );
};

export default EditSkillModal;
