
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-primary font-bold text-2xl mb-4">
              <span className="font-poppins">Ali Bai</span>
            </div>
            <p className="text-gray-600 mb-4">
              Professional recovery coaching to help you overcome addiction and reclaim your life.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary text-left transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-primary text-left transition-colors">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-primary text-left transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-primary text-left transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-600 hover:text-primary text-left transition-colors">Book a Session</button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-600">
              <p>Email: contact@alibai.coach</p>
              <p>Hours: Mon-Fri, 9:00 AM - 6:00 PM PKT</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Ali Bai. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="text-gray-600 text-sm hover:text-primary cursor-pointer">Privacy Policy</p>
            <p className="text-gray-600 text-sm hover:text-primary cursor-pointer">Terms of Service</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            This site is protected by SSL encryption. All information shared is kept confidential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
