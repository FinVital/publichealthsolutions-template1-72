
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageOptions = [
  { name: 'English', code: 'en' },
  { name: 'Español', code: 'es' },
  { name: 'العربية', code: 'ar', dir: 'rtl' },
  { name: '中文', code: 'zh' },
];

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languageOptions[0]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language: typeof languageOptions[0]) => {
    setCurrentLanguage(language);
    // In a real implementation, this would change the language of the site
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-phs-green">Public Health Solutions</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <NavLinks />
          </div>

          {/* Language Selector and Donate Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
              languages={languageOptions}
            />
            <Button className="btn-primary">Donate</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <NavLinks isMobile={true} />
              <div className="pt-4 border-t border-gray-200">
                <LanguageSelector 
                  currentLanguage={currentLanguage}
                  onLanguageChange={(lang) => {
                    handleLanguageChange(lang);
                    setIsMenuOpen(false);
                  }}
                  languages={languageOptions}
                  isMobile={true}
                />
                <Button className="btn-primary w-full mt-4">Donate</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Navigation Links Component
const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Get Help', href: '#service-finder' },
    { name: 'About Us', href: '#about' },
    { name: 'News & Events', href: '#news' },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`${
            isMobile 
              ? 'block py-2 hover:text-phs-green focus:text-phs-green' 
              : 'font-medium text-gray-700 hover:text-phs-green focus:text-phs-green'
          }`}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

// Language Selector Component
interface LanguageSelectorProps {
  currentLanguage: { name: string; code: string; dir?: string };
  onLanguageChange: (language: { name: string; code: string; dir?: string }) => void;
  languages: Array<{ name: string; code: string; dir?: string }>;
  isMobile?: boolean;
}

const LanguageSelector = ({ 
  currentLanguage, 
  onLanguageChange, 
  languages,
  isMobile = false 
}: LanguageSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={`flex items-center gap-2 ${isMobile ? 'w-full justify-center' : ''}`}>
          <Globe size={16} />
          {currentLanguage.name}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="cursor-pointer"
            onClick={() => onLanguageChange(language)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MainHeader;
