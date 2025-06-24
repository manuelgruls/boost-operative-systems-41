
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Let's Build Something Intelligent</h2>
        <div className="bg-gray-700 p-12 rounded-xl border border-gray-600 text-center">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to transform your operations with AI-powered solutions? 
            Our team is here to understand your challenges and build custom tools that deliver real results.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="text-blue-400 text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-400 text-sm">Tailored to your specific needs</p>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-white mb-2">Fast Implementation</h3>
              <p className="text-gray-400 text-sm">From idea to deployment in weeks</p>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400 text-sm">Real impact on your operations</p>
            </div>
          </div>
          <Link to="/start-project">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
              Tell Us About Your Need →
            </Button>
          </Link>
          <p className="text-sm text-gray-400 mt-4">We'll reply within 24 hours with a custom roadmap</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
