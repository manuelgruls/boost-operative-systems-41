
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Eye, FileText, Layers, Computer, Globe, Target, Settings, TrendingUp, CheckCircle, ArrowUp } from "lucide-react";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <img 
          src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
          alt="BOOST - Potencializa tus ideas" 
          className="h-23 w-auto"
        />
        <nav className="space-x-8 text-sm font-medium">
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#how-we-work" className="hover:text-blue-400 transition-colors">How We Work</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
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
            {/* Background blur effect that matches the uploaded image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full blur-3xl"></div>
            {/* Main sphere image */}
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

      {/* Our Services */}
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
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3">
              View All Use Cases
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
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

      {/* Solution Highlights */}
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

      {/* About BOOST */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Your AI Partner for Smarter Operations
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                BOOST is a specialized AI and automation studio focused on helping companies unlock performance through tailored digital tools. We bridge the gap between complex data and real-world decision-making by designing scalable, efficient, and high-impact solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're optimizing a supply chain, digitizing operations, or building predictive systems — BOOST delivers tools that make your business faster, leaner, and more intelligent.
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

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <img 
              src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
              alt="BOOST" 
              className="h-12 w-auto opacity-80"
            />
            <div className="flex space-x-8 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
            <button 
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center text-gray-400 text-sm mt-8">
            © {new Date().getFullYear()} BOOST. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
