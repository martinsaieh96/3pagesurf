import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WaveDivider from './WaveDivider';

const ClassesHero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Hero image background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80" 
          alt="Clases de surf en Pichilemu" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
      </div>
      
      <div className="surf-container relative z-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white">
            Clases de Surf en Escuela Pichilemu
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl">
            Conecta con el océano y descubre tu potencial. Nuestras clases son una promesa de superación, diversión y respeto por el mar.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              className="bg-surf-coral hover:bg-surf-coral-dark text-white px-8 rounded-full"
              onClick={() => {
                const courseDetailsSection = document.getElementById('course-details');
                if (courseDetailsSection) {
                  courseDetailsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver cursos
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <WaveDivider />
    </section>
  );
};

export default ClassesHero;
