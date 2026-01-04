// components/footer/Footer.js
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">WC</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">William Chandler</div>
                <div className="text-emerald-400 text-sm">Personal Trainer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming lives through personalized fitness training in Chicago's Streeterville neighborhood.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center transition-all group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} William Chandler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;