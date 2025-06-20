
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Target, Computer, TrendingUp, Settings } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          Strategic AI, Custom-Built for Real-World Ops
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <CardTitle className="text-xl font-semibold mb-3 text-white">
              AI Strategy & Opportunity Mapping
            </CardTitle>
            <p className="text-gray-300">
              Identify high-impact automation opportunities and develop comprehensive AI roadmaps tailored to your business goals.
            </p>
          </Card>
          
          <Card className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
              <Computer className="w-8 h-8 text-purple-400" />
            </div>
            <CardTitle className="text-xl font-semibold mb-3 text-white">
              Custom Tool & Dashboard Development
            </CardTitle>
            <p className="text-gray-300">
              Build bespoke applications and interactive dashboards that transform complex data into actionable insights.
            </p>
          </Card>
          
          <Card className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <CardTitle className="text-xl font-semibold mb-3 text-white">
              Process Optimization via AI
            </CardTitle>
            <p className="text-gray-300">
              Streamline workflows and eliminate bottlenecks using machine learning and intelligent automation solutions.
            </p>
          </Card>
          
          <Card className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
              <Settings className="w-8 h-8 text-purple-400" />
            </div>
            <CardTitle className="text-xl font-semibold mb-3 text-white">
              ERP/Data Integration & Automation
            </CardTitle>
            <p className="text-gray-300">
              Seamlessly connect disparate systems and automate data flows for enhanced operational efficiency.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
