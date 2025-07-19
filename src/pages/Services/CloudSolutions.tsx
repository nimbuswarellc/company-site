import React from 'react';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudSolutions = () => {
  const services = [
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Cloud Migration",
      description: "Seamless migration of your existing infrastructure to cloud platforms with minimal downtime."
    },
    {
      icon: <Server className="h-8 w-8 text-green-600" />,
      title: "Infrastructure as Code",
      description: "Automated infrastructure deployment and management using modern DevOps practices."
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Data Management",
      description: "Secure cloud storage, backup, and disaster recovery solutions for your critical data."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance with industry standards."
    }
  ];

  const platforms = ["AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud", "DigitalOcean"];

  const benefits = [
    "Reduced IT costs by up to 40%",
    "99.9% uptime guarantee",
    "Scalable resources on demand",
    "Enhanced security and compliance",
    "24/7 monitoring and support",
    "Disaster recovery capabilities",
    "Global accessibility",
    "Automatic updates and patches"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure solutions.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Start Cloud Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Platforms We Support</h2>
            <p className="text-lg text-gray-600">
              Certified experts in all major cloud platforms and services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 px-4 py-6 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <span className="font-semibold text-gray-900">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Cloud Solutions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Cloud computing offers unprecedented flexibility, scalability, and cost savings for businesses of all sizes.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Cloud infrastructure diagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Migration Process</h2>
            <p className="text-lg text-gray-600">
              Our proven methodology ensures a smooth transition to the cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">Evaluate current infrastructure and identify migration opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">Develop comprehensive migration strategy and timeline.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Migration</h3>
              <p className="text-gray-600">Execute migration with minimal business disruption.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">Fine-tune performance and optimize costs post-migration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our cloud experts help you design and implement the perfect cloud strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Cloud Assessment
            </Link>
            <Link 
              to="/company/why-choose-us" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;