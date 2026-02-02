
import React from 'react';
import { TRAINERS } from '../constants';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Trainers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-sm font-black text-neon uppercase tracking-[0.3em] mb-4">Experts Behind You</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Meet The <span className="text-zinc-600">Pros</span></h3>
          <p className="mt-6 text-zinc-400">Our trainers are world-class athletes and certified professionals dedicated to your success.</p>
        </div>
        <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-white/10 transition-all active:scale-95">
          VIEW ALL COACHES
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {TRAINERS.map((trainer) => (
          <div key={trainer.id} className="group flex flex-col items-center">
            {/* Image Container with Zoom Effect */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-zinc-800 shadow-2xl">
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Social links with Staggered Fade-in and Slide-up */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-3">
                <button className="p-3 bg-zinc-950/90 backdrop-blur-md rounded-full text-white hover:bg-neon hover:text-black transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-[0ms] hover:scale-110 shadow-lg border border-white/10">
                  <Instagram size={18} />
                </button>
                <button className="p-3 bg-zinc-950/90 backdrop-blur-md rounded-full text-white hover:bg-neon hover:text-black transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-[100ms] hover:scale-110 shadow-lg border border-white/10">
                  <Twitter size={18} />
                </button>
                <button className="p-3 bg-zinc-950/90 backdrop-blur-md rounded-full text-white hover:bg-neon hover:text-black transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-[200ms] hover:scale-110 shadow-lg border border-white/10">
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
            
            <div className="text-center group-hover:translate-y-[-4px] transition-transform duration-500">
              <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-1 text-white group-hover:text-neon transition-colors">
                {trainer.name}
              </h4>
              <p className="text-neon text-xs font-bold uppercase tracking-widest mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                {trainer.specialty}
              </p>
              <p className="text-zinc-500 text-sm italic max-w-[250px] mx-auto leading-relaxed group-hover:text-zinc-400 transition-colors">
                {trainer.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
