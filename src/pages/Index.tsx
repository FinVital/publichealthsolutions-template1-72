
import React from 'react';
import MainHeader from '@/components/MainHeader';
import Hero from '@/components/Hero';
import ProgramSection from '@/components/ProgramSection';
import ImpactStories from '@/components/ImpactStories';
import ServiceFinder from '@/components/ServiceFinder';
import DonateSection from '@/components/DonateSection';
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
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
