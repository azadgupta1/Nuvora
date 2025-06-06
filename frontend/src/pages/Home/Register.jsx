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
      navigate("/dashboard"); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden">
        <div className="w-1/2 bg-blue-600 text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold">Join EduMaster</h2>
          <p className="mt-4 text-center">
            Sign up to access high-quality courses, expert guidance, and a seamless learning experience.
          </p>
          <img src="https://source.unsplash.com/300x200/?students" alt="Education" className="mt-6 rounded-lg" />
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-700 text-center">Sign Up</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Full Name</label>
              <input type="text" name="name" value={user.name} onChange={handleChange} required 
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input type="email" name="email" value={user.email} onChange={handleChange} required 
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input type="password" name="password" value={user.password} onChange={handleChange} required 
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="Enter your password" />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Sign Up</button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account? <Link to="/" className="text-blue-600 font-semibold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
