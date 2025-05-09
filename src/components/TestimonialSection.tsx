
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Principiante",
    quote: "Una experiencia increíble. Nunca había surfeado antes y en solo una semana ya podía pararme en la tabla y disfrutar de las olas. Los instructores son muy pacientes y profesionales.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Juan Pérez",
    role: "Nivel Intermedio",
    quote: "He probado varias escuelas de surf, pero ninguna como ésta. La atención personalizada y el ambiente familiar hacen toda la diferencia. Mi técnica ha mejorado enormemente.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Carolina Soto",
    role: "Nivel Avanzado",
    quote: "Aún siendo una surfista con experiencia, los consejos técnicos de los instructores me ayudaron a llevar mi surf al siguiente nivel. Las sesiones de video coaching son invaluables.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Roberto Álvarez",
    role: "Principiante",
    quote: "Increíble experiencia para toda la familia. Mis hijos aprendieron rápidamente gracias a la metodología y paciencia de los instructores. Volveremos cada verano.",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Daniela Morales",
    role: "Nivel Intermedio",
    quote: "Las instalaciones son excelentes y los instructores realmente se preocupan por tu progreso. Me encantó el ambiente relajado pero profesional.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<number | null>(null);
  
  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  // Pause and resume autoplay on hover
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
    startAutoPlay();
  };
  
  // Set up auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  // Navigation controls
  const nextTestimonial = () => {
    pauseAutoPlay();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    pauseAutoPlay();
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-white" id="testimonios">
      <div className="surf-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-surf-blue-dark">Lo que dicen nuestros estudiantes</h2>
          <div className="w-20 h-1 bg-surf-coral mb-6 mx-auto"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Testimonios de personas que han vivido la experiencia de aprender a surfear con nosotros.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative overflow-hidden"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Testimonial carousel */}
          <div className="h-[380px] md:h-[320px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-4 border-surf-coral"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].name} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold text-surf-blue-dark">{testimonials[currentIndex].name}</h4>
                      <p className="text-surf-coral">{testimonials[currentIndex].role}</p>
                      <div className="flex mt-2 justify-center md:justify-start">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-surf-coral" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="relative text-gray-600 italic text-lg leading-relaxed">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 z-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84088 12.86 3.05992 12.5533 2.42332 11.94C1.81229 11.3266 1.50676 10.4467 1.50676 9.29999C1.50676 8.07332 1.81229 6.87332 2.42332 5.69999C2.45788 5.65332 2.49244 5.60666 2.52701 5.56C2.56157 5.51333 2.59614 5.46666 2.6307 5.42C2.66527 5.37333 2.69983 5.32667 2.7344 5.28L2.80814 5.16C2.84271 5.12 2.87727 5.07999 2.91184 5.03999C2.94641 5 2.98097 4.96 3.01554 4.92C3.04627 4.88 3.07701 4.84 3.10775 4.8L3.17775 4.72C3.20848 4.68 3.23922 4.64 3.26996 4.6C3.5037 4.32 3.73744 4.07333 3.97118 3.85999C4.20492 3.64666 4.43866 3.46666 4.67242 3.32C4.90616 3.17333 5.12272 3.05333 5.32211 2.96C5.55585 2.85333 5.75524 2.8 5.92046 2.8C6.05764 2.8 6.19481 2.82 6.33198 2.86C6.47633 2.9 6.60631 2.96 6.72192 3.04C6.83754 3.12 6.93598 3.21333 7.01725 3.32C7.09852 3.40667 7.15895 3.52 7.19852 3.66C7.29696 3.90667 7.24696 4.12 7.04757 4.3C6.76201 4.62 6.43378 4.94 6.06287 5.26C5.69197 5.58 5.35449 5.92 5.04896 6.28C4.74344 6.64 4.49896 7.02 4.31553 7.42C4.13209 7.82 4.09395 8.24 4.2025 8.68L4.6032 8.68001C5.06164 8.68001 5.43735 8.86001 5.73045 9.22001C6.04831 9.58 6.20724 9.92 6.20724 10.24L6.20724 10.3C6.20724 10.3 6.20724 10.3 6.20724 10.3H7.39762ZM15.3976 10.3C15.3976 11.0733 15.1489 11.7 14.6514 12.18C14.1539 12.6333 13.5255 12.86 12.7662 12.86C11.8409 12.86 11.0599 12.5533 10.4233 11.94C9.81229 11.3266 9.50676 10.4467 9.50676 9.29999C9.50676 8.07332 9.81229 6.87332 10.4233 5.69999C10.4579 5.65332 10.4924 5.60666 10.527 5.56C10.5616 5.51333 10.5961 5.46666 10.6307 5.42C10.6653 5.37333 10.6998 5.32667 10.7344 5.28L10.8081 5.16C10.8427 5.12 10.8773 5.07999 10.9118 5.03999C10.9464 5 10.981 4.96 11.0155 4.92C11.0463 4.88 11.077 4.84 11.1078 4.8L11.1778 4.72C11.2085 4.68 11.2392 4.64 11.27 4.6C11.5037 4.32 11.7374 4.07333 11.9712 3.85999C12.2049 3.64666 12.4387 3.46666 12.6724 3.32C12.9062 3.17333 13.1227 3.05333 13.3221 2.96C13.5558 2.85333 13.7552 2.8 13.9205 2.8C14.0576 2.8 14.1948 2.82 14.332 2.86C14.4763 2.9 14.6063 2.96 14.7219 3.04C14.8375 3.12 14.936 3.21333 15.0172 3.32C15.0985 3.40667 15.159 3.52 15.1985 3.66C15.297 3.90667 15.247 4.12 15.0476 4.3C14.762 4.62 14.4338 4.94 14.0629 5.26C13.692 5.58 13.3545 5.92 13.049 6.28C12.7434 6.64 12.499 7.02 12.3155 7.42C12.1321 7.82 12.0935 8.24 12.2025 8.68L12.6032 8.68001C13.0616 8.68001 13.4374 8.86001 13.7304 9.22001C14.0483 9.58 14.2072 9.92 14.2072 10.24L14.2072 10.3C14.2072 10.3 14.2072 10.3 14.2072 10.3H15.3976Z" fill="currentColor"/>
                    </svg>
                    <span className="relative z-10">{testimonials[currentIndex].quote}</span>
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    pauseAutoPlay();
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-surf-coral' : 'bg-gray-300'
                  } transition-colors duration-300`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <motion.button
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-surf-blue hover:text-white transition-colors"
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-surf-blue hover:text-white transition-colors"
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
