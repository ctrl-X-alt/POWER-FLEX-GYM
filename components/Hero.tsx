
import React, { useState } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import AuthModal from './AuthModal';

const Hero: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop" 
          alt="Gym interior background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 bg-zinc-800/50 w-fit px-3 py-1 rounded-full border border-zinc-700 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-neon animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">New Location in Al Raffa</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-none uppercase mb-6 tracking-tighter italic">
            FEEL THE <br />
            <span className="text-neon drop-shadow-[0_0_15px_rgba(255,95,31,0.3)]">POWER FLEX</span>
          </h1>
          
          <p className="text-xl text-zinc-300 mb-10 max-w-lg leading-relaxed">
            The ultimate premium fitness experience in Dubai. Professional coaching, world-class equipment, and a community that pushes you further.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => setIsAuthModalOpen(true)} 
              className="w-full sm:w-auto bg-neon text-black px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-2 hover:bg-white hover:scale-105 transition-all shadow-xl shadow-neon/20 cursor-pointer focus:outline-none"
            >
              JOIN THE TRIBE <ChevronRight size={20} />
            </button>
            
            <button 
              onClick={() => scrollToSection('gallery')}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all cursor-pointer group focus:outline-none"
            >
              <div className="bg-neon rounded-full p-1 group-hover:scale-110 transition-transform">
                <Play size={16} fill="black" className="text-black" />
              </div>
              VIRTUAL TOUR
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div>
              <p className="text-4xl font-black text-neon">4.6/5</p>
              <p className="text-sm uppercase font-bold text-zinc-500">Google Rating</p>
            </div>
            <div className="h-10 w-px bg-zinc-800"></div>
            <div>
              <p className="text-4xl font-black text-white">1 AM</p>
              <p className="text-sm uppercase font-bold text-zinc-500">Late Closing</p>
            </div>
            <div className="h-10 w-px bg-zinc-800"></div>
            <div>
              <p className="text-4xl font-black text-white">500+</p>
              <p className="text-sm uppercase font-bold text-zinc-500">Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="hidden lg:block absolute -right-20 top-1/2 -rotate-90 origin-center select-none">
        <p className="text-9xl font-black text-white/5 whitespace-nowrap tracking-tighter">PERFORMANCE • POWER • PRIDE</p>
      </div>

      {/* Auth Modal Triggered from Hero */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Hero;