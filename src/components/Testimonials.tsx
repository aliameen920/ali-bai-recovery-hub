
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Working with Ali helped me break a 12-year addiction. His approach is practical, compassionate, and effective. I finally feel in control of my life again.",
      name: "Ahmed K.",
      title: "6 months into recovery",
      initials: "AK"
    },
    {
      text: "I tried everything before finding Ali's program. His personalized approach and constant support made all the difference. I'm now 9 months free from my addiction.",
      name: "Saeed M.",
      title: "9 months into recovery",
      initials: "SM"
    },
    {
      text: "Ali's guidance helped me understand the root causes of my addiction. The strategies he taught me have transformed my relationship with myself and others.",
      name: "Faisal R.",
      title: "1 year into recovery",
      initials: "FR"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recovery Success Stories</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Real stories from individuals who have reclaimed their lives through dedicated recovery work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 hover:border-primary/20 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="mb-6 text-gray-700">
                  <svg width="45" height="36" className="text-primary/20" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 18H9C9 12.477 13.477 8 19 8V12C15.686 12 13 14.686 13 18H13.5C15.985 18 18 20.015 18 22.5V31.5C18 33.985 15.985 36 13.5 36H4.5C2.015 36 0 33.985 0 31.5V22.5C0 20.015 2.015 18 4.5 18H13.5ZM40.5 18H36C36 12.477 40.477 8 46 8V12C42.686 12 40 14.686 40 18H40.5C42.985 18 45 20.015 45 22.5V31.5C45 33.985 42.985 36 40.5 36H31.5C29.015 36 27 33.985 27 31.5V22.5C27 20.015 29.015 18 31.5 18H40.5Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <p className="text-gray-600 mb-8">{testimonial.text}</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium mr-3">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
