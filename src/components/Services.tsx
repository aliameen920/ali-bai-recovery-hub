
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Initial Consultation",
      description: "A 45-minute session to understand your unique situation and goals, creating the foundation for your personalized recovery plan.",
      price: "3,000 PKR",
      features: ["Assessment of addiction patterns", "Discussion of goals and challenges", "Initial strategy development"]
    },
    {
      title: "One-on-One Coaching",
      description: "Regular 60-minute sessions providing personalized guidance, accountability, and practical recovery strategies.",
      price: "5,000 PKR",
      features: ["Personalized recovery strategies", "Trigger management techniques", "Progress tracking and adjustments"]
    },
    {
      title: "Recovery Maintenance",
      description: "Ongoing support sessions to reinforce progress and prevent relapse after achieving initial recovery goals.",
      price: "4,500 PKR",
      features: ["Relapse prevention strategies", "Life balance coaching", "Long-term success planning"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recovery Services</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Professional coaching services tailored to meet you where you are in your recovery journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary shrink-0">•</div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToBooking} className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
