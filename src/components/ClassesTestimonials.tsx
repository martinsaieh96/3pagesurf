
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const ClassesTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Martina Rojas",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "Nunca pensé que podría aprender a surfear en tan solo una semana. Los instructores son increíblemente pacientes y saben exactamente cómo ayudarte a mejorar.",
      courseType: "Nivel Principiante",
      rating: 5,
      location: "Santiago"
    },
    {
      id: 2,
      name: "Diego Fernández",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "El pack mensual es la mejor inversión que he hecho. En dos meses pasé de principiante a estar surfeando olas de tamaño medio con confianza. La metodología es excelente.",
      courseType: "Pack Mensual",
      rating: 5,
      location: "Viña del Mar"
    },
    {
      id: 3,
      name: "Carolina Mendoza",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      quote: "El entrenamiento profesional superó mis expectativas. La atención personalizada y el análisis detallado de mi técnica me ayudaron a prepararme para mi primera competición.",
      courseType: "Entrenamiento Pro",
      rating: 5,
      location: "Concepción"
    }
  ];

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-surf-sand-light">
      <div className="surf-container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-surf-blue-dark">Lo que dicen nuestros alumnos</h2>
          <div className="w-20 h-1 bg-surf-coral mx-auto mt-3 mb-6"></div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-6 md:p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-surf-coral mx-auto">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex mb-3">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-surf-coral text-surf-coral" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-4 text-gray-700">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-surf-blue-dark">{testimonials[activeIndex].name}</p>
                    <div className="text-sm text-gray-500 flex flex-wrap gap-2 items-center">
                      <span>{testimonials[activeIndex].courseType}</span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      <span>{testimonials[activeIndex].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-surf-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2">
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-surf-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors ${
                index === activeIndex ? 'bg-surf-coral' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesTestimonials;
