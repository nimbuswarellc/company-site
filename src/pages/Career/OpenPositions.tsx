import React from 'react';
import { MapPin, Clock, DollarSign, Users, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const OpenPositions = () => {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $160,000",
      description: "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: ["5+ years of full-stack development experience", "Proficiency in React, Node.js, and TypeScript", "Experience with cloud platforms (AWS/Azure)", "Strong problem-solving skills"],
      posted: "2 days ago"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin, TX",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      description: "Help us build and maintain robust CI/CD pipelines and cloud infrastructure for our growing client base.",
      requirements: ["3+ years of DevOps experience", "Expertise in Docker, Kubernetes, and CI/CD", "Experience with AWS or Azure", "Knowledge of Infrastructure as Code"],
      posted: "1 week ago"
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130,000 - $170,000",
      description: "Lead security assessments, penetration testing, and help clients implement robust cybersecurity solutions.",
      requirements: ["4+ years of cybersecurity experience", "Security certifications (CISSP, CEH, etc.)", "Experience with penetration testing tools", "Knowledge of compliance frameworks"],
      posted: "3 days ago"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Los Angeles, CA",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      description: "Create beautiful, user-centered designs for web and mobile applications across various industries.",
      requirements: ["3+ years of UI/UX design experience", "Proficiency in Figma, Sketch, or Adobe XD", "Strong portfolio demonstrating design skills", "Understanding of user research methods"],
      posted: "5 days ago"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Consulting",
      location: "Remote / Chicago, IL",
      type: "Full-time",
      salary: "$140,000 - $180,000",
      description: "Design and implement cloud architectures for enterprise clients, leading digital transformation initiatives.",
      requirements: ["6+ years of cloud architecture experience", "AWS/Azure/GCP certifications", "Experience with enterprise clients", "Strong communication and leadership skills"],
      posted: "1 day ago"
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$80,000 - $120,000 + Commission",
      description: "Drive business growth by identifying new opportunities and building relationships with potential clients.",
      requirements: ["3+ years of B2B sales experience", "Experience in IT services or consulting", "Strong networking and communication skills", "Track record of meeting sales targets"],
      posted: "1 week ago"
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and training budget",
    "401(k) with company matching",
    "Unlimited PTO policy",
    "Latest technology and equipment",
    "Team building events and company retreats"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Build your career with NimbusWare and help shape the future of technology consulting. We're looking for passionate professionals to join our growing team.
            </p>
            <div className="flex items-center justify-center space-x-4 text-blue-100">
              <Briefcase className="h-6 w-6" />
              <span className="text-lg font-medium">{positions.length} Open Positions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600">
              Explore exciting career opportunities across our various departments.
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="text-sm text-gray-500">Posted {position.posted}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/contact" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Save Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600">
              We offer competitive benefits and a supportive work environment that helps you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-lg text-gray-600">
              A transparent and efficient process designed to find the best fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application</h3>
              <p className="text-gray-600">Submit your application and resume through our contact form.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Screening</h3>
              <p className="text-gray-600">Initial phone or video call to discuss your background and interests.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Technical and cultural fit interviews with team members.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600">Reference checks and final offer with competitive compensation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Position?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Send Your Resume
            </Link>
            <Link 
              to="/career/life-at-nimbusware" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Our Culture
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenPositions;