
import React from 'react';

const SolutionHighlights = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-700 p-8 rounded-xl border border-gray-600">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">+50%</div>
            <p className="text-gray-300 font-medium">Uptime Improvement</p>
          </div>
          <div className="bg-gray-700 p-8 rounded-xl border border-gray-600">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">30%</div>
            <p className="text-gray-300 font-medium">Time-to-Decision Reduction</p>
          </div>
          <div className="bg-gray-700 p-8 rounded-xl border border-gray-600">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">40%</div>
            <p className="text-gray-300 font-medium">Adoption Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHighlights;
