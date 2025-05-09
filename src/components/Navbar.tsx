
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Clases', path: '/clases' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="surf-container flex justify-between items-center">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <Link to="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-bold",
              isScrolled ? "text-surf-blue-dark" : "text-white"
            )}>
              Escuela de Surf <span className="text-surf-coral">Pichilemu</span>
            </span>
          </Link>
          <div className="flex items-center space-x-3 ml-1">
            <SocialIcons isScrolled={isScrolled} />
          </div>
        </div>

        {/* Navegación para escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'nav-link font-medium transition-colors relative',
                isScrolled ? 'text-surf-blue-dark' : 'text-white',
                location.pathname === link.path ? 'after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-surf-coral after:bottom-[-4px] after:left-0' : ''
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-surf-coral hover:bg-surf-coral-dark text-white">
            Reservar
          </Button>
        </nav>

        {/* Botón del menú móvil */}
        <button 
          className="md:hidden text-surf-blue-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-3 text-surf-blue-dark hover:bg-surf-sand",
                  location.pathname === link.path ? 'border-l-4 border-surf-coral pl-3' : ''
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-3 pb-4">
              <Button className="w-full bg-surf-coral hover:bg-surf-coral-dark text-white">
                Reservar
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
