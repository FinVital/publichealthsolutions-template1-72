
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';

const programCategories = [
  { id: "food", name: "Food & Nutrition" },
  { id: "maternal", name: "Maternal & Child Health" },
  { id: "access", name: "Healthcare Access" },
  { id: "hiv", name: "HIV & Sexual Health" },
];

const programs = [
  {
    id: 1,
    title: "WIC Nutrition Program",
    description: "Supporting women, infants, and children with nutrition education and healthy food.",
    category: "food",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "SNAP Food Benefits",
    description: "Helping families access nutritious food through Supplemental Nutrition Assistance Program.",
    category: "food",
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Maternal Home Visiting",
    description: "Supporting new parents with home visits from nurses and community health workers.",
    category: "maternal",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Early Intervention",
    description: "Services for children with developmental delays and disabilities from birth to age three.",
    category: "maternal",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Health Insurance Enrollment",
    description: "Free assistance with Medicaid, Child Health Plus, and NY State of Health Marketplace plans.",
    category: "access",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Community Health Navigation",
    description: "Helping community members access and navigate healthcare services and resources.",
    category: "access",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "HIV Testing & Prevention",
    description: "Free, confidential HIV testing, counseling, and PrEP navigation services.",
    category: "hiv",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Sexual Health Services",
    description: "Comprehensive sexual health education, testing, and referrals for treatment.",
    category: "hiv",
    image: "https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const ProgramSection = () => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We connect New Yorkers to health services, food and nutrition, and economic support through community-based programs that create impact.
          </p>
        </div>

        <Tabs defaultValue="food" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 p-1">
              {programCategories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-phs-green px-6 py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {programCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {programs
                  .filter((program) => program.category === category.id)
                  .map((program) => (
                    <Card key={program.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{program.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{program.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="text-phs-blue hover:bg-phs-blue hover:text-white">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button className="btn-primary">
                  View All {category.name} Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramSection;
