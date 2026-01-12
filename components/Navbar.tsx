
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Team', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleGetStarted = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${
        isScrolled ? 'pt-4' : 'pt-8'
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
        isScrolled 
          ? 'glass rounded-3xl py-3 px-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5' 
          : 'bg-transparent py-4 px-2 border-b border-white/0'
      }`}>
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-12 h-12 relative flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-110">
            <div className="absolute inset-0 bg-brand-orange/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="assets/logo.jpg" 
              alt="Bodhon Phoenix Logo" 
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,85,0,0.5)] rounded-lg"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white font-heading">Bodhon</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <div className="h-6 w-px bg-white/10" />
          
          <button 
            onClick={handleGetStarted}
            className="bg-white text-slate-950 px-6 py-2.5 rounded-xl text-sm font-black hover:bg-brand-orange hover:text-white transition-all flex items-center space-x-2 active:scale-95 shadow-lg shadow-white/5"
          >
            <span>Get Started</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 flex items-center justify-center glass rounded-xl text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 glass border-white/10 rounded-[2.5rem] md:hidden flex flex-col space-y-6 shadow-2xl z-[101]"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-300 text-2xl font-black tracking-tight flex items-center justify-between group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
               <button 
                 onClick={() => { setMobileMenuOpen(false); handleGetStarted(); }}
                 className="bg-brand-orange text-white py-5 rounded-2xl font-black text-lg"
                >
                 Book a Consultation
               </button>
               <div className="flex justify-center space-x-6 text-slate-500">
                  <Github size={20} />
                  <span className="text-xs uppercase font-bold tracking-widest">Connect on Twitter</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
