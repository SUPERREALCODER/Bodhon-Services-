
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, X, CheckCircle2, ChevronRight, Zap, ChevronLeft, PlayCircle } from 'lucide-react';

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
  videoUrl?: string;
  thumbnailUrl?: string;
  githubUrl?: string;
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
    color: 'bg-orange-600',
    // Example video placeholder - in real app, user would provide their github mp4 link
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34440-large.mp4'
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
    color: 'bg-blue-600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'quantum',
    title: 'Quantum Analytics',
    category: 'Data Science',
    description: 'Real-time predictive dashboard for supply chain optimization using quantum-inspired algorithms.',
    tags: ['Analytics', 'Quantum', 'Optimization'],
    challenge: 'Logistics giants faced 15% wastage due to unpredictable demand shifts and slow classical computing models.',
    solution: 'Implemented a real-time data ingestion engine paired with quantum-inspired heuristics to recalculate routing every 60 seconds.',
    results: [
      'Inventory waste down by 22%',
      'Routing efficiency +18%',
      'Real-time processing latency < 100ms'
    ],
    stats: [
      { label: 'Data Points', value: '2B/Day' },
      { label: 'Savings', value: '$4.2M' }
    ],
    color: 'bg-purple-600',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-data-processing-on-a-server-24546-large.mp4'
  }
];

export const Projects: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const selectedProject = selectedIdx !== null ? projectsData[selectedIdx] : null;

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setDirection(1);
    setSelectedIdx((prev) => (prev! + 1) % projectsData.length);
  }, [selectedIdx]);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setDirection(-1);
    setSelectedIdx((prev) => (prev! - 1 + projectsData.length) % projectsData.length);
  }, [selectedIdx]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIdx(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handleNext, handlePrev]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Our Craft in Action</h2>
            <p className="text-slate-400 text-lg">We transform Github repos into high-performance products. Witness our latest deployments below.</p>
          </div>
          <button 
            onClick={() => setSelectedIdx(0)}
            className="px-6 py-3 border border-white/10 rounded-xl text-white font-bold hover:bg-white hover:text-slate-950 transition-all"
          >
            Explore Case Studies
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          
          {/* Main Project: Homeasy */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 md:row-span-2 group relative bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer"
            onClick={() => setSelectedIdx(0)}
          >
            <div className="absolute inset-0 z-0">
              {projectsData[0].videoUrl ? (
                <video 
                  src={projectsData[0].videoUrl} 
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-60" />
              )}
            </div>
            
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-orange-600 rounded-full text-[10px] font-black tracking-widest text-white uppercase">Product Design</span>
                {projectsData[0].videoUrl && (
                  <span className="flex items-center space-x-1 px-2 py-1 bg-white/10 backdrop-blur rounded-full text-[8px] font-bold text-white uppercase">
                    <PlayCircle size={10} />
                    <span>Video Demo</span>
                  </span>
                )}
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">Homeasy</h3>
              <p className="text-slate-300 max-w-lg mb-6">Automating the housing market with agentic workflows.</p>
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
            onClick={() => setSelectedIdx(1)}
          >
            <div className="absolute inset-0 z-0">
              {projectsData[1].thumbnailUrl && (
                <img 
                  src={projectsData[1].thumbnailUrl} 
                  alt={projectsData[1].title}
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                />
              )}
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors" />
            </div>
            
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 p-8 flex flex-col justify-end">
              <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2">Social Experience</span>
              <h3 className="text-2xl font-bold text-white mb-2">The Pandel</h3>
              <p className="text-slate-400 text-sm mb-6">Innovative social platform for creators.</p>
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
            <h3 className="text-2xl font-black text-white leading-tight">Video Demos, <br /> Proven Logic.</h3>
            <div className="flex justify-between items-end">
              <p className="text-orange-100 font-medium text-sm max-w-[150px]">We provide visual proof of concept for every build.</p>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                <Sparkles size={24} />
              </div>
            </div>
          </motion.div>

          {/* Quantum Project - Video Showcase */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-1 group relative bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer"
            onClick={() => setSelectedIdx(2)}
          >
            {projectsData[2].videoUrl && (
              <video 
                src={projectsData[2].videoUrl} 
                autoPlay muted loop playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
              />
            )}
            <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center space-y-2">
              <div className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Featured Demo</div>
              <h3 className="text-xl font-bold text-white">Quantum Analytics</h3>
              <div className="flex items-center text-slate-500 text-xs font-bold">
                 <PlayCircle size={12} className="mr-1" /> Watch Prototype
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
            />
            
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-[210]">
              <button onClick={handlePrev} className="w-14 h-14 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white transition-all pointer-events-auto shadow-2xl"><ChevronLeft size={32} /></button>
              <button onClick={handleNext} className="w-14 h-14 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white transition-all pointer-events-auto shadow-2xl"><ChevronRight size={32} /></button>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={selectedProject.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full max-w-6xl max-h-[95vh] glass rounded-[3.5rem] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
              >
                <button onClick={() => setSelectedIdx(null)} className="absolute top-6 right-6 z-40 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"><X size={24} /></button>

                {/* Media Showcase Section */}
                <div className={`w-full md:w-1/2 min-h-[400px] ${selectedProject.color} relative overflow-hidden shrink-0 flex items-center justify-center`}>
                  {selectedProject.videoUrl ? (
                    <video 
                      src={selectedProject.videoUrl} 
                      autoPlay muted loop playsInline controls
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : selectedProject.thumbnailUrl ? (
                    <img src={selectedProject.thumbnailUrl} className="absolute inset-0 w-full h-full object-cover" alt="" />
                  ) : null}
                  
                  {/* Overlay for Branding */}
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                  <div className="absolute bottom-10 left-10 right-10 z-10">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-[10px] font-black tracking-widest text-white uppercase inline-block mb-4">
                      {selectedProject.category}
                    </div>
                    <h2 className="text-6xl font-black text-white leading-none drop-shadow-lg">{selectedProject.title}</h2>
                  </div>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-10 md:p-20 overflow-y-auto bg-slate-900/80 scrollbar-hide">
                  <div className="space-y-12">
                    <div className="grid grid-cols-2 gap-6">
                      {selectedProject.stats.map(stat => (
                        <div key={stat.label} className="bg-white/5 p-6 rounded-[2rem] border border-white/5">
                          <div className="text-3xl font-black text-white">{stat.value}</div>
                          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <section>
                      <h4 className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 flex items-center">
                        <Zap size={14} className="mr-2" /> Problem Statement
                      </h4>
                      <p className="text-slate-200 text-xl leading-relaxed font-medium">
                        {selectedProject.challenge}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 flex items-center">
                        <ChevronRight size={14} className="mr-2" /> Engineered Solution
                      </h4>
                      <p className="text-slate-400 text-lg leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </section>

                    <section className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
                      <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Validated Outcomes</h4>
                      <ul className="space-y-5">
                        {selectedProject.results.map((result, i) => (
                          <li key={i} className="flex items-start space-x-4">
                            <CheckCircle2 size={22} className="text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-200 font-bold text-lg">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <div className="pt-6 flex gap-4">
                      <button className="flex-1 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-orange-500 hover:text-white transition-all shadow-xl">
                        <span>Live Demo</span>
                        <ExternalLink size={20} />
                      </button>
                      <button className="px-8 py-5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/5 transition-all">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
