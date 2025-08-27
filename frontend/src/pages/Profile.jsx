// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function Profile() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem('token'); // Adjust key name if needed

//       try {
//         const res = await fetch(`http://localhost:3000/api/users/${id}`, {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`, // Send token in header
//           },
//         });


//         if (!res.ok) {
//           const errorText = await res.text();
//           throw new Error(`Request failed: ${errorText}`);
//         }

//         const userData = await res.json();

//         console.log("User data is : ", userData);
//         setData(userData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

//       {data?.profilePicture && (
//         <img
//           src={data.profilePicture}
//           alt="Profile"
//           className="w-24 h-24 rounded-full mb-4"
//         />
//       )}

//       <div><strong>Name:</strong> {data.name}</div>
//       <div><strong>ID:</strong> {data.id}</div>
//     </div>
//   );
// }

// export default Profile;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function Profile() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem('token');

//       try {
//         const res = await fetch(`http://localhost:3000/api/users/${id}`, {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) {
//           const errorText = await res.text();
//           throw new Error(`Request failed: ${errorText}`);
//         }

//         const userData = await res.json();
//         console.log("User data is:", userData);
//         setData(userData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
//         {/* Profile Picture */}
//         {data?.profilePicture ? (
//           <img
//             src={data.profilePicture}
//             alt="Profile"
//             className="w-32 h-32 rounded-full mx-auto border border-gray-300 object-cover mb-4"
//           />
//         ) : (
//           <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mx-auto mb-4">
//             No Image
//           </div>
//         )}

//         {/* Name */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-1">{data.name}</h2>

//         {/* Bio */}
//         {data.bio && (
//           <p className="text-gray-600 mb-4 whitespace-pre-line">
//             {data.bio}
//           </p>
//         )}

//         {/* Location */}
//         {data.location && (
//           <div className="text-gray-600 flex justify-center items-center gap-2 mb-4">
//             <svg
//               className="w-5 h-5 text-gray-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z"
//               />
//             </svg>
//             <span>{data.location}</span>
//           </div>
//         )}

//         {/* Edit Profile Button */}
//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Profile;















import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserSkillProfile from "./UserSkillProfile";

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
        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(`Error: ${await res.text()}`);
        const userData = await res.json();
        setData(userData);
        setFormData({ name: userData.name || "", bio: userData.bio || "", location: userData.location || "", profilePicture: null });
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
    if (formData.profilePicture) {
      form.append("profilePicture", formData.profilePicture);
    }

    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
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

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="flex max-w-5xl w-full p-8 gap-10">
        
        {/* Left Sidebar */}
        <div className="w-72 bg-white shadow rounded-lg p-6">
          {data?.profilePicture ? (
            <img src={`http://localhost:3000${data.profilePicture}`} alt="Profile" className="w-40 h-40 rounded-full mx-auto border object-cover" />
          ) : (
            <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-gray-500">No Image</div>
          )}
          <h2 className="mt-4 text-xl font-bold text-center">{data.name}</h2>
          {data.bio && <p className="text-gray-600 text-center mt-2">{data.bio}</p>}
          {data.location && <p className="text-gray-500 text-center mt-1">{data.location}</p>}
          <button onClick={() => setIsModalOpen(true)} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-blue-700">Edit Profile</button>
        </div>

        {/* Right Content */}
        {/* <div className="flex-1 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Skills:</strong> {data.skill?.name || "No skill listed"}</p>
        </div> */}

        {/* Right Content */}
        <div className="flex-1 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
          <p><strong>Email:</strong> {data.email}</p>

          {/* Skill Profile Section */}
          <div className="mt-6">
            <UserSkillProfile />
          </div>
        </div>


      </div>

      

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm flex justify-center items-center px-4 py-10">
          <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-6 text-gray-500 hover:text-gray-800 text-2xl transition"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Edit Profile
            </h2>

            {/* Form */}
            <form onSubmit={handleEditSubmit} className="space-y-6">
              
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
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
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

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Profile Picture Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-indigo-400 transition cursor-pointer">
                <svg
                  className="w-12 h-12 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5m0 0l5 5m-5-5v12" />
                </svg>
                <p className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400">PNG, JPG, JPEG up to 2MB</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({ ...formData, profilePicture: e.target.files[0] })
                  }
                  className="hidden"
                  id="profileUpload"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;






















{/* Edit Modal
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/20 flex justify-center items-center">
          <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border p-2 rounded" placeholder="Name" />
              <textarea value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} className="w-full border p-2 rounded" placeholder="Bio" rows="3"></textarea>
              <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full border p-2 rounded" placeholder="Location" />
              <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, profilePicture: e.target.files[0] })} className="w-full" />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )} */}
