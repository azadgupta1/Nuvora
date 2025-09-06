import React from 'react';
import Hero from '../../components/Landing/Hero/Hero';
import Services from '../../components/Landing/Services/Services';
import Banner from '../../components/Landing/Banner/Banner';
import Subscribe from '../../components/Landing/Subscribe/Subscribe';
import Banner2 from '../../components/Landing/Banner/Banner2'
import ServiceSection from '../../components/ServiceSection';
import TestimonialSection from '../../components/TestimonialSection';
import Home from '../../components/Landing/Hero/Hero';

function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-white text-blue-950">
      
      {/* Hero goes full width */}
      {/* <Hero /> */}
      <Home />
      <ServiceSection />
      <TestimonialSection />

      {/* Rest constrained in a container */}
      <div className="max-w-screen-lg mx-auto px-4">
        <Services />
        {/* <Banner /> */}
        <Subscribe />
        <Banner2 />
        
      </div>
      
    </main>
  );
}

export default LandingPage;
