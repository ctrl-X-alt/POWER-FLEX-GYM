
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Bot, Send, X, Minimize2, Maximize2, Sparkles } from 'lucide-react';
import { GYM_DETAILS } from '../constants';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "Welcome to Power Flex Gym! I'm your Flex AI assistant. How can I help you reach your peak performance today?"}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a professional, high-energy fitness assistant for POWER FLEX GYM, located in ${GYM_DETAILS.location}, Dubai. 
          Your tone is energetic, motivating, and professional. 
          Key info:
          - Location: ${GYM_DETAILS.address}
          - Phone: ${GYM_DETAILS.phone}
          - Hours: ${GYM_DETAILS.hours}
          - Membership starts at 299 AED/month.
          - We offer CrossFit, Bodybuilding, Yoga, and MMA.
          Provide short, high-impact answers about gym memberships, workout tips, and our facilities. 
          Always encourage them to visit for a "Free Power Trial".`,
        },
      });

      const botText = response.text || "I'm sorry, I'm having trouble connecting right now. Please call us at " + GYM_DETAILS.phone;
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Flex AI is momentarily offline. Feel free to use our contact form or call us directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-neon text-black rounded-full shadow-[0_0_30px_rgba(255,95,31,0.4)] flex items-center justify-center hover:scale-110 transition-transform group relative"
        >
          <Bot size={32} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
          <div className="absolute right-20 bg-zinc-950 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-zinc-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Talk to Flex AI
          </div>
        </button>
      ) : (
        <div className="bg-zinc-950 border border-zinc-800 w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neon rounded-xl flex items-center justify-center text-black">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wider">Flex AI</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Active Now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-neon text-black font-medium rounded-tr-none' 
                    : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-zinc-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start italic text-xs text-zinc-500 animate-pulse">
                Flex AI is calculating...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-zinc-900 border-t border-zinc-800">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about classes, tips..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-neon transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-neon hover:text-white transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-1 justify-center">
               <Sparkles size={10} className="text-neon" />
               <span className="text-[9px] uppercase font-black text-zinc-600 tracking-tighter">Powered by Gemini AI</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;