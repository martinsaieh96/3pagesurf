import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ClassReservationForm, { ClassType } from "@/components/ClassReservationForm";

const RentalsSection = () => {
  const rentalOptions = [
    {
      title: "Tabla de Surf",
      description: "Arrienda solo la tabla para disfrutar de las olas de Pichilemu.",
      price: "$15.000",
      time: "Por día",
      features: ["Tablas para todos los niveles", "Incluye leash", "Elige entre diferentes medidas"],
      icon: "🏄‍♂️"
    },
    {
      title: "Solo Traje",
      description: "Arrienda un traje de neopreno de alta calidad para mantener el calor en el agua.",
      price: "$10.000",
      time: "Por día",
      features: ["Trajes 3/2mm y 4/3mm", "Diferentes tallas disponibles", "Material de alta calidad"],
      icon: "👕"
    },
    {
      title: "Tabla + Traje",
      description: "Paquete completo con todo lo necesario para surfear.",
      price: "$20.000",
      time: "Por día",
      features: ["Ahorra con el paquete completo", "Incluye tabla, leash y traje", "Consulta por descuentos para varios días"],
      icon: "🎁"
    },
  ];

  const [selectedRental, setSelectedRental] = React.useState<ClassType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const openRentalDialog = (rental: ClassType) => {
    setSelectedRental(rental);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-surf-sand-light relative overflow-hidden" id="arriendos">
      {/* Background decoration */}
      <div className="absolute -top-24 right-0 w-64 h-64 bg-surf-coral opacity-5 rounded-full"></div>
      <div className="absolute -bottom-32 -left-16 w-96 h-96 bg-surf-blue opacity-5 rounded-full"></div>
      
      <div className="surf-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-surf-blue-dark">Arriendos de Equipos</h2>
          <div className="w-20 h-1 bg-surf-coral mb-6 mx-auto"></div>
          <p className="text-lg max-w-3xl mx-auto mt-4">
            Contamos con equipamiento de calidad para que disfrutes de la mejor experiencia en las olas de Pichilemu.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {rentalOptions.map((option, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="border-t-4 border-t-surf-coral h-full flex flex-col bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-surf-blue text-white flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <div className="text-3xl font-bold text-surf-blue mb-1">{option.price}</div>
                  <p className="text-sm text-gray-500 mb-6">{option.time}</p>
                  <ul className="text-left space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-surf-coral mr-2 font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <motion.div 
                    className="w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button 
                      className="w-full bg-surf-blue hover:bg-surf-blue-dark"
                      onClick={() => openRentalDialog({
                        title: option.title,
                        price: option.price,
                        color: "bg-surf-blue"
                      })}
                    >
                      Reservar Ahora
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Rental Reservation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedRental && (
            <ClassReservationForm 
              classType={selectedRental} 
              onClose={closeDialog} 
              isRental={true} // para personalizar el mensaje de WhatsApp
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RentalsSection;
