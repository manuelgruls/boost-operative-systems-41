
import React from 'react';
import { ArrowUp } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
            alt="BOOST" 
            className="h-12 w-auto opacity-80"
          />
          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.linkedin')}</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        <div className="text-center text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} BOOST. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
