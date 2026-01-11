
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Youtube, ChevronDown, DollarSign } from 'lucide-react';

interface ContactProps {
  initialPricingModel?: string;
  initialService?: string;
}

export const ContactSection: React.FC<ContactProps> = ({ initialPricingModel, initialService }) => {
  const [pricingPref, setPricingPref] = useState(initialPricingModel || 'Discuss during consultation');
  const [servicePref, setServicePref] = useState(initialService || 'Agentic AI Development');
  const [budget, setBudget] = useState('');

  // Sync internal state if props change (e.g. user clicks a model in Pricing or Project in Services)
  useEffect(() => {
    if (initialPricingModel) {
      setPricingPref(initialPricingModel);
    }
  }, [initialPricingModel]);

  useEffect(() => {
    if (initialService) {
      setServicePref(initialService);
    }
  }, [initialService]);

  const handlePricingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPricingPref(e.target.value);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setServicePref(e.target.value);
  };

  const socials = [
    { Icon: Github, href: "https://github.com/bodhontech" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/bodhon" },
    { Icon: Youtube, href: "https://youtube.com/@bodhon-hq?si=5pVwo78MT8VmUYIJ" },
  ];

  return (
    <section id="contact" className="py-24 md:py-40 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-orange-600/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Left Side: Info */}
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-8"
            >
              Ready to <br /> Scale?
            </motion.h2>
            <p className="text-slate-400 text-xl mb-12 max-w-md leading-relaxed">
              Have a project in mind? We'd love to hear about it. Our team is ready to transform your ideas into reality.
            </p>

            <div className="space-y-8 mb-12">
              <a 
                href="mailto:bodhon00@gmail.com" 
                className="flex items-start space-x-6 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/5 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-orange-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-orange-500 transition-colors">Email us</h4>
                  <p className="text-slate-400 group-hover:text-slate-200 transition-colors">bodhon00@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/5 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Office</h4>
                  <p className="text-slate-400">Kolkata, India - Global Support</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {socials.map(({ Icon, href }, idx) => (
                <a 
                  key={idx} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all border border-white/5"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl relative"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700 font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700 font-medium" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Service Required</label>
                  <select 
                    value={servicePref}
                    onChange={handleServiceChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer font-medium"
                  >
                    <option className="bg-slate-900" value="Agentic AI Development">Agentic AI Development</option>
                    <option className="bg-slate-900" value="Full-Stack Web Product">Full-Stack Web Product</option>
                    <option className="bg-slate-900" value="Mobile Experience">Mobile Experience</option>
                    <option className="bg-slate-900" value="Strategic Consulting">Strategic Consulting</option>
                  </select>
                  <ChevronDown className="absolute bottom-4 right-0 text-slate-500 pointer-events-none" size={16} />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Pricing Preference</label>
                  <select 
                    value={pricingPref}
                    onChange={handlePricingChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer font-medium"
                  >
                    <option className="bg-slate-900" value="Hourly Basis">Hourly Basis</option>
                    <option className="bg-slate-900" value="Project-Based (Fixed)">Project-Based (Fixed)</option>
                    <option className="bg-slate-900" value="Hybrid Approach">Hybrid Approach</option>
                    <option className="bg-slate-900" value="Discuss during consultation">Discuss during consultation</option>
                    <option className="bg-slate-900" value="Help me decide">Help me decide</option>
                  </select>
                  <ChevronDown className="absolute bottom-4 right-0 text-slate-500 pointer-events-none" size={16} />
                </div>
              </div>

              {/* Dynamic Pricing Input */}
              <AnimatePresence mode="wait">
                {pricingPref === 'Project-Based (Fixed)' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Proposed Budget ($)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-0 bottom-4 text-orange-500" size={18} />
                      <input 
                        type="number" 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="Enter your project budget"
                        className="w-full bg-transparent border-b border-white/10 py-4 pl-7 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700 font-medium" 
                      />
                    </div>
                  </motion.div>
                )}

                {pricingPref === 'Hourly Basis' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shrink-0">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Standard Rate Applied</p>
                      <p className="text-slate-400 text-xs font-medium">Hourly engagement starts at <span className="text-orange-500 font-black">$10/hour</span></p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Your Vision</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your project or specific requirements..."
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700 resize-none font-medium"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-2xl font-black text-lg hover:shadow-[0_0_30px_rgba(255,85,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
