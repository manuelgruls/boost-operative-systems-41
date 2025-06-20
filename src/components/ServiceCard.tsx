
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types/Service";

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  isActive: boolean;
  onClick: (serviceId: string) => void;
}

const ServiceCard = ({ service, isSelected, isActive, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
        isSelected
          ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/25' 
          : 'bg-gray-800 border-gray-600 hover:border-blue-400'
      } ${
        isActive 
          ? 'ring-2 ring-blue-400 ring-opacity-50' 
          : ''
      }`}
      onClick={() => onClick(service.id)}
    >
      <CardContent className="p-6 text-center">
        <div className={`flex justify-center mb-4 transition-colors duration-300 ${
          isSelected || isActive
            ? 'text-white' 
            : 'text-blue-400'
        }`}>
          {service.icon}
        </div>
        <h3 className="font-semibold mb-2 text-white">{service.title}</h3>
        <p className="text-sm text-gray-300">{service.description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
