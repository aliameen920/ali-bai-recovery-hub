
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do online recovery coaching sessions work?",
      answer: "Sessions are conducted through secure video conferencing. We'll meet once a week initially, then adjust frequency based on your progress and needs. Each session includes check-in, strategy development, and action planning."
    },
    {
      question: "How long does recovery typically take?",
      answer: "Recovery timelines vary significantly based on addiction severity, underlying issues, and personal commitment. Most clients see meaningful progress in 2-3 months of consistent work, though full recovery is an ongoing journey."
    },
    {
      question: "Is our communication confidential?",
      answer: "Absolutely. Your privacy is my top priority. All our sessions, messages, and your personal information are kept strictly confidential. I use secure, encrypted platforms for our communications."
    },
    {
      question: "What approach do you use for addiction recovery?",
      answer: "My approach combines cognitive-behavioral techniques, mindfulness practices, accountability structures, and personalized trigger management strategies. I focus on addressing both the addiction behaviors and their underlying causes."
    },
    {
      question: "Do I need to prepare anything before our first session?",
      answer: "Just come with an open mind and willingness to change. Before our first session, you'll receive a brief questionnaire to help me understand your situation better, but detailed discussion happens in our session."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Answers to common questions about the recovery coaching process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
