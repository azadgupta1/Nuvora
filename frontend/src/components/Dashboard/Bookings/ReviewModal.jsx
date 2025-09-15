// components/ReviewModal.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ReviewModal = ({ isOpen, onClose, booking }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${backendUrl}/api/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          skillId: booking.skillId,
          rating,
          review,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Review submitted successfully!");
        onClose();
      } else {
        toast.error(data.message || "Failed to submit review");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error while submitting review");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">Leave a Review</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium text-gray-700">Your Rating:</label>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                  className="focus:outline-none"
                >
                  <FaStar
                    size={24}
                    className={`cursor-pointer transition-colors ${
                      (hover || rating) >= starValue ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <label className="block mb-2 font-medium text-gray-700">Your Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none mb-4"
            placeholder="Write your feedback..."
            required
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              disabled={rating === 0}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
