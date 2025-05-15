
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DonateSection = () => {
  const donationLevels = [
    {
      amount: 25,
      impact: "Provides nutritious food for a family of four for one day"
    },
    {
      amount: 50,
      impact: "Supplies prenatal vitamins for an expectant mother for one month"
    },
    {
      amount: 100,
      impact: "Helps provide health insurance enrollment assistance for a family"
    },
    {
      amount: 250,
      impact: "Supports a community health worker's training"
    },
    {
      amount: 500,
      impact: "Funds a mobile health clinic visit to an underserved community"
    },
    {
      amount: 1000,
      impact: "Enables comprehensive maternal support for a high-risk pregnancy"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your donation helps us provide essential health services, nutrition programs, and support to vulnerable New Yorkers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-phs-purple-light rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-phs-purple rounded-full opacity-20 -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-phs-purple rounded-full opacity-20 -ml-8 -mb-8"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">Make a Difference Today</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {donationLevels.map((level, index) => (
                <Card key={index} className="bg-white/90 hover:bg-white transition-colors cursor-pointer relative z-10">
                  <CardContent className="p-4 text-center">
                    <p className="text-xl font-bold text-phs-purple mb-1">${level.amount}</p>
                    <p className="text-sm text-gray-700">{level.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-4 relative z-10">
              <Button className="w-full bg-phs-green hover:bg-phs-green-dark text-white py-6">Donate Now</Button>
              <Button variant="outline" className="w-full border-phs-purple text-phs-purple hover:bg-phs-purple hover:text-white">
                Become a Monthly Donor
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Other Ways to Support Us</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Corporate Partnerships</h4>
                <p className="text-gray-700 mb-3">
                  Partner with us to make a meaningful impact in NYC communities while meeting your social responsibility goals.
                </p>
                <Button variant="outline" className="text-phs-blue hover:bg-phs-blue hover:text-white">
                  Learn About Partnerships
                </Button>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Planned Giving</h4>
                <p className="text-gray-700 mb-3">
                  Create a lasting legacy by including Public Health Solutions in your estate planning.
                </p>
                <Button variant="outline" className="text-phs-blue hover:bg-phs-blue hover:text-white">
                  Legacy Giving Options
                </Button>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Volunteer Opportunities</h4>
                <p className="text-gray-700 mb-3">
                  Share your time and skills to help us serve New York's most vulnerable communities.
                </p>
                <Button variant="outline" className="text-phs-blue hover:bg-phs-blue hover:text-white">
                  View Volunteer Positions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
