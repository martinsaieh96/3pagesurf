
import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surf-blue-dark text-white pt-16 pb-8">
      <div className="surf-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo y descripción */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              Escuela de Surf <span className="text-surf-coral">Pichilemu</span>
            </h3>
            <p className="mb-6 text-gray-300">
              Ofrecemos la mejor experiencia de surf en Pichilemu, Chile. Aprende a surfear con instructores profesionales en las mejores olas del Pacífico.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-surf-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-surf-coral transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contáctanos</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-surf-coral" />
                <span>Playa Principal, Pichilemu, Chile</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-surf-coral" />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-surf-coral" />
                <span>info@escueladesurfpichilemu.cl</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Escuela de Surf Pichilemu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
