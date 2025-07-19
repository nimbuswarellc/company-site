import React from 'react';
import { Users, Coffee, Lightbulb, Globe, Heart, Trophy, BookOpen, Zap } from 'lucide-react';

const LifeAtNimbusWare = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaboration",
      description: "We believe great things happen when talented people work together towards common goals."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Innovation",
      description: "We encourage creative thinking and provide the freedom to explore new ideas and technologies."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Work-Life Balance",
      description: "We support flexible schedules and remote work to help you maintain a healthy balance."
    },
    {
      icon: <Trophy className="h-8 w-8 text-green-600" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do and celebrate achievements along the way."
    }
  ];

  const perks = [
    {
      icon: <Coffee className="h-6 w-6 text-brown-600" />,
      title: "Flexible Work Environment",
      description: "Work from home, office, or anywhere that makes you productive."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Learning & Development",
      description: "$3,000 annual budget for courses, conferences, and certifications."
    },
    {
      icon: <Globe className="h-6 w-6 text-green-600" />,
      title: "Global Opportunities",
      description: "Work with clients and team members from around the world."
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Latest Technology",
      description: "Access to cutting-edge tools and technologies for your projects."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      quote: "NimbusWare has given me the opportunity to work on challenging projects while maintaining a great work-life balance. The team is incredibly supportive and collaborative.",
      tenure: "3 years"
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      quote: "The learning opportunities here are endless. I've grown so much professionally, and the company has supported my journey every step of the way.",
      tenure: "2 years"
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      quote: "What I love most about NimbusWare is the culture of innovation. We're encouraged to think outside the box and bring creative solutions to our clients.",
      tenure: "4 years"
    }
  ];

  const activities = [
    "Monthly team building events",
    "Annual company retreat",
    "Tech talks and knowledge sharing",
    "Volunteer and community service",
    "Gaming tournaments and competitions",
    "Lunch and learn sessions",
    "Wellness programs and activities",
    "Innovation hackathons"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Life at NimbusWare</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover what makes NimbusWare a great place to work. Our culture, values, and commitment to employee growth create an environment where everyone can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our culture and decision-making every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Place Where You Can Grow</h2>
              <p className="text-lg text-gray-600 mb-8">
                At NimbusWare, we believe that when our employees grow, our company grows. We've created an environment that fosters learning, creativity, and professional development.
              </p>
              
              <div className="space-y-6">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-lg">
                      {perk.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{perk.title}</h3>
                      <p className="text-gray-600">{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Team collaboration photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-lg text-gray-600">
              Hear directly from our employees about their experience working at NimbusWare.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.tenure} at NimbusWare
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Activities & Events</h2>
            <p className="text-lg text-gray-600">
              We believe in building strong relationships and having fun together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-700 font-medium">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work-Life Balance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Work-life balance illustration</span>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Work-Life Balance Matters</h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand that our employees have lives outside of work, and we support that. Our flexible policies and supportive culture help you maintain a healthy balance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Flexible working hours and remote work options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Unlimited PTO policy with encouraged time off</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Mental health and wellness support programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Family-friendly policies and parental leave</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If our culture and values resonate with you, we'd love to hear from you. Explore our open positions and start your journey with NimbusWare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/career/open-positions" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="/career/benefits" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Benefits
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtNimbusWare;