import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-24 bg-surf-sand-light">
      <div className="surf-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-surf-blue-dark">Sobre Nosotros</h2>
              <Waves className="text-surf-coral h-8 w-8" />
            </div>
            <div className="w-20 h-1 bg-surf-coral mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              En Escuela Azul Surf, combinamos más de una década de experiencia en enseñanza de surf con la pasión por las olas de Pichilemu. Nuestro equipo de instructores certificados te guiará desde tu primera remada hasta tu mejor maniobra, en el corazón de la capital del surf en Chile. ¡Ven a descubrir por qué Pichilemu es la meca mundial de los riders y únete al espíritu de la ola!
            </p>
            <a href="/nosotros" className="inline-block bg-surf-coral hover:bg-surf-coral-dark text-white font-semibold px-8 py-3 rounded-full shadow transition-colors duration-300 mb-8">Conócenos</a>
            <div className="flex flex-wrap gap-4">
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-surf-blue rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-surf-blue-dark">+10 años</h3>
                  <p className="text-gray-600">de experiencia</p>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-surf-blue rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="8" r="5"/>
                    <path d="M20 21a8 8 0 1 0-16 0"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-surf-blue-dark">Instructores</h3>
                  <p className="text-gray-600">certificados</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative h-96 overflow-hidden rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" 
                  alt="Clase de surf intermedio" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent hover:opacity-70 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
