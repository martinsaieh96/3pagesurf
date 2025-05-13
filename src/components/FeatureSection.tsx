import React, { useEffect } from 'react';
import { Shield, Award, Heart } from 'lucide-react';

const FeatureSection = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Check on load
    
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section className="py-20 bg-surf-sand-light">
      <div className="surf-container">
        <h2 className="section-title text-center mx-auto">¿Por qué elegirnos?</h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          EscuelaSurf se destaca por la calidad de la enseñanza, la experiencia de nuestros instructores y la ubicación privilegiada junto a las mejores olas de Chile.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-10px] reveal">
            <div className="rounded-full bg-surf-blue-light p-4 inline-block mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-surf-blue-dark">Seguridad garantizada</h3>
            <p className="text-gray-600">
              Priorizamos tu seguridad con equipos modernos, instructores certificados y protocolos estrictos para que disfrutes sin preocupaciones.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-10px] reveal">
            <div className="rounded-full bg-surf-coral p-4 inline-block mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-surf-blue-dark">Instructores certificados</h3>
            <p className="text-gray-600">
              Nuestro equipo está formado por surfistas profesionales con años de experiencia y certificaciones internacionales.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-10px] reveal">
            <div className="rounded-full bg-surf-blue p-4 inline-block mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-surf-blue-dark">Experiencia única</h3>
            <p className="text-gray-600">
              No solo enseñamos surf, creamos recuerdos inolvidables en un entorno natural increíble y una comunidad apasionada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
