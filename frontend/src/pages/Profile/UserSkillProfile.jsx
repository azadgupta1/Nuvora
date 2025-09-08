// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Modal from "react-modal";

// Modal.setAppElement('#root'); // Set for accessibility

// const backendUrl = import.meta.env.VITE_BACKEND_URL;


// const UserSkillProfile = () => {
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     skillsOffered: [],
//     skillsWanted: [],
//     category: "",
//     description: "",
//     image: "",
//     duration: "",
//     location: "",
//     availability: {},
//   });

//   // Fetch user's skill profile
//   useEffect(() => {
//     const fetchSkill = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${backendUrl}/api/skills/user`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setSkill(res.data);
//         setFormData(res.data); // Prefill the modal form
//       } catch (error) {
//         console.error("Error fetching skill:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkill();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Handle string arrays for skills
//     if (name === "skillsOffered" || name === "skillsWanted") {
//       setFormData({ ...formData, [name]: value.split(",").map(s => s.trim()) });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(`${backendUrl}/api/skills`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Refresh skill info
//       setSkill({ ...formData });
//       setModalIsOpen(false);
//     } catch (error) {
//       console.error("Error updating skill:", error);
//     }
//   };

//   if (loading) return <p>Loading skill profile...</p>;

//   if (!skill) return <p>No skill profile found.</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Your Skill Profile</h2>
//       <div className="bg-white shadow-md rounded-lg p-6 space-y-2">
//         <p><strong>Skills Offered:</strong> {skill.skillsOffered.join(", ")}</p>
//         <p><strong>Skills Wanted:</strong> {skill.skillsWanted.join(", ")}</p>
//         {skill.category && <p><strong>Category:</strong> {skill.category}</p>}
//         {skill.description && <p><strong>Description:</strong> {skill.description}</p>}
//         {skill.duration && <p><strong>Duration:</strong> {skill.duration}</p>}
//         {skill.location && <p><strong>Location:</strong> {skill.location}</p>}
//         <button
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           onClick={() => setModalIsOpen(true)}
//         >
//           Edit Skill
//         </button>
//       </div>

//       {/* Modal for editing skill */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         contentLabel="Edit Skill"
//         className="bg-white p-6 rounded shadow-lg max-w-xl mx-auto mt-20 max-h-[80vh] overflow-y-auto"
//       >
//         <h3 className="text-xl font-semibold mb-4">Edit Your Skill</h3>
//         <form onSubmit={handleUpdate} className="space-y-4">
//           <div>
//             <label className="block font-medium">Skills Offered (comma-separated)</label>
//             <input
//               type="text"
//               name="skillsOffered"
//               value={formData.skillsOffered.join(", ")}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Skills Wanted (comma-separated)</label>
//             <input
//               type="text"
//               name="skillsWanted"
//               value={formData.skillsWanted.join(", ")}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Category</label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category || ""}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Description</label>
//             <textarea
//               name="description"
//               value={formData.description || ""}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Duration</label>
//             <input
//               type="text"
//               name="duration"
//               value={formData.duration || ""}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location || ""}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>

//           <div className="flex justify-end space-x-4 pt-4">
//             <button
//               type="button"
//               onClick={() => setModalIsOpen(false)}
//               className="px-4 py-2 border rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default UserSkillProfile;



























// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Modal from "react-modal";
// import { X, Edit3 } from "lucide-react";

// Modal.setAppElement("#root");

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const Badge = ({ children, color = "indigo" }) => (
//   <span
//     className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${color}-100 text-${color}-800`}
//   >
//     {children}
//   </span>
// );

// const UserSkillProfile = () => {
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     skillsOffered: [],
//     skillsWanted: [],
//     category: "",
//     description: "",
//     image: "",
//     duration: "",
//     location: "",
//     availability: {},
//   });

//   useEffect(() => {
//     const fetchSkill = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${backendUrl}/api/skills/user`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setSkill(res.data);
//         setFormData(res.data);
//       } catch (error) {
//         console.error("Error fetching skill:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkill();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "skillsOffered" || name === "skillsWanted") {
//       setFormData({
//         ...formData,
//         [name]: value.split(",").map((s) => s.trim()),
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(`${backendUrl}/api/skills`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setSkill({ ...formData });
//       setModalIsOpen(false);
//     } catch (error) {
//       console.error("Error updating skill:", error);
//     }
//   };

//   if (loading) return <p className="text-gray-500">Loading your skill profile...</p>;
//   if (!skill) return <p className="text-gray-500">No skill profile found.</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Skill Profile</h2>
//       <div className="bg-white shadow-lg rounded-2xl p-6 relative">
//         {/* Edit button */}
//         <button
//           onClick={() => setModalIsOpen(true)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <Edit3 className="w-5 h-5 text-gray-600" />
//         </button>

//         {/* Profile image or placeholder */}
//         <div className="flex items-center gap-6">
//           <img
//             src={skill.image || "https://via.placeholder.com/120"}
//             alt="Skill"
//             className="w-24 h-24 rounded-xl object-cover border"
//           />
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">
//               {skill.category || "Uncategorized Skill"}
//             </h3>
//             <p className="text-gray-600">{skill.description || "No description provided."}</p>
//           </div>
//         </div>

//         {/* Skills Offered & Wanted */}
//         <div className="mt-6 grid md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-semibold text-gray-700 mb-2">Skills Offered</h4>
//             <div className="flex flex-wrap gap-2">
//               {skill.skillsOffered?.length > 0 ? (
//                 skill.skillsOffered.map((s, i) => <Badge key={i}>{s}</Badge>)
//               ) : (
//                 <p className="text-gray-500 text-sm">No skills listed</p>
//               )}
//             </div>
//           </div>
//           <div>
//             <h4 className="font-semibold text-gray-700 mb-2">Skills Wanted</h4>
//             <div className="flex flex-wrap gap-2">
//               {skill.skillsWanted?.length > 0 ? (
//                 skill.skillsWanted.map((s, i) => <Badge key={i} color="emerald">{s}</Badge>)
//               ) : (
//                 <p className="text-gray-500 text-sm">No skills listed</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Extra info */}
//         <div className="mt-6 space-y-2 text-gray-700">
//           {skill.duration && <p><strong>⏳ Duration:</strong> {skill.duration}</p>}
//           {skill.location && <p><strong>📍 Location:</strong> {skill.location}</p>}
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start z-50"
//         className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 mt-20 relative"
//       >
//         <button
//           onClick={() => setModalIsOpen(false)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <X className="w-5 h-5 text-gray-600" />
//         </button>

//         <h3 className="text-2xl font-semibold mb-6">Edit Your Skill</h3>
//         <form onSubmit={handleUpdate} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Skills Offered</label>
//             <input
//               type="text"
//               name="skillsOffered"
//               value={formData.skillsOffered.join(", ")}
//               onChange={handleInputChange}
//               className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               placeholder="e.g. React, Cooking"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Skills Wanted</label>
//             <input
//               type="text"
//               name="skillsWanted"
//               value={formData.skillsWanted.join(", ")}
//               onChange={handleInputChange}
//               className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               placeholder="e.g. Python, Guitar"
//               required
//             />
//           </div>
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Duration</label>
//               <input
//                 type="text"
//                 name="duration"
//                 value={formData.duration || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location || ""}
//               onChange={handleInputChange}
//               className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               name="description"
//               value={formData.description || ""}
//               onChange={handleInputChange}
//               className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               rows={3}
//             />
//           </div>

//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={() => setModalIsOpen(false)}
//               className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default UserSkillProfile;

































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Modal from "react-modal";
// import { X, Edit3, Upload } from "lucide-react";

// Modal.setAppElement("#root");

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const Badge = ({ children, color = "indigo" }) => (
//   <span
//     className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${color}-100 text-${color}-800`}
//   >
//     {children}
//   </span>
// );

// const UserSkillProfile = () => {
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     skillsOffered: [],
//     skillsWanted: [],
//     category: "",
//     description: "",
//     image: "",
//     duration: "",
//     location: "",
//     availability: {},
//   });

//   useEffect(() => {
//     const fetchSkill = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${backendUrl}/api/skills/user`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setSkill(res.data);
//         setFormData(res.data);
//       } catch (error) {
//         console.error("Error fetching skill:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkill();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "skillsOffered" || name === "skillsWanted") {
//       setFormData({
//         ...formData,
//         [name]: value.split(",").map((s) => s.trim()),
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, image: reader.result }); // store base64
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(`${backendUrl}/api/skills`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setSkill({ ...formData });
//       setModalIsOpen(false);
//     } catch (error) {
//       console.error("Error updating skill:", error);
//     }
//   };

//   if (loading) return <p className="text-gray-500">Loading your skill profile...</p>;
//   if (!skill) return <p className="text-gray-500">No skill profile found.</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Skill Profile</h2>
//       <div className="bg-white shadow-lg rounded-2xl p-6 relative">
//         {/* Edit button */}
//         <button
//           onClick={() => setModalIsOpen(true)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <Edit3 className="w-5 h-5 text-gray-600" />
//         </button>

//         {/* Profile image stacked */}
//         <div className="flex flex-col items-center text-center">
//           <img
//             src={skill.image || "https://via.placeholder.com/150"}
//             alt="Skill Thumbnail"
//             className="w-32 h-32 rounded-xl object-cover border shadow-sm"
//           />
//           <h3 className="text-xl font-semibold text-gray-900 mt-4">
//             {skill.category || "Uncategorized Skill"}
//           </h3>
//           <p className="text-gray-600 mt-1">
//             {skill.description || "No description provided."}
//           </p>
//         </div>

//         {/* Skills Offered & Wanted */}
//         <div className="mt-6 grid md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-semibold text-gray-700 mb-2">Skills Offered</h4>
//             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
//               {skill.skillsOffered?.length > 0 ? (
//                 skill.skillsOffered.map((s, i) => <Badge key={i}>{s}</Badge>)
//               ) : (
//                 <p className="text-gray-500 text-sm">No skills listed</p>
//               )}
//             </div>
//           </div>
//           <div>
//             <h4 className="font-semibold text-gray-700 mb-2">Skills Wanted</h4>
//             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
//               {skill.skillsWanted?.length > 0 ? (
//                 skill.skillsWanted.map((s, i) => <Badge key={i} color="emerald">{s}</Badge>)
//               ) : (
//                 <p className="text-gray-500 text-sm">No skills listed</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Extra info */}
//         <div className="mt-6 space-y-2 text-gray-700 text-center md:text-left">
//           {skill.duration && <p><strong>⏳ Duration:</strong> {skill.duration}</p>}
//           {skill.location && <p><strong>📍 Location:</strong> {skill.location}</p>}
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start z-50"
//         className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 mt-20 relative"
//       >
//         <button
//           onClick={() => setModalIsOpen(false)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <X className="w-5 h-5 text-gray-600" />
//         </button>

//         <h3 className="text-2xl font-semibold mb-6">Edit Your Skill</h3>
//         <form onSubmit={handleUpdate} className="space-y-5">
//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
//             <div className="flex items-center gap-4 mt-2">
//               <img
//                 src={formData.image || "https://via.placeholder.com/100"}
//                 alt="Preview"
//                 className="w-20 h-20 object-cover rounded-lg border"
//               />
//               <label className="flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50">
//                 <Upload className="w-5 h-5 text-gray-600" />
//                 <span className="text-sm text-gray-700">Upload</span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//               </label>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Skills Offered</label>
//             <input
//               type="text"
//               name="skillsOffered"
//               value={formData.skillsOffered.join(", ")}
//               onChange={handleInputChange}
//               className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               placeholder="e.g. React, Cooking"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Skills Wanted</label>
//             <input
//               type="text"
//               name="skillsWanted"
//               value={formData.skillsWanted.join(", ")}
//               onChange={handleInputChange}
//               className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               placeholder="e.g. Python, Guitar"
//               required
//             />
//           </div>
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Duration</label>
//               <input
//                 type="text"
//                 name="duration"
//                 value={formData.duration || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location || ""}
//               onChange={handleInputChange}
//               className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               name="description"
//               value={formData.description || ""}
//               onChange={handleInputChange}
//               className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               rows={3}
//             />
//           </div>

//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={() => setModalIsOpen(false)}
//               className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default UserSkillProfile;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Modal from "react-modal";
// import { X, Edit3, Upload } from "lucide-react";

// Modal.setAppElement("#root");

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const Badge = ({ children, color = "indigo" }) => (
//   <span
//     className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${color}-100 text-${color}-800`}
//   >
//     {children}
//   </span>
// );

// const UserSkillProfile = () => {
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     skillsOffered: [],
//     skillsWanted: [],
//     category: "",
//     description: "",
//     duration: "",
//     location: "",
//     availability: {},
//     image: null, // file
//     previewImage: "", // preview URL
//   });

//   useEffect(() => {
//     const fetchSkill = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${backendUrl}/api/skills/user`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setSkill(res.data);
//         setFormData({
//           skillsOffered: res.data.skillsOffered || [],
//           skillsWanted: res.data.skillsWanted || [],
//           category: res.data.category || "",
//           description: res.data.description || "",
//           duration: res.data.duration || "",
//           location: res.data.location || "",
//           availability: res.data.availability || {},
//           image: null,
//           previewImage: res.data.image || "",
//         });
//       } catch (error) {
//         console.error("Error fetching skill:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkill();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "skillsOffered" || name === "skillsWanted") {
//       setFormData({
//         ...formData,
//         [name]: value.split(",").map((s) => s.trim()),
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

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

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       const form = new FormData();

//       form.append("skillsOffered", JSON.stringify(formData.skillsOffered));
//       form.append("skillsWanted", JSON.stringify(formData.skillsWanted));
//       form.append("category", formData.category);
//       form.append("description", formData.description);
//       form.append("duration", formData.duration);
//       form.append("location", formData.location);
//       // form.append("availability", JSON.stringify(formData.availability));

//       form.append("availability", formData.availability ? JSON.stringify(formData.availability) : "{}");



//       if (formData.image) {
//         form.append("image", formData.image);
//       }

//       const res = await axios.post(`${backendUrl}/api/skills`, form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setSkill(res.data.skill);
//       setModalIsOpen(false);
//     } catch (error) {
//       console.error("Error updating skill:", error);
//     }
//   };

//   if (loading) return <p className="text-gray-500">Loading your skill profile...</p>;
//   if (!skill) return <p className="text-gray-500">No skill profile found.</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Skill Profile</h2>

//       <div className="bg-white shadow-lg rounded-2xl p-6 relative">
//         <button
//           onClick={() => setModalIsOpen(true)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <Edit3 className="w-5 h-5 text-gray-600" />
//         </button>

//         <div className="flex flex-col items-center text-center">
//           <img
//             src={`${backendUrl}${skill.image}` || "https://via.placeholder.com/150"}
//             alt="Skill Thumbnail"
//             className="w-32 h-32 rounded-xl object-cover border shadow-sm"
//           />
//           <h3 className="text-xl font-semibold text-gray-900 mt-4">
//             {skill.category || "Uncategorized Skill"}
//           </h3>
//           <p className="text-gray-600 mt-1">
//             {skill.description || "No description provided."}
//           </p>
//         </div>

//         <div className="mt-6 grid md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-semibold text-gray-700 mb-2">Skills Offered</h4>
//             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
//               {skill.skillsOffered?.length > 0 ? (
//                 skill.skillsOffered.map((s, i) => <Badge key={i}>{s}</Badge>)
//               ) : (
//                 <p className="text-gray-500 text-sm">No skills listed</p>
//               )}
//             </div>
//           </div>
//           <div>
//             <h4 className="font-semibold text-gray-700 mb-2">Skills Wanted</h4>
//             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
//               {skill.skillsWanted?.length > 0 ? (
//                 skill.skillsWanted.map((s, i) => (
//                   <Badge key={i} color="emerald">
//                     {s}
//                   </Badge>
//                 ))
//               ) : (
//                 <p className="text-gray-500 text-sm">No skills listed</p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 space-y-2 text-gray-700 text-center md:text-left">
//           {skill.duration && (
//             <p>
//               <strong>⏳ Duration:</strong> {skill.duration}
//             </p>
//           )}
//           {skill.location && (
//             <p>
//               <strong>📍 Location:</strong> {skill.location}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start z-50"
//         className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 mt-20 relative"
//       >
//         <button
//           onClick={() => setModalIsOpen(false)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <X className="w-5 h-5 text-gray-600" />
//         </button>

//         <h3 className="text-2xl font-semibold mb-6">Edit Your Skill</h3>

//         <form onSubmit={handleUpdate} className="space-y-5">
//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Thumbnail
//             </label>
//             <div className="flex flex-col gap-3 mt-2">
//               <img
//                 src={formData.previewImage || "https://via.placeholder.com/100"}
//                 alt="Preview"
//                 className="w-24 h-24 object-cover rounded-lg border mx-auto"
//               />
//               <label className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50">
//                 <Upload className="w-5 h-5 text-gray-600" />
//                 <span className="text-sm text-gray-700">Upload</span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Skills Offered */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Skills Offered
//             </label>
//             <input
//               type="text"
//               name="skillsOffered"
//               value={formData.skillsOffered.join(", ")}
//               onChange={handleInputChange}
//               placeholder="e.g. JavaScript, Cooking"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Skills Wanted */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Skills Wanted
//             </label>
//             <input
//               type="text"
//               name="skillsWanted"
//               value={formData.skillsWanted.join(", ")}
//               onChange={handleInputChange}
//               placeholder="e.g. Spanish, Photography"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Category
//             </label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               placeholder="e.g. Technology, Sports"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               placeholder="Write something about your skill..."
//               rows={3}
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Duration */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Duration
//             </label>
//             <input
//               type="text"
//               name="duration"
//               value={formData.duration}
//               onChange={handleInputChange}
//               placeholder="e.g. 2 hours per week"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleInputChange}
//               placeholder="e.g. Online / New York"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Save Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
//           >
//             Save Changes
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default UserSkillProfile;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Modal from "react-modal";
// import { X, Edit3, Upload } from "lucide-react";

// Modal.setAppElement("#root");

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const Badge = ({ children, color = "indigo" }) => (
//   <span
//     className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${color}-100 text-${color}-800`}
//   >
//     {children}
//   </span>
// );

// const UserSkillProfile = () => {
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     skillsOffered: [],
//     skillsWanted: [],
//     category: "",
//     description: "",
//     duration: "",
//     location: "",
//     availability: {},
//     image: null, // file
//     previewImage: "", // preview URL
//   });

//   // ✅ Fetch skill profile on mount
//   useEffect(() => {
//     const fetchSkill = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${backendUrl}/api/skills/user`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
        
//         console.log("Skill Data is : ",res.data);
//         if (res.data) {
//           setSkill(res.data);
//           setFormData({
//             skillsOffered: res.data.skillsOffered || [],
//             skillsWanted: res.data.skillsWanted || [],
//             category: res.data.category || "",
//             description: res.data.description || "",
//             duration: res.data.duration || "",
//             location: res.data.location || "",
//             availability: res.data.availability || {},
//             image: null,
//             previewImage: res.data.image ? `${backendUrl}${res.data.image}` : "",
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching skill:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkill();
//   }, []);

//   // ✅ Handle text input
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "skillsOffered" || name === "skillsWanted") {
//       setFormData({
//         ...formData,
//         [name]: value.split(",").map((s) => s.trim()).filter(Boolean),
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // ✅ Handle image upload + preview
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

//   // ✅ Save / update skill
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       const form = new FormData();

//       form.append("skillsOffered", JSON.stringify(formData.skillsOffered));
//       form.append("skillsWanted", JSON.stringify(formData.skillsWanted));
//       form.append("category", formData.category);
//       form.append("description", formData.description);
//       form.append("duration", formData.duration);
//       form.append("location", formData.location);

//       if (formData.availability && Object.keys(formData.availability).length > 0) {
//         form.append("availability", JSON.stringify(formData.availability));
//       }

//       if (formData.image) {
//         form.append("image", formData.image);
//       }

//       const res = await axios.post(`${backendUrl}/api/skills`, form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setSkill(res.data.skill);
//       setFormData({
//         ...formData,
//         previewImage: res.data.skill.image
//           ? `${backendUrl}${res.data.skill.image}`
//           : formData.previewImage,
//       });
//       setModalIsOpen(false);
//     } catch (error) {
//       console.error("Error updating skill:", error.response?.data || error.message);
//     }
//   };

//   if (loading) return <p className="text-gray-500">Loading your skill profile...</p>;
//   if (!skill) return <p className="text-gray-500">No skill profile found.</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Skill Profile</h2>

//       <div className="bg-white shadow-lg rounded-2xl p-6 relative">
//         <button
//           onClick={() => setModalIsOpen(true)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <Edit3 className="w-5 h-5 text-gray-600" />
//         </button>

//         <div className="flex flex-col items-center text-center">
//           <img
//             src={skill.image ? `${backendUrl}${skill.image}` : "https://via.placeholder.com/150"}
//             alt="Skill Thumbnail"
//             className="w-32 h-32 rounded-xl object-cover border shadow-sm"
//           />
//           <h3 className="text-xl font-semibold text-gray-900 mt-4">
//             {skill.category || "Uncategorized Skill"}
//           </h3>
//           <p className="text-gray-600 mt-1">
//             {skill.description || "No description provided."}
//           </p>
//         </div>

//         <div className="mt-6 grid md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-semibold text-gray-700 mb-2">Skills Offered</h4>
//             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
//               {skill.skillsOffered?.length > 0 ? (
//                 skill.skillsOffered.map((s, i) => <Badge key={i}>{s}</Badge>)
//               ) : (
//                 <p className="text-gray-500 text-sm">No skills listed</p>
//               )}
//             </div>
//           </div>
//           <div>
//             <h4 className="font-semibold text-gray-700 mb-2">Skills Wanted</h4>
//             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
//               {skill.skillsWanted?.length > 0 ? (
//                 skill.skillsWanted.map((s, i) => (
//                   <Badge key={i} color="emerald">
//                     {s}
//                   </Badge>
//                 ))
//               ) : (
//                 <p className="text-gray-500 text-sm">No skills listed</p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 space-y-2 text-gray-700 text-center md:text-left">
//           {skill.duration && (
//             <p>
//               <strong>⏳ Duration:</strong> {skill.duration}
//             </p>
//           )}
//           {skill.location && (
//             <p>
//               <strong>📍 Location:</strong> {skill.location}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start z-50"
//         className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 mt-20 relative"
//       >
//         <button
//           onClick={() => setModalIsOpen(false)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//         >
//           <X className="w-5 h-5 text-gray-600" />
//         </button>

//         <h3 className="text-2xl font-semibold mb-6">Edit Your Skill</h3>

//         <form onSubmit={handleUpdate} className="space-y-5">
//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Thumbnail
//             </label>
//             <div className="flex flex-col gap-3 mt-2">
//               <img
//                 src={formData.previewImage || "https://via.placeholder.com/100"}
//                 alt="Preview"
//                 className="w-24 h-24 object-cover rounded-lg border mx-auto"
//               />
//               <label className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50">
//                 <Upload className="w-5 h-5 text-gray-600" />
//                 <span className="text-sm text-gray-700">Upload</span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Skills Offered */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Skills Offered
//             </label>
//             <input
//               type="text"
//               name="skillsOffered"
//               value={formData.skillsOffered.join(", ")}
//               onChange={handleInputChange}
//               placeholder="e.g. JavaScript, Cooking"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Skills Wanted */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Skills Wanted
//             </label>
//             <input
//               type="text"
//               name="skillsWanted"
//               value={formData.skillsWanted.join(", ")}
//               onChange={handleInputChange}
//               placeholder="e.g. Spanish, Photography"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Category
//             </label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               placeholder="e.g. Technology, Sports"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               placeholder="Write something about your skill..."
//               rows={3}
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Duration */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Duration
//             </label>
//             <input
//               type="text"
//               name="duration"
//               value={formData.duration}
//               onChange={handleInputChange}
//               placeholder="e.g. 2 hours per week"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleInputChange}
//               placeholder="e.g. Online / New York"
//               className="mt-1 w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           {/* Save Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
//           >
//             Save Changes
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default UserSkillProfile;
























// components/Profile/UserSkillProfile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillCardUser from "../../components/UserSkillUpdata/SkillCardUser";
import EditSkillModal from "../../components/UserSkillUpdata/EditSkillModal";


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
    duration: "",
    location: "",
    availability: {},
    image: null,
    previewImage: "",
  });

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${backendUrl}/api/skills/user`, { headers: { Authorization: `Bearer ${token}` } });
        if (res.data) {
          setSkill(res.data);
          setFormData({
            skillsOffered: res.data.skillsOffered || [],
            skillsWanted: res.data.skillsWanted || [],
            category: res.data.category || "",
            description: res.data.description || "",
            duration: res.data.duration || "",
            location: res.data.location || "",
            availability: res.data.availability || {},
            image: null,
            previewImage: res.data.image ? `${backendUrl}${res.data.image}` : "",
          });
        }
      } catch (err) {
        console.error("Error fetching skill:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSkill();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "skillsOffered" || key === "skillsWanted") form.append(key, JSON.stringify(formData[key]));
        else if (key === "availability") formData[key] && Object.keys(formData[key]).length && form.append(key, JSON.stringify(formData[key]));
        else if (key === "image" && formData[key]) form.append(key, formData[key]);
        else if (!["previewImage"].includes(key)) form.append(key, formData[key]);
      });
      const res = await axios.post(`${backendUrl}/api/skills`, form, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } });
      setSkill(res.data.skill);
      setFormData({ ...formData, previewImage: res.data.skill.image ? `${backendUrl}${res.data.skill.image}` : formData.previewImage });
      setModalIsOpen(false);
    } catch (err) {
      console.error("Error updating skill:", err.response?.data || err.message);
    }
  };

  if (loading) return <p className="text-gray-500">Loading your skill profile...</p>;
  if (!skill) return <p className="text-gray-500">No skill profile found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">Your Skill Profile</h2>
      <SkillCardUser skill={skill} backendUrl={backendUrl} onEditClick={() => setModalIsOpen(true)} />
      <EditSkillModal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleUpdate={handleUpdate}
        backendUrl={backendUrl}
      />
    </div>
  );
};

export default UserSkillProfile;
