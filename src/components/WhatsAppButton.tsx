
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [showLabel, setShowLabel] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowLabel(false);
      } else {
        setShowLabel(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a 
      href="https://wa.me/56912345678" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2"
    >
      {showLabel && (
        <span className="bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full text-white font-medium animate-pulse drop-shadow-lg">
          Contáctanos aquí
        </span>
      )}
      <div className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
