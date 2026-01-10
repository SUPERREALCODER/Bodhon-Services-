
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Briefcase, Zap, Check, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingModel {
  id: string;
  title: string;
  subtitle: string;
  bestFor: string;
  howItWorks: string;
  benefits: string[];
  icon: React.ReactNode;
  highlight?: boolean;
}

const pricingModels: PricingModel[] = [
  {
    id: "Hourly Basis",
    title: "Hourly Basis",
    subtitle: "Agile & Adaptive",
    bestFor: "Ongoing work, troubleshooting, or evolving scope.",
    howItWorks: "Billed per hour of active development. Standardized time tracking with weekly reports.",
    benefits: ["Extreme flexibility", "Pay-as-you-go logic", "Direct access to talent"],
    icon: <Clock size={28} />
  },
  {
    id: "Project-Based (Fixed)",
    title: "Project-Based",
    subtitle: "Milestone Driven",
    bestFor: "Well-defined deliverables and MVPs.",
    howItWorks: "A fixed budget agreed upon before the start. 50% upfront, 50% upon deployment.",
    benefits: ["Predictable investment", "Clear delivery roadmap", "Efficiency rewarded"],
    icon: <Briefcase size={28} />
  },
  {
    id: "Hybrid Approach",
    title: "Hybrid Approach",
    subtitle: "Enterprise Standard",
    bestFor: "Large-scale systems with mixed scope.",
    howItWorks: "Fixed budget for core infrastructure + hourly billing for research and scope shifts.",
    benefits: ["Maximum risk mitigation", "Scalable resources", "Optimized alignment"],
    icon: <Zap size={28} />,
    highlight: true
  }
];

interface PricingProps {
  onSelectModel: (modelId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectModel }) => {
  return (
    <section id="pricing" className="py-24 md:py-40 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-brand-orange/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange font-bold tracking-[0.3em] uppercase text-sm mb-6"
          >
            Engagement Models
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-8"
          >
            Transparent Value. <br /> Zero Friction.
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the collaboration framework that aligns with your technical roadmap and business objectives.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${
                model.highlight 
                  ? 'bg-brand-orange/10 border-brand-orange/30 shadow-[0_20px_60px_-15px_rgba(255,85,0,0.15)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {model.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  Recommended
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                model.highlight ? 'bg-brand-orange text-white' : 'bg-white/5 text-brand-orange'
              }`}>
                {model.icon}
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">{model.title}</h3>
              <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-6">{model.subtitle}</p>
              
              <div className="space-y-6 mb-10 flex-grow">
                <div>
                  <h4 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center">
                    <HelpCircle size={12} className="mr-2" /> Best For
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{model.bestFor}</p>
                </div>
                
                <div>
                  <h4 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center">
                    <ShieldCheck size={12} className="mr-2" /> Benefits
                  </h4>
                  <ul className="space-y-2">
                    {model.benefits.map(benefit => (
                      <li key={benefit} className="flex items-center text-slate-400 text-sm">
                        <Check size={14} className="text-brand-orange mr-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => onSelectModel(model.id)}
                className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center space-x-2 ${
                  model.highlight 
                    ? 'bg-white text-slate-950 hover:bg-slate-100' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>Select Model</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
