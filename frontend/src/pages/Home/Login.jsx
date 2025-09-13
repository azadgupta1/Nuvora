import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authServices";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await loginUser(user);
      localStorage.setItem("token", response.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 mt-0 mb-0 flex items-center justify-center px-0">
      <div className="w-full max-w-md bg-white p-8 sm:rounded-sm sm:shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Welcome Back</h2>

        {error && <p className="text-red-500 text-sm font-semibold text-center mb-4">{error}</p>}
        
        

        <form onSubmit={handleSubmit} className="space-y-4">
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

        
          {loading ? (
          <div className="flex justify-center">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Login
          </button>
        )}


        </form>

        <div className="my-6 flex items-center justify-between">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-sm text-gray-500">or continue with</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* Social Login Buttons - Placeholder Visuals */}
        <div className="flex flex-col space-y-3">
          <button onClick={() => window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`} className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/join" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
