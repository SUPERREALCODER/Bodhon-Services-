
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, ShieldCheck, Cpu, Code2, BrainCircuit, TrendingUp, MessageSquare, Zap, Fingerprint } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  description: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  icon: React.ReactNode;
  accent: string;
}

const team: TeamMember[] = [
  {
    name: "Debabrata Ghosh",
    role: "Founding Architect",
    shortBio: "Architecting the bridge between logic and experience.",
    description: "The technical visionary. He bridges the gap between business logic and Agentic AI, creating systems that automate complex workflows and drive intelligent decision-making.",
    image: "../assets/deba.jpg",
    icon: <Cpu size={20} />,
    accent: "text-orange-500",
    socials: {
      github: "https://github.com/SUPERREALCODER",
      linkedin: "https://www.linkedin.com/in/superrealcoder/",
    
    }
  },
  {
    name: "Krish Gupta",
    role: "Head of Engineering",
    shortBio: "Master of high-performance fluid experiences.",
    description: "Translates visions into fluid digital reality. He leads the development of high-performance mobile apps and scalable web platforms with a focus on 60FPS precision.",
    image: "../assets/krish.png",
    icon: <Code2 size={20} />,
    accent: "text-blue-500",
    socials: {
      github: "https://github.com/Draxox",
      linkedin: "https://www.linkedin.com/in/krishdrax/",
      
    }
  },
  {
    name: "Sajid",
    role: "Growth Strategist",
    shortBio: "Scaling impact through data-driven logic.",
    description: "Ensures market impact. He integrates data-driven marketing strategies and SEO directly into the product lifecycle to maximize ROI and visibility.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop",
    icon: <TrendingUp size={20} />,
    accent: "text-green-500",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com"
    }
  },
  {
    name: "Pratham Jaiswal",
    role: "Security & Infra Lead",
    shortBio: "Hardening the autonomous perimeter.",
    description: "Guarantees data sovereignty. He utilizes blockchain principles and advanced cryptography to build secure, tamper-proof architectures for sensitive client data.",
    image: "../assets/pratham.png",
    icon: <ShieldCheck size={20} />,
    accent: "text-purple-500",
    socials: {
      github: "https://github.com/pantha704",
      linkedin: "https://www.linkedin.com/in/pantha704/"
    }
  },
  {
    name: "Muzzafar Abbas",
    role: "Head of Research & Relations",
    shortBio: "The bridge between complex tech and the consumer.",
    description: "He leads deep user research and manages strategic client relations to ensure perfect product alignment and long-term partnership success.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop",
    icon: <MessageSquare size={20} />,
    accent: "text-cyan-500",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com"
    }
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-orange font-bold tracking-[0.3em] uppercase text-sm mb-6"
            >
              The Core Team
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-white leading-[0.9]"
            >
              Minds Behind the <br /> Intelligent Web.
            </motion.h2>
          </div>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass rounded-[3rem] p-8 border border-white/5 group-hover:border-brand-orange/30 transition-all duration-500 flex flex-col h-full hover:shadow-[0_20px_60px_-15px_rgba(255,85,0,0.15)]">
                
                {/* Header: Photo & Icon */}
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-1 ring-white/10 group-hover:ring-brand-orange/50">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center ${member.accent} shadow-xl`}>
                      {member.icon}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all">
                        <Github size={18} />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 hover:text-[#0077B5] hover:bg-white/10 transition-all">
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <div className={`${member.accent} font-black text-[10px] uppercase tracking-widest mb-4`}>
                    {member.role}
                  </div>
                  <p className="text-white font-bold text-sm italic mb-4 opacity-90">
                    "{member.shortBio}"
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-slate-500 group-hover:text-brand-orange transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
                 <a href={member.socials.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={14} /></a>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Join Us Block */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="bg-brand-orange/10 rounded-[3rem] p-8 border border-brand-orange/20 h-full flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange animate-pulse">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Join the Mission</h3>
                <p className="text-slate-400 text-sm mb-6">We're always looking for brilliant minds to join our collective.</p>
                <button className="px-6 py-3 bg-brand-orange text-white rounded-xl font-bold text-sm hover:scale-105 transition-all">
                  View Openings
                </button>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};
