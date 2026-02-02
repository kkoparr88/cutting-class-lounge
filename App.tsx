import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Team from './components/Team';
import AIStyleGuide from './components/AIStyleGuide';
import BookingSystem from './components/BookingSystem';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-rose-600 selection:text-white overflow-x-hidden">
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
    </div>
  );
};

export default App;
