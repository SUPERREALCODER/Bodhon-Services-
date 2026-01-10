
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink, ShieldCheck, Cpu, Code2 } from 'lucide-react';

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
}

const team: TeamMember[] = [
  {
    name: "Arindam Dutta",
    role: "Founding Architect",
    shortBio: "Architecting the bridge between logic and experience.",
    description: "With over a decade in systems design, Arindam leads the technical vision at Bodhon, specializing in high-performance architectures and agentic AI integration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    icon: <Cpu size={20} />,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com"
    }
  },
  {
    name: "Srijita Roy",
    role: "Head of AI Design",
    shortBio: "Transforming complex LLMs into intuitive interfaces.",
    description: "Srijita focuses on Human-AI interaction (HAII), ensuring that our agentic solutions are not just smart, but delightful and accessible for every user.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    icon: <ShieldCheck size={20} />,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com"
    }
  },
  {
    name: "Vikram Mehta",
    role: "Lead Systems Engineer",
    shortBio: "Master of the invisible engine.",
    description: "Vikram ensures our products scale infinitely. His expertise lies in edge computing, real-time data synchronization, and robust backend reliability.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
    icon: <Code2 size={20} />,
    socials: {
      github: "https://github.com",
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
              The Collective
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-white leading-[0.9]"
            >
              Minds Behind the <br /> Intelligent Web.
            </motion.h2>
          </div>
          <p className="text-slate-400 text-lg max-w-sm">
            We are a group of engineers and designers obsessed with the intersection of AI and human experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
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
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-brand-orange shadow-xl">
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
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all">
                        <Twitter size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <div className="text-brand-orange font-black text-[10px] uppercase tracking-widest mb-4">
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
                  <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
