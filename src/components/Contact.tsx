
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">{t('contact.title')}</h2>
        <div className="bg-gray-700 p-12 rounded-xl border border-gray-600 text-center">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {t('contact.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="text-blue-400 text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-white mb-2">{t('contact.custom.title')}</h3>
              <p className="text-gray-400 text-sm">{t('contact.custom.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-white mb-2">{t('contact.fast.title')}</h3>
              <p className="text-gray-400 text-sm">{t('contact.fast.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-white mb-2">{t('contact.proven.title')}</h3>
              <p className="text-gray-400 text-sm">{t('contact.proven.description')}</p>
            </div>
          </div>
          <Link to="/start-project">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
              {t('contact.cta')}
            </Button>
          </Link>
          <p className="text-sm text-gray-400 mt-4">{t('contact.reply')}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
