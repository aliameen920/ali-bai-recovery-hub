
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center relative">
      <div className="absolute top-0 left-0 right-0 h-full">
        <div className="container-custom h-full flex flex-col justify-center pt-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Begin Your Journey to <span className="text-primary">Freedom</span> from Addiction
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Professional, confidential coaching to help you overcome porn addiction and reclaim your life. Personalized guidance for lasting recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToBooking} className="btn-primary text-lg">
                Book Your First Session
              </Button>
              <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-semibold">J</div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 font-semibold">M</div>
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 font-semibold">S</div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">100+ clients</span> successfully recovered
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 absolute inset-0 z-0"></div>
    </section>
  );
};

export default Hero;
