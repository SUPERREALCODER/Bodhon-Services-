
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Globe, Smartphone, ArrowRight, X, CheckCircle2, Zap, Layers, Cpu, ShieldCheck, Code2, MessageSquare } from 'lucide-react';

interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  techStack: string[];
  methodology: string;
  color: string;
}

const servicesData: ServiceDetail[] = [
  {
    id: 'ai',
    icon: <BrainCircuit size={32} />,
    title: "Agentic AI",
    description: "Autonomous intelligent systems designed to handle complex logic, automate decision-making, and scale operational efficiency.",
    longDescription: "We don't just build chatbots. We architect 'Agentic Workflows' where AI agents reason, plan, and execute tasks autonomously. Our systems utilize Long-term Memory (RAG), tool-calling, and multi-agent orchestration to solve problems that traditional software cannot.",
    tags: ['LangGraph', 'AutoGPT', 'Cognitive Arch'],
    features: [
      "Multi-Agent Orchestration Systems",
      "Custom RAG (Retrieval Augmented Generation)",
      "Automated Decision Engines",
      "Autonomous Customer Support Agents",
      "Predictive Analytics & Reasoning"
    ],
    techStack: ['OpenAI / Anthropic', 'LangChain', 'Pinecone', 'Python/FastAPI'],
    methodology: "Research-first approach focusing on cognitive architecture and reliable output validation.",
    color: "from-orange-600 to-orange-400"
  },
  {
    id: 'web',
    icon: <Globe size={32} />,
    title: "Web Engineering",
    description: "Developing high-performance, accessible, and secure web platforms using modern architectures like Next.js and Edge Computing.",
    longDescription: "We build digital products that are lightning-fast and globally scalable. By leveraging Edge Computing and Modern React patterns, we ensure your platform provides a desktop-grade experience in the browser with 99th percentile performance metrics.",
    tags: ['Edge Runtime', 'Turbopack', 'React 19'],
    features: [
      "Server-Side Rendering (SSR) Optimization",
      "Edge Computing Implementation",
      "Scalable Micro-frontends",
      "Real-time Data Synchronization",
      "Advanced Web Security (OWASP Top 10)"
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel / AWS'],
    methodology: "Performance-driven development with a focus on 'Zero-JS' initial loads and progressive enhancement.",
    color: "from-blue-600 to-cyan-400"
  },
  {
    id: 'mobile',
    icon: <Smartphone size={32} />,
    title: "Mobile First",
    description: "Creating seamless cross-platform mobile experiences that leverage native capabilities with high-fidelity performance.",
    longDescription: "Mobile isn't just a screen size; it's a context. We create high-fidelity mobile applications that feel native, utilizing the latest in cross-platform technology to ensure rapid deployment without compromising on the smooth 60FPS animations users expect.",
    tags: ['Native Modules', 'Skia', 'Real-time UI'],
    features: [
      "Cross-Platform iOS & Android Dev",
      "Native Module Integration",
      "High-Performance UI Animations",
      "Offline-First Architecture",
      "Biometric & Hardware Integration"
    ],
    techStack: ['React Native', 'Expo', 'Reanimated', 'SQLite'],
    methodology: "User-centric design focusing on thumb-zone navigation and hardware-accelerated performance.",
    color: "from-purple-600 to-pink-400"
  }
];

const ServiceCard: React.FC<{ 
  service: ServiceDetail;
  delay: number;
  onExplore: (service: ServiceDetail) => void;
}> = ({ service, delay, onExplore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 0 40px 0 rgba(255, 85, 0, 0.15)",
        borderColor: "rgba(255, 85, 0, 0.4)"
      }}
      onClick={() => onExplore(service)}
      className="group relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 cursor-pointer"
    >
      <div className="absolute -inset-1 bg-gradient-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
          {service.icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{service.title}</h3>
        <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-200 transition-colors text-lg">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {service.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-[0.15em] font-bold px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <button className="flex items-center space-x-3 text-white font-bold text-base group-hover:text-orange-500 transition-colors">
          <span>Explore Service</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);

  const scrollToContact = () => {
    setActiveService(null);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <section id="services" className="py-24 md:py-40 px-6 relative bg-slate-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-950/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-6"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-black text-white"
          >
            Our Expertise at the <br /> Edge of Innovation
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard 
              key={service.id}
              service={service}
              delay={0.1 * (idx + 1)}
              onExplore={setActiveService}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-3xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-6xl max-h-[90vh] glass rounded-[3rem] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-8 right-8 z-30 w-14 h-14 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-all active:scale-90"
              >
                <X size={24} />
              </button>

              {/* Modal Left Sidebar */}
              <div className={`w-full md:w-[40%] p-10 md:p-16 bg-gradient-to-br ${activeService.color} flex flex-col justify-between shrink-0 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white mb-10 shadow-2xl">
                    {activeService.icon}
                  </div>
                  <h2 className="text-5xl font-black text-white leading-none mb-8">{activeService.title}</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-3">Core Philosophy</h4>
                      <p className="text-white font-medium text-lg leading-relaxed">
                        {activeService.methodology}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 space-y-4 pt-10">
                  <h4 className="text-white/60 text-[10px] font-black uppercase tracking-widest">Selected Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-xs font-bold text-white border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Right Content */}
              <div className="w-full md:w-[60%] p-10 md:p-20 overflow-y-auto bg-slate-950/40 scrollbar-hide">
                <div className="space-y-16">
                  <section>
                    <div className="flex items-center space-x-3 text-orange-500 mb-6">
                      <Zap size={20} />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">Deep Dive</span>
                    </div>
                    <p className="text-slate-300 text-2xl leading-relaxed font-medium">
                      {activeService.longDescription}
                    </p>
                  </section>

                  <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                       <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6 flex items-center">
                         <Layers size={16} className="mr-2 text-orange-500" /> Key Features
                       </h4>
                       <ul className="space-y-4">
                         {activeService.features.slice(0, 3).map((feat, i) => (
                           <li key={i} className="flex items-start space-x-3">
                             <CheckCircle2 size={16} className="text-orange-500 mt-1 shrink-0" />
                             <span className="text-slate-400 text-sm font-medium">{feat}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                       <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6 flex items-center">
                         <ShieldCheck size={16} className="mr-2 text-orange-500" /> Quality Gates
                       </h4>
                       <ul className="space-y-4">
                         {activeService.features.slice(3).map((feat, i) => (
                           <li key={i} className="flex items-start space-x-3">
                             <CheckCircle2 size={16} className="text-orange-500 mt-1 shrink-0" />
                             <span className="text-slate-400 text-sm font-medium">{feat}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </section>

                  <div className="pt-10 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={scrollToContact}
                      className="flex-1 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-orange-500 hover:text-white transition-all shadow-xl shadow-white/5 group"
                    >
                      <span>Start {activeService.title} Project</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setActiveService(null)}
                      className="px-8 py-5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/5 transition-all"
                    >
                      Back to Services
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
