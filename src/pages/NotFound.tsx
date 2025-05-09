
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-surf-sand-light pt-20 pb-20">
        <div className="text-center px-4">
          <div className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-surf-coral">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 15h8M9 9h.01M15 9h.01"></path>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-surf-blue-dark">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">¡Oops! Esta página no existe.</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            La página que estás buscando puede haber sido eliminada o no está disponible temporalmente.
          </p>
          <Button asChild size="lg" className="bg-surf-coral hover:bg-surf-coral-dark">
            <Link to="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
