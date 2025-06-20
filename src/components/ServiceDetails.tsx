
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types/Service";

interface ServiceDetailsProps {
  service: Service;
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  return (
    <div className="mt-12 transition-all duration-500 ease-in-out">
      <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4 text-blue-400">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-lg text-gray-300">{service.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Example Use Cases:</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 max-h-80 overflow-y-auto">
                <ul className="space-y-3">
                  {service.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-blue-400 mt-0.5 text-sm">•</div>
                      <span className="text-gray-300 text-sm leading-relaxed">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Key Benefits:</h4>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-green-400 mt-0.5">✓</div>
                      <span className="text-gray-300 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDetails;
