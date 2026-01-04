import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import pt_img from "../../assets/images/pt_img.jpeg"

const TrainerProfile = ({ onCTAClick }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      {/* Image Placeholder */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>
        <div className="relative bg-slate-800 rounded-3xl p-2 border border-slate-700">
          <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <img src={pt_img} alt="" />
              {/* <p className="text-gray-400 text-sm">Your Photo Here</p>
              <p className="text-gray-500 text-xs mt-2">Training clients in action</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Meet Your <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Trainer</span>
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          With over a decade of experience in the fitness industry, I've dedicated my career to helping people transform their lives through evidence-based training and nutrition strategies.
        </p>
        <p className="text-gray-400 text-lg mb-6">
         Based in Chicago and rooted in the Streeterville neighborhood, I work with clients of all fitness levels throughout the city—from complete beginners to competitive athletes. My approach combines proven training methodologies with personalized attention to ensure sustainable results.
        </p>
        <p className="text-gray-400 text-lg mb-8">
          Whether you're looking to lose weight, build muscle, improve athletic performance, or simply feel better in your daily life, I'm here to guide you every step of the way.
        </p>

        {/* Certifications */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <Shield className="w-8 h-8 text-emerald-400" />
            <div>
              <div className="font-semibold text-white">NASM Certified</div>
              <div className="text-sm text-gray-400">Personal Trainer</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <Award className="w-8 h-8 text-emerald-400" />
            <div>
              <div className="font-semibold text-white">CPR/AED</div>
              <div className="text-sm text-gray-400">Certified</div>
            </div>
          </div>
        </div>

        <button 
          onClick={onCTAClick}
          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2"
        >
          Let's Work Together
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default TrainerProfile;