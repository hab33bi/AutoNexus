import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section components
import HeroSection from './components/sections/HeroSection';
import FeatureSection from './components/sections/FeatureSection';
import InteractiveDemo from './components/sections/InteractiveDemo';
import MetricsSection from './components/sections/MetricsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CtaSection from './components/sections/CtaSection';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Auto Nexus - Revolutionizing Car Dealership Operations';
  }, []);

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        <main>
          <HeroSection />
          <FeatureSection />
          <InteractiveDemo />
          <MetricsSection />
          <TestimonialsSection />
          <CtaSection />
        </main>
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;