
import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';

const LevelSummary = () => {
  const levels = [
    {
      id: 'principiante',
      title: 'Principiante',
      description: '2 horas',
      icon: <Waves size={48} className="text-surf-coral" />,
      color: 'bg-surf-sand',
      borderColor: 'border-surf-coral'
    },
    {
      id: 'intermedio',
      title: 'Intermedio',
      description: '2 horas',
      icon: <Waves size={48} className="text-surf-blue" />,
      color: 'bg-surf-sand-light',
      borderColor: 'border-surf-blue'
    },
    {
      id: 'avanzado',
      title: 'Avanzado',
      description: '2 horas',
      icon: <Waves size={48} className="text-surf-blue-dark" />,
      color: 'bg-surf-sand',
      borderColor: 'border-surf-blue-dark'
    },
    {
      id: 'profesional',
      title: 'Profesional',
      description: '2 horas',
      icon: <Waves size={48} className="text-surf-coral-dark" />,
      color: 'bg-surf-sand-light',
      borderColor: 'border-surf-coral-dark'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="level-summary" className="py-16 bg-white">
      <div className="surf-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-surf-blue-dark">Niveles de Aprendizaje</h2>
          <div className="w-20 h-1 bg-surf-coral mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos cursos adaptados para cada etapa de tu aventura en el surf
          </p>
        </div>

        {/* Desktop grid / Mobile carousel */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {levels.map((level) => (
            <LevelCard key={level.id} level={level} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden overflow-x-auto pb-8 hide-scrollbar">
          <motion.div 
            className="flex gap-4 min-w-min pl-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {levels.map((level) => (
              <div key={level.id} className="w-[280px] flex-shrink-0">
                <LevelCard level={level} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LevelCard = ({ level }) => {
  return (
    <motion.div
      className={`${level.color} border-t-4 ${level.borderColor} rounded-lg p-6 shadow-md h-full transition-all`}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' 
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-4">
        {level.icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-3 text-surf-blue-dark">{level.title}</h3>
      <p className="text-center text-gray-600">{level.description}</p>
    </motion.div>
  );
};

export default LevelSummary;
