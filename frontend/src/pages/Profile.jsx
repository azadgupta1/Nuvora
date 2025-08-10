import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token'); // Adjust key name if needed

      try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Send token in header
          },
        });

        console.log("Response is : ", res.json());

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Request failed: ${errorText}`);
        }

        const userData = await res.json();
        setData(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      {data?.profilePicture && (
        <img
          src={data.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
      )}

      <div><strong>Name:</strong> {data.name}</div>
      <div><strong>ID:</strong> {data.id}</div>
    </div>
  );
}

export default Profile;
