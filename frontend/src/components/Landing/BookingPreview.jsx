import React, { useState } from "react";

export default function BookingPreview() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"];

  const [selected, setSelected] = useState(null);

  return (
    <div className="relative bg-gray-950 text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        📅 Availability & <span className="text-purple-400">Booking Preview</span>
      </h2>

      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-700">
        <div className="grid grid-cols-5 gap-6 mb-6 text-center">
          {days.map((day, i) => (
            <div key={i} className="text-gray-400 font-semibold">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-6">
          {days.map((day, di) =>
            slots.map((slot, si) => {
              const id = `${day}-${slot}`;
              return (
                <button
                  key={id}
                  onClick={() => setSelected(id)}
                  className={`px-4 py-2 rounded-lg text-sm transition ${
                    selected === id
                      ? "bg-purple-600 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  {slot}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
