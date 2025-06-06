
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authServices";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await loginUser(user);
      localStorage.setItem("token", response.token); // Store token
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden">
        <div className="w-1/2 bg-blue-600 text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold">Welcome Back to EduMaster</h2>
          <p className="mt-4 text-center">
            Login to access your courses, track progress, and enhance your learning journey.
          </p>
          <img src="https://source.unsplash.com/300x200/?education" alt="Education" className="mt-6 rounded-lg" />
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="mt-6" onSubmit={handleSubmit}>
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
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <Link to="/register" className="text-blue-600 font-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
