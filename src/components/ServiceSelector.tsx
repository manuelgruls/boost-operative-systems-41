
import React from 'react';
import { servicesData } from "@/data/servicesData";
import ServiceCard from '@/components/ServiceCard';
import ServiceDetails from '@/components/ServiceDetails';

interface ServiceSelectorProps {
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
}

const ServiceSelector = ({ selectedServices, onToggleService }: ServiceSelectorProps) => {
  const [activeService, setActiveService] = React.useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    // Clear all other selections and only select the clicked service
    onToggleService(serviceId);
    setActiveService(serviceId);
  };

  const activeServiceData = servicesData.find(service => service.id === activeService);
  const selectedService = selectedServices.length > 0 ? selectedServices[0] : null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What type of project do you need?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedService === service.id}
              isActive={activeService === service.id}
              onClick={handleServiceClick}
            />
          ))}
        </div>

        {activeServiceData && (
          <ServiceDetails service={activeServiceData} />
        )}
      </div>
    </section>
  );
};

export default ServiceSelector;
