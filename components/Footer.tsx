
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Bodhon</span>
          </div>
          <p className="text-slate-500 text-sm">Forging the Intelligent Web. All rights reserved.</p>
        </div>

        <div className="flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>

        <div className="text-slate-500 text-sm font-medium">
          &copy; {currentYear} Bodhon Agency
        </div>
      </div>
    </footer>
  );
};
