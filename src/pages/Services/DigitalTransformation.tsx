import React from 'react';
import { Zap, Target, Users, BarChart, CheckCircle, ArrowRight, Lightbulb, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalTransformation = () => {
  const pillars = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "People & Culture",
      description: "Transform organizational culture and empower teams with digital skills and mindset."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Process Innovation",
      description: "Redesign business processes to leverage digital technologies for maximum efficiency."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Technology Integration",
      description: "Implement cutting-edge technologies that enable new business models and capabilities."
    },
    {
      icon: <BarChart className="h-8 w-8 text-orange-600" />,
      title: "Data-Driven Insights",
      description: "Harness the power of data analytics to make informed decisions and drive growth."
    }
  ];

  const benefits = [
    "Increased operational efficiency by 50%",
    "Enhanced customer experience and satisfaction",
    "New revenue streams and business models",
    "Improved decision-making with real-time data",
    "Greater agility and market responsiveness",
    "Reduced operational costs and waste",
    "Enhanced competitive advantage",
    "Future-ready scalable infrastructure"
  ];

  const phases = [
    {
      phase: "Assessment",
      description: "Evaluate current digital maturity and identify transformation opportunities.",
      duration: "2-4 weeks"
    },
    {
      phase: "Strategy",
      description: "Develop comprehensive digital transformation roadmap and business case.",
      duration: "4-6 weeks"
    },
    {
      phase: "Pilot",
      description: "Implement pilot projects to validate approach and demonstrate value.",
      duration: "8-12 weeks"
    },
    {
      phase: "Scale",
      description: "Roll out transformation initiatives across the organization.",
      duration: "6-18 months"
    },
    {
      phase: "Optimize",
      description: "Continuous improvement and optimization of digital capabilities.",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Transformation</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your business for the digital age with comprehensive strategies that drive innovation, efficiency, and growth.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Start Transformation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Four Pillars of Digital Transformation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our holistic approach addresses all aspects of digital transformation for sustainable success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Business Impact</h2>
              <p className="text-lg text-gray-600 mb-8">
                Digital transformation isn't just about technology—it's about reimagining how your business creates value in the digital economy.
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
              <span className="text-gray-500 text-lg">Digital transformation visualization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transformation Methodology</h2>
            <p className="text-lg text-gray-600">
              A proven, phased approach that minimizes risk while maximizing business value.
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                      <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                    </div>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enabling Technologies</h2>
            <p className="text-lg text-gray-600">
              We leverage cutting-edge technologies to power your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["AI & Machine Learning", "Cloud Computing", "IoT & Edge Computing", "Blockchain", "Automation & RPA", "Data Analytics"].map((tech, index) => (
              <div key={index} className="bg-gray-50 px-4 py-6 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <span className="font-medium text-gray-900 text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Transformation Success Metrics</h2>
            <p className="text-xl text-blue-100">
              Measurable outcomes from our digital transformation initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Process Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">Faster Time to Market</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your digital transformation journey with our expert guidance and proven methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Begin Transformation
            </Link>
            <Link 
              to="/services/it-consulting" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Learn About Consulting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;