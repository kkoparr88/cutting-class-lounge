
import React, { useState } from 'react';
// Added AnimatePresence to imports to fix missing component error
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, BARBERS } from '../constants';

interface BookingSystemProps {
  onClose: () => void;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    service: '',
    barber: '',
    date: '',
    time: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
        onClick={onClose}
      ></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(225,29,72,0.15)]"
      >
        <div className="flex h-full min-h-[600px] flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/3 bg-black p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-rose-600 font-syncopate text-[10px] tracking-widest block mb-2 uppercase">Reservations</span>
              <h2 className="text-3xl font-syncopate font-bold leading-none mb-8 uppercase tracking-tighter">BOOK YOUR SEAT</h2>
              
              <div className="space-y-4">
                {[1, 2, 3, 4].map(num => (
                  <div key={num} className={`flex items-center gap-4 transition-opacity ${step >= num ? 'opacity-100' : 'opacity-30'}`}>
                    <span className="text-xs font-syncopate text-rose-600">{num.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] font-syncopate tracking-[0.2em]">
                      {num === 1 ? 'SERVICE' : num === 2 ? 'BARBER' : num === 3 ? 'SCHEDULE' : 'CONFIRM'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onClose}
              className="text-[10px] font-syncopate tracking-widest text-white/30 hover:text-white transition-colors text-left"
            >
              ESC TO CLOSE
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 md:p-12 overflow-y-auto">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-syncopate font-bold mb-6">SELECT SERVICE</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {SERVICES.map(s => (
                      <button
                        key={s.id}
                        onClick={() => { setBooking({...booking, service: s.name}); nextStep(); }}
                        className={`p-6 text-left border transition-all flex items-center justify-between ${
                          booking.service === s.name ? 'bg-rose-600 border-rose-600' : 'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div>
                          <p className="font-bold">{s.name}</p>
                          <p className="text-[10px] opacity-60 uppercase tracking-widest">{s.duration}</p>
                        </div>
                        <span className="font-syncopate text-xl">{s.price}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-syncopate font-bold mb-6">CHOOSE BARBER</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BARBERS.map(b => (
                      <button
                        key={b.id}
                        onClick={() => { setBooking({...booking, barber: b.name}); nextStep(); }}
                        className={`p-4 text-left border transition-all flex items-center gap-4 ${
                          booking.barber === b.name ? 'bg-rose-600 border-rose-600' : 'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <img src={b.image} className="w-16 h-16 object-cover rounded-full border border-white/20" />
                        <div>
                          <p className="font-bold">{b.name}</p>
                          <p className="text-[10px] opacity-60 uppercase tracking-widest">{b.role}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button onClick={prevStep} className="text-rose-600 font-syncopate text-[10px] tracking-widest mt-8">← GO BACK</button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                   key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-syncopate font-bold mb-6">PICK A TIME</h3>
                  <div className="space-y-8">
                    <div>
                      <label className="text-[10px] font-syncopate tracking-widest text-white/50 block mb-4">SELECT DATE</label>
                      <input 
                        type="date" 
                        onChange={(e) => setBooking({...booking, date: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-rose-600"
                      />
                    </div>
                    <div>
                       <label className="text-[10px] font-syncopate tracking-widest text-white/50 block mb-4">SELECT HOUR</label>
                       <div className="grid grid-cols-4 gap-2">
                          {['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(t => (
                            <button 
                              key={t}
                              onClick={() => setBooking({...booking, time: t})}
                              className={`p-2 text-xs font-syncopate border transition-all ${
                                booking.time === t ? 'bg-rose-600 border-rose-600' : 'bg-white/5 border-white/10'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                       </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-8">
                    <button onClick={prevStep} className="text-rose-600 font-syncopate text-[10px] tracking-widest">← BACK</button>
                    <button 
                      onClick={nextStep} 
                      disabled={!booking.date || !booking.time}
                      className="px-8 py-4 bg-white text-black font-syncopate text-[10px] tracking-widest disabled:opacity-20"
                    >
                      CONTINUE →
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center py-12"
                >
                   <div className="mb-12 inline-flex p-4 rounded-full bg-green-500/20 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-syncopate font-bold mb-4">SLOT RESERVED</h3>
                  <div className="space-y-2 text-white/60 font-light mb-12">
                    <p>Service: <span className="text-white font-bold">{booking.service}</span></p>
                    <p>With: <span className="text-white font-bold">{booking.barber}</span></p>
                    <p>On: <span className="text-white font-bold">{booking.date} @ {booking.time}</span></p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="px-12 py-4 bg-rose-600 text-white font-syncopate text-xs tracking-widest"
                  >
                    SEE YOU SOON
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookingSystem;
