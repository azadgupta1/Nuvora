import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import ChatPage from "../../../pages/Chat/ChatPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const categoryColors = {
  Technology: "bg-blue-50 text-blue-700 border border-blue-200",
  Sports: "bg-green-50 text-green-700 border border-green-200",
  Languages: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  "Life Coach": "bg-purple-50 text-purple-700 border border-purple-200",
  Art: "bg-pink-50 text-pink-700 border border-pink-200",
  Music: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  Others: "bg-gray-50 text-gray-700 border border-gray-200",
};

const timeSlots = [
  "08:30 AM - 09:00 AM",
  "09:00 AM - 09:30 AM",
  "10:00 AM - 10:30 AM",
  "01:30 PM - 02:00 PM",
  "03:00 PM - 03:30 PM",
  "05:00 PM - 05:30 PM",
  "06:00 PM - 06:30 PM",
];

const SkillRequestModal = ({ skillId, onClose }) => {
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [skillOfferedName, setSkillOfferedName] = useState("");
  const [skillWantedName, setSkillWantedName] = useState("");

  const [receiver, setReceiver] = useState(null);
  const [chatProps, setChatProps] = useState(null);
  const [bookingLoading, setBookingLoading] = useState(false);

  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchSkillDetails = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/skills/${skillId}`);
        const data = await response.json();
        setSkill(data);
      } catch (error) {
        console.error("Error fetching skill details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (skillId) fetchSkillDetails();
  }, [skillId]);

  const handleBooking = async () => {
    try {
      setBookingLoading(true);
      const token = localStorage.getItem("token");
      const user = jwtDecode(token);
      const receiverId = skill.userId;

      const extractStartTime = (slot) => slot.split(" - ")[0];
      const convertTo24Hour = (timeStr) => {
        const [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
      };

      const startTimeStr = extractStartTime(time);
      const startTime24 = convertTo24Hour(startTimeStr);

      const response = await fetch(`${backendUrl}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          skillId,
          receiverId,
          date,
          time: startTime24,
          skillOfferedName,
          skillWantedName,
          message: note,
        }),
      });

      const data = await response.json();

      console.log("Booking data is : ", data);

      console.log("DATA IS : ", data.booking.skillOfferedName);

      if (!response.ok) {
        toast.error(data.message || "Booking failed. Try again.");
        return;
      }

      toast.success(
        `Your request for "${data.booking.skillOfferedName}" on ${date} at ${time} has been sent!`
      );
      onClose();
    } catch (error) {
      toast.error("Error creating booking.");
      console.error("Booking error:", error);
    } finally {
      setBookingLoading(false);
    }
  };

  const handleMessage = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = jwtDecode(token);
      const senderId = user.userId;
      const receiverId = skill.userId;

      const res = await fetch(`${backendUrl}/api/chatrooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` },
        body: JSON.stringify({ user1Id: senderId, user2Id: receiverId }),
      });

      const data = await res.json();

      if (data?.id) {
        const receiverRes = await fetch(`${backendUrl}/api/users/${receiverId}`);
        const receiverData = await receiverRes.json();

        navigate("/dashboard/chatlayout", {
          state: {
            roomId: data.id,
            receiverId,
            receiverName: receiverData.name,
          },
        });
      } else {
        console.error("Chat room creation failed", data);
      }
    } catch (err) {
      console.error("Error creating or joining chat room:", err);
    }
  };

  if (!skillId) return null;
  if (chatProps) return <ChatPage {...chatProps} />;

  useEffect(() => {
    const fetchReceiverData = async () => {
      if (!skill?.userId) return;

      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get(
          `${backendUrl}/api/users/${skill.userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setReceiver(res.data);
      } catch (err) {
        console.error("Failed to fetch receiver data:", err);
      }
    };

    fetchReceiverData();
  }, [skill?.userId]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm px-2 sm:px-4 py-4 overflow-auto">
      <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-4xl mx-auto animate-fadeIn max-h-screen overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl z-10"
        >
          &times;
        </button>

        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading...</div>
        ) : skill ? (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section */}
            <div className= "hidden sm:block p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200">
              <div className="flex items-start justify-between">
                {receiver && (
                  <img
                    src={receiver.profilePicture}
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md"
                  />
                )}
                <span
                  className={`px-4 py-1 text-sm rounded-full ${categoryColors[skill.category] || categoryColors.Others}`}
                >
                  {skill.category}
                </span>
              </div>

              {receiver && (
                <p className="mt-3 pl-3 font-medium text-gray-800 text-lg">{receiver.name}</p>
              )}

              <p className="mt-3 text-gray-700 leading-relaxed">{skill.description}</p>
            </div>

            {/* Right Section */}
            <div className="p-6 sm:p-8 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Skill Session</h3>

              <select
                value={skillOfferedName}
                onChange={(e) => setSkillOfferedName(e.target.value)}
                className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="">Select skill offered</option>
                {skill.skillsOffered?.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>

              <select
                value={skillWantedName}
                onChange={(e) => setSkillWantedName(e.target.value)}
                className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="">Select skill you can teach</option>
                {skill.skillsWanted?.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>

              <textarea
                placeholder="Add a message (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
                rows="3"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Select Date</label>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Time Slot</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ✅ Booking Button with Login-style Spinner */}
              <button
                onClick={handleBooking}
                disabled={bookingLoading}
                className={`mt-4 w-full flex justify-center items-center 
                  ${bookingLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"} 
                  text-white font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]`}
              >
                {bookingLoading ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Confirm Request"
                )}
              </button>

              <button
                onClick={handleMessage}
                className="mt-3 w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
              >
                💬 Message Skill Provider
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-red-500">Skill not found</div>
        )}
      </div>
    </div>
  );
};

export default SkillRequestModal;
