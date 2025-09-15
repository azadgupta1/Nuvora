import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authServices";
import Spinner1 from "../../components/ui/Spinner1";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [agreeError, setAgreeError] = useState("");
  const [loading, setLoading] = useState(false); // <-- NEW state for loading

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
    if (e.target.checked) setAgreeError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setErrors({});
    setAgreeError("");

    if (!agree) {
      setAgreeError("You must agree to the terms and conditions.");
      return;
    }

    setLoading(true); // Start loader

    try {
      const response = await registerUser(user);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      navigate("/dashboard");
    } catch (err) {
      const backendErrors = err.response?.data;
      if (backendErrors?.errors) {
        const fieldErrors = {};
        backendErrors.errors.forEach(({ field, message }) => {
          if (!fieldErrors[field]) fieldErrors[field] = [];
          fieldErrors[field].push(message);
        });
        setErrors(fieldErrors);
      } else if (backendErrors?.message) {
        setError(backendErrors.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-0 flex items-center justify-center px-0">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Create Your Account</h2>

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
            {errors.password && (
              <ul className="mt-1 text-sm text-red-500 list-disc list-inside space-y-1">
                {errors.password.map((msg, idx) => (
                  <li key={idx}>{msg}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={handleAgreeChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="agree" className="ml-2 block text-sm text-gray-700">
              I agree to the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
              .
            </label>
          </div>
          {agreeError && <p className="text-red-500 text-sm mt-1">{agreeError}</p>}

          {/* Loader or Button */}
          {loading ? (
            <div className="flex justify-center">
              <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-semibold transition duration-200"
            >
              Sign Up
            </button>
          )}
        </form>

        <div className="my-6 flex flex-wrap items-center justify-center gap-2 text-center">
          <hr className="flex-grow border-gray-300 max-w-[120px] w-full sm:w-1/3" />
          <span className="text-sm text-gray-500 whitespace-nowrap">or continue with</span>
          <hr className="flex-grow border-gray-300 max-w-[120px] w-full sm:w-1/3" />
        </div>

        {/* Social Sign-Up Button */}
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => (window.location.href = `${backendUrl}/api/auth/google`)}
            className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
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
