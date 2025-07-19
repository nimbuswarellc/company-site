import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NimbusWare LLC</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering IT consulting services since 2008, we transform businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, NimbusWare LLC began with a simple vision: to help businesses harness the power of technology 
                to achieve their goals. What started as a small team of passionate developers has evolved into a comprehensive 
                IT consulting firm serving clients across multiple industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've successfully delivered hundreds of projects, from simple websites to complex enterprise 
                solutions. Our commitment to excellence, innovation, and client satisfaction has made us a trusted partner 
                for businesses looking to thrive in the digital age.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push the boundaries of what's possible with technology, helping our clients stay ahead 
                of the curve in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Company timeline visualization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-lg text-gray-600">Our achievements speak to our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to deliver cutting-edge solutions 
                that keep our clients ahead of the competition.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We build trust through transparency, honesty, and ethical business practices in all our 
                client relationships and internal operations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, delivering high-quality solutions that exceed 
                expectations and drive measurable business results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;