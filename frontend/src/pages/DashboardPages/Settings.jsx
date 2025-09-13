// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Settings() {
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });

//   // Handle theme toggling
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   // Delete account handler
//   const handleDeleteAccount = async () => {
//     const confirmDelete = window.confirm(
//       '⚠️ This action is irreversible. All your data will be permanently deleted. Are you sure you want to continue?'
//     );

//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem('token');

//       await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/account/delete`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       localStorage.removeItem('token');
//       alert('Your account has been permanently deleted.');
//       navigate('/login');
//     } catch (error) {
//       console.error('Error deleting account:', error);
//       alert('Failed to delete account. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 rounded-lg shadow-md space-y-8">
//       {/* Theme Toggle */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Dark Mode</h2>
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
//             darkMode ? 'bg-blue-600' : 'bg-gray-300'
//           }`}
//         >
//           <div
//             className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
//               darkMode ? 'translate-x-6' : ''
//             }`}
//           ></div>
//         </button>
//       </div>

//       {/* Logout */}
//       <div>
//         <button
//           onClick={handleLogout}
//           className="w-full py-2 px-4 text-white bg-gray-700 hover:bg-gray-800 rounded-md transition duration-200"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Danger Zone */}
//       <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
//         <h3 className="text-red-600 font-semibold mb-2">Danger Zone</h3>
//         <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//           Deleting your account will permanently remove all your data. This action cannot be undone.
//         </p>
//         <button
//           onClick={handleDeleteAccount}
//           className="w-full py-2 px-4 bg-red-600 text-white hover:bg-red-700 rounded-md transition duration-200"
//         >
//           Delete Account
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Settings;



















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import UserCard from '../../components/Dashboard/Settings/UserCard';


// function Settings() {
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });

//   // Theme toggling
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   // Logout
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   // Delete account
//   const handleDeleteAccount = async () => {
//     const confirmDelete = window.confirm(
//       '⚠️ This action is irreversible. All your data will be permanently deleted. Are you sure you want to continue?'
//     );

//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem('token');

//       await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/account/delete`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       localStorage.removeItem('token');
//       alert('Your account has been permanently deleted.');
//       navigate('/login');
//     } catch (error) {
//       console.error('Error deleting account:', error);
//       alert('Failed to delete account. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
//       <UserCard />
//       <h1 className='text-3xl font-bold'>Accounts Settings</h1>
//       {/* Theme Section */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h2 className="text-lg font-semibold text-gray-800 ">Appearance</h2>
//           <p className="text-sm text-gray-500">Toggle between light and dark mode.</p>
//         </div>
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className={`mt-4 sm:mt-0 w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
//             darkMode ? 'bg-blue-600' : 'bg-gray-300'
//           }`}
//         >
//           <div
//             className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
//               darkMode ? 'translate-x-6' : ''
//             }`}
//           ></div>
//         </button>
//       </div>

//       {/* Logout Section */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">Session</h2>
//         <p className="text-sm text-gray-500 mb-4">
//           You are currently logged in. You can log out from your account anytime.
//         </p>
//         <button
//           onClick={handleLogout}
//           className="w-full py-2 px-4 text-white bg-gray-700 hover:bg-gray-800 rounded-md transition duration-200"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Danger Zone Section */}
//       <div className="bg-red-50 rounded-lg shadow-sm border border-red-200 p-6">
//         <h3 className="text-red-600 font-semibold mb-2">Danger Zone</h3>
//         <p className="text-sm text-gray-600 mb-4">
//           Deleting your account will permanently remove all your data. This action cannot be undone.
//         </p>
//         <button
//           onClick={handleDeleteAccount}
//           className="w-full py-2 px-4 bg-red-600 text-white hover:bg-red-700 rounded-md transition duration-200"
//         >
//           Delete Account
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Settings;



















import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserCard from '../../components/Dashboard/Settings/UserCard';

function Settings() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      '⚠️ This action is irreversible. All your data will be permanently deleted. Are you sure you want to continue?'
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');

      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/account/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem('token');
      alert('Your account has been permanently deleted.');
      navigate('/login');
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Failed to delete account. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Flex container */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        
        {/* Left column - UserCard */}
        <div className="md:w-72 flex-shrink-0">
          <UserCard />
        </div>

        {/* Right column - Settings content */}
        <div className="flex-1 mt-8 sm:mt-0 sm:pr-80">
          <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

          {/* Appearance Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Appearance</h2>
              <p className="text-sm text-gray-500">Toggle between light and dark mode.</p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`mt-4 sm:mt-0 w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
                darkMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                  darkMode ? 'translate-x-6' : ''
                }`}
              ></div>
            </button>
          </div>

          {/* Logout Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Session</h2>
            <p className="text-sm text-gray-500 mb-4">
              You are currently logged in. You can log out from your account anytime.
            </p>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 text-white bg-gray-700 hover:bg-gray-800 rounded-md transition duration-200"
            >
              Logout
            </button>
          </div>

          <hr className='my-4 text-gray-300' />

          {/* Danger Zone Section */}
          <div className="bg-red-50 rounded-lg shadow-sm border border-red-200 p-6">
            <h3 className="text-red-600 font-semibold mb-2">Danger Zone</h3>
            <p className="text-sm text-gray-600 mb-4">
              Deleting your account will permanently remove all your data. This action cannot be undone.
            </p>
            <button
              onClick={handleDeleteAccount}
              className="w-full py-2 px-4 bg-red-600 text-white hover:bg-red-700 rounded-md transition duration-200"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
