import React from 'react';
import { Users, Target, Lightbulb, TrendingUp, CheckCircle, ArrowRight, BarChart, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITConsulting = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Strategic Planning",
      description: "Align your IT strategy with business objectives for maximum impact and ROI."
    },
    {
      icon: <BarChart className="h-8 w-8 text-green-600" />,
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology stack and infrastructure."
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency through technology solutions."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Digital Transformation",
      description: "Guide your organization through complete digital transformation initiatives."
    }
  ];

  const expertise = [
    "IT Strategy Development",
    "Technology Roadmapping",
    "Vendor Selection & Management",
    "Risk Assessment & Mitigation",
    "Budget Planning & Optimization",
    "Change Management",
    "Compliance & Governance",
    "Performance Monitoring"
  ];

  const industries = [
    { name: "Healthcare", projects: "50+" },
    { name: "Financial Services", projects: "40+" },
    { name: "Manufacturing", projects: "35+" },
    { name: "Retail & E-commerce", projects: "45+" },
    { name: "Education", projects: "30+" },
    { name: "Government", projects: "25+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Consulting Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Strategic technology consulting that aligns IT initiatives with your business goals and drives measurable results.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT consulting services designed to optimize your technology investments and drive business growth.
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

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Areas of Expertise</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience, we provide expert guidance across all aspects of IT strategy and implementation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">IT strategy consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Experience</h2>
            <p className="text-lg text-gray-600">
              Deep industry knowledge across multiple sectors enables us to provide targeted solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{industry.projects}</div>
                <p className="text-gray-600">Successful Projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Process</h2>
            <p className="text-lg text-gray-600">
              A structured approach that ensures comprehensive analysis and actionable recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understand your business goals and current IT landscape.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600">Comprehensive assessment of systems, processes, and opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Develop customized IT strategy aligned with business objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Roadmap</h3>
              <p className="text-gray-600">Create detailed implementation roadmap with timelines and milestones.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Ongoing guidance and support throughout implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-blue-100">
              Our consulting services deliver measurable business impact for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-blue-100">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Successful Engagements</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Optimize Your IT Strategy?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experienced consultants help you align technology with your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              to="/company/team" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Meet Our Consultants
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;