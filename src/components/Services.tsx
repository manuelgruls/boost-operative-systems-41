
import React from 'react';
import { Card, CardTitle } from "@/components/ui/card";
import { Target, Computer, TrendingUp, Settings } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          {t('services.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <CardTitle className="text-xl font-semibold mb-3 text-white">
              {t('services.strategy.title')}
            </CardTitle>
            <p className="text-gray-300">
              {t('services.strategy.description')}
            </p>
          </Card>
          
          <Card className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
              <Computer className="w-8 h-8 text-purple-400" />
            </div>
            <CardTitle className="text-xl font-semibold mb-3 text-white">
              {t('services.tools.title')}
            </CardTitle>
            <p className="text-gray-300">
              {t('services.tools.description')}
            </p>
          </Card>
          
          <Card className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <CardTitle className="text-xl font-semibold mb-3 text-white">
              {t('services.optimization.title')}
            </CardTitle>
            <p className="text-gray-300">
              {t('services.optimization.description')}
            </p>
          </Card>
          
          <Card className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
              <Settings className="w-8 h-8 text-purple-400" />
            </div>
            <CardTitle className="text-xl font-semibold mb-3 text-white">
              {t('services.integration.title')}
            </CardTitle>
            <p className="text-gray-300">
              {t('services.integration.description')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
