
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ClassesSection = () => {
  return (
    <section id="clases" className="py-24 bg-surf-sand-light">
      <div className="surf-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-surf-blue-dark mb-4">Nuestras Clases</h2>
          <div className="w-20 h-1 bg-surf-coral mb-6 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos clases para todos los niveles, desde principiantes hasta avanzados.
            Nuestros instructores certificados te ayudarán a mejorar tu técnica y disfrutar al máximo de las olas.
          </p>
        </div>

        {/* Clases destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clase 1 */}
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-md"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="Clase de surf principiantes" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-surf-blue-dark mb-2">Surf Principiantes</h3>
              <p className="text-gray-600 mb-4">
                Aprende los fundamentos del surf en un ambiente seguro y divertido. 
                Perfecto para quienes nunca han practicado este deporte.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-surf-coral font-semibold">2 horas</span>
              </div>
            </div>
          </motion.div>

          {/* Clase 2 */}
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-md"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" 
                alt="Clase de surf intermedio" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-surf-blue-dark mb-2">Surf Intermedio</h3>
              <p className="text-gray-600 mb-4">
                Mejora tu técnica y aprende a maniobrar en la ola. 
                Para personas con experiencia previa en surf.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-surf-coral font-semibold">2 horas</span>
              </div>
            </div>
          </motion.div>

          {/* Clase 3 */}
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-md"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531722569936-825d3dd91b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="Clase de surf avanzado" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-surf-blue-dark mb-2">Surf Avanzado</h3>
              <p className="text-gray-600 mb-4">
                Domina maniobras avanzadas y surfea olas grandes con confianza.
                Para surfistas con amplia experiencia.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-surf-coral font-semibold">2 horas</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Botón para ver todas las clases */}
        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-surf-blue hover:bg-surf-blue-dark text-white px-8 py-6 rounded-full text-lg shadow-lg group"
          >
            <Link to="/clases">
              Ver todas las clases
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
