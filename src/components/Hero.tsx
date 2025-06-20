
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          AI Solutions Built Around{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Your Operations</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          From idea to implementation, we craft custom tools that automate, optimize, and unlock value across industries.
        </p>
        <div className="space-x-4">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg">
            Start Your Project
          </Button>
          <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 text-lg rounded-lg">
            Explore Use Cases
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full blur-3xl"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/c31f9c02-847c-4ad3-b078-27f668631981.png" 
              alt="AI Network Sphere" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
