
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const BookingForm = () => {
  const { toast } = useToast();
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
    }
  };

  const handleTimeSlotSelect = (slot: string) => {
    setTimeSlot(slot);
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formStep === 1) {
      if (!date || !timeSlot || !formData.name || !formData.email) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields to continue.",
          variant: "destructive"
        });
        return;
      }
      setFormStep(2);
    } else if (formStep === 2) {
      if (!formData.paymentProof) {
        toast({
          title: "Payment Proof Required",
          description: "Please upload a screenshot of your payment.",
          variant: "destructive"
        });
        return;
      }
      
      // In a real app, we would handle the form submission here
      toast({
        title: "Booking Successful!",
        description: "Your session has been booked. Please check your email for confirmation.",
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
    <section id="booking" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Recovery Session</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Take the first step toward a healthier life. Schedule your confidential session today.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              {formStep === 1 ? (
                <form className="space-y-6" onSubmit={handleNextStep}>
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
                  
                  <div className="space-y-4">
                    <Label>Select a Date</Label>
                    <div className="border rounded-md p-1">
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
                  </div>
                  
                  {date && (
                    <div className="space-y-3">
                      <Label>Available Time Slots for {format(date, "MMMM d, yyyy")}</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {availableTimeSlots.map((slot) => (
                          <Button
                            key={slot}
                            type="button"
                            variant={timeSlot === slot ? "default" : "outline"}
                            onClick={() => handleTimeSlotSelect(slot)}
                            className="flex items-center justify-center gap-2"
                          >
                            <Clock className="h-4 w-4" />
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full">
                      Next: Payment Details
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <div className="mb-3">
                        <p className="font-medium">Please send payment to:</p>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Account:</span>
                          <span className="font-medium">03437242300</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Account Title:</span>
                          <span className="font-medium">Ali Amin</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Platform:</span>
                          <span className="font-medium">Easypaisa</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        After sending payment, please upload a screenshot or photo of your payment receipt.
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="paymentProof">Upload Payment Proof (Required)</Label>
                    <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <div className="text-center">
                        <div className="mb-2">
                          {formData.paymentProof ? (
                            <p className="text-green-600">
                              File selected: {formData.paymentProof.name}
                            </p>
                          ) : (
                            <p className="text-gray-500">
                              Click or drag to upload payment screenshot
                            </p>
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
                    <Button type="button" variant="outline" onClick={handleGoBack} className="flex-1">
                      Go Back
                    </Button>
                    <Button type="button" onClick={handleNextStep} className="flex-1">
                      Complete Booking
                    </Button>
                  </div>
                  
                  <div className="text-xs text-gray-500 text-center pt-2">
                    Your booking will be confirmed after payment verification.
                    <br />
                    You will receive a confirmation email with session details.
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
