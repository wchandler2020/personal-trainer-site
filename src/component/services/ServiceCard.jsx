import React from 'react';
import { Check } from 'lucide-react';

function ServiceCard({ icon: Icon, title, desc, features }) {
  const gradients = [
    'from-emerald-500 to-teal-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-emerald-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-blue-500 to-indigo-500'
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105">
      <div className={`w-16 h-16 bg-gradient-to-br ${randomGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 mb-4">{desc}</p>
      
      {features && (
        <ul className="space-y-2 text-sm text-slate-400">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" /> 
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceCard;