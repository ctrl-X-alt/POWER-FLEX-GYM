
import React, { useState } from 'react';
import { GYM_DETAILS } from '../constants';
import { Instagram, Facebook, Youtube, Heart, Check, Loader2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const targetId = id.toLowerCase() === 'home' ? 'home' : id.toLowerCase();
    const element = document.getElementById(targetId === 'schedule' ? 'timetable' : targetId);
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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset back to idle after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8 group cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
              <div className="w-8 h-8 bg-neon rounded flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-[0_0_15px_rgba(255,95,31,0.3)]">
                <span className="text-black font-black text-xl italic">P</span>
              </div>
              <span className="text-xl font-black tracking-tighter italic">POWER<span className="text-neon">FLEX</span></span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Excellence in fitness at the heart of Al Raffa, Dubai. Join the tribe and push your limits with professional coaching and a world-class environment.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/ironpowerdxb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-neon transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Instagram size={18} className="group-hover:text-black transition-colors duration-300" />
              </a>
              <a 
                href="https://www.facebook.com/ironpowerdxb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-neon transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook size={18} className="group-hover:text-black transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="group w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-neon transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Youtube size={18} className="group-hover:text-black transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8 border-l-2 border-neon pl-3">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Programs', 'Trainers', 'Schedule', 'Pricing'].map(link => (
                <li key={link}>
                  <button 
                    onClick={(e) => scrollToSection(e, link)} 
                    className="text-zinc-400 text-sm hover:text-neon transition-colors uppercase font-bold tracking-widest block focus:outline-none hover:translate-x-1 transform duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8 border-l-2 border-neon pl-3">Resources</h4>
            <ul className="space-y-4">
              {['Membership Policy', 'Privacy Policy', 'Terms of Service', 'Corporate Plans', 'Blog'].map(link => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 text-sm hover:text-neon transition-colors uppercase font-bold tracking-widest block hover:translate-x-1 transform duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8 border-l-2 border-neon pl-3">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-6">Stay updated with the latest workouts and club news.</p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex bg-zinc-900 rounded-2xl p-1 border border-zinc-800 focus-within:border-neon transition-colors group">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={status === 'success' ? "Subscribed!" : "Email address"}
                disabled={status !== 'idle'}
                className="bg-transparent border-none px-4 py-3 text-sm focus:outline-none flex-grow text-white placeholder:text-zinc-600 disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={status !== 'idle' || !email}
                className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center min-w-[70px] ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-neon text-black hover:bg-white'
                }`}
              >
                {status === 'loading' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : status === 'success' ? (
                  <Check size={16} />
                ) : (
                  'Join'
                )}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-[10px] text-neon font-bold uppercase tracking-widest mt-3 animate-in fade-in slide-in-from-top-1">
                You're on the list! Welcome to the tribe.
              </p>
            )}
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">
            © 2024 Power Flex Gym Al Raffa. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-zinc-500 text-xs font-medium uppercase tracking-widest">
            Made with <Heart size={12} className="text-neon fill-neon animate-pulse" /> in Dubai
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;