
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
        'Automated inventory management and stock alerts',
        'Order processing workflows from quote to delivery',
        'Quality control checklists and inspection tracking',
        'Employee onboarding and training workflows',
        'Supplier evaluation and procurement processes',
        'Customer service ticket routing and resolution',
        'Financial approval workflows and budget tracking',
        'Document generation and contract management',
        'Production scheduling and resource allocation',
        'Maintenance request processing and tracking'
      ],
      benefits: [
        'Reduce manual errors by 95%',
        'Save 20+ hours per week',
        'Improve process consistency',
        'Increase operational efficiency by 40%',
        'Enhance compliance and audit trails'
      ]
    },
    {
      id: 'analytics',
      icon: <BarChart className="w-8 h-8" />,
      title: 'Dashboards & Analytics',
      description: 'Understand your data in real time to make faster decisions.',
      useCases: [
        'Real-time production monitoring and alerts',
        'Performance KPI tracking and reporting',
        'Predictive maintenance alerts and scheduling',
        'Sales pipeline analysis and forecasting',
        'Customer behavior tracking and segmentation',
        'Financial performance monitoring and budgeting',
        'Supply chain visibility and optimization',
        'Quality metrics tracking and trend analysis',
        'Employee productivity and performance analytics',
        'Market trend analysis and competitive intelligence'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify bottlenecks instantly',
        'Optimize resource allocation',
        'Increase revenue by 25% through insights',
        'Reduce downtime with predictive analytics'
      ]
    },
    {
      id: 'erp',
      icon: <Factory className="w-8 h-8" />,
      title: 'ERP Custom Modules',
      description: 'Integrate and control your production flow with smart tools.',
      useCases: [
        'Custom production planning and scheduling',
        'Supply chain integration and management',
        'Multi-location inventory synchronization',
        'Customer relationship management integration',
        'Financial accounting and reporting modules',
        'Human resources and payroll management',
        'Project management and resource planning',
        'Vendor management and procurement tracking',
        'Compliance management and regulatory reporting',
        'Asset management and depreciation tracking'
      ],
      benefits: [
        'Centralize all operations in one platform',
        'Improve coordination across teams',
        'Scale operations efficiently',
        'Reduce operational costs by 30%',
        'Enhance data accuracy and consistency'
      ]
    },
    {
      id: 'ai',
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Optimization',
      description: 'Use AI to forecast, simulate, and reduce costs.',
      useCases: [
        'Demand forecasting and inventory optimization',
        'Route optimization for delivery and logistics',
        'Predictive quality control and defect detection',
        'Dynamic pricing optimization and strategy',
        'Customer churn prediction and retention',
        'Fraud detection and risk assessment',
        'Energy consumption optimization and monitoring',
        'Workforce planning and skill gap analysis',
        'Market sentiment analysis and trend prediction',
        'Automated content generation and personalization'
      ],
      benefits: [
        'Reduce costs by 15-30%',
        'Improve forecast accuracy by 80%',
        'Prevent quality issues before they occur',
        'Increase customer satisfaction by 35%',
        'Optimize decision-making with AI insights'
      ]
    },
    {
      id: 'integration',
      icon: <Globe className="w-8 h-8" />,
      title: 'Web & System Integrations',
      description: 'Connect tools and centralize your operations in the cloud.',
      useCases: [
        'API integrations with existing business tools',
        'Cloud migration and modernization solutions',
        'Multi-platform data synchronization',
        'E-commerce platform integrations',
        'Payment gateway and financial system connections',
        'CRM and marketing automation integrations',
        'Social media and communication platform links',
        'Third-party service and vendor integrations',
        'Mobile app and web application connectivity',
        'Legacy system modernization and bridge solutions'
      ],
      benefits: [
        'Eliminate data silos completely',
        'Access systems from anywhere',
        'Reduce IT maintenance costs by 50%',
        'Improve data flow and accuracy',
        'Enable seamless team collaboration'
      ]
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    // Clear all other selections and only select the clicked service
    onToggleService(serviceId);
    setActiveService(serviceId);
  };

  const activeServiceData = services.find(service => service.id === activeService);
  const selectedService = selectedServices.length > 0 ? selectedServices[0] : null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What type of project do you need?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedService === service.id
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
                  selectedService === service.id || activeService === service.id
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

        {/* Dynamic Content Block - Increased Size */}
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

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">Example Use Cases:</h4>
                    <div className="bg-gray-900/50 rounded-lg p-4 max-h-80 overflow-y-auto">
                      <ul className="space-y-3">
                        {activeServiceData.useCases.map((useCase, index) => (
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
                        {activeServiceData.benefits.map((benefit, index) => (
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
        )}
      </div>
    </section>
  );
};

export default ServiceSelector;
