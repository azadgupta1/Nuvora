// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from '../components/Landing/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Landing/Footer';



const Layout = () => {
  return (
    <main className="overflow-x-hidden bg-white text-blue-950">
      <Navbar />
      <div className="pt-0"> {/* Add top padding to avoid overlap under fixed navbar */}
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
