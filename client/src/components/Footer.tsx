import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-gray-900 text-white pt-10 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-primary font-bold text-base sm:text-xl">ST</span>
              </div>
              <span className="font-bold text-base sm:text-xl">Shubham Tyagi Foundation</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Creating lasting change in the lives of underprivileged children through education and healthcare.
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              © {new Date().getFullYear()} Shubham Tyagi Foundation<br />
              All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><button onClick={() => handleNavClick('home')} className="text-gray-400 hover:text-white transition text-sm sm:text-base">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="text-gray-400 hover:text-white transition text-sm sm:text-base">About Us</button></li>
              <li><button onClick={() => handleNavClick('initiatives')} className="text-gray-400 hover:text-white transition text-sm sm:text-base">Our Initiatives</button></li>
              <li><button onClick={() => handleNavClick('gallery')} className="text-gray-400 hover:text-white transition text-sm sm:text-base">Gallery</button></li>
              <li><button onClick={() => handleNavClick('news')} className="text-gray-400 hover:text-white transition text-sm sm:text-base">News & Updates</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-white transition text-sm sm:text-base">Contact Us</button></li>
            </ul>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Get Involved</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><button onClick={() => handleNavClick('donate')} className="text-gray-400 hover:text-white transition text-sm sm:text-base">Make a Donation</button></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Volunteer With Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Corporate Partnerships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Fundraise For Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Spread Awareness</a></li>
            </ul>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Tax Exemption Details</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Annual Reports</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0">
              Registered as a non-profit organization under Section 8 of the Companies Act, 2013.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
