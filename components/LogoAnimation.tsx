
import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATED_LOGO_VIDEO } from '../constants';

interface LogoAnimationProps {
  onComplete: () => void;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ onComplete }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl aspect-video overflow-hidden shadow-[0_0_120px_rgba(225,29,72,0.15)]"
      >
        <video 
          src={ANIMATED_LOGO_VIDEO}
          autoPlay 
          muted 
          playsInline
          onEnded={onComplete}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 text-center"
      >
        <span className="text-white font-syncopate text-[8px] tracking-[0.8em] uppercase">
          ESTABLISHED IN THE STREETS
        </span>
      </motion.div>
      
      {/* Progress bar simulation */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-rose-600"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 4.5, ease: "linear" }}
      />
    </div>
  );
};

export default LogoAnimation;
