
import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-neon uppercase tracking-[0.3em] mb-4">Pricing Plans</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Invest In <span className="text-zinc-600">Yourself</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING.map((plan) => (
          <div 
            key={plan.id}
            className={`relative p-10 rounded-3xl border flex flex-col h-full transition-all duration-300 hover:scale-[1.02] ${
              plan.isPopular 
                ? 'bg-zinc-900 border-neon shadow-[0_0_40px_rgba(193,255,0,0.1)]' 
                : 'bg-zinc-950 border-zinc-800'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400 mb-4">{plan.name}</h4>
              <div className="flex items-baseline">
                <span className="text-sm font-bold text-neon mr-1">AED</span>
                <span className="text-6xl font-black italic tracking-tighter">{plan.price}</span>
                <span className="text-zinc-500 ml-2 font-medium">{plan.period}</span>
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center">
                    <Check size={12} className="text-neon" />
                  </div>
                  <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${
              plan.isPopular 
                ? 'bg-neon text-black hover:bg-white' 
                : 'bg-zinc-800 text-white hover:bg-zinc-700'
            }`}>
              GET STARTED
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-zinc-500 text-sm">
        <p>* Prices are inclusive of VAT. Student and Corporate discounts available. <a href="#contact" className="text-neon hover:underline">Contact us for more info.</a></p>
      </div>
    </div>
  );
};

export default Pricing;
