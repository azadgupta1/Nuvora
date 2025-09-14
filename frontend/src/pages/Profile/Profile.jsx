// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import UserSkillProfile from "./UserSkillProfile";
// import ReceivedReviews from "../../components/Dashboard/Reviews/ReceivedReviews";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;


// function Profile() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", bio: "", location: "", profilePicture: null });

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await fetch(`${backendUrl}/api/users/${id}`, {
//           headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error(`Error: ${await res.text()}`);
//         const userData = await res.json();

//         console.log("User data is : ", userData);
//         setData(userData);
//         setFormData({ name: userData.name || "", bio: userData.bio || "", location: userData.location || "", profilePicture: null });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, [id]);

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const form = new FormData();
//     form.append("name", formData.name);
//     form.append("bio", formData.bio);
//     form.append("location", formData.location);
//     if (formData.profilePicture) {
//       form.append("profilePicture", formData.profilePicture);
//     }

//     try {
//       const res = await fetch(`${backendUrl}/api/users/${id}`, {
//         method: "PUT",
//         headers: { Authorization: `Bearer ${token}` },
//         body: form,
//       });
//       if (!res.ok) throw new Error("Update failed");
//       const updated = await res.json();
//       setData(updated);
//       setIsModalOpen(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

//   return (
//     <div>
//       <div className="min-h-screen bg-gray-100 flex  justify-center">
//         <div className="flex flex-row max-w-5xl w-full p-8 gap-10">
          
//           {/* Left Sidebar */}
//           <div className="w-72 bg-white shadow rounded-sm p-6">
//             {data?.profilePicture ? (
//               <img src={`${backendUrl}${data.profilePicture}`} alt="Profile" className="w-40 h-40 rounded-full mx-auto border object-cover" />
//             ) : (
//               <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-gray-500">No Image</div>
//             )}
//             <h2 className="mt-4 text-xl font-bold text-center">{data.name}</h2>
//             <p><strong>Email:</strong> {data.email}</p>
//             {data.bio && <p className="text-gray-600 text-center mt-2">{data.bio}</p>}
//             {data.location && <p className="text-gray-500 text-center mt-1">{data.location}</p>}
//             <button onClick={() => setIsModalOpen(true)} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-blue-700">Edit Profile</button>
//           </div>


//           {/* Right Content */}
//           <div className="flex-1 bg-white shadow rounded-sm p-6">
          
//             {/* Skill Profile Section */}
//             <div className>
//               <UserSkillProfile />
//             </div>
//           </div>


//         </div>

        

//         {/* Edit Modal */}
//         {isModalOpen && (
          
//           <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm flex justify-center items-center px-4 py-10">
//             <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fadeIn">
              
//               {/* Close Button */}
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-5 right-6 text-gray-500 hover:text-gray-800 text-2xl transition"
//               >
//                 &times;
//               </button>

//               {/* Title */}
//               <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//                 Edit Profile
//               </h2>

//               {/* Form */}
//               <form onSubmit={handleEditSubmit} className="space-y-6">
                
//                 {/* Name */}
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                   placeholder="Name"
//                 />

//                 {/* Bio */}
//                 <textarea
//                   value={formData.bio}
//                   onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                   placeholder="Bio"
//                   rows="3"
//                 ></textarea>

//                 {/* Location */}
//                 <input
//                   type="text"
//                   value={formData.location}
//                   onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                   placeholder="Location"
//                 />

//                 {/* Divider */}
//                 <hr className="border-gray-200" />


//                 <label
//   htmlFor="profileUpload"
//   className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-indigo-400 transition cursor-pointer"
// >
//   <svg
//     className="w-12 h-12 text-gray-400 mb-2"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5m0 0l5 5m-5-5v12" />
//   </svg>
//   <p className="text-sm text-gray-600">
//     Click to upload or drag and drop
//   </p>
//   <p className="text-xs text-gray-400">PNG, JPG, JPEG up to 2MB</p>
//   <input
//     type="file"
//     accept="image/*"
//     onChange={(e) =>
//       setFormData({ ...formData, profilePicture: e.target.files[0] })
//     }
//     className="hidden"
//     id="profileUpload"
//   />
// </label>


//                 {/* Buttons */}
//                 <div className="flex justify-end gap-3 pt-2">
//                   <button
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

        
//       </div>
      
//       <ReceivedReviews />
//     </div>
//   );
// }

// export default Profile;
















// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import UserSkillProfile from "./UserSkillProfile";
// import ReceivedReviews from "../../components/Dashboard/Reviews/ReceivedReviews";
// import ProfileCard from "../../components/Profile/ProfileCard";


// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// function Profile() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", bio: "", location: "", profilePicture: null });

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await fetch(`${backendUrl}/api/users/${id}`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!res.ok) throw new Error(`Error: ${await res.text()}`);
//         const userData = await res.json();

//         setData(userData);
//         setFormData({
//           name: userData.name || "",
//           bio: userData.bio || "",
//           location: userData.location || "",
//           profilePicture: null,
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, [id]);

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const form = new FormData();
//     form.append("name", formData.name);
//     form.append("bio", formData.bio);
//     form.append("location", formData.location);
//     if (formData.profilePicture) {
//       form.append("profilePicture", formData.profilePicture);
//     }

//     try {
//       const res = await fetch(`${backendUrl}/api/users/${id}`, {
//         method: "PUT",
//         headers: { Authorization: `Bearer ${token}` },
//         body: form,
//       });
//       if (!res.ok) throw new Error("Update failed");
//       const updated = await res.json();
//       setData(updated);
//       setIsModalOpen(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

//   return (
//     <div>
//       <div className="min-h-screen bg-gray-100 flex justify-center">
//         <div className="flex flex-row max-w-5xl w-full p-8 gap-10">

//           {/* Left Sidebar: Profile Card */}
//           <ProfileCard
//             data={data}
//             backendUrl={backendUrl}
//             onEditClick={() => setIsModalOpen(true)}
//           />

//           {/* Right Content */}
//           <div className="flex-1 bg-white shadow rounded-sm p-6">
//             <UserSkillProfile />
//           </div>
//         </div>

//         {/* Edit Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm flex justify-center items-center px-4 py-10">
//             <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fadeIn">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-5 right-6 text-gray-500 hover:text-gray-800 text-2xl transition"
//               >
//                 &times;
//               </button>

//               <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//                 Edit Profile
//               </h2>

//               <form onSubmit={handleEditSubmit} className="space-y-6">
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                   placeholder="Name"
//                 />
//                 <textarea
//                   value={formData.bio}
//                   onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                   placeholder="Bio"
//                   rows="3"
//                 ></textarea>
//                 <input
//                   type="text"
//                   value={formData.location}
//                   onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                   placeholder="Location"
//                 />
//                 <hr className="border-gray-200" />
//                 <label
//                   htmlFor="profileUpload"
//                   className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-indigo-400 transition cursor-pointer"
//                 >
//                   <svg
//                     className="w-12 h-12 text-gray-400 mb-2"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5m0 0l5 5m-5-5v12"
//                     />
//                   </svg>
//                   <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
//                   <p className="text-xs text-gray-400">PNG, JPG, JPEG up to 2MB</p>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) =>
//                       setFormData({ ...formData, profilePicture: e.target.files[0] })
//                     }
//                     className="hidden"
//                     id="profileUpload"
//                   />
//                 </label>
//                 <div className="flex justify-end gap-3 pt-2">
//                   <button
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Reviews Section */}
//       <ReceivedReviews />
//     </div>
//   );
// }

// export default Profile;






// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import UserSkillProfile from "./UserSkillProfile";
// import ReceivedReviews from "../../components/Dashboard/Reviews/ReceivedReviews";
// import ProfileCard from "../../components/Profile/ProfileCard";
// import EditProfileModal from "../../components/Profile/EditProfileModal"; // ✅ new import

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// function Profile() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", bio: "", location: "", profilePicture: null });

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await fetch(`${backendUrl}/api/users/${id}`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!res.ok) throw new Error(`Error: ${await res.text()}`);
//         const userData = await res.json();

//         setData(userData);
//         setFormData({
//           name: userData.name || "",
//           bio: userData.bio || "",
//           location: userData.location || "",
//           profilePicture: null,
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, [id]);

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const form = new FormData();
//     form.append("name", formData.name);
//     form.append("bio", formData.bio);
//     form.append("location", formData.location);
//     if (formData.profilePicture) {
//       form.append("profilePicture", formData.profilePicture);
//     }

//     try {
//       const res = await fetch(`${backendUrl}/api/users/${id}`, {
//         method: "PUT",
//         headers: { Authorization: `Bearer ${token}` },
//         body: form,
//       });
//       if (!res.ok) throw new Error("Update failed");
//       const updated = await res.json();
//       setData(updated);
//       setIsModalOpen(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

//   return (
//     <div>
//       <div className="min-h-screen bg-gray-100 flex justify-center">
//         <div className="flex flex-row max-w-5xl w-full p-8 gap-10">

//           {/* Left Sidebar: Profile Card */}
//           <ProfileCard
//             data={data}
//             backendUrl={backendUrl}
//             onEditClick={() => setIsModalOpen(true)}
//           />

//           {/* Right Content */}
//           <div className="flex-1 bg-white shadow rounded-sm p-6">
//             <UserSkillProfile />
//           </div>
//         </div>

//         {/* ✅ Edit Modal Extracted */}
//         {isModalOpen && (
//           <EditProfileModal
//             formData={formData}
//             setFormData={setFormData}
//             onClose={() => setIsModalOpen(false)}
//             onSubmit={handleEditSubmit}
//           />
//         )}
//       </div>

//       {/* Reviews Section */}
//       <ReceivedReviews />
//     </div>
//   );
// }

// export default Profile;

























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
