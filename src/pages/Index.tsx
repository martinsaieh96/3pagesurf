
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import ClassesSection from '@/components/ClassesSection';
import RentalsSection from '@/components/RentalsSection';
import InstructorsSection from '@/components/InstructorsSection';
import GallerySection from '@/components/GallerySection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  // Script para animaciones al hacer scroll
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <AnimatePresence>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <WhatsAppButton />
        <main className="flex-grow">
          <HeroSection />
          <AboutUsSection />
          <ClassesSection />
          <RentalsSection />
          <InstructorsSection />
          <GallerySection />
          <TestimonialSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
