
import React from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="text-white hover:text-blue-400 hover:bg-white/10 transition-all duration-300 flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 border border-white/20 rounded-lg backdrop-blur-sm"
    >
      <Languages className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="text-xs sm:text-sm font-medium">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
