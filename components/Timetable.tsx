
import React from 'react';
import { SCHEDULE } from '../constants';

const Timetable: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-neon uppercase tracking-[0.3em] mb-4">Weekly Schedule</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Plan Your <span className="text-zinc-600">Week</span></h3>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-900 border-b border-zinc-800">
              <th className="p-6 text-sm font-black uppercase text-zinc-400 tracking-widest">Time</th>
              <th className="p-6 text-sm font-black uppercase text-neon tracking-widest">Mon</th>
              <th className="p-6 text-sm font-black uppercase text-white tracking-widest">Tue</th>
              <th className="p-6 text-sm font-black uppercase text-neon tracking-widest">Wed</th>
              <th className="p-6 text-sm font-black uppercase text-white tracking-widest">Thu</th>
              <th className="p-6 text-sm font-black uppercase text-neon tracking-widest">Fri</th>
              <th className="p-6 text-sm font-black uppercase text-white tracking-widest">Sat</th>
              <th className="p-6 text-sm font-black uppercase text-zinc-500 tracking-widest">Sun</th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE.map((item, idx) => (
              <tr key={idx} className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
                <td className="p-6 font-bold text-zinc-300 text-sm">{item.time}</td>
                <td className="p-6">
                  <span className="block font-black uppercase italic text-xs tracking-tighter mb-1">{item.monday}</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Pro Session</span>
                </td>
                <td className="p-6">
                  <span className="block font-black uppercase italic text-xs tracking-tighter mb-1">{item.tuesday}</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Open Class</span>
                </td>
                <td className="p-6">
                  <span className="block font-black uppercase italic text-xs tracking-tighter mb-1">{item.wednesday}</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Group WOD</span>
                </td>
                <td className="p-6">
                  <span className="block font-black uppercase italic text-xs tracking-tighter mb-1">{item.thursday}</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Mobility</span>
                </td>
                <td className="p-6">
                  <span className="block font-black uppercase italic text-xs tracking-tighter mb-1">{item.friday}</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Max Power</span>
                </td>
                <td className="p-6">
                  <span className="block font-black uppercase italic text-xs tracking-tighter mb-1">{item.saturday}</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Community</span>
                </td>
                <td className="p-6">
                  <span className="block font-black uppercase italic text-xs tracking-tighter mb-1 opacity-50">{item.sunday}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 bg-neon/10 border border-neon/30 text-neon px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-neon hover:text-black transition-all">
          DOWNLOAD PDF SCHEDULE
        </button>
      </div>
    </div>
  );
};

export default Timetable;
