
import React from 'react';
import { motion } from "framer-motion";
import { Building, Globe } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const PaymentInfo = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
      
      <Tabs defaultValue="local" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="local" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>Local (Pakistan)</span>
          </TabsTrigger>
          <TabsTrigger value="international" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>International</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="local">
          <Card>
            <CardContent className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="mb-3">
                <p className="font-medium">Please send payment to:</p>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                  <span className="text-gray-600">Account:</span>
                  <span className="font-medium">03437242300</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                  <span className="text-gray-600">Account Title:</span>
                  <span className="font-medium">Ali Amin</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                  <span className="text-gray-600">Platform:</span>
                  <span className="font-medium">Easypaisa</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                After sending payment, please upload a screenshot or photo of your payment receipt below.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="international">
          <Card>
            <CardContent className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="mb-3">
                <p className="font-medium">International Wire Transfer Details:</p>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                  <span className="text-gray-600">Bank:</span>
                  <span className="font-medium">Allied Bank</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                  <span className="text-gray-600">Account Name:</span>
                  <span className="font-medium">Ali Amin</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                  <span className="text-gray-600">IBAN:</span>
                  <span className="font-medium text-sm">PK56ABPA0010111635410010</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 p-3 bg-white rounded-md border border-blue-200">
                <p className="font-medium mb-1">Instructions:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Please ensure all transfer fees are covered by the sender</li>
                  <li>Use your full name as reference</li>
                  <li>After completing the transfer, upload proof of payment below</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default PaymentInfo;
