import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Cloud, Shield, Smartphone, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-blue-300"> Innovative IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              NimbusWare LLC delivers cutting-edge technology consulting services that drive digital transformation 
              and accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services/it-consulting" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your unique business challenges and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Code className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-4">Custom web applications built with modern frameworks and best practices.</p>
              <Link to="/services/web-development" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">Scalable cloud infrastructure and migration services for optimal performance.</p>
              <Link to="/services/cloud-solutions" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Comprehensive security solutions to protect your digital assets.</p>
              <Link to="/services/cybersecurity" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Native and cross-platform mobile applications for iOS and Android.</p>
              <Link to="/services/mobile-apps" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">IT Consulting</h3>
              <p className="text-gray-600 mb-4">Strategic technology consulting to align IT with your business goals.</p>
              <Link to="/services/it-consulting" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">End-to-end digital transformation strategies and implementation.</p>
              <Link to="/services/digital-transformation" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose NimbusWare?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proven Expertise</h3>
                    <p className="text-gray-600">15+ years of experience delivering successful IT projects across industries.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Agile Methodology</h3>
                    <p className="text-gray-600">Fast, iterative development process ensuring quick time-to-market.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock technical support and maintenance services.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Solutions</h3>
                    <p className="text-gray-600">Future-proof technologies that grow with your business.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Team collaboration image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how NimbusWare can help accelerate your digital transformation journey.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;