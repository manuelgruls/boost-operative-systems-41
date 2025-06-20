
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
      <img 
        src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
        alt="BOOST - Potencializa tus ideas" 
        className="h-20 w-auto"
      />
      <nav className="space-x-6 text-sm font-medium">
        <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
        <a href="#how-we-work" className="hover:text-blue-400 transition-colors">How We Work</a>
        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
