
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-phs-blue-light to-phs-green-light">
      <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Healthier Families.<br />
              <span className="text-phs-green">Stronger Communities.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Public Health Solutions is New York City's largest public health nonprofit, 
              improving health outcomes and helping families thrive for over 60 years.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="btn-primary text-base py-6 px-8">
                Find Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-phs-blue bg-white hover:bg-phs-blue hover:text-white border-phs-blue text-base py-6 px-8">
                Support Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Diverse community members gathered at a health outreach event"
              className="w-full h-auto object-cover aspect-[4/3] rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Community health workers providing assistance at our Brooklyn center</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-phs-green mb-2">60+</div>
            <div className="text-gray-700">Years of Service</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-phs-green mb-2">300k+</div>
            <div className="text-gray-700">New Yorkers Served Annually</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-phs-green mb-2">200+</div>
            <div className="text-gray-700">Community Partners</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-phs-green mb-2">$120M</div>
            <div className="text-gray-700">Annual Community Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
