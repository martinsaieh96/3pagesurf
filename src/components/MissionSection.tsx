import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Eye, Heart } from 'lucide-react';

const MissionCard = ({ icon: Icon, title, subtitle, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-6 text-surf-coral">
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-surf-blue-dark mb-2">{title}</h3>
      <p className="font-medium text-surf-blue mb-3">{subtitle}</p>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const MissionSection = () => {
  return (
    <section className="py-20 bg-surf-sand-light">
      <div className="surf-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surf-blue-dark mb-4">Misión, Visión y Valores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Los pilares que nos guían cada día para ofrecer la mejor experiencia de surf en Pichilemu.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MissionCard
              icon={Compass}
              title="Nuestra Misión"
              subtitle="Conectar personas con el océano"
              description="Enseñar surf de manera segura y profesional, creando una comunidad comprometida con el respeto al mar y la naturaleza, mientras fomentamos un estilo de vida saludable en EscuelaSurf."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MissionCard
              icon={Eye}
              title="Nuestra Visión"
              subtitle="Referentes del surf nacional"
              description="Ser reconocidos como la escuela líder en Chile por nuestra metodología de enseñanza, calidad de servicio y compromiso con el desarrollo sostenible del deporte en EscuelaSurf."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MissionCard
              icon={Heart}
              title="Nuestros Valores"
              subtitle="El espíritu que nos mueve"
              description="Pasión por el mar, respeto por la naturaleza, compromiso con la seguridad, espíritu de comunidad y constante innovación en nuestras metodologías."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
