import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Settings() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Handle theme toggling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Delete account handler
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
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 rounded-lg shadow-md space-y-8">
      {/* Theme Toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Dark Mode</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
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

      {/* Logout */}
      <div>
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 text-white bg-gray-700 hover:bg-gray-800 rounded-md transition duration-200"
        >
          Logout
        </button>
      </div>

      {/* Danger Zone */}
      <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
        <h3 className="text-red-600 font-semibold mb-2">Danger Zone</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
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
  );
}

export default Settings;
