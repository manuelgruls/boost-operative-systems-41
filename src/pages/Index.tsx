
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
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Navigation */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <img 
          src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
          alt="BOOST - Potencializa tus ideas" 
          className="h-32 w-auto"
        />
        <nav className="space-x-8 text-sm font-medium">
          <a href="#services" className="hover:text-[#009999] transition-colors">Services</a>
          <a href="#how-we-work" className="hover:text-[#009999] transition-colors">How We Work</a>
          <a href="#about" className="hover:text-[#009999] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#009999] transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#1A1A1A]">
            AI Solutions Built Around{" "}
            <span className="text-[#009999]">Your Operations</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            From idea to implementation, we craft custom tools that automate, optimize, and unlock value across industries.
          </p>
          <div className="space-x-4">
            <Button className="bg-[#009999] hover:bg-[#007777] text-white px-8 py-4 text-lg rounded-lg">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-[#009999] text-[#009999] hover:bg-[#009999] hover:text-white px-8 py-4 text-lg rounded-lg">
              Explore Use Cases
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-[#009999]/20 to-[#009999]/10 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-[#009999]/10 to-[#009999]/5 rounded-full border border-[#009999]/30 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-[#009999]/20 to-[#009999]/10 rounded-full border border-[#009999]/50 flex items-center justify-center">
                <Globe className="w-24 h-24 text-[#009999] animate-pulse" />
              </div>
              {/* Connection nodes */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#009999] rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#009999]/70 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#009999]/70 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#009999] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="bg-[#F4F4F4] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#1A1A1A]">
            Strategic AI, Custom-Built for Real-World Ops
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#009999]/10 rounded-lg w-fit mb-4">
                <Target className="w-8 h-8 text-[#009999]" />
              </div>
              <CardTitle className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                AI Strategy & Opportunity Mapping
              </CardTitle>
              <p className="text-gray-600">
                Identify high-impact automation opportunities and develop comprehensive AI roadmaps tailored to your business goals.
              </p>
            </Card>
            
            <Card className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#009999]/10 rounded-lg w-fit mb-4">
                <Computer className="w-8 h-8 text-[#009999]" />
              </div>
              <CardTitle className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                Custom Tool & Dashboard Development
              </CardTitle>
              <p className="text-gray-600">
                Build bespoke applications and interactive dashboards that transform complex data into actionable insights.
              </p>
            </Card>
            
            <Card className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#009999]/10 rounded-lg w-fit mb-4">
                <TrendingUp className="w-8 h-8 text-[#009999]" />
              </div>
              <CardTitle className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                Process Optimization via AI
              </CardTitle>
              <p className="text-gray-600">
                Streamline workflows and eliminate bottlenecks using machine learning and intelligent automation solutions.
              </p>
            </Card>
            
            <Card className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#009999]/10 rounded-lg w-fit mb-4">
                <Settings className="w-8 h-8 text-[#009999]" />
              </div>
              <CardTitle className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                ERP/Data Integration & Automation
              </CardTitle>
              <p className="text-gray-600">
                Seamlessly connect disparate systems and automate data flows for enhanced operational efficiency.
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#009999] text-[#009999] hover:bg-[#009999] hover:text-white px-8 py-3">
              View All Use Cases
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#1A1A1A]">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009999] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">Diagnose</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Business process audit</li>
                <li>• Pain point identification</li>
                <li>• Opportunity assessment</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009999] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">Design</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Solution architecture</li>
                <li>• User experience mapping</li>
                <li>• Technical specifications</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009999] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">Build</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Agile development</li>
                <li>• Quality assurance</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009999] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">Deliver</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Deployment & training</li>
                <li>• Support & maintenance</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Highlights */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl">
              <div className="text-4xl font-bold text-[#009999] mb-2">+50%</div>
              <p className="text-gray-600 font-medium">Uptime Improvement</p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="text-4xl font-bold text-[#009999] mb-2">30%</div>
              <p className="text-gray-600 font-medium">Time-to-Decision Reduction</p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="text-4xl font-bold text-[#009999] mb-2">40%</div>
              <p className="text-gray-600 font-medium">Adoption Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About BOOST */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#1A1A1A]">
                Your AI Partner for Smarter Operations
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                BOOST is a specialized AI and automation studio focused on helping companies unlock performance through tailored digital tools. We bridge the gap between complex data and real-world decision-making by designing scalable, efficient, and high-impact solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're optimizing a supply chain, digitizing operations, or building predictive systems — BOOST delivers tools that make your business faster, leaner, and more intelligent.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6">
                <CheckCircle className="w-12 h-12 text-[#009999] mb-4 mx-auto" />
                <h4 className="font-semibold text-[#1A1A1A] mb-2">Built for Efficiency</h4>
                <p className="text-sm text-gray-600">Streamlined solutions that maximize impact</p>
              </div>
              <div className="text-center p-6">
                <Eye className="w-12 h-12 text-[#009999] mb-4 mx-auto" />
                <h4 className="font-semibold text-[#1A1A1A] mb-2">Data-Driven by Design</h4>
                <p className="text-sm text-gray-600">Every decision backed by intelligent insights</p>
              </div>
              <div className="text-center p-6">
                <TrendingUp className="w-12 h-12 text-[#009999] mb-4 mx-auto" />
                <h4 className="font-semibold text-[#1A1A1A] mb-2">Fast-to-Deploy Tools</h4>
                <p className="text-sm text-gray-600">Rapid implementation for immediate value</p>
              </div>
              <div className="text-center p-6">
                <Layers className="w-12 h-12 text-[#009999] mb-4 mx-auto" />
                <h4 className="font-semibold text-[#1A1A1A] mb-2">Scalable by Nature</h4>
                <p className="text-sm text-gray-600">Solutions that grow with your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#F4F4F4] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#1A1A1A]">Let's Build Something Intelligent</h2>
          <form className="space-y-6 bg-white p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input 
                  className="border-gray-300 focus:border-[#009999] focus:ring-[#009999]" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <Input 
                  className="border-gray-300 focus:border-[#009999] focus:ring-[#009999]" 
                  placeholder="Your company" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input 
                type="email" 
                className="border-gray-300 focus:border-[#009999] focus:ring-[#009999]" 
                placeholder="your@email.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Challenge or Idea</label>
              <Textarea 
                className="border-gray-300 focus:border-[#009999] focus:ring-[#009999] min-h-[120px]" 
                placeholder="Tell us about your project or challenge..." 
              />
            </div>
            <Button className="w-full bg-[#009999] hover:bg-[#007777] text-white py-3 text-lg">
              Send Message
            </Button>
            <p className="text-sm text-gray-500 text-center">Thanks! We'll reply in 24 hours.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <img 
              src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
              alt="BOOST" 
              className="h-12 w-auto opacity-80"
            />
            <div className="flex space-x-8 text-sm">
              <a href="#" className="hover:text-[#009999] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#009999] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#009999] transition-colors">LinkedIn</a>
            </div>
            <button 
              onClick={scrollToTop}
              className="p-3 bg-[#009999] rounded-full hover:bg-[#007777] transition-colors"
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
