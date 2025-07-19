import React from 'react';
import { Heart, Shield, Database, Users, CheckCircle, ArrowRight, Activity, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Healthcare = () => {
  const solutions = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Electronic Health Records",
      description: "Comprehensive EHR systems that improve patient care and streamline clinical workflows."
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Telemedicine Platforms",
      description: "Secure video conferencing and remote patient monitoring solutions."
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Healthcare Analytics",
      description: "Data-driven insights to improve patient outcomes and operational efficiency."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "HIPAA Compliance",
      description: "Ensure patient data privacy and security with compliant IT infrastructure."
    }
  ];

  const benefits = [
    "Improved patient care and outcomes",
    "Reduced administrative overhead",
    "Enhanced data security and privacy",
    "Streamlined clinical workflows",
    "Better regulatory compliance",
    "Cost reduction through automation",
    "Real-time patient monitoring",
    "Integrated healthcare systems"
  ];

  const projects = [
    {
      title: "Regional Hospital Network",
      description: "Implemented unified EHR system across 5 hospitals, improving patient data accessibility and care coordination.",
      result: "30% reduction in patient wait times"
    },
    {
      title: "Telehealth Platform",
      description: "Developed secure telemedicine solution enabling remote consultations and patient monitoring.",
      result: "500+ daily virtual consultations"
    },
    {
      title: "Medical Device Integration",
      description: "Connected IoT medical devices to central monitoring system for real-time patient data.",
      result: "40% faster emergency response"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare IT Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform healthcare delivery with secure, compliant, and innovative technology solutions that improve patient care and operational efficiency.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Improve Patient Care <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Technology Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized IT solutions designed for the unique needs of healthcare organizations.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Healthcare Operations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our healthcare IT solutions help medical organizations deliver better patient care while reducing costs and improving operational efficiency.
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
              <span className="text-gray-500 text-lg">Healthcare technology illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Compliance & Security</h2>
            <p className="text-lg text-gray-600">
              Ensuring your healthcare IT systems meet all regulatory requirements and security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliance</h3>
              <p className="text-gray-600">Complete HIPAA compliance solutions including risk assessments, policy development, and staff training.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">FDA Regulations</h3>
              <p className="text-gray-600">Ensure medical device software and systems comply with FDA regulations and quality standards.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Staff Training</h3>
              <p className="text-gray-600">Comprehensive training programs to ensure healthcare staff understand compliance requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real results from our healthcare IT implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our healthcare IT solutions can improve patient care and operational efficiency at your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services/cybersecurity" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Security
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;