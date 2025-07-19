import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">NimbusWare LLC</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading IT consulting services provider, delivering innovative technology solutions 
              that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-gray-300 hover:text-white transition-colors">Mobile Applications</Link></li>
              <li><Link to="/services/cloud-solutions" className="text-gray-300 hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services/it-consulting" className="text-gray-300 hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/company/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/company/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/company/mission" className="text-gray-300 hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/career/open-positions" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@nimbusware.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 Business Ave, Suite 100<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} NimbusWare LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;