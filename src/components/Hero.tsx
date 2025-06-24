
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          {t('hero.title')}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t('hero.titleHighlight')}
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          {t('hero.description')}
        </p>
        <div>
          <Link to="/start-project">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg">
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-96 h-96">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/bdd802c5-45bc-4cae-93be-dc3d68bfafce.png" 
              alt="AI Network Sphere" 
              className="w-full h-full object-contain mix-blend-screen filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
