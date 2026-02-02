
import React, { useState, useEffect } from 'react';
import { STATIC_LOGO } from '../constants';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'GUIDE', href: '#functions' },
    { name: 'SQUAD', href: '#team' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[70] transition-all duration-700 ${
        scrolled ? 'bg-black/95 backdrop-blur-3xl py-2 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between h-16 relative">
        {/* Static Logo - Optimized for visibility and fit */}
        <div 
          className="flex-shrink-0 cursor-pointer group transition-transform hover:scale-105" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src={STATIC_LOGO} 
            alt="Cutting Class Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>

        {/* Navigation Links - Increased opacity for better visibility */}
        <div className="flex items-center gap-6 md:gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[9px] md:text-[10px] font-syncopate tracking-[0.4em] text-white/70 hover:text-rose-600 relative group py-2 transition-colors duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          <button 
            onClick={onOpenBooking}
            className={`hidden lg:block px-6 py-2 border border-rose-600/30 text-[9px] font-syncopate tracking-[0.3em] hover:bg-rose-600 transition-all duration-500 text-white ${
              scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
            }`}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
