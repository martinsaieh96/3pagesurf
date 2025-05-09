
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Ticket } from 'lucide-react';

const ClassesCallToAction = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('course-pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky bottom-0 w-full z-40">
      <motion.div 
        className="bg-gradient-to-r from-surf-coral to-surf-blue shadow-lg py-3"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          delay: 1 
        }}
      >
        <div className="surf-container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-medium text-lg">¿Listo para surfear? Reserva tu clase ahora</p>
              <p className="text-white/80 text-sm">Plazas limitadas cada semana</p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.03, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2,
                repeatDelay: 1
              }}
            >
              <Button 
                size="lg" 
                className="bg-white text-surf-coral hover:bg-surf-sand hover:text-surf-coral-dark font-medium"
                onClick={scrollToPricing}
              >
                <Ticket className="mr-2 h-4 w-4" />
                Reserva ahora
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClassesCallToAction;
