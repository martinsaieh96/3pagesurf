
import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const SocialIcons = ({ isScrolled = false }) => {
  return (
    <div className="flex gap-3">
      <a 
        href="https://wa.me/56912345678" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${isScrolled ? 'bg-surf-blue/20' : 'bg-white/20'} backdrop-blur-sm p-1.5 rounded-full hover:bg-white/40 transition-all duration-300`}
      >
        <MessageCircle className={`w-4 h-4 ${isScrolled ? 'text-surf-blue' : 'text-white'} drop-shadow-md`} />
      </a>
      <a 
        href="https://instagram.com/escueladesurfpichilemu" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${isScrolled ? 'bg-surf-blue/20' : 'bg-white/20'} backdrop-blur-sm p-1.5 rounded-full hover:bg-white/40 transition-all duration-300`}
      >
        <Instagram className={`w-4 h-4 ${isScrolled ? 'text-surf-blue' : 'text-white'} drop-shadow-md`} />
      </a>
      <a 
        href="https://facebook.com/escueladesurfpichilemu" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${isScrolled ? 'bg-surf-blue/20' : 'bg-white/20'} backdrop-blur-sm p-1.5 rounded-full hover:bg-white/40 transition-all duration-300`}
      >
        <Facebook className={`w-4 h-4 ${isScrolled ? 'text-surf-blue' : 'text-white'} drop-shadow-md`} />
      </a>
    </div>
  );
};

export default SocialIcons;
