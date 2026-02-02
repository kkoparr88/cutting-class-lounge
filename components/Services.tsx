
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, STATIC_LOGO } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-8 mb-6">
              <img 
                src={STATIC_LOGO} 
                alt="Logo" 
                className="w-40 md:w-56 h-auto object-contain" 
              />
              <span className="text-rose-600 font-syncopate text-xs tracking-[0.4em] uppercase">THE MENU</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-syncopate font-bold tracking-tighter">
              SERVICES
            </h2>
          </div>
          <p className="max-w-md text-white/40 font-light italic">
            "Your appearance is your business card. We make sure it's the only one that matters."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden bg-white/5 border border-white/10 hover:border-rose-600/50 transition-colors"
            >
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-syncopate font-bold">{service.price}</span>
                  <span className="text-[10px] font-syncopate tracking-widest text-white/50">{service.duration}</span>
                </div>
                <h3 className="text-xl font-syncopate font-bold mb-4 group-hover:text-rose-600 transition-colors">{service.name}</h3>
                <p className="text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
                <div className="mt-6 w-full h-[1px] bg-white/10 group-hover:bg-rose-600/50"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
