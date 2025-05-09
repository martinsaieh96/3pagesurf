
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Plus } from 'lucide-react';

const ClassesFAQ = () => {
  const faqItems = [
    {
      question: "¿QUÉ TENGO QUE LLEVAR A LAS CLASES DE SURF?",
      answer: "Solo necesitas traje de baño, toalla, protector solar y mucha energía. Nosotros te proporcionamos todo el equipo necesario: tabla de surf, traje de neopreno y accesorios."
    },
    {
      question: "¿HACÉIS FOTOS SURFEANDO?",
      answer: "¡Sí! Ofrecemos un servicio opcional de fotografía durante las sesiones. Las fotos se comparten digitalmente después de la clase."
    },
    {
      question: "¿ME RECOGÉIS EN EL HOTEL?",
      answer: "Ofrecemos servicio de recogida desde varios hoteles y puntos céntricos de Pichilemu. Consulta con nosotros al momento de reservar."
    },
    {
      question: "¿CUÁNTO DURA UNA CLASE?",
      answer: "Nuestras clases estándar tienen una duración de 2 horas, incluyendo la instrucción en tierra y práctica en el agua."
    },
    {
      question: "¿INCLUYE EL MATERIAL?",
      answer: "Sí, todo el material está incluido: tabla adaptada a tu nivel, traje de neopreno, lycra y accesorios necesarios para la práctica."
    },
    {
      question: "¿A QUÉ HORA SON LAS CLASES?",
      answer: "Ofrecemos sesiones matutinas (9:00 - 11:00), de mediodía (12:00 - 14:00) y por la tarde (15:00 - 17:00), sujetas a condiciones del mar y disponibilidad."
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
    <section className="py-16 bg-surf-sand-light">
      <div className="surf-container">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-surf-blue-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            F.A.Q.
          </motion.h2>
          <div className="w-20 h-1 bg-surf-coral mx-auto mt-3 mb-6"></div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Si tienes dudas sobre las clases de surf, puedes echarle un vistazo a las
            preguntas más frecuentes. Quizá puedas resolver tu duda.
          </motion.p>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Si tu duda queda sin resolver, escríbenos vía WhatsApp en el botón en la parte
            inferior derecha de esta página o envíanos un mensaje.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <motion.div key={index} variants={item}>
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="flex justify-between items-center py-4 w-full text-left font-medium text-surf-blue-dark hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="https://wa.me/56912345678?text=Hola,%20tengo%20una%20pregunta%20sobre%20las%20clases%20de%20surf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surf-coral hover:bg-surf-coral-dark text-white px-6 py-3 rounded-full text-lg transition-colors duration-300"
            >
              <Plus className="h-5 w-5" />
              <span>Pregunta tu duda aquí</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClassesFAQ;
