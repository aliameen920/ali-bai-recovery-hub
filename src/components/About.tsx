
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Ali Bai</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Certified Recovery Coach with 7+ years of experience helping individuals overcome addiction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
              <div className="text-7xl font-bold text-primary/20 font-poppins">AB</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">My Approach to Recovery</h3>
            
            <p className="text-gray-600 mb-6">
              I understand the challenges of addiction recovery because I've been there. My personalized coaching combines evidence-based strategies with compassionate support to help you break free from porn addiction and build a healthier relationship with yourself.
            </p>
            
            <div className="grid gap-4">
              {[
                "Personalized recovery plans tailored to your specific needs",
                "Practical tools and strategies for managing urges and triggers",
                "Confidential, judgment-free guidance and accountability",
                "Focus on holistic wellbeing beyond just abstinence"
              ].map((item, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm">
                  <CardContent className="p-4 flex">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <p>{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-gray-700 italic">
                "I believe recovery is possible for everyone. My mission is to provide you with the tools, support, and accountability you need to reclaim control of your life."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
