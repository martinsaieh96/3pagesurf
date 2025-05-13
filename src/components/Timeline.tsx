import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Compass } from 'lucide-react';

const TimelineEvent = ({ year, title, description, isLast = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative">
      {/* Line */}
      {!isLast && (
        <motion.div 
          className="absolute left-6 top-6 h-full w-0.5 bg-gray-200"
          initial={{ scaleY: 0, originY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />
      )}
      
      {/* Dot */}
      <motion.div 
        className="absolute left-6 top-6 w-3 h-3 bg-surf-coral rounded-full transform -translate-x-1.5"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4 }}
      />
      
      {/* Content */}
      <motion.div 
        className="pl-12 pb-10"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold text-surf-coral">{year}</span>
        <h3 className="text-xl font-bold text-surf-blue-dark mt-1">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="surf-container">
        <div className="flex flex-col items-center mb-12 text-center">
          <Compass size={32} className="text-surf-blue mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-surf-blue-dark mb-4">Nuestra Trayectoria</h2>
          <p className="text-gray-600 max-w-xl">Cada ola nos ha traído hasta donde estamos hoy. Descubre los momentos clave que marcaron nuestra historia en Pichilemu.</p>
        </div>
        
        <div className="mx-auto max-w-3xl mt-16">
          <TimelineEvent 
            year="2012" 
            title="Fundación de EscuelaSurf" 
            description="Nuestro fundador, campeón nacional de surf, decidió compartir su pasión por las olas abriendo nuestra primera sede en la costa chilena."
          />
          <TimelineEvent 
            year="2014" 
            title="Primeras Competencias" 
            description="Nuestros primeros alumnos comenzaron a destacarse en competencias regionales y nacionales, estableciendo nuestro nombre en el mundo del surf."
          />
          <TimelineEvent 
            year="2016" 
            title="Ampliación de Instalaciones" 
            description="Renovamos nuestro espacio para incluir duchas calientes, lockers, sala de descanso y ampliamos nuestra flota de tablas y trajes."
          />
          <TimelineEvent 
            year="2018" 
            title="Certificación Internacional" 
            description="Obtuvimos la certificación de la ISA (International Surfing Association), convirtiéndonos en referentes de enseñanza profesional."
          />
          <TimelineEvent 
            year="2020" 
            title="Programa Surf Inclusivo" 
            description="Lanzamos nuestro programa de surf adaptado para personas con discapacidad, abriendo el océano para todos."
          />
          <TimelineEvent 
            year="Hoy" 
            title="Expansión y Comunidad" 
            description="Con miles de alumnos graduados, seguimos creciendo y construyendo una comunidad apasionada por el mar y el surf en las costas de Chile."
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
