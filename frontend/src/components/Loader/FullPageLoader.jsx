// src/components/ui/FullPageLoader.jsx

import React from 'react';
import NuvoraPNG from '../../assets/Nuvora_2.png';


const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      <img
        src={NuvoraPNG}
        alt="Nuvora Logo"
        className="w-26 h-20  sm:w-32 sm:h-24 animate-pulse"
      />
    </div>
  );
};

export default FullPageLoader;
