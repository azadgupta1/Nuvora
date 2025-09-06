// components/ReviewModal.jsx
import { useState } from "react";
import { toast } from "react-toastify";

const backendUrl = import.meta.env.VITE_BACKEND_URL;


const ReviewModal = ({ isOpen, onClose, booking }) => {
  const [rating, setRating] = useState(0);
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
        onClose(); // Close modal
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">Rating (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
            className="w-full p-2 border rounded mb-4"
          />

          <label className="block mb-2 font-medium">Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded mb-4"
            required
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
