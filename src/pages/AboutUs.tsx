
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import Timeline from '@/components/Timeline';
import MissionSection from '@/components/MissionSection';
import TeamSection from '@/components/TeamSection';
import AboutCTA from '@/components/AboutCTA';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import WhatsAppButton from '@/components/WhatsAppButton';

const AboutUs = () => {
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
          <AboutHero />
          <Timeline />
          <MissionSection />
          <TeamSection />
          <AboutCTA />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default AboutUs;
