
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" expand={true} richColors />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <BookingForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
