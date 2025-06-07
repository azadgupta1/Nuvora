// import React from 'react'
// import Sidebar from '../components/Dashboard/SideBar'
// import Header from '../components/Dashboard/Header'

// function DashBoard() {
//   return (
//     <div>
//       <Header />
//       <Sidebar />
//     </div>
//   )
// }

// export default DashBoard


import React from 'react';
import Sidebar from '../components/Dashboard/SideBar';
import Header from '../components/Dashboard/Header';
import { Outlet } from 'react-router-dom';

function DashBoard() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar - Full Width */}
      <div className="w-full">
        <Header />
      </div>

      {/* Bottom Section: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <div className="w-64 bg-blue-500 text-white">
          <Sidebar />
        </div>

        {/* Main Content on the right */}
        <div className="flex-1 p-6 mt-10 overflow-auto bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
