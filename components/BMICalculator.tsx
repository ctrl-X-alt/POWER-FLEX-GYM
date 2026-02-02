
import React, { useState } from 'react';
import { Calculator, Info, InfoIcon } from 'lucide-react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obesity');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-[3rem] overflow-hidden backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form Side */}
          <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-neon rounded-2xl text-black">
                <Calculator size={24} />
              </div>
              <h2 className="text-sm font-black text-neon uppercase tracking-[0.3em]">Health Analytics</h2>
            </div>
            
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-6">
              Check Your <span className="text-zinc-600">BMI Index</span>
            </h3>
            
            <p className="text-zinc-400 mb-10 text-sm leading-relaxed">
              Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify underweight, overweight and obesity in adults.
            </p>

            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest ml-1">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="175"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-neon transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest ml-1">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="70"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-neon transition-colors"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-neon text-black font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-white transition-all shadow-xl shadow-lime-400/10"
              >
                Calculate Now
              </button>
            </form>
          </div>

          {/* Result Side */}
          <div className="p-10 lg:p-16 flex flex-col justify-center bg-zinc-950/50">
            {bmi ? (
              <div className="animate-in fade-in zoom-in duration-500">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">Your Result</p>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-8xl font-black italic tracking-tighter text-neon">{bmi}</span>
                  <span className="text-xl font-bold uppercase tracking-widest text-white">{category}</span>
                </div>
                
                <div className="h-2 w-full bg-zinc-800 rounded-full mb-8 overflow-hidden flex">
                  <div className={`h-full transition-all duration-1000 ${bmi < 18.5 ? 'w-[20%] bg-blue-500' : bmi < 25 ? 'w-[45%] bg-neon' : bmi < 30 ? 'w-[70%] bg-orange-500' : 'w-[100%] bg-red-500'}`}></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                    <p className="text-[10px] uppercase font-black text-zinc-500 mb-1">Status</p>
                    <p className="text-sm font-bold text-white">{category === 'Normal weight' ? 'Healthy Range' : 'Attention Needed'}</p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                    <p className="text-[10px] uppercase font-black text-zinc-500 mb-1">Risk Level</p>
                    <p className="text-sm font-bold text-white">{bmi >= 25 ? 'Moderate' : 'Low'}</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-neon/5 border border-neon/20 rounded-2xl">
                  <InfoIcon size={20} className="text-neon shrink-0" />
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <span className="text-neon font-bold">Iron Tip:</span> {bmi < 25 ? "You're in the green zone! Focus on maintaining muscle mass and flexibility." : "Consider a combination of HIIT and strength training to optimize your body composition."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 mb-6 text-zinc-700">
                   <Calculator size={40} />
                </div>
                <p className="text-zinc-500 uppercase font-black tracking-widest text-xs">Enter your details to <br />reveal your stats</p>
              </div>
            )}

            <div className="mt-auto pt-10 grid grid-cols-4 gap-2 opacity-50">
               {[1,2,3,4,5,6,7,8].map(i => (
                 <div key={i} className="h-1 bg-zinc-800 rounded-full"></div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
