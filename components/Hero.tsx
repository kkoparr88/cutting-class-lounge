
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 bg-black overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover object-[63%_35%]"
          >
            <source src="https://res.cloudinary.com/dsctrukyq/video/upload/v1770009490/Recording_2026-02-01_211143_igh41t.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>
        
        {/* Fixed Cinematic Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.9)_100%)] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10"></div>
      </div>

      {/* Foreground Interactive Content - Pinned to absolute bottom */}
      <div className="absolute bottom-0 left-0 w-full z-50 flex flex-col items-center pb-12 md:pb-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto"
        >
          {/* Refined Primary CTA: The "Blade" Button (Smaller Version) */}
          <button
            onClick={onOpenBooking}
            className="group relative flex items-center gap-3 px-10 py-4 transition-all duration-500 active:scale-95"
          >
            {/* Background Layer with Skew */}
            <div className="absolute inset-0 bg-rose-600 skew-x-[-12deg] transition-all duration-500 group-hover:bg-rose-700 shadow-[0_0_30px_rgba(225,29,72,0.35)] group-hover:shadow-[0_0_60px_rgba(225,29,72,0.55)]"></div>
            
            {/* Inner Border Animation */}
            <div className="absolute inset-[1.5px] border border-white/10 skew-x-[-12deg] group-hover:border-white/30 transition-colors"></div>

            <span className="relative z-10 font-syncopate text-[10px] md:text-xs font-black tracking-[0.6em] text-white flex items-center gap-2">
              BOOK
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-3.5 h-3.5 translate-y-[-0.5px] group-hover:translate-x-1 transition-transform"
              >
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>

            {/* Reflection sweep */}
            <div className="absolute inset-0 overflow-hidden skew-x-[-12deg]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[sweep_1.2s_ease-in-out]"></div>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Fixed Bottom Transition Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none"></div>

      {/* Fixed Decorative Background Ambience Text */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none z-10 hidden xl:block">
        <h2 className="text-[14rem] font-black font-syncopate tracking-tighter leading-none uppercase rotate-90 origin-center whitespace-nowrap text-outline">
          CUTTING CLASS
        </h2>
      </div>

      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
