
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Surfista en una ola grande"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Clase grupal de surf"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Playa de Pichilemu"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1520443240718-fce21901db79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Instructor enseñando a un principiante"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Atardecer en la playa con surfistas"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Surfista tomando una ola"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1515541324332-7dd0c37426e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Grupo de surfistas en la playa"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tabla de surf al atardecer"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  // Function to get image by index in lightbox mode
  const getImageById = (id: number) => galleryImages.find(img => img.id === id);

  // Next and previous image handlers
  const handleNextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const handlePrevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex].id);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Image loading handler for lazy loading
  const handleImageLoaded = (id: number) => {
    setLoadedImages(prev => [...prev, id]);
  };

  return (
    <section className="py-24 bg-surf-blue-dark" id="galeria">
      <div className="surf-container">
        <h2 className="section-title text-white text-center mx-auto">
          Galería de experiencias
        </h2>
        <div className="w-20 h-1 bg-surf-coral mb-6 mx-auto"></div>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Mira cómo nuestros estudiantes disfrutan aprendiendo a surfear en las hermosas playas de Pichilemu.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id} 
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? 'col-span-2 row-span-2' : 
                index % 5 === 0 ? 'col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: loadedImages.includes(image.id) ? 1 : 0,
                y: loadedImages.includes(image.id) ? 0 : 20
              }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative w-full h-0 pb-[100%]">
                <motion.div className="absolute inset-0 cursor-pointer bg-gray-900/20">
                  <motion.img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoaded(image.id)}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-white font-medium">{image.alt}</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 text-white text-2xl p-2 rounded-full bg-black/30 hover:bg-black/50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div 
              className="flex items-center justify-center w-full max-w-6xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <img 
                src={getImageById(selectedImage)?.url} 
                alt={getImageById(selectedImage)?.alt || ''}
                className="max-h-full max-w-full object-contain"
              />
              
              {/* Navigation arrows */}
              <motion.button
                className="absolute left-4 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                className="absolute right-4 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
            
            <p className="absolute bottom-8 left-0 right-0 text-white text-center">
              {getImageById(selectedImage)?.alt || ''}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
