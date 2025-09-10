// components/ReceivedReviews.jsx
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";


const backendUrl = import.meta.env.VITE_BACKEND_URL;


const ReceivedReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/review`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setReviews(data);
        } else {
          toast.error(data.message || "Failed to fetch reviews");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Network error while fetching reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Received Reviews</h2>

      {loading ? (
        <p className="text-gray-500">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-gray-500">You haven’t received any reviews yet.</p>
      ) : (
        <>
          <div className="space-y-4">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-gray-700">
                    {review.user.name} on{" "}
                    <span className="italic text-gray-500">{review.skill.skillsOffered?.[0] || review.skill.category}</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{review.review}</p>
                <p className="text-sm text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString()}{" "}
                  {new Date(review.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>

          {reviews.length > 2 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 text-indigo-600 hover:underline text-sm font-medium"
            >
              {showAll ? "See less" : "See more"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ReceivedReviews;
