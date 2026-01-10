
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';

const App: React.FC = () => {
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('Discuss during consultation');
  const [selectedService, setSelectedService] = useState<string>('Agentic AI Development');

  const handleSelectPricing = (model: string) => {
    setSelectedPricingModel(model);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-slate-950 selection:bg-orange-500/30 selection:text-orange-200">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <Projects />
        <About />
        <Pricing onSelectModel={handleSelectPricing} />
        <ContactSection 
          initialPricingModel={selectedPricingModel} 
          initialService={selectedService}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
