
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

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
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        <motion.a 
          href="#" 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="text-primary font-bold text-3xl">
            <span className="font-poppins">Ali Bai</span>
          </div>
        </motion.a>
        
        <div className="hidden md:flex space-x-6 font-medium">
          {["about", "services", "testimonials", "faq"].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-700 hover:text-primary transition-colors relative"
              whileHover={{ y: -2 }}
            >
              <span className="capitalize">{section}</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button 
            onClick={() => scrollToSection('booking')} 
            variant="default" 
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            <Calendar className="h-4 w-4" />
            Book Now
          </Button>
          
          <Button 
            onClick={() => scrollToSection('booking')} 
            variant="default" 
            className="md:hidden flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            <Calendar className="h-4 w-4" />
            Book
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
