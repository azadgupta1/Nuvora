


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authServices";

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await registerUser(user);
      navigate("/dashboard"); // Redirect after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Create Your Account</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 flex items-center justify-between">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-sm text-gray-500">or continue with</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* Social Sign-Up Buttons - Visual Only */}
        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Sign up with Facebook</span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
