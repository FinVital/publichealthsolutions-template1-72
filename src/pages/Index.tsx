
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import MainHeader from '@/components/MainHeader';
import Hero from '@/components/Hero';
import ProgramSection from '@/components/ProgramSection';
import ImpactStories from '@/components/ImpactStories';
import ServiceFinder from '@/components/ServiceFinder';
import DonateSection from '@/components/DonateSection';
import NewsEventsSection from '@/components/NewsEventsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main>
        <Hero />
        <ProgramSection />
        <ImpactStories />
        <ServiceFinder />
        
        {/* Voice Agents Promo Section */}
        <section className="py-12 bg-gradient-to-r from-phs-purple-light to-phs-blue-light">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Voice Call Agents Now Available</h2>
              <p className="text-lg mb-8">
                Connect with our AI-powered voice agents to get instant assistance or schedule outreach calls to your community. Available 24/7 in multiple languages.
              </p>
              <Link to="/voice-agents">
                <Button size="lg" className="bg-phs-purple hover:bg-phs-purple-dark text-white">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Try Voice Agents
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <NewsEventsSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
