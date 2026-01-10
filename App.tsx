
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 selection:bg-orange-500/30 selection:text-orange-200">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
