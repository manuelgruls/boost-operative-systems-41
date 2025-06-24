
import React from 'react';
import { useScroll } from '@/contexts/ScrollContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { scrollY, scrollProgress } = useScroll();
  const { t } = useLanguage();
  
  const headerOpacity = Math.max(0.9, 1 - scrollProgress * 0.3);
  const headerScale = Math.max(0.95, 1 - scrollProgress * 0.05);
  const borderOpacity = Math.min(1, scrollY / 100);

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-sm border-b transition-all duration-300 w-full"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${headerOpacity})`,
        transform: `scale(${headerScale})`,
        borderBottomColor: `rgba(156, 163, 175, ${borderOpacity})`
      }}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        <img 
          src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
          alt="BOOST - Potencializa tus ideas" 
          className="h-16 sm:h-20 lg:h-24 w-auto transition-all duration-300 hover:scale-105"
        />
        <nav className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm font-medium">
          <a 
            href="#services" 
            className="hover:text-blue-400 transition-all duration-300 hover:scale-110 inline-block hidden sm:inline-block"
          >
            {t('nav.services')}
          </a>
          <a 
            href="#how-we-work" 
            className="hover:text-purple-400 transition-all duration-300 hover:scale-110 inline-block hidden md:inline-block"
          >
            {t('nav.howWeWork')}
          </a>
          <a 
            href="#about" 
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block hidden sm:inline-block"
          >
            {t('nav.about')}
          </a>
          <a 
            href="#contact" 
            className="hover:text-pink-400 transition-all duration-300 hover:scale-110 inline-block"
          >
            {t('nav.contact')}
          </a>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
