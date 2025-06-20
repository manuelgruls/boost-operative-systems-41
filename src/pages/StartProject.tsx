import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Settings, BarChart, Factory, Bot, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const StartProject = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      id: 'automation',
      icon: <Settings className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Automate repetitive workflows and boost your internal efficiency.'
    },
    {
      id: 'analytics',
      icon: <BarChart className="w-8 h-8" />,
      title: 'Dashboards & Analytics',
      description: 'Understand your data in real time to make faster decisions.'
    },
    {
      id: 'erp',
      icon: <Factory className="w-8 h-8" />,
      title: 'ERP Custom Modules',
      description: 'Integrate and control your production flow with smart tools.'
    },
    {
      id: 'ai',
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Optimization',
      description: 'Use AI to forecast, simulate, and reduce costs.'
    },
    {
      id: 'integration',
      icon: <Globe className="w-8 h-8" />,
      title: 'Web & System Integrations',
      description: 'Connect tools and centralize your operations in the cloud.'
    }
  ];

  const challenges = [
    'Manual processes',
    'Lack of visibility',
    'Errors or delays',
    'High operating cost',
    'Integration between systems'
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleChallenge = (challenge: string) => {
    setSelectedChallenges(prev => 
      prev.includes(challenge) 
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById('project-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="bg-black text-white min-h-screen">
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          <Link to="/">
            <img 
              src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
              alt="BOOST - Potencializa tus ideas" 
              className="h-14 w-auto"
            />
          </Link>
        </header>
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center max-w-2xl mx-auto px-6">
            <div className="text-6xl mb-8">✅</div>
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-gray-300 mb-8">We'll get in touch within 24 hours to discuss your project.</p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <Link to="/">
          <img 
            src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
            alt="BOOST - Potencializa tus ideas" 
            className="h-14 w-auto"
          />
        </Link>
        <Link to="/">
          <Button variant="ghost" className="text-white hover:text-blue-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Start Your Project with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Boost</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Custom tools powered by AI, built for manufacturing and logistics companies in LATAM.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
          >
            Start Now →
          </Button>
        </div>
      </section>

      {/* Project Category Selector */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What type of project do you need?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                  selectedServices.includes(service.id) 
                    ? 'bg-blue-600 border-blue-400' 
                    : 'bg-gray-800 border-gray-600 hover:border-blue-400'
                }`}
                onClick={() => toggleService(service.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-blue-400">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: '✍️', title: 'Submit your idea', step: '01' },
              { icon: '📞', title: 'We diagnose your need', step: '02' },
              { icon: '🧠', title: 'You receive a plan', step: '03' },
              { icon: '💻', title: 'We build it', step: '04' },
              { icon: '🚀', title: 'You launch + optimize', step: '05' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-sm text-blue-400 font-mono mb-2">{item.step}</div>
                <p className="text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Brief Form */}
      <section id="project-form" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Tell us about your need</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <Input 
                      required
                      className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                      placeholder="Your company name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Role</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-blue-400">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="owner">Owner</SelectItem>
                        <SelectItem value="director">Director</SelectItem>
                        <SelectItem value="ops-manager">Ops Manager</SelectItem>
                        <SelectItem value="it">IT</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input 
                    type="email" 
                    required
                    className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                    placeholder="your@email.com" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp / Phone (Optional)</label>
                  <Input 
                    className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                    placeholder="+1 234 567 8900" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">What's your biggest challenge today?</label>
                  <div className="flex flex-wrap gap-3">
                    {challenges.map((challenge) => (
                      <button
                        key={challenge}
                        type="button"
                        onClick={() => toggleChallenge(challenge)}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                          selectedChallenges.includes(challenge)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {challenge}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Other challenge (Optional)</label>
                  <Textarea 
                    className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                    placeholder="Describe any other challenge..." 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload your process document (Optional)
                    <span className="text-xs text-gray-400 block mt-1">Send us a flow, a photo, or a dashboard — we'll understand it.</span>
                  </label>
                  <Input 
                    type="file" 
                    accept=".pdf,.xlsx,.xls,.jpg,.jpeg,.png"
                    className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 text-lg"
                >
                  Send My Project Brief
                </Button>
              </form>
            </div>

            {/* What You'll Get */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-800/50 border-gray-600 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-white">What You'll Get</h3>
                  <div className="space-y-4">
                    {[
                      'Discovery call with our team',
                      'Draft scope and timeline',
                      'Access to real case studies',
                      'A roadmap tailored to your process'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-green-400 mt-0.5">✅</div>
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">Trusted by companies across LATAM</h3>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <div className="text-gray-400 font-bold text-xl">LPET</div>
            <div className="text-gray-400 font-bold text-xl">PEFNA</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartProject;
