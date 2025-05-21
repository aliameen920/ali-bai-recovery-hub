
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center relative pt-20">
      <div className="container-custom h-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Begin Your Journey to <span className="text-primary">Freedom</span> from Addiction
          </h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8"
            variants={slideIn}
            initial="hidden"
            animate="visible"
          >
            Professional, confidential coaching to help you overcome porn addiction and reclaim your life. Personalized guidance for lasting recovery.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button onClick={scrollToBooking} className="btn-primary text-lg group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Book Your First Session
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="text-lg hover:bg-primary/10 transition-colors">
              Learn More
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-semibold shadow-sm">J</div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 font-semibold shadow-sm">M</div>
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 font-semibold shadow-sm">S</div>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">100+ clients</span> successfully recovered
              </p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <CheckCircle className="h-3 w-3" />
                <span>Verified results</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-6 border border-purple-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Book Your Session Now</h3>
            <p className="text-gray-600">Take the first step towards recovery today</p>
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">1</div>
              <p>Select a date and time that works for you</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">2</div>
              <p>Complete the booking form with your details</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">3</div>
              <p>Make your payment to confirm your session</p>
            </div>
          </div>
          <Button onClick={scrollToBooking} className="w-full py-6 text-lg font-semibold group relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Schedule Your Recovery Session
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </motion.div>
      </div>
      <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 absolute inset-0 z-0"></div>
    </section>
  );
};

export default Hero;
