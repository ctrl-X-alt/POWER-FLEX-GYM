
import React, { useState } from 'react';
import { GYM_DETAILS } from '../constants';
import { MapPin, Phone, Clock, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import AuthModal from './AuthModal';

// Mock database for demonstration
const MOCK_REGISTERED_USERS = [
  { name: 'John Doe', email: 'john@example.com', phone: '+971 50 123 4567' },
  { name: 'Alice Smith', email: 'alice@fitness.com', phone: '+971 50 987 6543' }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Free Trial - Gym Access',
    message: ''
  });
  
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Checking credentials...' });

    // Simulate API delay
    setTimeout(() => {
      const existingUserByEmail = MOCK_REGISTERED_USERS.find(u => u.email.toLowerCase() === formData.email.toLowerCase());
      const existingUserByPhone = MOCK_REGISTERED_USERS.find(u => u.phone === formData.phone);

      if (existingUserByEmail) {
        if (existingUserByEmail.name.toLowerCase() !== formData.name.toLowerCase()) {
          setStatus({ 
            type: 'error', 
            message: `The email ${formData.email} is already registered under a different name. Please login to your existing account.` 
          });
        } else {
          setStatus({ 
            type: 'error', 
            message: 'You already have an account with us. Please log in to submit your application.' 
          });
        }
        return;
      }

      if (existingUserByPhone) {
        setStatus({ 
          type: 'error', 
          message: 'This phone number is already registered. Please login to continue.' 
        });
        return;
      }

      // If new user
      setStatus({ 
        type: 'success', 
        message: 'Success! Your Power Flex account has been created and your application submitted. Welcome to the tribe!' 
      });
      
      // Clear form after success
      setFormData({
        name: '',
        phone: '',
        email: '',
        program: 'Free Trial - Gym Access',
        message: ''
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-sm font-black text-neon uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8">Book Your <span className="text-zinc-600">Free Session</span></h3>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="mt-1 w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-neon border border-zinc-800">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase italic mb-1 tracking-tight">Location</h4>
                <p className="text-zinc-400 text-sm">{GYM_DETAILS.address}</p>
                <a href="#" className="text-neon text-xs font-black uppercase mt-2 block hover:underline">Get Directions</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-1 w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-neon border border-zinc-800">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase italic mb-1 tracking-tight">Phone</h4>
                <p className="text-zinc-400 text-sm">{GYM_DETAILS.phone}</p>
                <p className="text-zinc-500 text-xs">Mon-Sun: Available via WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-1 w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-neon border border-zinc-800">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase italic mb-1 tracking-tight">Opening Hours</h4>
                <p className="text-zinc-400 text-sm">{GYM_DETAILS.hours}</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-neon rounded-3xl text-black">
            <h4 className="text-2xl font-black uppercase italic mb-4">Popular Times</h4>
            <p className="text-sm font-bold opacity-80 mb-4">Mon - Sun: 7 AM Usually not too busy</p>
            <div className="flex items-end gap-1 h-20">
              {[20, 40, 60, 80, 100, 70, 50, 30, 20, 60, 90, 80, 50].map((h, i) => (
                <div key={i} className="flex-1 bg-black/20 rounded-t" style={{height: `${h}%`}}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-md p-10 rounded-[3rem] border border-zinc-800 relative overflow-hidden">
          {status.type === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center text-neon mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h4 className="text-2xl font-black uppercase italic mb-4">Application Received</h4>
              <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
                {status.message}
              </p>
              <button 
                onClick={() => setStatus({ type: 'idle', message: '' })}
                className="bg-white text-black px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-neon transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-neon transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971 -- --- ----"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-neon transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-neon transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest ml-1">Select Program</label>
                <select 
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-neon transition-colors appearance-none"
                >
                  <option>Free Trial - Gym Access</option>
                  <option>Personal Training Session</option>
                  <option>Yoga Trial Class</option>
                  <option>CrossFit Intro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest ml-1">Message (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-neon transition-colors resize-none"
                ></textarea>
              </div>

              {status.type === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle className="text-red-500 shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-red-200 leading-relaxed font-medium">{status.message}</p>
                    <button 
                      type="button"
                      onClick={() => setIsAuthModalOpen(true)}
                      className="text-[10px] font-black uppercase text-neon mt-2 hover:underline tracking-widest"
                    >
                      Log in now
                    </button>
                  </div>
                </div>
              )}

              <button 
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-neon text-black font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-neon/10 disabled:opacity-50"
              >
                {status.type === 'loading' ? (
                  <>Processing <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>SUBMIT APPLICATION <Send size={18} /></>
                )}
              </button>
              
              <p className="text-[10px] text-center text-zinc-500 uppercase font-bold tracking-[0.2em] px-4">
                New users will have an account automatically created upon submission.
              </p>
            </form>
          )}
        </div>
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} initialMode="login" />
    </div>
  );
};

export default Contact;