import React from 'react';
import { Code, Smartphone, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const technologies = [
    "React", "Vue.js", "Angular", "Node.js", "Python", "PHP", 
    "MongoDB", "PostgreSQL", "AWS", "Docker", "TypeScript", "GraphQL"
  ];

  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Custom Development",
      description: "Tailored web applications built from scratch to meet your specific business requirements."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring optimal viewing experience across all devices and screen sizes."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Modern Frameworks",
      description: "Leveraging the latest web technologies and frameworks for robust, scalable solutions."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Performance Optimization",
      description: "Fast-loading websites optimized for speed, SEO, and exceptional user experience."
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a comprehensive online marketplace with payment integration, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      result: "300% increase in online sales"
    },
    {
      title: "Healthcare Portal",
      description: "Developed a patient management system with appointment scheduling, medical records, and telemedicine features.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
      result: "50% reduction in administrative overhead"
    },
    {
      title: "Financial Dashboard",
      description: "Created a real-time analytics platform for tracking investments, portfolio performance, and market trends.",
      technologies: ["Angular", "Node.js", "GraphQL", "D3.js"],
      result: "Real-time data processing for 10,000+ users"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Create powerful, scalable web applications that drive business growth and deliver exceptional user experiences.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Web Development Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver web solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600">
              We stay current with the latest web development technologies and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 px-4 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <span className="font-medium text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures quality, efficiency, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Planning</h3>
              <p className="text-gray-600">Understanding your requirements, goals, and technical specifications.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Prototyping</h3>
              <p className="text-gray-600">Creating wireframes, mockups, and interactive prototypes for validation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development & Testing</h3>
              <p className="text-gray-600">Agile development with continuous testing and quality assurance.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Launch & Support</h3>
              <p className="text-gray-600">Deployment, monitoring, and ongoing maintenance and support.</p>
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
              Real projects, real results. See how we've helped businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">{project.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Web Solution?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your web development needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/company/team" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;