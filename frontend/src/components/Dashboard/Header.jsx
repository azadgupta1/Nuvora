import { FaSearch, FaUserCircle, FaBell, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="bg-gray-800 text-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Left: Company Name */}
        <div className="text-2xl font-bold">
          <span className="text-blue-500">LearnMate</span>
        </div>

        {/* Center: Search Bar */}
        <div className="flex flex-1 justify-center mx-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 border border-gray-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right: Profile, Messages, Notifications */}
        <div className="flex items-center space-x-6">
          {/* Message Icon */}
          <button className="relative text-xl">
            <FaEnvelope />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">3</span>
          </button>

          {/* Notification Icon */}
          <button className="relative text-xl">
            <FaBell />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">5</span>
          </button>

          {/* Profile Icon */}
          <button className="text-xl">
            <FaUserCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
