
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Let's Build Something Intelligent</h2>
        <form className="space-y-6 bg-gray-700 p-8 rounded-xl border border-gray-600">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <Input 
                className="bg-gray-600 border-gray-500 text-white focus:border-blue-400 focus:ring-blue-400" 
                placeholder="Your name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
              <Input 
                className="bg-gray-600 border-gray-500 text-white focus:border-blue-400 focus:ring-blue-400" 
                placeholder="Your company" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <Input 
              type="email" 
              className="bg-gray-600 border-gray-500 text-white focus:border-blue-400 focus:ring-blue-400" 
              placeholder="your@email.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Challenge or Idea</label>
            <Textarea 
              className="bg-gray-600 border-gray-500 text-white focus:border-blue-400 focus:ring-blue-400 min-h-[120px]" 
              placeholder="Tell us about your project or challenge..." 
            />
          </div>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg">
            Send Message
          </Button>
          <p className="text-sm text-gray-400 text-center">Thanks! We'll reply in 24 hours.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
