import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Cloud } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">NimbusWare</span>
            <span className="text-sm text-gray-500 font-medium">LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/company/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">About Us</Link>
                <Link to="/company/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Our Team</Link>
                <Link to="/company/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Our Mission</Link>
                <Link to="/company/why-choose-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Why Choose Us</Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Web Development</Link>
                <Link to="/services/mobile-apps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Mobile Applications</Link>
                <Link to="/services/cloud-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Cloud Solutions</Link>
                <Link to="/services/it-consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">IT Consulting</Link>
                <Link to="/services/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Digital Transformation</Link>
                <Link to="/services/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Cybersecurity</Link>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/industries/healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Healthcare</Link>
                <Link to="/industries/finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Finance</Link>
                <Link to="/industries/retail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Retail</Link>
                <Link to="/industries/manufacturing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Manufacturing</Link>
                <Link to="/industries/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Education</Link>
              </div>
            </div>

            {/* Career Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Career <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/career/open-positions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Open Positions</Link>
                <Link to="/career/life-at-nimbusware" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Life at NimbusWare</Link>
                <Link to="/career/benefits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Benefits</Link>
              </div>
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact Us
            </Link>

            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            
            <div>
              <button 
                onClick={() => handleDropdownClick('company')}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600"
              >
                Company <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="pl-4 space-y-2">
                  <Link to="/company/about" className="block py-1 text-sm text-gray-600">About Us</Link>
                  <Link to="/company/team" className="block py-1 text-sm text-gray-600">Our Team</Link>
                  <Link to="/company/mission" className="block py-1 text-sm text-gray-600">Our Mission</Link>
                  <Link to="/company/why-choose-us" className="block py-1 text-sm text-gray-600">Why Choose Us</Link>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => handleDropdownClick('services')}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600"
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="pl-4 space-y-2">
                  <Link to="/services/web-development" className="block py-1 text-sm text-gray-600">Web Development</Link>
                  <Link to="/services/mobile-apps" className="block py-1 text-sm text-gray-600">Mobile Applications</Link>
                  <Link to="/services/cloud-solutions" className="block py-1 text-sm text-gray-600">Cloud Solutions</Link>
                  <Link to="/services/it-consulting" className="block py-1 text-sm text-gray-600">IT Consulting</Link>
                  <Link to="/services/digital-transformation" className="block py-1 text-sm text-gray-600">Digital Transformation</Link>
                  <Link to="/services/cybersecurity" className="block py-1 text-sm text-gray-600">Cybersecurity</Link>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => handleDropdownClick('industries')}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600"
              >
                Industries <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div className="pl-4 space-y-2">
                  <Link to="/industries/healthcare" className="block py-1 text-sm text-gray-600">Healthcare</Link>
                  <Link to="/industries/finance" className="block py-1 text-sm text-gray-600">Finance</Link>
                  <Link to="/industries/retail" className="block py-1 text-sm text-gray-600">Retail</Link>
                  <Link to="/industries/manufacturing" className="block py-1 text-sm text-gray-600">Manufacturing</Link>
                  <Link to="/industries/education" className="block py-1 text-sm text-gray-600">Education</Link>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => handleDropdownClick('career')}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600"
              >
                Career <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'career' && (
                <div className="pl-4 space-y-2">
                  <Link to="/career/open-positions" className="block py-1 text-sm text-gray-600">Open Positions</Link>
                  <Link to="/career/life-at-nimbusware" className="block py-1 text-sm text-gray-600">Life at NimbusWare</Link>
                  <Link to="/career/benefits" className="block py-1 text-sm text-gray-600">Benefits</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact Us</Link>
            <Link to="/contact" className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-center">Get Started</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;