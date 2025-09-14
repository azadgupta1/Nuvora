// // src/components/ProtectedRoute.js

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   // Check if the user is logged in (based on token or any other method)
//   const token = localStorage.getItem('token');

//   if (!token) {
//     // Redirect to login page if not authenticated
//     return <Navigate to="/login" replace />;
//   }

//   // If authenticated, render the protected route
//   return children;
// };

// export default ProtectedRoute;










import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // ✅ 1. Extract token from query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromURL = params.get('token');

    if (tokenFromURL) {
      localStorage.setItem('token', tokenFromURL);

      // ✅ Clean URL (remove ?token=...)
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, [location]);

  // ✅ 2. Now check for token
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
