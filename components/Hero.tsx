
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Play, Cpu, Globe } from 'lucide-react';

const TypewriterText: React.FC = () => {
  const words = ['AI Agents', 'Intelligent Web', 'Next-Gen Apps'];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[index];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };
    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <span className="text-brand-orange font-black drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">
      {displayText}
      <span className="animate-pulse ml-1">_</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-10 bg-slate-950">
      
      {/* Background Layer (Explicit z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,85,0,0.12)_0%,rgba(2,6,23,1)_70%)]" />
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-[10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" 
        />
      </div>

      {/* Content Layer (Explicit z-10) */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass border border-white/10 text-white/70 text-[10px] font-bold tracking-[0.25em] uppercase mb-12 shadow-2xl"
        >
          <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_#FF5500] animate-pulse" />
          <span>The New Era of Agentic Solutions</span>
        </motion.div>

        {/* Headline - Explicit text-white */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: y1 }}
          className="text-6xl md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter mb-10 drop-shadow-2xl"
        >
          Forging the <br />
          <TypewriterText />
        </motion.h1>

        {/* Subheadline - Brightened for contrast */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-14 px-4"
        >
          We architect high-performance digital ecosystems and autonomous 
          Agentic AI systems that redefine human-computer interaction.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative w-full sm:w-auto px-12 py-6 bg-[#FF5500] text-white rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,85,0,0.6)] overflow-hidden">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Book a Strategy Call</span>
              <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </button>
          
          <button className="w-full sm:w-auto px-12 py-6 glass text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center space-x-3 group border border-white/20 active:scale-95">
            <Play size={20} className="fill-white group-hover:scale-110 transition-transform" />
            <span>View Our Craft</span>
          </button>
        </motion.div>
      </div>

      {/* Floating UI Elements (Explicit z-20) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden lg:block absolute bottom-24 left-24 z-20"
      >
        <div className="glass p-6 rounded-[2rem] border border-white/10 space-y-4 max-w-[220px] shadow-2xl animate-float">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange border border-brand-orange/30">
                <Cpu size={20} />
             </div>
             <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Autonomous Core</div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
             <motion.div 
               animate={{ width: ['0%', '70%', '40%', '90%'] }} 
               transition={{ duration: 5, repeat: Infinity }}
               className="h-full bg-brand-orange shadow-[0_0_8px_#FF5500]" 
             />
          </div>
          <p className="text-[12px] text-slate-300 leading-snug">Agents actively processing real-world data streams.</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hidden lg:block absolute top-1/3 right-24 z-20"
      >
        <div className="glass p-6 rounded-[2rem] border border-white/10 space-y-4 max-w-[220px] shadow-2xl animate-float [animation-delay:2s]">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-400/30">
                <Globe size={20} />
             </div>
             <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Scale</div>
          </div>
          <div className="flex -space-x-3">
             {[1,2,3].map(i => (
               <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">U{i}</div>
             ))}
             <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-brand-orange flex items-center justify-center text-[10px] font-black text-white shadow-lg">+12k</div>
          </div>
          <p className="text-[12px] text-slate-300 leading-snug">Serving 50+ enterprise clients globally.</p>
        </div>
      </motion.div>
    </section>
  );
};
