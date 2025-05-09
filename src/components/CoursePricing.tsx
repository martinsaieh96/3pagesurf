
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Lightbulb } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Toaster } from "sonner";
import ClassReservationForm, { ClassType } from '@/components/ClassReservationForm';

interface CoursePricingProps {
  id?: string;
}

const CoursePricing: React.FC<CoursePricingProps> = ({ id }) => {
  const [selectedClass, setSelectedClass] = React.useState<ClassType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  
  const openReservationDialog = (classType: ClassType) => {
    setSelectedClass(classType);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const pricingPlans = [
    {
      title: "Clases Privadas",
      description: "Atención personalizada para un progreso acelerado",
      price: "$45.000",
      priceDetail: "por clase",
      features: [
        "Instructor exclusivo para ti",
        "Horarios flexibles",
        "Todo el equipo incluido",
        "2 horas de duración",
        "Personalización de objetivos"
      ],
      icon: <User size={48} className="text-surf-coral" />,
      cta: "Reservar clase",
      popular: false,
      color: "bg-white"
    },
    {
      title: "Clases Grupales",
      description: "La opción más popular para aprender y divertirse",
      price: "$30.000",
      priceDetail: "por clase",
      features: [
        "Grupos reducidos (máx. 6)",
        "Instructor certificado",
        "Todo el equipo incluido",
        "2 horas de duración",
        "Ambiente divertido y social"
      ],
      icon: <Users size={48} className="text-surf-blue" />,
      cta: "Reservar clase",
      popular: true,
      color: "bg-surf-sand-light"
    },
    {
      title: "Mentorías",
      description: "Para surfistas con experiencia que buscan mejorar",
      price: "$60.000",
      priceDetail: "por sesión",
      features: [
        "Análisis de técnica avanzada",
        "Grabación y feedback de video",
        "Sesión personalizada",
        "2.5 horas de duración",
        "Coach profesional"
      ],
      icon: <Lightbulb size={48} className="text-surf-blue-dark" />,
      cta: "Consultar",
      popular: false,
      color: "bg-white"
    }
  ];

  const packPlans = [
    {
      title: "Pack 10 Clases Privadas",
      description: "Ideal para un progreso constante",
      price: "$360.000",
      originalPrice: "$450.000",
      discount: "20% descuento",
      features: [
        "10 clases privadas",
        "Validez por 3 meses",
        "Instructor fijo",
        "Seguimiento de progreso"
      ],
      cta: "Reservar Ahora",
      color: "bg-white",
      borderColor: "border-surf-coral"
    },
    {
      title: "Pack 10 Clases Grupales",
      description: "La mejor relación calidad-precio",
      price: "$240.000",
      originalPrice: "$300.000",
      discount: "20% descuento",
      features: [
        "10 clases grupales",
        "Validez por 3 meses",
        "Reserva prioritaria",
        "Comunidad de surfistas"
      ],
      cta: "Reservar Ahora",
      color: "bg-surf-sand-light",
      borderColor: "border-surf-blue"
    },
    {
      title: "Pack 10 Mentorías",
      description: "Para surfistas comprometidos",
      price: "$480.000",
      originalPrice: "$600.000",
      discount: "20% descuento",
      features: [
        "10 sesiones de mentoría",
        "Validez por 6 meses",
        "Análisis técnico avanzado",
        "Plan de mejora personalizado"
      ],
      cta: "Reservar Ahora",
      color: "bg-white",
      borderColor: "border-surf-blue-dark"
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
    <section id={id} className="py-16 bg-white">
      <Toaster position="top-center" />
      
      <div className="surf-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-surf-blue-dark">Tarifas por Curso</h2>
          <div className="w-20 h-1 bg-surf-coral mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige la modalidad que mejor se adapte a tus necesidades y objetivos
          </p>
        </div>

        {/* Pricing cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={item}
              transition={{ duration: 0.3 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <Card className={`${plan.color} border h-full transition-all ${plan.popular ? 'border-surf-coral shadow-lg' : 'border-gray-200 shadow-md'}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-surf-coral text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                      Recomendado
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-surf-blue-dark">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-surf-blue-dark mb-1">
                      {plan.price}
                    </p>
                    <p className="text-gray-500 text-sm">{plan.priceDetail}</p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-surf-coral mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-surf-coral hover:bg-surf-coral-dark' : 'bg-surf-blue hover:bg-surf-blue-dark'}`}
                    onClick={() => openReservationDialog({
                      title: plan.title,
                      price: plan.price,
                      color: plan.color
                    })}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pack 10 discounted cards */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-surf-blue-dark">Packs con Descuento</h2>
          <div className="w-20 h-1 bg-surf-coral mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas en packs de 10 clases con un 20% de descuento
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {packPlans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={item}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card className={`${plan.color} border h-full transition-all ${plan.borderColor} shadow-md`}>
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-surf-coral text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                    {plan.discount}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-surf-blue-dark">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-surf-blue-dark">
                        {plan.price}
                      </p>
                      <p className="text-gray-500 text-sm line-through">{plan.originalPrice}</p>
                    </div>
                    <p className="text-surf-coral text-sm font-medium">Ahorra hasta 20%</p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-surf-coral mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-surf-blue hover:bg-surf-blue-dark"
                    onClick={() => openReservationDialog({
                      title: plan.title,
                      price: plan.price,
                      color: plan.color
                    })}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Reservation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedClass && (
            <ClassReservationForm classType={selectedClass} onClose={closeDialog} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CoursePricing;
