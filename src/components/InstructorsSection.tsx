import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Carlos Rodríguez",
      role: "Instructor Principal",
      experience: "15 años de experiencia",
      image: "", // Empty for silhouette
      fallback: "CR",
      bio: "Campeón nacional de surf con especialización en técnica avanzada y enseñanza adaptativa. Certificado por la ISA.",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Valentina Muñoz",
      role: "Instructora Senior",
      experience: "12 años de experiencia",
      image: "", // Empty for silhouette
      fallback: "VM",
      bio: "Experta en pedagogía surf para principiantes y nivel intermedio. Su paciencia y método han formado a cientos de surfistas.",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Felipe Contreras",
      role: "Instructor",
      experience: "8 años de experiencia",
      image: "", // Empty for silhouette
      fallback: "FC",
      bio: "Especialista en surf de olas grandes y seguridad acuática. Ex competidor internacional con amplio conocimiento en hidrodinámicas.",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white relative" id="instructores">
      <div className="surf-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-surf-blue-dark">Nuestros Instructores</h2>
          <div className="w-20 h-1 bg-surf-coral mb-6 mx-auto"></div>
          <p className="text-lg max-w-3xl mx-auto mt-4">
            Contamos con un equipo de instructores certificados y con amplia experiencia en la enseñanza del surf.
          </p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {instructors.map((instructor, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="w-full max-w-xs"
            >
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center overflow-hidden relative"
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="relative mb-6">
                  <div className="relative inline-block">
                    <Avatar className="w-40 h-40 border-4 border-surf-coral drop-shadow-lg bg-gray-200">
                      <AvatarFallback className="bg-surf-blue text-white text-2xl">
                        {instructor.fallback}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surf-blue rounded-full p-2 shadow-lg">
                      <Users className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-surf-blue-dark">{instructor.name}</h3>
                <p className="text-surf-coral font-medium">{instructor.role}</p>
                <p className="mt-2 text-gray-600">{instructor.experience}</p>
                <p className="mt-4 text-gray-600 text-sm">{instructor.bio}</p>
                <div className="flex space-x-4 mt-4">
                  <a href={instructor.social.instagram} className="text-gray-400 hover:text-surf-coral transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href={instructor.social.facebook} className="text-gray-400 hover:text-surf-coral transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href={instructor.social.twitter} className="text-gray-400 hover:text-surf-coral transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Button 
            asChild
            className="bg-surf-blue hover:bg-surf-blue-dark text-white px-8 py-6 rounded-full text-lg shadow-lg"
          >
            <Link to="/nosotros">
              Sobre Nosotros
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
