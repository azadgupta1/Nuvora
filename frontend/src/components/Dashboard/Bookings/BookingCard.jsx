import React from "react";
import { FaCalendarAlt, FaClock, FaTimesCircle, FaStar } from "react-icons/fa";

const statusStyles = {
  Cancelled: "bg-red-50 text-red-700 ring-1 ring-red-100",
  Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
  Confirmed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
};

const BookingCard = ({ booking, onCancel, onOpenReview }) => {
  const formattedDate = booking.date
    ? new Date(booking.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
    : "-";
  const formattedTime = booking.time
    ? new Date(booking.time).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
    : "-";

  return (
    <div className="bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col justify-between transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{booking.skillOfferedName} → {booking.skillWantedName}</h3>
          <p className="text-sm text-gray-500 mt-1">{booking.skill?.category || "Uncategorized"}</p>
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[booking.status] || "bg-slate-50 text-slate-700 ring-1 ring-slate-100"}`}>
          {booking.status}
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-700">{booking.message || "No message provided."}</p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-indigo-600" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-orange-500" />
          <span>{formattedTime}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <FaStar className="text-yellow-500" /> {booking.providerName || booking.provider || "Provider"}
        </div>
        <div className="flex gap-2">
          {booking.status === "Pending" && (
            <button
              onClick={() => onCancel(booking.id)}
              className="flex items-center gap-1 px-3 py-2 border border-gray-200 text-sm text-gray-700 rounded-md hover:bg-gray-50 transition"
            >
              <FaTimesCircle /> Cancel
            </button>
          )}
          <button
            onClick={() => onOpenReview(booking)}
            className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
          >
            Give Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
