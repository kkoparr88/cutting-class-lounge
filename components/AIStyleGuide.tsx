
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getStyleAdvice } from '../services/gemini';

const AIStyleGuide: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        setImage(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConsultation = async () => {
    if (!prompt.trim() && !image) return;
    
    setLoading(true);
    try {
      const res = await getStyleAdvice(prompt || "What style fits me best?", image || undefined);
      setResponse(res || "Consultation failed. The blade is dull.");
    } catch (error) {
      setResponse("Our AI is currently sharpening its blades. Try again soon.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="functions" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto border border-rose-600/30 bg-zinc-950 p-8 md:p-16 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-12">
          <span className="text-rose-600 font-syncopate text-xs tracking-[0.4em] block mb-4 uppercase">Next-Gen Grooming</span>
          <h2 className="text-4xl md:text-5xl font-syncopate font-bold mb-4 tracking-tighter">BLADE-GPT CONSULTANT</h2>
          <p className="text-white/40 text-sm">Upload a photo or describe your vibe. Our AI will tell you what's sharp.</p>
        </div>

        <div className="space-y-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., 'I want a low skin fade that looks professional but aggressive for the club tonight...'"
            className="w-full bg-black border border-white/10 p-6 text-white focus:border-rose-600 transition-all outline-none resize-none h-32 font-light"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 flex items-center justify-center gap-2 border border-white/10 hover:border-rose-600 py-4 text-[10px] font-syncopate tracking-widest transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {image ? 'IMAGE ATTACHED' : 'ATTACH SELFIE'}
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
              accept="image/*"
            />
            
            <button
              onClick={handleConsultation}
              disabled={loading}
              className="flex-1 bg-rose-600 py-4 text-[10px] font-syncopate tracking-widest disabled:opacity-50"
            >
              {loading ? 'CALCULATING DRIP...' : 'GET CONSULTATION'}
            </button>
          </div>

          <AnimatePresence>
            {response && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 p-8 bg-black/50 border-l-2 border-rose-600 italic text-white/80 leading-relaxed font-light"
              >
                <span className="block text-rose-600 font-syncopate text-[8px] mb-4 tracking-[0.3em]">BLADE-GPT SAYS:</span>
                {response}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AIStyleGuide;
