
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowWeWork = () => {
  const { t } = useLanguage();

  return (
    <section id="how-we-work" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">{t('howWeWork.title')}</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('howWeWork.diagnose.title')}</h3>
            <div className="text-gray-300 space-y-1 text-left">
              {t('howWeWork.diagnose.items').split('\n').map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('howWeWork.design.title')}</h3>
            <div className="text-gray-300 space-y-1 text-left">
              {t('howWeWork.design.items').split('\n').map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('howWeWork.build.title')}</h3>
            <div className="text-gray-300 space-y-1 text-left">
              {t('howWeWork.build.items').split('\n').map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('howWeWork.deliver.title')}</h3>
            <div className="text-gray-300 space-y-1 text-left">
              {t('howWeWork.deliver.items').split('\n').map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
