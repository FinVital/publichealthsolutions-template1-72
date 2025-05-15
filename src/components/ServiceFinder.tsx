
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, MapPin, Phone, CalendarClock } from "lucide-react";

const ServiceFinder = () => {
  const [zip, setZip] = useState('');
  const [category, setCategory] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would search a database
    setHasSearched(true);
  };

  const sampleResults = [
    {
      id: 1,
      name: "Queens WIC Center",
      category: "Food & Nutrition",
      address: "165-15 Archer Avenue, Jamaica, NY 11433",
      phone: "(718) 657-2800",
      hours: "Mon-Fri 8:30am-5:00pm",
      distance: "1.2 miles"
    },
    {
      id: 2,
      name: "Brooklyn Health Insurance Enrollment Center",
      category: "Healthcare Access",
      address: "400 Atlantic Ave, Brooklyn, NY 11217",
      phone: "(718) 522-3700",
      hours: "Mon-Fri 9:00am-5:30pm",
      distance: "2.4 miles"
    },
    {
      id: 3,
      name: "Bronx Maternal Health Program",
      category: "Maternal & Child Health",
      address: "2527 Third Avenue, Bronx, NY 10451",
      phone: "(718) 585-5890",
      hours: "Mon-Fri 9:00am-5:00pm",
      distance: "3.8 miles"
    }
  ];

  return (
    <section id="service-finder" className="py-16 md:py-24 bg-gradient-to-br from-phs-green-light to-phs-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Find Services Near You</h2>
              <p className="text-lg text-gray-600">
                Answer a few questions to find programs and services that match your needs.
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input 
                      id="zip" 
                      placeholder="Enter your ZIP code" 
                      className="pl-10"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Service Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="food">Food & Nutrition</SelectItem>
                        <SelectItem value="maternal">Maternal & Child Health</SelectItem>
                        <SelectItem value="access">Healthcare Access</SelectItem>
                        <SelectItem value="hiv">HIV & Sexual Health</SelectItem>
                        <SelectItem value="all">All Services</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center">
                <Button type="submit" className="btn-primary w-full md:w-auto md:px-12 py-6">
                  <Search className="mr-2" size={18} />
                  Find Services
                </Button>
              </div>
            </form>
          </div>

          {hasSearched && (
            <div className="bg-gray-50 p-8 sm:p-12 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-6">
                Services Near {zip}
              </h3>
              
              <div className="space-y-4">
                {sampleResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow duration-200">
                    <CardHeader className="pb-3">
                      <CardTitle>{result.name}</CardTitle>
                      <CardDescription>{result.category} • {result.distance}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="mr-2 h-4 w-4 text-gray-500 mt-0.5" />
                          <span>{result.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="mr-2 h-4 w-4 text-gray-500" />
                          <span>{result.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <CalendarClock className="mr-2 h-4 w-4 text-gray-500" />
                          <span>{result.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="text-phs-blue hover:bg-phs-blue hover:text-white w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="mb-4 text-gray-600">
                  Need assistance finding the right program?
                </p>
                <Button variant="outline" className="text-phs-green hover:bg-phs-green hover:text-white">
                  <Phone className="mr-2" size={16} />
                  Call our Helpline: (800) 555-0123
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceFinder;
