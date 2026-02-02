
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="mb-8 md:mb-0">
          <h2 className="text-sm font-black text-neon uppercase tracking-[0.3em] mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Wall Of <span className="text-zinc-600">Fame</span></h3>
        </div>
        <div className="bg-zinc-800/50 backdrop-blur px-8 py-4 rounded-3xl border border-zinc-700 flex items-center gap-6">
          <div className="text-center">
            <p className="text-3xl font-black text-white">4.6</p>
            <div className="flex text-neon">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} />
            </div>
          </div>
          <div className="w-px h-10 bg-zinc-700"></div>
          <p className="text-xs uppercase font-black text-zinc-400 tracking-widest">35 Google <br />Reviews</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="relative bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-neon transition-all duration-300">
            <div className="absolute top-6 right-8 text-neon/20">
              <Quote size={40} />
            </div>
            
            <div className="flex text-neon mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-zinc-300 leading-relaxed italic mb-8">"{t.text}"</p>
            
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-neon" />
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider">{t.name}</h4>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Member since 2023</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
