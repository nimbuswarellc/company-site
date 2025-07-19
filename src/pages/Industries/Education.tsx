import React from 'react';
import { BookOpen, Users, Monitor, Shield, CheckCircle, ArrowRight, GraduationCap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
  const solutions = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Learning Management Systems",
      description: "Comprehensive LMS platforms for online learning, course management, and student engagement."
    },
    {
      icon: <Monitor className="h-8 w-8 text-green-600" />,
      title: "Virtual Classrooms",
      description: "Interactive online learning environments with video conferencing and collaboration tools."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Student Information Systems",
      description: "Complete student lifecycle management from admission to graduation and alumni relations."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Campus Security",
      description: "Digital security solutions including access control, surveillance, and emergency response systems."
    }
  ];

  const benefits = [
    "Enhanced student engagement",
    "Improved learning outcomes",
    "Streamlined administrative processes",
    "Better parent-teacher communication",
    "Data-driven educational insights",
    "Flexible learning options",
    "Reduced operational costs",
    "Scalable technology infrastructure"
  ];

  const features = [
    "Online Course Delivery",
    "Student Portal",
    "Grade Management",
    "Attendance Tracking",
    "Library Management",
    "Financial Aid Processing",
    "Alumni Management",
    "Mobile Learning Apps"
  ];

  const projects = [
    {
      title: "University LMS Platform",
      description: "Implemented comprehensive learning management system serving 25,000+ students across multiple campuses.",
      result: "40% increase in course completion rates"
    },
    {
      title: "K-12 Digital Transformation",
      description: "Digitized entire school district with student information systems and virtual learning capabilities.",
      result: "95% student engagement in remote learning"
    },
    {
      title: "Campus Safety System",
      description: "Deployed integrated security and emergency response system across university campus.",
      result: "50% faster emergency response times"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Education Technology Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Empower educational institutions with innovative technology solutions that enhance learning experiences and streamline operations.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Transform Education <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Technology Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive EdTech solutions designed to meet the evolving needs of modern educational institutions.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enhance Educational Excellence</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our education technology solutions help institutions deliver superior learning experiences while improving operational efficiency and student outcomes.
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
              <span className="text-gray-500 text-lg">Digital classroom illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Education Platform Features</h2>
            <p className="text-lg text-gray-600">
              All-in-one solutions covering every aspect of educational institution management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white px-4 py-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                <span className="font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Learning Solutions</h2>
            <p className="text-lg text-gray-600">
              Support for various learning modalities to meet diverse educational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Traditional Learning</h3>
              <p className="text-gray-600">Enhanced classroom experiences with digital tools and interactive content delivery.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Online Learning</h3>
              <p className="text-gray-600">Fully remote learning capabilities with virtual classrooms and digital assessments.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Monitor className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Learning</h3>
              <p className="text-gray-600">Blended learning approaches combining in-person and online educational experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real impact from our educational technology implementations.
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
            <h2 className="text-3xl font-bold mb-4">Educational Impact</h2>
            <p className="text-xl text-blue-100">
              Our contribution to educational excellence and student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-blue-100">Students Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Educational Institutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-blue-100">Improved Learning Outcomes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Education?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our education technology solutions can enhance learning experiences and improve outcomes at your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/services/cloud-solutions" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Cloud Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;