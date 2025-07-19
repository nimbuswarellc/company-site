import React from 'react';
import { Smartphone, Apple, Cuboid as Android, Zap, CheckCircle, ArrowRight, Code, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileApps = () => {
  const platforms = [
    {
      icon: <Apple className="h-8 w-8 text-gray-800" />,
      name: "iOS Development",
      description: "Native iOS apps using Swift and Objective-C for optimal performance and user experience."
    },
    {
      icon: <Android className="h-8 w-8 text-green-600" />,
      name: "Android Development", 
      description: "Native Android apps using Kotlin and Java for seamless integration with Google services."
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      name: "Cross-Platform",
      description: "React Native and Flutter apps that work across both iOS and Android platforms."
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      name: "Progressive Web Apps",
      description: "Web-based apps that provide native-like experiences across all devices."
    }
  ];

  const features = [
    "Custom UI/UX Design",
    "API Integration",
    "Push Notifications",
    "Offline Functionality",
    "App Store Optimization",
    "Analytics Integration",
    "Security Implementation",
    "Performance Optimization"
  ];

  const projects = [
    {
      title: "Healthcare Mobile App",
      description: "Patient management app with appointment scheduling, medical records, and telemedicine features.",
      platform: "iOS & Android",
      downloads: "50K+ Downloads"
    },
    {
      title: "E-commerce Mobile App",
      description: "Shopping app with payment integration, inventory tracking, and customer analytics.",
      platform: "React Native",
      downloads: "100K+ Downloads"
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive fitness app with workout tracking, nutrition planning, and social features.",
      platform: "Flutter",
      downloads: "75K+ Downloads"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Create powerful, user-friendly mobile applications that engage your customers and drive business growth across all platforms.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Start Your App Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platforms We Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We develop for all major mobile platforms using the latest technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Mobile Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                From concept to app store, we handle every aspect of mobile app development with expertise and attention to detail.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Mobile app mockups</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures your app meets user expectations and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Define goals, target audience, and feature requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Create wireframes, prototypes, and visual designs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Build the app using agile development practices.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">Comprehensive testing across devices and platforms.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">App store submission and post-launch support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Mobile apps we've built that have made a real impact for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Platform:</span>
                    <span className="text-sm text-gray-600">{project.platform}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Success:</span>
                    <span className="text-sm text-green-600 font-medium">{project.downloads}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's turn your mobile app idea into reality with our expert development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/services/web-development" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;