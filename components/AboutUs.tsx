
import React from 'react';
import { motion } from 'framer-motion';
import { STATIC_LOGO } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Cinematic Visuals */}
        <div className="relative group order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
              alt="Shop Interior" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            {/* Red accent frame */}
            <div className="absolute top-8 left-8 bottom-8 right-8 border border-rose-600/30 pointer-events-none group-hover:border-rose-600/60 transition-colors duration-700"></div>
          </motion.div>

          {/* Floating Detail Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="absolute -bottom-12 -right-12 hidden md:block w-64 aspect-square border-8 border-black overflow-hidden z-20 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1593702275677-f916c8c7c342?auto=format&fit=crop&q=80&w=600" 
              alt="Tool Detail" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Content & Manifesto */}
        <div className="relative z-10 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-8 mb-8">
              <img 
                src={STATIC_LOGO} 
                alt="Logo" 
                className="w-40 md:w-56 h-auto object-contain" 
              />
              <span className="text-rose-600 font-syncopate text-xs tracking-[0.5em] uppercase">The Philosophy</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-syncopate font-bold mb-10 tracking-tighter leading-none">
              BEYOND <br />
              <span className="text-outline">TRADITION</span>
            </h2>
            
            <div className="space-y-8 text-white/60 font-light leading-relaxed text-lg max-w-xl">
              <p>
                Cutting Class Lounge wasn't born in a boardroom; it was forged in the rhythm of the city. We saw a gap between the clinical luxury of uptown salons and the raw energy of street-level shops.
              </p>
              <p className="border-l-2 border-rose-600 pl-8 py-2 italic text-white">
                "We don't just cut hair. We curate identity. Every fade is a blueprint, every shave is a ceremony."
              </p>
              <p>
                Our artisans are recruited for their obsession with precision. We operate at the intersection of high-stakes fashion and urban resilience, providing a sanctuary for those who understand that respect is earned, but presence is chosen.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-12"
            >
              <div>
                <h4 className="font-syncopate text-[10px] tracking-widest text-rose-600 mb-2">PRECISION</h4>
                <p className="text-xs text-white/40 uppercase tracking-tighter">Millimeter accuracy on every line.</p>
              </div>
              <div>
                <h4 className="font-syncopate text-[10px] tracking-widest text-rose-600 mb-2">HERITAGE</h4>
                <p className="text-xs text-white/40 uppercase tracking-tighter">Modern techniques, ancient standards.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Ambience */}
      <div className="absolute left-[-5%] bottom-0 pointer-events-none opacity-[0.03] select-none z-0">
        <h2 className="text-[20rem] font-black font-syncopate tracking-tighter leading-none uppercase whitespace-nowrap">
          LOUNGE
        </h2>
      </div>
    </section>
  );
};

export default AboutUs;
