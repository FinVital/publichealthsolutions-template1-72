
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from 'lucide-react';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      quote: "The WIC program didn't just give me food vouchers. They taught me about nutrition during pregnancy and helped me prepare for breastfeeding. My son is now healthy and thriving.",
      name: "Maria L.",
      program: "WIC Participant",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      quote: "After losing my job, I couldn't afford health insurance. The staff helped me enroll in Medicaid and find doctors for my entire family. I don't know what we would have done without their help.",
      name: "James T.",
      program: "Healthcare Access Program",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      quote: "As a first-time mom, I was overwhelmed. My home visitor has been my lifeline—answering questions, connecting me to resources, and checking on my baby's development.",
      name: "Aisha K.",
      program: "Maternal Home Visiting",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="impact" className="py-16 md:py-24 bg-phs-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact Stories</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real stories from New Yorkers whose lives have been transformed through our programs and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden bg-white relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-5 -left-5 bg-phs-purple rounded-full p-3 text-white shadow-lg">
                <Quote size={24} />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={`Portrait of ${story.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-8">
                <blockquote className="italic text-gray-700 mb-6">
                  "{story.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold">{story.name}</p>
                  <p className="text-sm text-gray-600">{story.program}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">
            Read More Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
