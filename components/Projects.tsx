
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, X, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  stats: { label: string; value: string }[];
  color: string;
}

const projectsData: Project[] = [
  {
    id: 'homeasy',
    title: 'Homeasy',
    category: 'Product Design',
    description: 'A next-gen property management platform using AI to automate tenant onboarding and maintenance requests.',
    tags: ['Real Estate', 'AI Automation', 'Fintech'],
    challenge: 'Property managers were overwhelmed by manual data entry and fragmented communication, leading to a 30% vacancy delay.',
    solution: 'We architected an Agentic AI layer that automatically parses tenant documents, schedules inspections, and prioritizes maintenance based on urgency and contractor availability.',
    results: [
      'Reduced onboarding time by 75%',
      'Automated 90% of routine tenant inquiries',
      'Increased property manager capacity by 3x'
    ],
    stats: [
      { label: 'Time Saved', value: '40h/mo' },
      { label: 'Efficiency', value: '+210%' }
    ],
    color: 'bg-orange-600'
  },
  {
    id: 'pandel',
    title: 'The Pandel',
    category: 'Social Experience',
    description: 'Innovative social platform connecting artists with direct-to-consumer NFT marketplaces.',
    tags: ['Web3', 'Social', 'Creator Economy'],
    challenge: 'Artists struggled with high gas fees and lack of community engagement on traditional marketplaces.',
    solution: 'Built a Layer-2 based social network that allows for instant "social minting" and direct fan-to-artist engagement loops.',
    results: [
      'Onboarded 10k+ creators in month one',
      'Gas fees reduced by 99.9%',
      'Community engagement rate of 45%'
    ],
    stats: [
      { label: 'Active Users', value: '500k+' },
      { label: 'Transactions', value: '$12M' }
    ],
    color: 'bg-blue-600'
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Our Craft in Action</h2>
            <p className="text-slate-400 text-lg">We don't just build features; we build experiences that drive growth and solve real human problems.</p>
          </div>
          <button 
            onClick={() => setSelectedProject(projectsData[0])}
            className="px-6 py-3 border border-white/10 rounded-xl text-white font-bold hover:bg-white hover:text-slate-950 transition-all"
          >
            View Case Studies
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          
          {/* Main Project: Homeasy */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 md:row-span-2 group relative bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(projectsData[0])}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 group-hover:scale-105 transition-transform duration-700 opacity-60">
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
            className="md:col-span-4 md:row-span-3 group relative bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(projectsData[1])}
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-slate-900 group-hover:scale-105 transition-transform duration-700">
                <div className="w-full h-full flex items-center justify-center p-12">
                   <div className="w-48 h-96 bg-slate-950 border-4 border-slate-800 rounded-[2.5rem] relative shadow-2xl overflow-hidden">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl"></div>
                       <div className="p-4 pt-10">
                           <div className="w-10 h-10 bg-blue-500 rounded-full mb-4"></div>
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
              <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2">Social Experience</span>
              <h3 className="text-2xl font-bold text-white mb-2">The Pandel</h3>
              <p className="text-slate-400 text-sm mb-6">Innovative social platform connecting artists with NFT marketplaces.</p>
              <button className="flex items-center space-x-2 text-white font-bold hover:text-blue-500 transition-colors">
                <span>View Case Study</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>

          {/* Philosophy Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-1 p-8 bg-orange-600 rounded-[2.5rem] flex flex-col justify-between group cursor-default"
          >
             <h3 className="text-2xl font-black text-white leading-tight">Driven by Performance, <br /> Built for Impact.</h3>
             <div className="flex justify-between items-end">
                <p className="text-orange-100 font-medium text-sm max-w-[150px]">Our philosophy is simple: tech should be invisible.</p>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                    <Sparkles size={24} />
                </div>
             </div>
          </motion.div>

          {/* Upcoming Project */}
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

      {/* Case Study Modal Expansion */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass rounded-[3rem] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Sidebar/Image Placeholder */}
              <div className={`w-full md:w-2/5 p-10 ${selectedProject.color} flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                   <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-[10px] font-black tracking-widest text-white uppercase inline-block mb-6">
                     Case Study: 01
                   </div>
                   <h2 className="text-5xl font-black text-white leading-none mb-6">{selectedProject.title}</h2>
                   <div className="flex flex-wrap gap-2">
                     {selectedProject.tags.map(tag => (
                       <span key={tag} className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold text-white/80 border border-white/10">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {selectedProject.stats.map(stat => (
                    <div key={stat.label} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                       <div className="text-2xl font-black text-white">{stat.value}</div>
                       <div className="text-[10px] uppercase font-bold text-white/60 tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Detail Content */}
              <div className="w-full md:w-3/5 p-10 md:p-16 overflow-y-auto bg-slate-950/50">
                <div className="space-y-12">
                  <section>
                    <h4 className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4 flex items-center">
                      <Zap size={14} className="mr-2" /> The Challenge
                    </h4>
                    <p className="text-slate-300 text-xl leading-relaxed font-medium">
                      {selectedProject.challenge}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4 flex items-center">
                      <ChevronRight size={14} className="mr-2" /> Our Solution
                    </h4>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </section>

                  <section className="bg-white/5 p-8 rounded-3xl border border-white/5">
                    <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">The Results</h4>
                    <ul className="space-y-4">
                      {selectedProject.results.map((result, i) => (
                        <li key={i} className="flex items-start space-x-4">
                          <CheckCircle2 size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-300 font-bold">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <div className="pt-6">
                    <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-orange-500 hover:text-white transition-all shadow-xl shadow-white/5">
                      <span>Visit Live Platform</span>
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
