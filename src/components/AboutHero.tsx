import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

const AboutHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/hero-surfers.jpg')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      </div>

      {/* Hero content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 surf-container">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestra Historia
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl font-normal max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Más de 10 años surfeando sueños en las legendarias olas de Pichilemu
        </motion.p>
      </div>

      <WaveDivider />
    </section>
  );
};

export default AboutHero;
