
import React from 'react';
import { PROGRAMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-neon uppercase tracking-[0.4em] mb-4">Elite Training</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Choose Your <span className="text-zinc-600">Discipline</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROGRAMS.map((program) => (
          <div 
            key={program.id}
            className="group relative h-[500px] overflow-hidden rounded-[2.5rem] border border-zinc-800 hover:border-neon transition-all duration-700 shadow-2xl shadow-black"
          >
            <img 
              src={program.image} 
              alt={program.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            {/* Improved overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-10 w-full transform transition-all duration-500">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neon/10 border border-neon/30 text-neon group-hover:bg-neon group-hover:text-black group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <ArrowUpRight size={28} />
              </div>
              <h4 className="text-3xl font-black uppercase italic mb-3 tracking-tighter group-hover:text-neon transition-colors drop-shadow-md">
                {program.title}
              </h4>
              <p className="text-zinc-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 font-medium drop-shadow-md">
                {program.description}
              </p>
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-neon flex items-center gap-2 group/btn">
                LEARN MORE <span className="h-px w-10 bg-neon/50 group-hover/btn:w-16 transition-all duration-500"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
