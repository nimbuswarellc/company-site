import React from 'react';
import { Settings, BarChart, Zap, Shield, CheckCircle, ArrowRight, Cpu, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
  const solutions = [
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Industrial IoT",
      description: "Connect machines and equipment for real-time monitoring, predictive maintenance, and optimization."
    },
    {
      icon: <BarChart className="h-8 w-8 text-green-600" />,
      title: "Manufacturing Analytics",
      description: "Data-driven insights for production optimization, quality control, and operational efficiency."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Process Automation",
      description: "Automate manufacturing processes to reduce costs, improve quality, and increase productivity."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Quality Management",
      description: "Digital quality control systems ensuring consistent product quality and compliance."
    }
  ];

  const benefits = [
    "Increased production efficiency",
    "Reduced operational costs",
    "Improved product quality",
    "Predictive maintenance capabilities",
    "Real-time production monitoring",
    "Enhanced supply chain visibility",
    "Regulatory compliance assurance",
    "Reduced equipment downtime"
  ];

  const technologies = [
    "SCADA Systems", "MES", "ERP Integration", "PLCs", "HMI", "Edge Computing"
  ];

  const projects = [
    {
      title: "Smart Factory Implementation",
      description: "Transformed traditional manufacturing facility into smart factory with IoT sensors and automation.",
      result: "35% increase in production efficiency"
    },
    {
      title: "Predictive Maintenance System",
      description: "Implemented AI-powered predictive maintenance reducing unplanned downtime and maintenance costs.",
      result: "60% reduction in equipment downtime"
    },
    {
      title: "Quality Control Automation",
      description: "Automated quality inspection using computer vision and machine learning technologies.",
      result: "99.5% defect detection accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Manufacturing IT Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Modernize your manufacturing operations with Industry 4.0 technologies, IoT solutions, and smart automation systems.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Modernize Manufacturing <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry 4.0 Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced manufacturing technology solutions that drive operational excellence and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Manufacturing Operations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our manufacturing IT solutions help you optimize production, reduce costs, and improve quality through digital transformation and smart technologies.
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
              <span className="text-gray-500 text-lg">Smart factory visualization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Manufacturing Technologies</h2>
            <p className="text-lg text-gray-600">
              Cutting-edge technologies that power modern manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white px-4 py-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                <span className="font-semibold text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Manufacturing Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Manufacturing Capabilities</h2>
            <p className="text-lg text-gray-600">
              Advanced features that enable intelligent manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600">Monitor production lines, equipment performance, and quality metrics in real-time.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Wrench className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-600">AI-powered maintenance scheduling to prevent equipment failures and optimize uptime.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Analytics</h3>
              <p className="text-gray-600">Advanced analytics for production optimization and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Manufacturing Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real results from our manufacturing technology implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">{project.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Manufacturing Impact</h2>
            <p className="text-xl text-blue-100">
              Measurable improvements in manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="text-blue-100">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.5%</div>
              <div className="text-blue-100">Quality Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Downtime Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your Manufacturing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our Industry 4.0 solutions can transform your manufacturing operations and drive competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Transformation
            </Link>
            <Link 
              to="/services/digital-transformation" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Digital Transformation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;