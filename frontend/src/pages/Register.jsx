import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../services/authServices.js";
import { motion } from "framer-motion";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    setLoading(true);

    try {
      await signup({ name: formData.name, email: formData.email, password: formData.password });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Join LearnMate</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded-lg border"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-lg border"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 rounded-lg border"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-3 rounded-lg border"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-center text-gray-600 mt-4">
          Already registered? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
