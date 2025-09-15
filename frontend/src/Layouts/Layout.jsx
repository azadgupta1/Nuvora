import React, { useState, useEffect } from 'react';
import Navbar from '../components/Landing/Navbar/Navbar';
import Footer from '../components/Landing/Footer';
import { Outlet } from 'react-router-dom';
import FullPageLoader from '../components/Loader/FullPageLoader';

const Layout = () => {

  return (
    <main className="overflow-x-hidden bg-white text-blue-950">
      <Navbar />
      <div className="pt-0">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
