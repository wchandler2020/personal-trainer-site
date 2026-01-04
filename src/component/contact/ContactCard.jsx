// components/contact/ContactCard.js
import React from 'react';

const ContactCard = ({ icon: Icon, title, children }) => {
  const gradients = [
    { bg: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-500/50' },
    { bg: 'from-teal-500 to-cyan-500', shadow: 'shadow-teal-500/50' },
    { bg: 'from-cyan-500 to-emerald-500', shadow: 'shadow-cyan-500/50' }
  ];
  
  const randomStyle = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700 hover:border-emerald-500/50 transition-all group">
      <div className={`w-16 h-16 bg-gradient-to-br ${randomStyle.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:${randomStyle.shadow} transition-all`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <div className="text-slate-400">{children}</div>
    </div>
  );
}

export default ContactCard;