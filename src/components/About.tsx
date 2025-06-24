
import React from 'react';
import { Eye, Layers, TrendingUp, CheckCircle } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              {t('about.title')}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('about.description1')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('about.description2')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.description3')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <CheckCircle className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h4 className="font-semibold text-white mb-2">{t('about.efficiency.title')}</h4>
              <p className="text-sm text-gray-300">{t('about.efficiency.description')}</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <Eye className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h4 className="font-semibold text-white mb-2">{t('about.dataDriven.title')}</h4>
              <p className="text-sm text-gray-300">{t('about.dataDriven.description')}</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h4 className="font-semibold text-white mb-2">{t('about.fastDeploy.title')}</h4>
              <p className="text-sm text-gray-300">{t('about.fastDeploy.description')}</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <Layers className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h4 className="font-semibold text-white mb-2">{t('about.scalable.title')}</h4>
              <p className="text-sm text-gray-300">{t('about.scalable.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
