// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from '../components/Landing/Navbar/Navbar';
import Footer from '../components/Landing/Footer/Footer';
import { Outlet } from 'react-router-dom';


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
