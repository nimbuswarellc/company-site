import React from 'react';
import { ShoppingCart, Smartphone, BarChart, Users, CheckCircle, ArrowRight, Package, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Retail = () => {
  const solutions = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: "E-commerce Platforms",
      description: "Custom online stores with advanced features, payment integration, and inventory management."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile Commerce",
      description: "Mobile apps and responsive designs that provide seamless shopping experiences."
    },
    {
      icon: <BarChart className="h-8 w-8 text-purple-600" />,
      title: "Retail Analytics",
      description: "Data-driven insights for inventory optimization, customer behavior, and sales forecasting."
    },
    {
      icon: <Package className="h-8 w-8 text-orange-600" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking, automated reordering, and supply chain optimization."
    }
  ];

  const features = [
    "Multi-channel integration",
    "Customer relationship management",
    "Point-of-sale systems",
    "Loyalty program management",
    "Order fulfillment automation",
    "Real-time inventory tracking",
    "Advanced analytics and reporting",
    "Personalized shopping experiences"
  ];

  const projects = [
    {
      title: "Fashion E-commerce Platform",
      description: "Built comprehensive online fashion store with AR try-on features and personalized recommendations.",
      result: "300% increase in online sales"
    },
    {
      title: "Omnichannel Retail System",
      description: "Integrated online and offline channels for seamless customer experience across all touchpoints.",
      result: "40% improvement in customer satisfaction"
    },
    {
      title: "Inventory Optimization",
      description: "Implemented AI-powered inventory management reducing stockouts and overstock situations.",
      result: "25% reduction in inventory costs"
    }
  ];

  const technologies = [
    "Shopify Plus", "Magento", "WooCommerce", "Salesforce Commerce", "BigCommerce", "Custom Solutions"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Retail & E-commerce Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your retail business with innovative e-commerce platforms, mobile solutions, and data analytics that drive sales and customer engagement.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Boost Retail Sales <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Retail Technology Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive retail technology solutions designed to enhance customer experience and drive business growth.
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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Retail Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                From online stores to inventory management, we provide end-to-end retail technology solutions that help you compete in today's digital marketplace.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">E-commerce dashboard mockup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">E-commerce Platforms We Support</h2>
            <p className="text-lg text-gray-600">
              Expert implementation and customization of leading e-commerce platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white px-4 py-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                <span className="font-semibold text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Omnichannel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Omnichannel Retail Experience</h2>
            <p className="text-lg text-gray-600">
              Seamlessly connect online and offline channels for a unified customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unified Payments</h3>
              <p className="text-gray-600">Consistent payment experience across all channels with secure processing and fraud protection.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Profiles</h3>
              <p className="text-gray-600">360-degree customer view with purchase history, preferences, and personalized recommendations.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inventory Sync</h3>
              <p className="text-gray-600">Real-time inventory synchronization across all sales channels and locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Retail Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real results from our retail technology implementations.
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
            <h2 className="text-3xl font-bold mb-4">Retail Impact by the Numbers</h2>
            <p className="text-xl text-blue-100">
              Our contribution to retail business growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">$100M+</div>
              <div className="text-blue-100">Online Sales Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250%</div>
              <div className="text-blue-100">Average Sales Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Orders Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our retail technology solutions can help you increase sales and improve customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services/web-development" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              E-commerce Development
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retail;