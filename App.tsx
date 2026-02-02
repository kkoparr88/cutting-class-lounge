
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Team from './components/Team';
import AIStyleGuide from './components/AIStyleGuide';
import BookingSystem from './components/BookingSystem';
import Footer from './components/Footer';
import LogoAnimation from './components/LogoAnimation';

const App: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-rose-600 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <LogoAnimation onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Navbar onOpenBooking={() => setShowBooking(true)} />
            
            <main>
              <Hero onOpenBooking={() => setShowBooking(true)} />
              <AboutUs />
              <Services />
              <AIStyleGuide />
              <Team />
            </main>

            <Footer />

            <AnimatePresence>
              {showBooking && (
                <BookingSystem onClose={() => setShowBooking(false)} />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
