import React from 'react';
import Home from '../../components/Landing/Hero/Hero';
import HowItWorks from '../../components/Landing/WorkingofNuvora/Working';
import { WorldMapDemo } from '../../components/Landing/World';
import TestimonialSlider from '../../components/Landing/Testimonial';
import CTA from '../../components/Landing/CTA';
import Spinner1 from '../../components/ui/Spinner1';


function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-white text-blue-950">
      
      <Home />
      <HowItWorks />
      <TestimonialSlider />
      <WorldMapDemo />
      <CTA />
      
    </main>
  );
}

export default LandingPage;