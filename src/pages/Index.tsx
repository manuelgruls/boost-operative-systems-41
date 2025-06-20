
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import SolutionHighlights from '@/components/SolutionHighlights';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <SolutionHighlights />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
