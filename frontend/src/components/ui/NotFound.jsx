import React from 'react';
import { Link } from 'react-router-dom';
import MonsterIMG from '../../assets/Monster_404_Error.gif';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <img 
        src={MonsterIMG} 
        alt="404 Not Found" 
        className="w-80 h-auto mb-6 animate-bounce" 
        style={{ animationDuration: '3s' }} // Slows down the bounce
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
