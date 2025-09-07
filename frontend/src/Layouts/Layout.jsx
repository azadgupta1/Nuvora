// // src/components/Layout/Layout.jsx
// import React from 'react';
// import Navbar from '../components/Landing/Navbar/Navbar';
// import { Outlet } from 'react-router-dom';
// import Footer from '../components/Landing/Footer';



// const Layout = () => {
//   return (
//     <main className="overflow-x-hidden bg-white text-blue-950">
//       <Navbar />
//       <div className="pt-0"> {/* Add top padding to avoid overlap under fixed navbar */}
//         <Outlet />
//       </div>
//       <Footer />
//     </main>
//   );
// };

// export default Layout;








import React, { useState, useEffect } from 'react';
import Navbar from '../components/Landing/Navbar/Navbar';
import Footer from '../components/Landing/Footer';
import { Outlet } from 'react-router-dom';
import FullPageLoader from '../components/Loader/FullPageLoader';


const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

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
