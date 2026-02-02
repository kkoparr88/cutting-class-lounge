
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl md:text-5xl font-syncopate font-black tracking-tighter mb-8 italic uppercase">
            CUTTING <span className="text-rose-600">CLASS</span> LOUNGE
          </h2>
          <p className="max-w-md text-white/40 font-light leading-relaxed mb-8">
            The intersection of luxury and street. We provide high-stakes grooming for those who lead by example. Located in the heart of the concrete jungle.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-rose-600 hover:border-rose-600 transition-all">
              <span className="font-syncopate text-[10px]">IG</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-rose-600 hover:border-rose-600 transition-all">
              <span className="font-syncopate text-[10px]">FB</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-rose-600 hover:border-rose-600 transition-all">
              <span className="font-syncopate text-[10px]">YT</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-syncopate text-[10px] tracking-[0.3em] text-rose-600 mb-8 uppercase">Headquarters</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li>JC6M+V85, Real St</li>
            <li>City of Borongan</li>
            <li>Eastern Samar</li>
            <li>info@cuttingclass.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-syncopate text-[10px] tracking-[0.3em] text-rose-600 mb-8 uppercase">Hours</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li className="flex justify-between"><span>MON - FRI</span> <span>10AM - 9PM</span></li>
            <li className="flex justify-between"><span>SATURDAY</span> <span>9AM - 8PM</span></li>
            <li className="flex justify-between"><span>SUNDAY</span> <span>11AM - 5PM</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-syncopate tracking-widest text-white/20">
        <p>© 2024 CUTTING CLASS LOUNGE. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED BY PREMIUM ARCHITECTS.</p>
      </div>
    </footer>
  );
};

export default Footer;
