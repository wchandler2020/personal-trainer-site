import React from 'react';
import ServiceCard from './ServiceCard';
import { Users, Dumbbell, TrendingUp, Target, Heart, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: Users, 
      title: '1-on-1 Personal Training', 
      desc: 'Customized workout plans tailored to your specific goals, fitness level, and schedule. Get undivided attention and expert guidance every session.',
      features: ['Personalized Programs', 'Form Correction', 'Progress Tracking']
    },
    { 
      icon: Dumbbell, 
      title: 'Strength & Conditioning', 
      desc: 'Build lean muscle, increase strength, and improve athletic performance with proven training methodologies and progressive overload principles.',
      features: ['Muscle Building', 'Power Development', 'Injury Prevention']
    },
    { 
      icon: TrendingUp, 
      title: 'Weight Loss Programs', 
      desc: 'Sustainable fat loss through strategic training, nutrition coaching, and lifestyle modifications that create lasting change.',
      features: ['Nutrition Guidance', 'Cardio Optimization', 'Habit Coaching']
    },
    { 
      icon: Target, 
      title: 'Athletic Performance', 
      desc: 'Elevate your game with sport-specific training designed to improve speed, agility, power, and endurance for competitive athletes.',
      features: ['Speed Training', 'Agility Drills', 'Recovery Protocols']
    },
    { 
      icon: Heart, 
      title: 'Senior Fitness', 
      desc: 'Safe, effective training focused on maintaining independence, improving balance, and enhancing quality of life for older adults.',
      features: ['Balance Training', 'Mobility Work', 'Fall Prevention']
    },
    { 
      icon: Calendar, 
      title: 'Online Coaching', 
      desc: 'Train anywhere with custom workout programs, video demonstrations, check-ins, and ongoing support via our dedicated app platform.',
      features: ['Remote Training', 'Video Analysis', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Personalized training solutions designed to help you reach your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;