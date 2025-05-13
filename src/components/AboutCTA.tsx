import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-surf-blue to-surf-blue-dark text-white">
      <div className="surf-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Conoce EscuelaSurf</h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            La mejor forma de conocernos es probando nuestras clases. Nos encantaría compartir contigo nuestra pasión por el surf y las olas de Chile en EscuelaSurf.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-white text-surf-blue hover:bg-surf-sand hover:text-surf-blue-dark px-8 py-6 rounded-full font-medium text-lg">
              <Link to="/clases">
                Conoce nuestras clases
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
