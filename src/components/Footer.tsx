
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-phs-green-dark text-white">
      <div className="container mx-auto pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container-padding">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Public Health Solutions</h3>
            <p className="mb-4">Improving health outcomes for vulnerable families and communities.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-phs-yellow" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-phs-yellow" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-phs-yellow" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-phs-yellow" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-phs-yellow">Programs</a></li>
              <li><a href="#" className="text-white hover:text-phs-yellow">Impact</a></li>
              <li><a href="#" className="text-white hover:text-phs-yellow">About Us</a></li>
              <li><a href="#" className="text-white hover:text-phs-yellow">Careers</a></li>
              <li><a href="#" className="text-white hover:text-phs-yellow">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>40 Worth Street, 5th Floor</p>
              <p>New York, NY 10013</p>
              <p className="mt-2">Phone: (646) 619-6400</p>
              <p>Email: <a href="mailto:info@healthsolutions.org" className="hover:text-phs-yellow">info@healthsolutions.org</a></p>
            </address>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and news.</p>
            <div className="flex flex-col space-y-3">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="rounded-r-none border-white bg-white/10 text-white placeholder:text-white/70"
                />
                <Button className="rounded-l-none bg-white text-phs-green-dark hover:bg-phs-yellow hover:text-phs-green-dark">
                  <ArrowRight size={18} />
                </Button>
              </div>
              <p className="text-xs">By subscribing, you agree to our privacy policy.</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-4 border-t border-white/20 text-sm container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Public Health Solutions. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-phs-yellow">Privacy Policy</a>
              <a href="#" className="text-white hover:text-phs-yellow">Terms of Service</a>
              <a href="#" className="text-white hover:text-phs-yellow">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
