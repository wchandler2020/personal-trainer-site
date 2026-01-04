import React from 'react';
import { Check } from 'lucide-react';

const WhyTrainList = () => {
  const items = [
    'Certified & Experienced Professional',
    'Customized Training Plans',
    'Flexible Scheduling Options',
    'All Fitness Levels Welcome',
    'Results-Driven Approach',
    'Nutrition Guidance Included',
    'Ongoing Support & Accountability',
    'Safe & Effective Methods'
  ];

  return (
    <div className="bg-slate-800/30 rounded-3xl p-8 md:p-12 border border-slate-700">
      <h3 className="text-3xl font-bold mb-8 text-center">Why Train With Me?</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900 transition-all"
          >
            <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-gray-300 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyTrainList;