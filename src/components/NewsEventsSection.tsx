
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarClock, Clock } from "lucide-react";

const NewsEventsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "NYC Health Department Partners with PHS on New Maternal Health Initiative",
      excerpt: "New funding will expand home visiting services to 500 more families in the South Bronx and Central Brooklyn.",
      date: "May 10, 2025",
      readTime: "3 min read",
      category: "Press Release",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Annual Benefit Gala Raises Record $2.5 Million for Food Security Programs",
      excerpt: "Over 400 supporters came together to fund critical nutrition services for vulnerable New Yorkers.",
      date: "April 28, 2025",
      readTime: "4 min read",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "New Study Shows Impact of Community Health Worker Programs on Healthcare Access",
      excerpt: "Research conducted by PHS demonstrates 34% increase in preventive care utilization among program participants.",
      date: "April 15, 2025",
      readTime: "5 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Health Fair - Brooklyn",
      date: "May 22, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Prospect Park Bandshell"
    },
    {
      id: 2,
      title: "Maternal Health Workshop",
      date: "June 5, 2025",
      time: "6:30 PM - 8:30 PM",
      location: "Queens Community Center"
    },
    {
      id: 3,
      title: "Volunteer Orientation Session",
      date: "June 12, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "Online (Zoom)"
    }
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-gradient-to-br from-white to-phs-peach/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">News & Events</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay updated with our latest initiatives, research findings, and opportunities to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="text-sm font-medium text-phs-blue mb-1">{item.category}</div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-3 flex-grow">
                <CardDescription className="text-base">{item.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-600">
                  <CalendarClock className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{item.readTime}</span>
                </div>
                <Button variant="ghost" className="p-0 h-auto text-phs-blue hover:text-phs-blue-dark hover:bg-transparent">
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h3 className="text-2xl font-bold">Upcoming Events</h3>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="divide-y divide-gray-100">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-3 md:mb-0">
                  <h4 className="font-medium text-lg">{event.title}</h4>
                  <p className="text-gray-600">{event.location}</p>
                </div>
                <div className="flex items-center text-phs-green">
                  <CalendarClock className="h-5 w-5 mr-2" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <p className="text-sm">{event.time}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-4">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
