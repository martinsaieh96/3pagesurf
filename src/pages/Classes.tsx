
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassesHero from "@/components/ClassesHero";
import CourseDetails from "@/components/CourseDetails";
import CoursePricing from "@/components/CoursePricing";
import ClassesTestimonials from "@/components/ClassesTestimonials";
import ClassesCallToAction from "@/components/ClassesCallToAction";
import ClassesFAQ from "@/components/ClassesFAQ";
import WhatsAppButton from '@/components/WhatsAppButton';
import { initScrollAnimations } from '@/lib/utils';

const Classes = () => {
  // Script para animaciones al hacer scroll
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);
  
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <ClassesHero />
        <CourseDetails />
        <CoursePricing id="course-pricing" />
        <ClassesFAQ />
        <ClassesTestimonials />
        <ClassesCallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Classes;
