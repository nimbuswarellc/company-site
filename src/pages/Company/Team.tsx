import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      department: "Leadership",
      bio: "Sarah has over 15 years of experience in technology leadership and business strategy. She founded NimbusWare with a vision to transform how businesses leverage technology.",
      skills: ["Strategic Planning", "Business Development", "Team Leadership"]
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      department: "Technology",
      bio: "Michael leads our technical vision and ensures we stay at the forefront of emerging technologies. He has a PhD in Computer Science and 12 years of industry experience.",
      skills: ["Cloud Architecture", "AI/ML", "System Design"]
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Engineering",
      department: "Engineering",
      bio: "Emily oversees our development teams and ensures delivery of high-quality solutions. She's passionate about agile methodologies and team development.",
      skills: ["Software Development", "Team Management", "DevOps"]
    },
    {
      name: "David Thompson",
      role: "Director of Cybersecurity",
      department: "Security",
      bio: "David brings 10+ years of cybersecurity expertise, helping our clients protect their digital assets and maintain compliance with industry standards.",
      skills: ["Penetration Testing", "Compliance", "Risk Assessment"]
    },
    {
      name: "Lisa Wang",
      role: "UX/UI Design Lead",
      department: "Design",
      bio: "Lisa creates intuitive and beautiful user experiences. Her design philosophy centers on user-centric design and accessibility.",
      skills: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      name: "James Wilson",
      role: "Cloud Solutions Architect",
      department: "Cloud Services",
      bio: "James specializes in designing scalable cloud infrastructures. He holds multiple AWS and Azure certifications and loves solving complex technical challenges.",
      skills: ["AWS", "Azure", "Kubernetes"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The brilliant minds behind NimbusWare's innovative solutions and exceptional client service.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to delivering excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <span className="text-gray-500">{member.name} photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.department}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Github className="h-5 w-5 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                At NimbusWare, we believe that great technology solutions come from great teams. We foster 
                a collaborative, inclusive environment where innovation thrives and every voice is heard.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">We invest in our team's growth through training, conferences, and certification programs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Work-Life Balance</h3>
                    <p className="text-gray-600">Flexible schedules and remote work options help our team maintain a healthy balance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation Time</h3>
                    <p className="text-gray-600">20% of work time is dedicated to exploring new technologies and creative projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Team collaboration photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
          <a 
            href="/career/open-positions" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;