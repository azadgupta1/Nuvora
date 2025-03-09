import React from 'react';
import Hero from '../components/Landing/Hero/Hero';
import Services from '../components/Landing/Services/Services';
import Banner from '../components/Landing/Banner/Banner';
import Subscribe from '../components/Landing/Subscribe/Subscribe';
import Banner2 from '../components/Landing/Banner/Banner2'
import Footer from '../components/Landing/Footer/Footer';

function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-white text-blue-950">
      {/* <Navbar /> */}
      <div className="max-w-screen-lg mx-auto px-4">
        <Hero />
        <Services />
        <Banner />
        <Subscribe />
        <Banner2 />
        <Footer /> 
      </div>
    </main>
  );
}

export default LandingPage;
