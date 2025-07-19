import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Server, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cybersecurity = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Security Assessment",
      description: "Comprehensive evaluation of your security posture and vulnerability identification."
    },
    {
      icon: <Lock className="h-8 w-8 text-green-600" />,
      title: "Penetration Testing",
      description: "Ethical hacking to identify and address security weaknesses before attackers do."
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: "Security Monitoring",
      description: "24/7 monitoring and threat detection to protect against cyber attacks."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Security Training",
      description: "Employee education and awareness programs to prevent human error vulnerabilities."
    }
  ];

  const threats = [
    "Ransomware Attacks",
    "Data Breaches",
    "Phishing Campaigns",
    "Insider Threats",
    "Advanced Persistent Threats",
    "DDoS Attacks",
    "Malware Infections",
    "Social Engineering"
  ];

  const compliance = [
    "GDPR", "HIPAA", "SOX", "PCI DSS", "ISO 27001", "NIST"
  ];

  const solutions = [
    {
      title: "Network Security",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Network Segmentation"]
    },
    {
      title: "Endpoint Protection",
      features: ["Antivirus/Anti-malware", "Device Management", "Patch Management", "Mobile Security"]
    },
    {
      title: "Identity & Access",
      features: ["Multi-factor Authentication", "Single Sign-On", "Privileged Access", "Identity Governance"]
    },
    {
      title: "Data Protection",
      features: ["Encryption", "Backup & Recovery", "Data Loss Prevention", "Secure File Sharing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Protect your business from cyber threats with comprehensive security solutions and expert guidance.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Secure Your Business <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from evolving threats.
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

      {/* Threat Landscape */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protect Against Modern Threats</h2>
              <p className="text-lg text-gray-600 mb-8">
                Cyber threats are constantly evolving. Our security experts stay ahead of the latest attack vectors to keep your business protected.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {threats.map((threat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{threat}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Cybersecurity threat visualization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Security Solutions</h2>
            <p className="text-lg text-gray-600">
              Multi-layered security approach to protect all aspects of your digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Standards</h2>
            <p className="text-lg text-gray-600">
              Ensure your organization meets industry regulations and security standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {compliance.map((standard, index) => (
              <div key={index} className="bg-gray-50 px-4 py-6 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <span className="font-semibold text-gray-900">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Implementation Process</h2>
            <p className="text-lg text-gray-600">
              Systematic approach to implementing and maintaining robust cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h3>
              <p className="text-gray-600">Identify vulnerabilities and assess current security posture.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Design</h3>
              <p className="text-gray-600">Develop comprehensive security architecture and policies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">Deploy security solutions and configure protection systems.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring</h3>
              <p className="text-gray-600">Continuous monitoring and incident response management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Security by the Numbers</h2>
            <p className="text-xl text-red-100">
              Our track record in protecting businesses from cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-red-100">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-red-100">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15min</div>
              <div className="text-red-100">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-red-100">Successful Breaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure Your Business Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait for a security incident. Protect your business with our comprehensive cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Get Security Assessment
            </Link>
            <Link 
              to="/services/it-consulting" 
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;