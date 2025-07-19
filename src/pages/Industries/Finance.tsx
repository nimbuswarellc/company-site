import React from 'react';
import { DollarSign, Shield, BarChart, Users, CheckCircle, ArrowRight, CreditCard, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Finance = () => {
  const solutions = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Digital Banking",
      description: "Modern banking platforms with mobile apps, online services, and digital payment solutions."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Fraud Detection",
      description: "AI-powered fraud detection and prevention systems to protect financial transactions."
    },
    {
      icon: <BarChart className="h-8 w-8 text-purple-600" />,
      title: "Risk Management",
      description: "Advanced analytics and reporting tools for comprehensive risk assessment and management."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-orange-600" />,
      title: "Payment Processing",
      description: "Secure, fast, and reliable payment processing systems for various financial services."
    }
  ];

  const compliance = [
    "PCI DSS", "SOX", "GDPR", "Basel III", "MiFID II", "CCPA"
  ];

  const benefits = [
    "Enhanced security and fraud protection",
    "Improved customer experience",
    "Regulatory compliance assurance",
    "Real-time transaction processing",
    "Advanced analytics and reporting",
    "Scalable cloud infrastructure",
    "24/7 system monitoring",
    "Automated compliance reporting"
  ];

  const projects = [
    {
      title: "Digital Banking Platform",
      description: "Built comprehensive digital banking solution with mobile apps, online banking, and payment processing.",
      result: "2M+ active users, 99.9% uptime"
    },
    {
      title: "Fraud Detection System",
      description: "Implemented AI-powered fraud detection reducing false positives and improving security.",
      result: "85% reduction in fraud losses"
    },
    {
      title: "Trading Platform",
      description: "Developed high-frequency trading platform with real-time market data and analytics.",
      result: "Sub-millisecond trade execution"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Services IT Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Secure, compliant, and innovative technology solutions for banks, credit unions, and financial institutions.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Modernize Finance <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Technology Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge fintech solutions designed for the modern financial services industry.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Financial Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our financial IT solutions help institutions deliver superior customer experiences while maintaining the highest levels of security and compliance.
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
              <span className="text-gray-500 text-lg">Financial technology dashboard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Compliance & Regulations</h2>
            <p className="text-lg text-gray-600">
              Ensure your financial systems meet all regulatory requirements and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {compliance.map((standard, index) => (
              <div key={index} className="bg-white px-4 py-6 rounded-lg text-center shadow-md">
                <span className="font-semibold text-gray-900">{standard}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
              <p className="text-gray-600">Bank-grade encryption and security measures to protect sensitive financial data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Analytics</h3>
              <p className="text-gray-600">Advanced risk modeling and analytics for better decision-making and compliance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit Support</h3>
              <p className="text-gray-600">Comprehensive audit trails and reporting to support regulatory examinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Services Success Stories</h2>
            <p className="text-lg text-gray-600">
              Proven results from our financial technology implementations.
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

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Financial Services by the Numbers</h2>
            <p className="text-xl text-green-100">
              Our impact on the financial services industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">$50B+</div>
              <div className="text-green-100">Transactions Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <div className="text-green-100">System Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-green-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-green-100">Security Breaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your Financial Services?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our fintech solutions can help you deliver better customer experiences and stay competitive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/services/cybersecurity" 
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Security Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finance;