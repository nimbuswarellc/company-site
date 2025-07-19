import React from 'react';
import { Heart, Shield, DollarSign, GraduationCap, Plane, Coffee, Users, Clock } from 'lucide-react';

const Benefits = () => {
  const healthBenefits = [
    {
      title: "Medical Insurance",
      description: "Comprehensive health coverage with multiple plan options",
      coverage: "100% premium covered for employees, 80% for family"
    },
    {
      title: "Dental & Vision",
      description: "Complete dental and vision care coverage",
      coverage: "100% premium covered for employees and family"
    },
    {
      title: "Mental Health Support",
      description: "Counseling services and mental wellness programs",
      coverage: "Fully covered with 24/7 access"
    },
    {
      title: "Wellness Programs",
      description: "Gym memberships, fitness classes, and wellness stipends",
      coverage: "$100/month wellness allowance"
    }
  ];

  const financialBenefits = [
    {
      title: "Competitive Salary",
      description: "Market-competitive compensation reviewed annually",
      details: "Performance-based increases and equity participation"
    },
    {
      title: "401(k) Retirement Plan",
      description: "Company matching retirement savings plan",
      details: "6% company match with immediate vesting"
    },
    {
      title: "Stock Options",
      description: "Equity participation in company growth",
      details: "Vesting schedule based on tenure and performance"
    },
    {
      title: "Bonus Programs",
      description: "Performance and project completion bonuses",
      details: "Quarterly and annual bonus opportunities"
    }
  ];

  const workLifeBenefits = [
    {
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and spend with family",
      icon: <Clock className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Flexible Schedule",
      description: "Work when you're most productive with core collaboration hours",
      icon: <Coffee className="h-6 w-6 text-brown-600" />
    },
    {
      title: "Remote Work",
      description: "Work from anywhere with full remote work support",
      icon: <Plane className="h-6 w-6 text-green-600" />
    },
    {
      title: "Parental Leave",
      description: "Generous paid leave for new parents",
      icon: <Heart className="h-6 w-6 text-red-600" />
    }
  ];

  const professionalBenefits = [
    {
      title: "Learning Budget",
      description: "$3,000 annual budget for courses, conferences, and certifications"
    },
    {
      title: "Conference Attendance",
      description: "Attend industry conferences and networking events"
    },
    {
      title: "Certification Support",
      description: "Company-paid professional certifications and training"
    },
    {
      title: "Mentorship Program",
      description: "Structured mentorship for career growth and development"
    },
    {
      title: "Internal Mobility",
      description: "Opportunities to explore different roles and departments"
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and skill development"
    }
  ];

  const additionalPerks = [
    "Latest MacBook Pro or high-end PC setup",
    "Home office setup allowance ($1,500)",
    "High-speed internet reimbursement",
    "Company-sponsored team events and retreats",
    "Free snacks and beverages in office",
    "Commuter benefits and parking",
    "Employee referral bonuses",
    "Volunteer time off (VTO) program"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Employee Benefits</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits that support your health, financial security, and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Health & Wellness */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Health & Wellness</h2>
            <p className="text-lg text-gray-600">
              Your health and well-being are our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-3">{benefit.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 font-medium">{benefit.coverage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Security</h2>
            <p className="text-lg text-gray-600">
              Competitive compensation and benefits to secure your financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financialBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-3">{benefit.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 font-medium">{benefit.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work-Life Balance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work-Life Balance</h2>
            <p className="text-lg text-gray-600">
              Flexible policies that help you maintain a healthy balance between work and life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workLifeBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Development</h2>
            <p className="text-lg text-gray-600">
              Invest in your career growth with our comprehensive learning and development programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Perks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Perks</h2>
            <p className="text-lg text-gray-600">
              Extra benefits that make working at NimbusWare even better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalPerks.map((perk, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-gray-700">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Total Benefits Value</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our comprehensive benefits package adds significant value beyond your base salary, 
              representing an additional 30-40% of your total compensation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Health Insurance Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6%</div>
                <div className="text-blue-100">401(k) Company Match</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$3K</div>
                <div className="text-blue-100">Annual Learning Budget</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-blue-100">Unlimited PTO Days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience these amazing benefits and more as part of the NimbusWare family. 
            Explore our open positions and start your journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/career/open-positions" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="/career/life-at-nimbusware" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Learn About Our Culture
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;