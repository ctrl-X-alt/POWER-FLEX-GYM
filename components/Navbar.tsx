
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import AuthModal from './AuthModal';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const navLinks = [
    { name: 'Programs', id: 'programs' },
    { name: 'Trainers', id: 'trainers' },
    { name: 'Schedule', id: 'timetable' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
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
    setIsOpen(false);
  };

  const handleJoinClick = (mode: 'login' | 'signup' = 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsOpen(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isAuthModalOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, isAuthModalOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-xl py-3 shadow-2xl border-b border-zinc-800/50' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button 
              onClick={(e) => scrollToSection(e, 'home')} 
              className="flex items-center gap-2 group cursor-pointer z-50 focus:outline-none"
            >
              <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-[0_0_15px_rgba(255,95,31,0.2)]">
                <span className="text-black font-black text-2xl italic">P</span>
              </div>
              <span className="text-2xl font-black tracking-tighter italic text-white">POWER<span className="text-neon drop-shadow-[0_0_10px_rgba(255,95,31,0.3)]">FLEX</span></span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-sm font-bold uppercase tracking-widest transition-all relative group py-2 focus:outline-none ${
                    activeSection === link.id ? 'text-neon' : 'text-zinc-200 hover:text-neon'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-neon transition-all duration-300 ${
                    activeSection === link.id ? 'w-full shadow-[0_0_10px_rgba(255,95,31,0.5)]' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              
              <button 
                onClick={() => handleJoinClick('signup')}
                className="flex items-center gap-2 bg-neon text-black px-6 py-2.5 rounded-full font-black text-sm hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-neon/20 ml-4 focus:outline-none uppercase tracking-widest"
              >
                <Rocket size={16} />
                JOIN NOW
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-neon p-2 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-zinc-950/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden`}>
          <div className="flex flex-col gap-8 text-center">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className={`text-4xl font-black uppercase tracking-widest transition-all focus:outline-none ${
                activeSection === 'home' ? 'text-neon' : 'text-white'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-3xl font-black uppercase tracking-widest transition-all focus:outline-none ${
                  activeSection === link.id ? 'text-neon' : 'text-white hover:text-neon'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-8">
              <button
                onClick={() => handleJoinClick('signup')}
                className="bg-neon text-black px-12 py-5 rounded-full font-black text-xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-neon/20 inline-flex items-center gap-3 focus:outline-none uppercase tracking-tighter"
              >
                <Rocket size={24} />
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Global Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;