
import React from 'react';
import { motion } from 'framer-motion';
// Added Sparkles to the import list from lucide-react to fix the undefined name error
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Our Craft in Action</h2>
            <p className="text-slate-400 text-lg">We don't just build features; we build experiences that drive growth and solve real human problems.</p>
          </div>
          <button className="px-6 py-3 border border-white/10 rounded-xl text-white font-bold hover:bg-white hover:text-slate-950 transition-all">
            View Case Studies
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          
          {/* Main Project: Homeasy */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 md:row-span-2 group relative bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden"
          >
            {/* Project Image Background Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 group-hover:scale-105 transition-transform duration-700 opacity-60">
                {/* Image Placehoder Comment: Homeasy Dashboard Mockup */}
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-4/5 h-4/5 border border-white/5 rounded-2xl bg-slate-900/50 backdrop-blur shadow-2xl overflow-hidden p-6">
                        <div className="w-full h-8 bg-white/5 rounded-t-lg mb-4 flex items-center px-4 space-x-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1 h-32 bg-orange-500/10 rounded-xl border border-orange-500/20"></div>
                            <div className="col-span-2 h-32 bg-white/5 rounded-xl"></div>
                            <div className="col-span-3 h-24 bg-white/5 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-10 flex flex-col justify-end">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-orange-600 rounded-full text-[10px] font-black tracking-widest text-white uppercase">Product Design</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-[10px] font-black tracking-widest text-slate-300 uppercase">Real Estate</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">Homeasy</h3>
              <p className="text-slate-300 max-w-lg mb-6">A next-gen property management platform using AI to automate tenant onboarding and maintenance requests.</p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-6 py-2 bg-white text-slate-950 rounded-xl font-bold">
                  <span>View Project</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Secondary Project: The Pandel */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-3 group relative bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-slate-900 group-hover:scale-105 transition-transform duration-700">
                {/* Image Placehoder Comment: The Pandel Mobile App Mockup */}
                <div className="w-full h-full flex items-center justify-center p-12">
                   <div className="w-48 h-96 bg-slate-950 border-4 border-slate-800 rounded-[2.5rem] relative shadow-2xl overflow-hidden">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl"></div>
                       <div className="p-4 pt-10">
                           <div className="w-10 h-10 bg-orange-500 rounded-full mb-4"></div>
                           <div className="w-full h-4 bg-white/5 rounded mb-2"></div>
                           <div className="w-2/3 h-4 bg-white/5 rounded mb-8"></div>
                           <div className="grid grid-cols-2 gap-2">
                               <div className="h-20 bg-white/5 rounded-lg"></div>
                               <div className="h-20 bg-white/5 rounded-lg"></div>
                           </div>
                       </div>
                   </div>
                </div>
             </div>
             
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 p-8 flex flex-col justify-end">
              <span className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-2">Social Experience</span>
              <h3 className="text-2xl font-bold text-white mb-2">The Pandel</h3>
              <p className="text-slate-400 text-sm mb-6">Innovative social platform connecting artists with direct-to-consumer NFT marketplaces.</p>
              <button className="flex items-center space-x-2 text-white font-bold hover:text-orange-500 transition-colors">
                <span>View App</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>

          {/* Third Grid Item: Tech Stack / Philosophy */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-1 p-8 bg-orange-600 rounded-[2.5rem] flex flex-col justify-between group cursor-default"
          >
             <h3 className="text-2xl font-black text-white leading-tight">Driven by Performance, <br /> Built for Impact.</h3>
             <div className="flex justify-between items-end">
                <p className="text-orange-100 font-medium text-sm max-w-[150px]">Our philosophy is simple: tech should be invisible, impact should be loud.</p>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                    <Sparkles size={24} />
                </div>
             </div>
          </motion.div>

          {/* Fourth Grid Item: Upcoming Project */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-1 p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] flex flex-col justify-center items-center text-center space-y-4"
          >
             <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Upcoming Project</div>
             <h3 className="text-xl font-bold text-white">Quantum Analytics</h3>
             <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-orange-500/20"></div>
                ))}
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
