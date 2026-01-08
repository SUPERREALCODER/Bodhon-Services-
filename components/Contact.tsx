
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
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
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/5 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email us</h4>
                  <p className="text-slate-400">hello@bodhon.in</p>
                </div>
              </div>
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
              {[Twitter, Github, Linkedin, Instagram].map((Icon, idx) => (
                <button key={idx} className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all border border-white/5">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl relative"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                <select className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option className="bg-slate-900">Agentic AI Development</option>
                  <option className="bg-slate-900">Full-Stack Web Product</option>
                  <option className="bg-slate-900">Mobile Experience</option>
                  <option className="bg-slate-900">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Your Vision</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700 resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-2xl font-black text-lg hover:shadow-[0_0_30px_rgba(255,85,0,0.4)] transition-all transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
