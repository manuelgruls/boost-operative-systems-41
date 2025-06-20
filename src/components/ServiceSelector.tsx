
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Settings, BarChart, Factory, Bot, Globe } from "lucide-react";

interface ServiceSelectorProps {
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
}

const ServiceSelector = ({ selectedServices, onToggleService }: ServiceSelectorProps) => {
  const services = [
    {
      id: 'automation',
      icon: <Settings className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Automate repetitive workflows and boost your internal efficiency.'
    },
    {
      id: 'analytics',
      icon: <BarChart className="w-8 h-8" />,
      title: 'Dashboards & Analytics',
      description: 'Understand your data in real time to make faster decisions.'
    },
    {
      id: 'erp',
      icon: <Factory className="w-8 h-8" />,
      title: 'ERP Custom Modules',
      description: 'Integrate and control your production flow with smart tools.'
    },
    {
      id: 'ai',
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Optimization',
      description: 'Use AI to forecast, simulate, and reduce costs.'
    },
    {
      id: 'integration',
      icon: <Globe className="w-8 h-8" />,
      title: 'Web & System Integrations',
      description: 'Connect tools and centralize your operations in the cloud.'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What type of project do you need?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                selectedServices.includes(service.id) 
                  ? 'bg-blue-600 border-blue-400' 
                  : 'bg-gray-800 border-gray-600 hover:border-blue-400'
              }`}
              onClick={() => onToggleService(service.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 text-blue-400">
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;
