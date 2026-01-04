// components/navigation/Navigation.js
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

function Navigation({ scrollY, onCTAClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="text-white font-bold text-xl">WC</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg">William Chandler</div>
              <div className="text-emerald-400 text-xs">Certified Personal Trainer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Contact
            </button>
            <button 
              onClick={onCTAClick}
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => { 
                onCTAClick(); 
                setIsMobileMenuOpen(false); 
              }}
              className="w-full px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;