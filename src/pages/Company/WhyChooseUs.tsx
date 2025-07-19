import React from 'react';
import { Award, Clock, Shield, Users, Zap, CheckCircle, Star, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Proven Expertise",
      description: "15+ years of experience delivering successful IT projects across diverse industries with consistently high client satisfaction rates."
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Rapid Delivery",
      description: "Agile development methodology ensures faster time-to-market while maintaining quality and allowing for iterative improvements."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Security First",
      description: "Built-in security measures and compliance with industry standards protect your data and maintain regulatory requirements."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Dedicated Teams",
      description: "Skilled professionals committed to your project's success with transparent communication and collaborative approach."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Scalable Solutions",
      description: "Future-proof architecture that grows with your business, adapting to changing needs and market demands."
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "ROI Focused",
      description: "Solutions designed to deliver measurable business value and positive return on investment from day one."
    }
  ];

  const differentiators = [
    "Comprehensive technology stack expertise",
    "Industry-specific knowledge and best practices",
    "24/7 support and maintenance services",
    "Transparent pricing with no hidden costs",
    "Regular project updates and milestone reporting",
    "Post-deployment training and documentation",
    "Flexible engagement models to suit your needs",
    "Commitment to meeting deadlines and budgets"
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CTO, TechCorp Solutions",
      quote: "NimbusWare transformed our entire IT infrastructure. Their expertise and dedication exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, Innovation Labs",
      quote: "The team's ability to understand our complex requirements and deliver on time was remarkable.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      role: "Director of Operations, DataFlow Inc",
      quote: "Professional, knowledgeable, and always available when we need support. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose NimbusWare?</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover what sets us apart as your trusted technology partner and why leading businesses choose us for their digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Competitive Advantages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical excellence with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just deliver technology solutions – we partner with you to understand your business goals 
                and create custom strategies that drive growth and efficiency.
              </p>
              
              <div className="space-y-3">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Technology innovation illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it – hear from the businesses we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NimbusWare vs Others</h2>
            <p className="text-lg text-gray-600">
              See how we compare to other IT consulting providers in the market.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">NimbusWare</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">24/7 Support</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">Limited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Fixed Price Projects</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">Variable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Dedicated Team</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">Shared Resources</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Post-Launch Training</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">Extra Cost</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Industry Expertise</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">Generic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the NimbusWare Difference</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our expert technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="/company/team" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Meet Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;