
import React from 'react';

const WaveDivider = ({ color = 'white' }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        className="w-full h-16 md:h-24"
        preserveAspectRatio="none"
      >
        <path 
          fill={color} 
          fillOpacity="1" 
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,101.3C672,85,768,139,864,160C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
