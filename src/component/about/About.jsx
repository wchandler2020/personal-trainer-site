import React from 'react';
import TrainerProfile from '../profile/TrainerProfile';
import WhyTrainList from '../training/MyTrainList';

function About({ onCTAClick }) {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <TrainerProfile onCTAClick={onCTAClick} />
        <WhyTrainList />
      </div>
    </section>
  );
}

export default About;