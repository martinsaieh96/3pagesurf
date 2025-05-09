
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para manejar las animaciones al hacer scroll
export function initScrollAnimations() {
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
  revealOnScroll(); // Verificar elementos visibles al cargar la página
  
  return () => window.removeEventListener("scroll", revealOnScroll);
}
