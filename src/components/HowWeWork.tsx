
import React from 'react';

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">How We Work</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Diagnose</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Business process audit</li>
              <li>• Pain point identification</li>
              <li>• Opportunity assessment</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Design</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Solution architecture</li>
              <li>• User experience mapping</li>
              <li>• Technical specifications</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Build</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Agile development</li>
              <li>• Quality assurance</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Deliver</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Deployment & training</li>
              <li>• Support & maintenance</li>
              <li>• Performance monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
