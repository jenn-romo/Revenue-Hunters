import React from 'react';
import { PricingModel } from '../types';
import { Check } from 'lucide-react';

export const PricingCard: React.FC<{ model: PricingModel }> = ({ model }) => {
  const isDark = model.color === 'dark';
  
  return (
    <div className={`flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 break-inside-avoid ${isDark ? 'bg-brand-dark border-brand-light text-white shadow-2xl' : 'bg-white border-gray-200 text-gray-900 shadow-lg'}`}>
      <div className="mb-6">
        <h3 className={`font-display text-2xl font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-white' : 'text-brand-dark'}`}>
          {model.title}
        </h3>
        {model.target && (
            <p className={`text-sm font-medium ${isDark ? 'text-brand-light' : 'text-gray-500'}`}>
            {model.target}
            </p>
        )}
      </div>

      <div className="mb-8 pb-8 border-b border-gray-200/20">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{model.price}</span>
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {model.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-1 p-0.5 rounded-full ${isDark ? 'bg-brand-light text-brand-dark' : 'bg-brand-dark text-white'}`}>
                <Check size={12} strokeWidth={4} />
            </div>
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 px-6 rounded-lg font-bold uppercase tracking-widest text-sm transition-colors print:hidden ${
        isDark 
          ? 'bg-brand-light text-brand-dark hover:bg-white' 
          : 'bg-brand-dark text-white hover:bg-brand-light hover:text-brand-dark'
      }`}>
        Select Strategy
      </button>
    </div>
  );
};
