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










// import React, { useState, useEffect } from 'react';
// import Home from '../../components/Landing/Hero/Hero';
// import HowItWorks from '../../components/Landing/WorkingofNuvora/Working';
// import { WorldMapDemo } from '../../components/Landing/World';
// import TestimonialSlider from '../../components/Landing/Testimonial';
// import CTA from '../../components/Landing/CTA';
// import Spinner1 from '../../components/ui/Spinner1';

// function LandingPage() {
//   const [isPageReady, setIsPageReady] = useState(false);

//   useEffect(() => {
//     // When the component mounts and browser paints the frame
//     const handleLoad = () => {
//       setIsPageReady(true);
//     };

//     // Wait until next frame (content rendered)
//     requestAnimationFrame(() => {
//       handleLoad();
//     });

//     // Optional: cleanup
//     return () => cancelAnimationFrame(handleLoad);
//   }, []);

//   if (!isPageReady) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Spinner1 />
//       </div>
//     );
//   }

//   return (
//     <main className="overflow-x-hidden bg-white text-blue-950">
//       <Home />
//       <HowItWorks />
//       <TestimonialSlider />
//       <WorldMapDemo />
//       <CTA />
//     </main>
//   );
// }

// export default LandingPage;
