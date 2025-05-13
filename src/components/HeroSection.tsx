import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import WaveDivider from './WaveDivider';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-us');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/morro.png" 
          alt="Olas de Pichilemu" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      </div>
      
      <div className="surf-container relative z-20 text-white">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 font-montserrat leading-tight">
            Vive la experiencia del surf en Chile
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-xl">
            Aprende a surfear con los mejores instructores en las mejores olas de Chile. 
            Clases para todos los niveles, desde principiantes hasta avanzados.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="bg-surf-coral hover:bg-surf-coral-dark text-white text-lg px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
                <Link to="/clases">Nuestras Clases</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <WaveDivider />
    </div>
  );
};

export default HeroSection;
