
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { loginUser } from "../../services/authServices";

// export default function Login() {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await loginUser(user);
//       localStorage.setItem("token", response.token); // Store token
//       navigate("/dashboard"); // Redirect to dashboard after login
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[90%] max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden">
//         <div className="w-1/2 bg-blue-600 text-white flex flex-col items-center justify-center p-8">
//           <h2 className="text-3xl font-bold">Welcome Back to EduMaster</h2>
//           <p className="mt-4 text-center">
//             Login to access your courses, track progress, and enhance your learning journey.
//           </p>
//           <img src="https://source.unsplash.com/300x200/?education" alt="Education" className="mt-6 rounded-lg" />
//         </div>

//         <div className="w-1/2 p-8">
//           <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>

//           {error && <p className="text-red-500 text-center">{error}</p>}

//           <form className="mt-6" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-600">Email</label>
//               <input type="email" name="email" value={user.email} onChange={handleChange} required 
//                 className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="Enter your email" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-600">Password</label>
//               <input type="password" name="password" value={user.password} onChange={handleChange} required 
//                 className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="Enter your password" />
//             </div>
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>
//           </form>

//           <p className="mt-4 text-center text-gray-600">
//             Don't have an account? <Link to="/register" className="text-blue-600 font-semibold">Sign Up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

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
      localStorage.setItem("token", response.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Welcome Back</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center justify-between">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-sm text-gray-500">or continue with</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* Social Login Buttons - Placeholder Visuals */}
        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Continue with Facebook</span>
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
