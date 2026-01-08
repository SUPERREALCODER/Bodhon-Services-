
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Globe, Smartphone, ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
  tags: string[];
}> = ({ icon, title, description, delay, tags }) => {
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
      className="group relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500"
    >
      {/* Dynamic Hover Glow Layer */}
      <div className="absolute -inset-1 bg-gradient-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-orange-500/0 group-hover:shadow-orange-500/30">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{title}</h3>
        <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-200 transition-colors text-lg">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
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
  return (
    <section id="services" className="py-24 md:py-40 px-6 relative bg-slate-950 overflow-hidden">
      {/* Ambient background light for the section */}
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
          <ServiceCard 
            icon={<BrainCircuit size={32} />}
            title="Agentic AI"
            description="Autonomous intelligent systems designed to handle complex logic, automate decision-making, and scale operational efficiency."
            tags={['LangGraph', 'AutoGPT', 'Cognitive Arch']}
            delay={0.1}
          />
          <ServiceCard 
            icon={<Globe size={32} />}
            title="Web Engineering"
            description="Developing high-performance, accessible, and secure web platforms using modern architectures like Next.js and Edge Computing."
            tags={['Edge Runtime', 'Turbopack', 'React 19']}
            delay={0.2}
          />
          <ServiceCard 
            icon={<Smartphone size={32} />}
            title="Mobile First"
            description="Creating seamless cross-platform mobile experiences that leverage native capabilities with high-fidelity performance."
            tags={['Native Modules', 'Skia', 'Real-time UI']}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
