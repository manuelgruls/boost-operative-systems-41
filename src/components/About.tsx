
import React from 'react';
import { Eye, Layers, TrendingUp, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              About BOOST
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Boost is a technology consultancy focused on transforming operations for manufacturing and logistics companies through intelligent systems. We specialize in developing custom tools powered by automation, artificial intelligence, and real-time data analytics to help businesses optimize their processes, reduce inefficiencies, and make faster, smarter decisions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our modular solutions are designed to integrate seamlessly into existing workflows, enabling better planning, clearer visibility, and measurable impact across key areas like production, warehousing, and distribution.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong commercial focus, Boost delivers not just technology — but business value. We partner with our clients to understand their goals, build scalable tools around their needs, and ensure every solution supports growth, profitability, and long-term competitiveness in an evolving market.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <CheckCircle className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h4 className="font-semibold text-white mb-2">Built for Efficiency</h4>
              <p className="text-sm text-gray-300">Streamlined solutions that maximize impact</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <Eye className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h4 className="font-semibold text-white mb-2">Data-Driven by Design</h4>
              <p className="text-sm text-gray-300">Every decision backed by intelligent insights</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h4 className="font-semibold text-white mb-2">Fast-to-Deploy Tools</h4>
              <p className="text-sm text-gray-300">Rapid implementation for immediate value</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <Layers className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h4 className="font-semibold text-white mb-2">Scalable by Nature</h4>
              <p className="text-sm text-gray-300">Solutions that grow with your business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
