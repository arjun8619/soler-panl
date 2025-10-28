import React, { useState } from 'react';
import { Award, Users, Zap, Leaf, Sun, Battery, Shield, TrendingUp, Check, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const About = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '10,000+', label: 'Happy Customers' },
    { icon: <Zap className="w-8 h-8" />, number: '25MW+', label: 'Installed Capacity' },
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Years Experience' },
    { icon: <Leaf className="w-8 h-8" />, number: '50K+', label: 'Tons CO2 Saved' },
  ];

  const products = [
    {
      id: 1,
      name: 'Residential Solar Panel 400W',
      power: '400W',
      efficiency: '21.5%',
      warranty: '25 Years',
      price: '₹18,000',
      image: '🏠',
      features: ['Monocrystalline cells', 'Weather resistant', 'High efficiency', 'Easy installation'],
      rating: 4.8,
      reviews: 245
    },
    {
      id: 2,
      name: 'Commercial Solar Panel 550W',
      power: '550W',
      efficiency: '22.8%',
      warranty: '30 Years',
      price: '₹28,000',
      image: '🏢',
      features: ['Bifacial technology', 'Anti-reflective coating', 'High durability', 'Maximum output'],
      rating: 4.9,
      reviews: 189
    },
    {
      id: 3,
      name: 'Premium Solar Panel 600W',
      power: '600W',
      efficiency: '23.2%',
      warranty: '30 Years',
      price: '₹35,000',
      image: '⚡',
      features: ['Half-cut cell technology', 'Premium materials', 'Low degradation', 'Best performance'],
      rating: 5.0,
      reviews: 156
    },
    {
      id: 4,
      name: 'Flexible Solar Panel 200W',
      power: '200W',
      efficiency: '20.1%',
      warranty: '15 Years',
      price: '₹12,000',
      image: '🚐',
      features: ['Lightweight design', 'Bendable', 'Portable', 'RV compatible'],
      rating: 4.6,
      reviews: 98
    }
  ];

  const features = [
    {
      title: 'Quality Assurance',
      description: 'All our panels undergo rigorous testing and come with comprehensive warranties.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Expert Installation',
      description: 'Our certified technicians ensure perfect installation for maximum efficiency.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Smart Monitoring',
      description: 'Track your energy production and savings with our advanced monitoring systems.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Maintenance Support',
      description: 'Complete after-sales support and maintenance services to keep your system running.',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
   

      {/* Hero/Banner Section */}
      <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                ⚡ Save Up to 90% on Energy Bills
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Power Your Future with
                <span className="text-yellow-500"> Solar Energy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of satisfied customers who have made the switch to clean, 
                renewable energy. Get premium solar panels installed by certified experts.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition flex items-center space-x-2 shadow-lg">
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition border-2 border-gray-200">
                  Calculate Savings
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">info@solartech.com</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-500">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Sun className="w-16 h-16 text-yellow-500" />
                    <Battery className="w-16 h-16 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-full w-full"></div>
                    <div className="h-4 bg-gradient-to-r from-green-200 to-green-500 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-500 rounded-full w-1/2"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-yellow-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-600">100%</div>
                      <div className="text-xs text-gray-600">Clean Energy</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">25+</div>
                      <div className="text-xs text-gray-600">Year Warranty</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solar Panel Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of high-efficiency solar panels designed for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 text-center">
                  <div className="text-7xl mb-4">{product.image}</div>
                  <div className="bg-white rounded-full px-4 py-2 inline-block">
                    <span className="text-2xl font-bold text-gray-800">{product.power}</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-blue-50 rounded-lg p-2 text-center">
                      <div className="font-semibold text-blue-600">{product.efficiency}</div>
                      <div className="text-xs text-gray-600">Efficiency</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 text-center">
                      <div className="font-semibold text-green-600">{product.warranty}</div>
                      <div className="text-xs text-gray-600">Warranty</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500">per panel</span>
                    </div>
                    <button className="w-full bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading the Solar Revolution Since 2008
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At SolarTech, we're committed to making renewable energy accessible to everyone. 
                With over 15 years of experience, we've helped thousands of homeowners and businesses 
                transition to clean, affordable solar power.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
                Learn More About Us
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition duration-300 border border-gray-100"
                >
                  <div className="text-yellow-500 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-xl leading-relaxed opacity-95">
                "To accelerate the world's transition to sustainable energy by providing 
                affordable, reliable, and high-performance solar solutions that empower 
                communities and protect our planet for future generations."
              </p>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default About;