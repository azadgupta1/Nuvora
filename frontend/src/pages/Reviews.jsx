import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const skillId = searchParams.get("skillId");

  const fetchReviews = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/review/${skillId}`);
      const data = await res.json();

      if (res.ok) {
        setReviews(data);
      } else {
        console.error("Failed to fetch reviews:", data.message);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (skillId) fetchReviews();
  }, [skillId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">⭐ Reviews</h1>

      {!skillId ? (
        <p className="text-center text-red-500">
          No skill selected. Please provide a skill ID.
        </p>
      ) : loading ? (
        <p className="text-center text-gray-600">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews found for this skill.</p>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-4 rounded shadow-md border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-blue-600">{review.user.name}</p>
                <span className="text-yellow-500 font-bold">
                  {Array(review.rating).fill("⭐").join("")}
                </span>
              </div>
              <p className="text-gray-700 mt-2">{review.review}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
