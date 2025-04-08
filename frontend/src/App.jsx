// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from './pages/LandingPage';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import DashBoard from './pages/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';
// import SkillsList from './pages/SkillsList';
// import SkillDetails from './pages/SkillDetails';
// import Bookings from './pages/Bookings';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
        
        
//         {/* Wrap protected routes with ProtectedRoute */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <DashBoard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/dash"
//           element={
//             <ProtectedRoute>
//               <SkillsList />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/skill/:id"
//           element={
//             <ProtectedRoute>
//               <SkillDetails />
//             </ProtectedRoute>
//           }
//         />

//         <Route 
//           path="/bookings"
//           element={
//             <ProtectedRoute>
//               <Bookings />
//             </ProtectedRoute>
//           }
//          />

//       </Routes>
//     </Router>

//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import SkillsList from './pages/SkillsList';
import SkillDetails from './pages/SkillDetails';
import Bookings from './pages/Bookings';
import Bookmarks from "./pages/Bookmarks";
import Reviews from "./pages/Reviews";
import ChatRoom from './pages/ChatRoom';
import Chat from "./pages/Chat";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard layout with nested routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        >
          {/* These now render inside the Outlet in DashBoard.jsx */}
          <Route path="dash" element={<SkillsList />} />
          <Route path="skill/:id" element={<SkillDetails />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="reviews" element={<Reviews />} />
          {/* <Route path="chat/:roomId" element={<ChatRoom />} /> */}
          <Route path="chat/:roomId" element={<Chat />} />
          {/* Add more as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


