
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
      className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
