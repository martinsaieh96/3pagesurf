
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Waves } from 'lucide-react';

const CourseDetails = () => {
  const courses = [
    {
      id: "principiante",
      title: "Nivel Principiante",
      description: "Perfecto para quienes nunca han practicado surf o tienen muy poca experiencia",
      content: (
        <div className="space-y-4">
          <p>Nuestro curso para principiantes está diseñado para que te familiarices con el océano, aprendas las técnicas básicas y consigas ponerte de pie en la tabla en tus primeras sesiones.</p>
          
          <h4 className="font-medium text-lg text-surf-blue-dark mt-4">¿Qué aprenderás?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Seguridad en el agua y conocimiento del océano</li>
            <li>Técnica de remada eficiente</li>
            <li>Pop-up (ponerse de pie en la tabla)</li>
            <li>Postura correcta y balance</li>
            <li>Elegir y coger espuma de olas</li>
          </ul>

          <h4 className="font-medium text-lg text-surf-blue-dark mt-4">Horarios disponibles</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Día</TableHead>
                <TableHead>Horario</TableHead>
                <TableHead>Duración</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Lunes a Viernes</TableCell>
                <TableCell>09:00, 12:00, 15:00</TableCell>
                <TableCell>2 horas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sábados y Domingos</TableCell>
                <TableCell>08:30, 11:00, 14:00, 16:30</TableCell>
                <TableCell>2 horas</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ),
      icon: <Waves size={24} className="text-surf-coral" />
    },
    {
      id: "intermedio",
      title: "Nivel Intermedio",
      description: "Para quienes ya pueden ponerse de pie y buscan mejorar su técnica",
      content: (
        <div className="space-y-4">
          <p>Este curso está diseñado para surfistas que ya dominan los fundamentos y buscan mejorar su técnica para maniobrar en la ola con mayor control y fluidez.</p>
          
          <h4 className="font-medium text-lg text-surf-blue-dark mt-4">¿Qué aprenderás?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Posicionamiento para coger olas verdes (no espuma)</li>
            <li>Generación de velocidad en la ola</li>
            <li>Lectura de olas y elección de la línea correcta</li>
            <li>Maniobras básicas: bottom turn y cut back</li>
            <li>Etiqueta en el agua y reglas de prioridad</li>
          </ul>

          <h4 className="font-medium text-lg text-surf-blue-dark mt-4">Horarios disponibles</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Día</TableHead>
                <TableHead>Horario</TableHead>
                <TableHead>Duración</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Lunes a Viernes</TableCell>
                <TableCell>08:00, 14:00</TableCell>
                <TableCell>2.5 horas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sábados y Domingos</TableCell>
                <TableCell>07:30, 13:30</TableCell>
                <TableCell>2.5 horas</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ),
      icon: <Waves size={24} className="text-surf-blue" />
    },
    {
      id: "avanzado",
      title: "Nivel Avanzado",
      description: "Para surfistas experimentados que buscan perfeccionar su técnica y abordar olas más desafiantes",
      content: (
        <div className="space-y-4">
          <p>Este curso está enfocado en surfistas con experiencia que buscan llevar su surf al siguiente nivel, trabajando maniobras avanzadas y abordando olas más grandes y potentes.</p>
          
          <h4 className="font-medium text-lg text-surf-blue-dark mt-4">¿Qué aprenderás?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maniobras avanzadas: floater, snap, cutback radical</li>
            <li>Entrenamiento para olas grandes</li>
            <li>Take-off en posiciones críticas</li>
            <li>Estrategias para olas tubulares</li>
            <li>Preparación física especializada</li>
          </ul>

          <h4 className="font-medium text-lg text-surf-blue-dark mt-4">Horarios disponibles</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Día</TableHead>
                <TableHead>Horario</TableHead>
                <TableHead>Duración</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Lunes, Miércoles, Viernes</TableCell>
                <TableCell>07:00</TableCell>
                <TableCell>3 horas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sábados</TableCell>
                <TableCell>06:30</TableCell>
                <TableCell>3 horas</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ),
      icon: <Waves size={24} className="text-surf-blue-dark" />
    }
  ];

  return (
    <section id="course-details" className="py-16 bg-surf-sand-light">
      <div className="surf-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-surf-blue-dark">Detalles de Cursos</h2>
          <div className="w-20 h-1 bg-surf-coral mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos cursos para todos los niveles, desde tus primeros pasos sobre la tabla hasta técnicas avanzadas
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            {courses.map((course) => (
              <AccordionItem key={course.id} value={course.id}>
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 data-[state=open]:bg-gray-50 group">
                  <div className="flex items-center">
                    <span className="mr-3">{course.icon}</span>
                    <div className="text-left">
                      <h3 className="font-medium text-lg text-surf-blue-dark group-data-[state=open]:text-surf-blue">{course.title}</h3>
                      <p className="text-sm text-gray-600">{course.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  {course.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetails;
