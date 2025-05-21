
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import PaymentInfo from "./PaymentInfo";

const BookingForm = () => {
  const { toast: uiToast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    paymentProof: null as File | null,
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Mock time slots
  const availableTimeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", 
    "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, paymentProof: e.target.files[0] });
      toast.success("File uploaded successfully!", {
        description: e.target.files[0].name
      });
    }
  };

  const handleTimeSlotSelect = (slot: string) => {
    setTimeSlot(slot);
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formStep === 1) {
      if (!date || !timeSlot || !formData.name || !formData.email) {
        toast.error("Missing Information", {
          description: "Please fill in all required fields to continue."
        });
        return;
      }
      setFormStep(2);
    } else if (formStep === 2) {
      if (!formData.paymentProof) {
        toast.error("Payment Proof Required", {
          description: "Please upload a screenshot of your payment."
        });
        return;
      }
      
      // In a real app, we would handle the form submission here
      toast.success("Booking Successful!", {
        description: "Your session has been booked. Please check your email for confirmation."
      });
      
      // Reset form
      setFormStep(1);
      setDate(undefined);
      setTimeSlot(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        paymentProof: null,
      });
    }
  };

  const handleGoBack = () => {
    setFormStep(1);
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Recovery Session</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Take the first step toward a healthier life. Schedule your confidential session today.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border border-gray-200 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {formStep === 1 ? "Choose Your Session Time" : "Complete Your Booking"}
                </h3>
                <div className="flex items-center gap-1">
                  <div className={`w-3 h-3 rounded-full ${formStep === 1 ? "bg-white" : "bg-white/50"}`}></div>
                  <div className={`w-3 h-3 rounded-full ${formStep === 2 ? "bg-white" : "bg-white/50"}`}></div>
                </div>
              </div>
              
              <div className="p-6">
                {formStep === 1 ? (
                  <motion.form 
                    className="space-y-6" 
                    onSubmit={handleNextStep}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Your Name (Required)</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Smith"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address (Required)</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 XXX XXXXXXX"
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Any specific concerns or questions?"
                          className="mt-1"
                          rows={3}
                        />
                      </div>
                    </div>
                    
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <Label className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        Select a Date
                      </Label>
                      <div className="border rounded-md p-1 bg-white">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => {
                            // Disable dates in the past and weekends for this example
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today || date.getDay() === 0;
                          }}
                          className="mx-auto"
                        />
                      </div>
                    </motion.div>
                    
                    {date && (
                      <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                      >
                        <Label className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          Available Time Slots for {format(date, "MMMM d, yyyy")}
                        </Label>
                        <div className="grid grid-cols-3 gap-3">
                          {availableTimeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={timeSlot === slot ? "default" : "outline"}
                              onClick={() => handleTimeSlotSelect(slot)}
                              className="flex items-center justify-center gap-2 hover:bg-primary/90 hover:text-white transition-colors"
                            >
                              <Clock className="h-4 w-4" />
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Next: Payment Details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    className="space-y-6"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <PaymentInfo />
                    
                    <div className="mt-6">
                      <Label htmlFor="paymentProof">Upload Payment Proof (Required)</Label>
                      <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="text-center">
                          <div className="mb-3">
                            {formData.paymentProof ? (
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                  <Upload className="h-6 w-6" />
                                </div>
                                <p className="text-green-600">
                                  File selected: {formData.paymentProof.name}
                                </p>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                  <Upload className="h-6 w-6" />
                                </div>
                                <p className="text-gray-500">
                                  Click or drag to upload payment screenshot
                                </p>
                              </div>
                            )}
                          </div>
                          <input
                            id="paymentProof"
                            name="paymentProof"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                          <label htmlFor="paymentProof">
                            <Button type="button" variant="outline" className="mr-2">
                              Select File
                            </Button>
                          </label>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Accepted formats: JPG, PNG, PDF. Max size: 5MB
                      </p>
                    </div>
                    
                    <div className="pt-4 flex gap-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handleGoBack} 
                        className="flex-1 flex items-center justify-center gap-2"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={handleNextStep} 
                        className="flex-1 group relative overflow-hidden"
                      >
                        <span className="relative z-10">Complete Booking</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Button>
                    </div>
                    
                    <div className="text-xs text-gray-500 text-center pt-2">
                      Your booking will be confirmed after payment verification.
                      <br />
                      You will receive a confirmation email with session details.
                    </div>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
