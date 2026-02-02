
import React from 'react';
import { motion } from 'framer-motion';
import { BARBERS, STATIC_LOGO } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 px-6 relative bg-zinc-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-rose-600/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-right mb-24 flex flex-col items-end">
          <div className="flex items-center gap-8 mb-6">
            <span className="text-rose-600 font-syncopate text-xs tracking-[0.4em] uppercase">THE ELITE</span>
            <img 
              src={STATIC_LOGO} 
              alt="Logo" 
              className="w-40 md:w-56 h-auto object-contain" 
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-syncopate font-bold tracking-tighter">
            THE SQUAD
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BARBERS.map((barber, index) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 border-l-4 border-rose-600 shadow-2xl">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map(spec => (
                      <span key={spec} className="text-[8px] bg-rose-600 text-white px-2 py-1 font-syncopate">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-syncopate font-bold mb-1">{barber.name}</h3>
              <p className="text-rose-600 font-syncopate text-[10px] tracking-widest mb-4">{barber.role}</p>
              <p className="text-white/50 text-sm leading-relaxed italic">"{barber.bio}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
