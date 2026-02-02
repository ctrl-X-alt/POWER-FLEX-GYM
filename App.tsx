
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Timetable from './components/Timetable';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import BMICalculator from './components/BMICalculator';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-neon selection:text-black">
      <Navbar scrolled={scrolled} />
      
      <main>
        {/* Each section ID must match the Navbar hrefs exactly */}
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="programs" className="py-20 scroll-mt-24">
          <Programs />
        </section>

        <section id="trainers" className="py-20 bg-zinc-900/50 scroll-mt-24">
          <Trainers />
        </section>

        {/* BMI Calculator inserted between Trainers and Timetable */}
        <section id="bmi" className="py-20 scroll-mt-24">
          <BMICalculator />
        </section>

        <section id="timetable" className="py-20 bg-zinc-900/50 scroll-mt-24">
          <Timetable />
        </section>

        <section id="pricing" className="py-20 scroll-mt-24">
          <Pricing />
        </section>

        <section id="gallery" className="py-20 scroll-mt-24">
          <Gallery />
        </section>

        <section id="testimonials" className="py-20 bg-zinc-900/50 scroll-mt-24">
          <Testimonials />
        </section>

        <section id="contact" className="py-20 scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
      
      {/* AI Fitness Assistant */}
      <GeminiAssistant />
    </div>
  );
};

export default App;