// App.js
import React, { useState, useEffect } from 'react';
import Navigation from '../navigation/Navigation';
import Hero from '../heroSection/Hero';
import Services from '../services/Services'
import About from '../about/About'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer';
import ContactModal from '../contact/ContactModal';

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:william.d.chandler1@gmail.com?subject=Training Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AContact: ${formData.email} | ${formData.phone}`;
    setIsContactOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation 
        scrollY={scrollY} 
        onCTAClick={() => setIsContactOpen(true)} 
      />
      
      <Hero onCTAClick={() => setIsContactOpen(true)} />
      
      <Services />
      
      <About onCTAClick={() => setIsContactOpen(true)} />
      
      <Contact onCTAClick={() => setIsContactOpen(true)} />
      
      <Footer />

      {isContactOpen && (
        <ContactModal
          formData={formData}
          setFormData={setFormData}
          onClose={() => setIsContactOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Home;