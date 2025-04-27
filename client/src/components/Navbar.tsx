import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('nav') && !target.closest('button')) {
          setIsMenuOpen(false);
        }
      };
      
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-sm' : ''} transition-shadow`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-white font-bold text-lg sm:text-xl">ST</span>
              </div>
              <span className="font-montserrat font-bold text-base sm:text-xl text-gray-800 truncate max-w-[180px] sm:max-w-none">Shubham Tyagi Foundation</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-primary font-medium text-sm lg:text-base">Home</button>
            <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-primary font-medium text-sm lg:text-base">About Us</button>
            <button onClick={() => handleNavClick('initiatives')} className="text-gray-700 hover:text-primary font-medium text-sm lg:text-base">Initiatives</button>
            <button onClick={() => handleNavClick('gallery')} className="text-gray-700 hover:text-primary font-medium text-sm lg:text-base">Gallery</button>
            <button onClick={() => handleNavClick('news')} className="text-gray-700 hover:text-primary font-medium text-sm lg:text-base">News</button>
            <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-primary font-medium text-sm lg:text-base">Contact</button>
            <Button onClick={() => handleNavClick('donate')} className="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm lg:text-base py-1 px-3 lg:px-4">Donate Now</Button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3">
              <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">Home</button>
              <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">About Us</button>
              <button onClick={() => handleNavClick('initiatives')} className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">Initiatives</button>
              <button onClick={() => handleNavClick('gallery')} className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">Gallery</button>
              <button onClick={() => handleNavClick('news')} className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">News</button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">Contact</button>
              <Button onClick={() => handleNavClick('donate')} className="bg-[#F97316] hover:bg-[#EA580C] text-white w-full mt-2">Donate Now</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
