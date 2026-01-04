// components/contact/Contact.js
import React from 'react';
import ContactCard from './ContactCard';
import { MapPin, Mail, Clock, Send } from 'lucide-react';

const Contact = ({ onCTAClick }) => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Reach out today for a free consultation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ContactCard icon={MapPin} title="Location">
            <p>Streeterville</p>
            <p>Chicago, IL</p>
          </ContactCard>
          
          <ContactCard icon={Mail} title="Email">
            <a 
              href="mailto:william.d.chandler1@gmail.com" 
              className="text-emerald-400 hover:text-emerald-300 transition-colors break-all"
            >
              william.d.chandler1@gmail.com
            </a>
          </ContactCard>
          
          <ContactCard icon={Clock} title="Hours">
            <p>Mon - Fri: 6AM - 8PM</p>
            <p>Sat - Sun: 8AM - 6PM</p>
          </ContactCard>
        </div>

        <div className="text-center">
          <button 
            onClick={onCTAClick}
            className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Send className="w-6 h-6" />
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;