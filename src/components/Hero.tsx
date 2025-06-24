
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        <div>
          <Link to="/start-project">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full blur-3xl"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/bdd802c5-45bc-4cae-93be-dc3d68bfafce.png" 
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
