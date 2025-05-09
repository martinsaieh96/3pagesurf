import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, X, Instagram, Facebook, Twitter } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const instructors = [
  {
    id: 1,
    name: "Luis Medina",
    role: "Fundador e Instructor Principal",
    shortBio: "Campeón nacional de surf con más de 15 años de experiencia",
    bio: "Campeón nacional de surf con más de 15 años compitiendo en olas de todo el mundo. Certificado por la ISA y especialista en técnicas avanzadas.",
    image: "", // Empty for silhouette
    initials: "LM",
    certifications: ["Certificado ISA", "Primeros Auxilios", "Salvamento Acuático"],
    experience: "15 años",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Carla Rivas",
    role: "Instructora Senior",
    shortBio: "Especialista en programas inclusivos y pedagogía especializada",
    bio: "Surf adaptado, pedagogía especializada y 8 años formando surfistas de todas las capacidades. Campeona latinoamericana 2018.",
    image: "", // Empty for silhouette
    initials: "CR",
    certifications: ["Cert. Surf Adaptado", "Pedagogía Especializada"],
    experience: "8 años",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Matías González",
    role: "Instructor de Surf Avanzado",
    shortBio: "Especialista en olas grandes y maniobras aéreas",
    bio: "Especialista en olas grandes y maniobras aéreas. Ha surfeado en las playas más desafiantes del mundo y tiene certificación de primeros auxilios avanzados.",
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1441&q=80",
    initials: "MG",
    certifications: ["Especialista Olas Grandes", "Primeros Auxilios Avanzados"],
    experience: "10 años",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Valentina Torres",
    role: "Instructora Junior y Fotógrafa",
    shortBio: "Combina su pasión por el surf y la fotografía",
    bio: "Combinando su pasión por el surf y la fotografía, Valentina documenta cada sesión mientras enseña los fundamentos a principiantes.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    initials: "VT",
    certifications: ["Fotografía Acuática", "Instrucción Básica"],
    experience: "5 años",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    id: 5,
    name: "Pablo Sánchez",
    role: "Instructor de Surf Infantil",
    shortBio: "Especializado en niños desde los 6 años",
    bio: "Especializado en enseñar a niños desde los 6 años. Con formación en psicología infantil y técnicas pedagógicas adaptadas al océano.",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    initials: "PS",
    certifications: ["Psicología Infantil", "Pedagogía Acuática"],
    experience: "7 años",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    id: 6,
    name: "Daniela Rojas",
    role: "Coordinadora e Instructora",
    shortBio: "A cargo de la logística y programación de clases",
    bio: "A cargo de la logística y programación de clases. Ex competidora profesional y apasionada por transmitir los valores del surf.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    initials: "DR",
    certifications: ["Gestión Deportiva", "Competición Profesional"],
    experience: "12 años",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  }
];

const TeamSection = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openInstructorDialog = (instructor) => {
    setSelectedInstructor(instructor);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="surf-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <Users size={32} className="text-surf-blue mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-surf-blue-dark mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600 max-w-xl">Conoce a los profesionales apasionados que te guiarán en tu aventura en el agua. Un equipo con experiencia, certificaciones y mucho amor por el surf.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <motion.div 
              key={instructor.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 } 
              }}
              onClick={() => openInstructorDialog(instructor)}
            >
              <div className="p-6 flex flex-col items-center text-center relative cursor-pointer">
                <div className="relative w-44 h-44 mb-4">
                  <Avatar className="w-44 h-44 border-2 border-surf-coral bg-gray-200">
                    <AvatarFallback className="text-4xl bg-surf-blue text-white">{instructor.initials}</AvatarFallback>
                  </Avatar>
                  <motion.div 
                    className="absolute inset-0 bg-gray-900/0 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white/0 flex items-center justify-center"
                      whileHover={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.span 
                        className="text-2xl font-bold opacity-0 text-surf-blue-dark"
                        whileHover={{ opacity: 1 }}
                      >
                        +
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-surf-blue-dark">{instructor.name}</h3>
                <p className="text-sm italic text-gray-500 mt-1">{instructor.role}</p>
                <p className="text-gray-600 mt-2">{instructor.shortBio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-surf-blue-dark">
              {selectedInstructor?.name}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              {selectedInstructor?.role}
            </DialogDescription>
          </DialogHeader>
          
          {selectedInstructor && (
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="shrink-0">
                <Avatar className="w-32 h-32 border-2 border-surf-coral bg-gray-200">
                  <AvatarFallback className="text-2xl bg-surf-blue text-white">{selectedInstructor.initials}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 mb-4">{selectedInstructor.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-surf-blue-dark mb-2">Certificaciones</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedInstructor.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-surf-blue-dark mb-2">Experiencia</h4>
                  <p className="text-gray-700">{selectedInstructor.experience}</p>
                </div>
                
                <div className="flex gap-4 mt-4">
                  <a href={selectedInstructor.social.instagram} className="text-gray-500 hover:text-surf-coral transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href={selectedInstructor.social.facebook} className="text-gray-500 hover:text-surf-coral transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href={selectedInstructor.social.twitter} className="text-gray-500 hover:text-surf-coral transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeamSection;
