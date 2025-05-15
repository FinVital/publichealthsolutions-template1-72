
import React, { useState } from 'react';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, Mic } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const VoiceAgents = () => {
  const [isCallRequested, setIsCallRequested] = useState(false);

  const handleInboundCall = () => {
    setIsCallRequested(true);
    toast({
      title: "Call Requested",
      description: "An AI agent will call you shortly. Please keep your phone handy.",
      duration: 5000,
    });
    
    // Reset after 3 seconds for demo purposes
    setTimeout(() => {
      setIsCallRequested(false);
    }, 3000);
  };

  const handleOutboundSchedule = () => {
    toast({
      title: "Call Scheduled",
      description: "Your outreach call has been scheduled. Our AI agent will contact the recipients according to the schedule.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-gradient-to-br from-phs-blue-light to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-phs-blue mb-6">AI Voice Call Agents</h1>
              <p className="text-lg md:text-xl text-gray-700">
                Connect with our AI-powered voice agents to get instant assistance or schedule outreach calls to your community.
              </p>
            </div>

            <Tabs defaultValue="inbound" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="inbound" className="text-lg py-3">
                  <PhoneIncoming className="mr-2 h-5 w-5" />
                  Inbound Calls
                </TabsTrigger>
                <TabsTrigger value="outbound" className="text-lg py-3">
                  <PhoneOutgoing className="mr-2 h-5 w-5" />
                  Outbound Calls
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="inbound" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Request an AI Voice Call</CardTitle>
                    <CardDescription>
                      Have questions about our programs? Request a call from our AI assistant to get immediate help.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg bg-gray-50 p-6 text-center">
                          <PhoneCall className="mx-auto h-12 w-12 text-phs-green mb-4" />
                          <h3 className="text-lg font-medium mb-2">Quick Program Information</h3>
                          <p className="text-gray-600 mb-4">Get details about our health programs, eligibility requirements, and application processes.</p>
                          <Button 
                            onClick={handleInboundCall} 
                            className="bg-phs-green hover:bg-phs-green-dark"
                            disabled={isCallRequested}
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            {isCallRequested ? "Call Requested" : "Request Call Now"}
                          </Button>
                        </div>
                        
                        <div className="rounded-lg bg-gray-50 p-6 text-center">
                          <Mic className="mx-auto h-12 w-12 text-phs-purple mb-4" />
                          <h3 className="text-lg font-medium mb-2">Service Locator Assistance</h3>
                          <p className="text-gray-600 mb-4">Let our AI agent help you find the nearest services based on your location and needs.</p>
                          <Button 
                            onClick={handleInboundCall} 
                            className="bg-phs-purple hover:bg-phs-purple-dark"
                            disabled={isCallRequested}
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            {isCallRequested ? "Call Requested" : "Request Call Now"}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-medium text-blue-800 mb-2">How it works:</h3>
                        <ol className="list-decimal list-inside text-blue-700 space-y-2">
                          <li>Click "Request Call Now" button above</li>
                          <li>Enter your phone number when prompted</li>
                          <li>Our AI assistant will call you within 60 seconds</li>
                          <li>Speak naturally to get the information you need</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="outbound" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Schedule Community Outreach Calls</CardTitle>
                    <CardDescription>
                      Reach your community with important health information, appointment reminders, or program updates.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg bg-gray-50 p-6 text-center">
                          <PhoneOutgoing className="mx-auto h-12 w-12 text-phs-blue mb-4" />
                          <h3 className="text-lg font-medium mb-2">Appointment Reminders</h3>
                          <p className="text-gray-600 mb-4">Schedule automated calls to remind clients about upcoming appointments and services.</p>
                          <Button 
                            onClick={handleOutboundSchedule} 
                            className="bg-phs-blue hover:bg-phs-blue-dark"
                          >
                            <PhoneOutgoing className="mr-2 h-4 w-4" />
                            Schedule Campaign
                          </Button>
                        </div>
                        
                        <div className="rounded-lg bg-gray-50 p-6 text-center">
                          <PhoneCall className="mx-auto h-12 w-12 text-phs-green mb-4" />
                          <h3 className="text-lg font-medium mb-2">Health Education Outreach</h3>
                          <p className="text-gray-600 mb-4">Deliver important health information and educational content to your community.</p>
                          <Button 
                            onClick={handleOutboundSchedule} 
                            className="bg-phs-green hover:bg-phs-green-dark"
                          >
                            <PhoneCall className="mr-2 h-4 w-4" />
                            Schedule Campaign
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="font-medium text-green-800 mb-2">Benefits of AI voice outreach:</h3>
                        <ul className="list-disc list-inside text-green-700 space-y-2">
                          <li>Reach more people with personalized messages</li>
                          <li>Natural, conversational interactions</li>
                          <li>Available in multiple languages</li>
                          <li>Track engagement and follow-up needs</li>
                          <li>Cost-effective compared to traditional call centers</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-500">
                      For custom outreach campaigns or to request a demo, please contact our team at (800) 555-0123
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VoiceAgents;
