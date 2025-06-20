
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Settings, BarChart, Factory, Bot, Globe } from "lucide-react";

interface ServiceSelectorProps {
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
}

const ServiceSelector = ({ selectedServices, onToggleService }: ServiceSelectorProps) => {
  const [activeService, setActiveService] = React.useState<string | null>(null);

  const services = [
    {
      id: 'automation',
      icon: <Settings className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Automate repetitive workflows and boost your internal efficiency.',
      useCases: [
        'Automated inventory management',
        'Order processing workflows',
        'Quality control checklists'
      ],
      benefits: [
        'Reduce manual errors by 95%',
        'Save 20+ hours per week',
        'Improve process consistency'
      ]
    },
    {
      id: 'analytics',
      icon: <BarChart className="w-8 h-8" />,
      title: 'Dashboards & Analytics',
      description: 'Understand your data in real time to make faster decisions.',
      useCases: [
        'Real-time production monitoring',
        'Performance KPI tracking',
        'Predictive maintenance alerts'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify bottlenecks instantly',
        'Optimize resource allocation'
      ]
    },
    {
      id: 'erp',
      icon: <Factory className="w-8 h-8" />,
      title: 'ERP Custom Modules',
      description: 'Integrate and control your production flow with smart tools.',
      useCases: [
        'Custom production planning',
        'Supply chain integration',
        'Multi-location management'
      ],
      benefits: [
        'Centralize all operations',
        'Improve coordination across teams',
        'Scale operations efficiently'
      ]
    },
    {
      id: 'ai',
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Optimization',
      description: 'Use AI to forecast, simulate, and reduce costs.',
      useCases: [
        'Demand forecasting',
        'Route optimization',
        'Predictive quality control'
      ],
      benefits: [
        'Reduce costs by 15-30%',
        'Improve forecast accuracy',
        'Prevent quality issues'
      ]
    },
    {
      id: 'integration',
      icon: <Globe className="w-8 h-8" />,
      title: 'Web & System Integrations',
      description: 'Connect tools and centralize your operations in the cloud.',
      useCases: [
        'API integrations with existing tools',
        'Cloud migration solutions',
        'Multi-platform synchronization'
      ],
      benefits: [
        'Eliminate data silos',
        'Access from anywhere',
        'Reduce IT maintenance'
      ]
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    onToggleService(serviceId);
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What type of project do you need?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedServices.includes(service.id) 
                  ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/25' 
                  : 'bg-gray-800 border-gray-600 hover:border-blue-400'
              } ${
                activeService === service.id 
                  ? 'ring-2 ring-blue-400 ring-opacity-50' 
                  : ''
              }`}
              onClick={() => handleServiceClick(service.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`flex justify-center mb-4 transition-colors duration-300 ${
                  selectedServices.includes(service.id) || activeService === service.id
                    ? 'text-white' 
                    : 'text-blue-400'
                }`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dynamic Content Block */}
        {activeServiceData && (
          <div className="mt-12 transition-all duration-500 ease-in-out">
            <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4 text-blue-400">
                    {activeServiceData.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{activeServiceData.title}</h3>
                  <p className="text-lg text-gray-300">{activeServiceData.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">Example Use Cases:</h4>
                    <ul className="space-y-2">
                      {activeServiceData.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="text-blue-400 mt-0.5">•</div>
                          <span className="text-gray-300">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {activeServiceData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="text-green-400 mt-0.5">✓</div>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSelector;
