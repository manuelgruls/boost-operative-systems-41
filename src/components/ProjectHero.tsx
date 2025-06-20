
import React from 'react';
import { Button } from "@/components/ui/button";

interface ProjectHeroProps {
  onScrollToForm: () => void;
}

const ProjectHero = ({ onScrollToForm }: ProjectHeroProps) => {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          Start Your Project with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Boost</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Custom tools powered by AI, built for manufacturing and logistics companies.
        </p>
        <Button 
          onClick={onScrollToForm}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
        >
          Start Now →
        </Button>
      </div>
    </section>
  );
};

export default ProjectHero;
