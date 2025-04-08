import { useEffect, useState } from "react";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookmarks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/bookmark", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setBookmarks(data);
      } else {
        console.error("Failed to fetch bookmarks:", data.message);
      }
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeBookmark = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/bookmark/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setBookmarks((prev) => prev.filter((b) => b.id !== id));
        alert("Bookmark removed!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📌 Bookmarked Skills</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading bookmarks...</p>
      ) : bookmarks.length === 0 ? (
        <p className="text-center text-gray-500">No bookmarks found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {bookmark.skill.name}
              </h2>
              <p className="text-gray-700 mt-2">
                <strong>Category:</strong> {bookmark.skill.category}
              </p>
              <p className="text-gray-700 mt-1">
                <strong>Description:</strong> {bookmark.skill.description}
              </p>
              <p className="text-gray-600 mt-1">
                <strong>Location:</strong> {bookmark.skill.location}
              </p>

              <button
                onClick={() => removeBookmark(bookmark.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove Bookmark
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
