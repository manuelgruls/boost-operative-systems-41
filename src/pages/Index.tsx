
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Eye, FileText, Layers, Computer } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0e1a] to-[#1a1f2e] text-white min-h-screen font-sans">
      {/* Navigation */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white">Boost</h1>
        <nav className="space-x-8 text-sm">
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Build innovative{" "}
            <span className="text-blue-400">AI applications</span>{" "}
            for your business
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We help companies develop custom AI solutions that drive growth and operational efficiency.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg">
            Get started
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-400/30 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full border border-blue-400/50 flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"></div>
              </div>
              {/* Connection lines */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-300 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Our Mission */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-4xl font-bold mb-6">
              About Us <span className="text-gray-500">/ Our Mission</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We empower businesses by providing cutting-edge AI technology. Fostering innovation with a commitment to ethical practices and impactful results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">Innovation</h4>
                  <p className="text-sm text-gray-400">Produce obvious with a commitment to ethical practices</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400">Predictive Analytics</h4>
                  <p className="text-sm text-gray-400">Drive utilisation</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyan-600/20 rounded-lg">
                  <Computer className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400">Ethics</h4>
                  <p className="text-sm text-gray-400">Improvisos integrate e impactful</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-600/20 rounded-lg">
                  <Layers className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-400">Process Automation</h4>
                  <p className="text-sm text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold mb-16">AI Solutions</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-600/20 rounded-lg mt-1">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-3">Computer Vision</h4>
              <p className="text-gray-300 leading-relaxed">
                We produce acadejobre direction strancy thoughtantigizing amicitl methods of innovation.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-600/20 rounded-lg mt-1">
              <FileText className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-3">Natural Language Processing</h4>
              <p className="text-gray-300 leading-relaxed">
                Fearching innovation with impacts and informed engments results.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-cyan-600/20 rounded-lg mt-1">
              <Layers className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-3">Predictive Analytics</h4>
              <p className="text-gray-300 leading-relaxed">
                Unipur-estimated success and to predictavel ano-reduzida achieved.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-green-600/20 rounded-lg mt-1">
              <Computer className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-3">Process Automation</h4>
              <p className="text-gray-300 leading-relaxed">
                Improving workflow efficiency +90% productivity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & Contact */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Case Studies */}
          <div>
            <h3 className="text-4xl font-bold mb-12">Case Studies</h3>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50">
              <div className="text-sm text-gray-400 mb-2">CLIENTLOGO</div>
              <h4 className="text-2xl font-semibold mb-4">Improving Workflow Efficiency</h4>
              <div className="text-5xl font-bold text-green-400 mb-2">+19%</div>
              <p className="text-gray-300">Productivity increase through AI automation</p>
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-4xl font-bold mb-8">Contact us</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <Input 
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <Input 
                  type="email" 
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea 
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px]" 
                  placeholder="Your message..." 
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-6">
          © {new Date().getFullYear()} Boost. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
