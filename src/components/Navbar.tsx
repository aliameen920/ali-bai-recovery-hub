
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="text-primary font-bold text-3xl">
            <span className="font-poppins">Ali Bai</span>
          </div>
        </a>
        
        <div className="hidden md:flex space-x-6 font-medium">
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-primary transition-colors">FAQ</button>
        </div>
        
        <Button onClick={() => scrollToSection('booking')} variant="default" className="hidden md:block">
          Book Now
        </Button>
        
        <Button onClick={() => scrollToSection('booking')} variant="default" className="md:hidden">
          Book
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
