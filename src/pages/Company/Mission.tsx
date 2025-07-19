import React from 'react';
import { Target, Eye, Heart, Globe, Users, Lightbulb } from 'lucide-react';

const Mission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission & Vision</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Driving digital transformation through innovative technology solutions that empower businesses to thrive in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses of all sizes with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in an increasingly digital world.
              </p>
              <p className="text-gray-600">
                We are committed to delivering exceptional IT consulting services that not only meet our 
                clients' immediate needs but also position them for long-term success through strategic 
                technology adoption and digital transformation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading IT consulting partner that businesses trust to navigate their digital 
                transformation journey and unlock their full potential through technology.
              </p>
              <p className="text-gray-600">
                We envision a future where every business, regardless of size or industry, has access to 
                world-class technology solutions that enable them to compete, innovate, and thrive in the 
                global marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Principles</h2>
            <p className="text-lg text-gray-600">
              The fundamental beliefs that guide our decisions and actions every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Centric Approach</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our clients' success and satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to stay ahead of the curve.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Partnership</h3>
              <p className="text-gray-600">
                We work alongside our clients as true partners, not just service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Making a difference in businesses and communities through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 mb-4">
                Serving clients across 25+ countries, helping businesses worldwide leverage technology for growth.
              </p>
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-gray-500">Countries Served</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jobs Created</h3>
              <p className="text-gray-600 mb-4">
                Our solutions have helped clients create thousands of new jobs through business growth and efficiency.
              </p>
              <div className="text-3xl font-bold text-green-600">5,000+</div>
              <div className="text-gray-500">Jobs Enabled</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 mb-4">
                Contributing to the tech community through open source projects and knowledge sharing.
              </p>
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-500">Open Source Contributions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We pledge to maintain the highest standards of quality, integrity, and innovation in everything we do. 
              Your success is our success, and we're committed to being the technology partner you can trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Availability</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;