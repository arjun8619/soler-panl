import React, { useState, useEffect } from 'react';
import { 
  FaSolarPanel,
  FaShieldAlt,
  FaHeadset,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCheck,
  FaLeaf,
  FaBolt,
  FaMoneyBillWave,
  FaTools,
  FaChartLine,
  FaBatteryFull,
  FaPlug,
  FaHome,
  FaIndustry,
  FaBuilding,
  FaCalendarAlt,
  FaUserTie,
  FaCogs,
  FaHandshake,
  FaAward,
  FaGlobe,
  FaRecycle,
  FaFileAlt,
  FaClock // Added for time icon
} from 'react-icons/fa';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import baner from './../assets/img/baner.mp4'
import baner1 from './../assets/img/baner1.jpg'
import Services from './../assets/img/Services.jpg'
import { useNavigate } from 'react-router-dom';



const Home = () => {
   const navigate = useNavigate();
  // Navigation tabs state
  const [activeTab, setActiveTab] = useState('residential');
  
  // Testimonial state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  
  // Newsletter state
  const [email, setEmail] = useState('');
  
  // Time state
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Format time to HH:MM:SS format
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  // Features data
  const features = [
    {
      icon: <FaSolarPanel className="text-3xl text-[#000]" />,
      title: 'High Efficiency',
      description: 'Maximum energy production with premium panels'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#000]" />,
      title: '25-Year Warranty',
      description: 'Comprehensive protection for your investment'
    },
    {
      icon: <FaHeadset className="text-3xl text-[#000]" />,
      title: '24/7 Support',
      description: 'Expert assistance whenever you need it'
    },
    {
      icon: <FaLeaf className="text-3xl text-[#000]" />,
      title: 'Eco-Friendly',
      description: 'Reduce your carbon footprint significantly'
    },
    {
      icon: <FaBolt className="text-3xl text-[#000]" />,
      title: 'Energy Independence',
      description: 'Free yourself from grid dependency'
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-[#000]" />,
      title: 'Cost Savings',
      description: 'Save up to 90% on electricity bills'
    }
  ];

  // Tab content data
  const tabContent = {
    residential: {
      title: 'Residential Solar Solutions',
      description: 'Custom solar panel systems designed for your home. Save money and reduce your carbon footprint.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Custom-designed systems for your home',
        'Grid-tied and off-grid options',
        'Smart monitoring solutions',
        'Financing options available'
      ]
    },
    commercial: {
      title: 'Commercial Solar Solutions',
      description: 'Scale your business with sustainable energy solutions. Reduce operational costs significantly.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Large-scale installations',
        'Tax incentives and rebates',
        'Reduced operational costs',
        'Enhanced brand reputation'
      ]
    },
    industrial: {
      title: 'Industrial Solar Solutions',
      description: 'Large-scale solar installations for industrial facilities. Maximize energy efficiency and savings.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Megawatt-scale installations',
        'Energy storage solutions',
        'Power purchase agreements',
        'Comprehensive maintenance'
      ]
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // Card slider settings
  const cardSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // Testimonial slider settings
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (current, next) => setActiveTestimonial(next)
  };

  // Custom arrow components
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute right-4 z-10 bg-primary/80 hover:bg-primary text-white rounded-full p-2`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute left-4 z-10 bg-primary/80 hover:bg-primary text-white rounded-full p-2`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  }

  // Card slider data
  const cardSliderData = [
    {
      title: 'Solar Panel Installation',
      description: 'Professional installation of high-efficiency solar panels for maximum energy production.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Site assessment and design',
        'Permitting and documentation',
        'Professional installation',
        'System commissioning'
      ]
    },
    {
      title: 'Energy Storage Solutions',
      description: 'Advanced battery systems to store excess energy for use during peak hours or outages.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Lithium-ion battery systems',
        'Smart energy management',
        'Backup power solutions',
        'Grid services integration'
      ]
    },
    {
      title: 'Solar Maintenance',
      description: 'Regular maintenance services to ensure your solar system operates at peak efficiency.',
      image: Services,
      features: [
        'Annual system inspections',
        'Panel cleaning services',
        'Performance monitoring',
        'Repair and replacement'
      ]
    },
    {
      title: 'Energy Monitoring',
      description: 'Real-time monitoring systems to track your energy production and consumption.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Real-time data tracking',
        'Mobile app access',
        'Performance analytics',
        'Alert notifications'
      ]
    },
    {
      title: 'Solar Financing',
      description: 'Flexible financing options to make solar energy affordable for everyone.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Solar loans and leases',
        'PPA agreements',
        'Government incentives',
        'Tax credit assistance'
      ]
    },
    {
      title: 'Commercial Solar',
      description: 'Custom solar solutions for businesses of all sizes to reduce energy costs.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Commercial system design',
        'ROI analysis',
        'Net metering solutions',
        'Energy management'
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'California',
      text: 'Installing solar panels was the best decision we made for our home. The team was professional, and we\'re already seeing significant savings on our energy bills.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      location: 'Texas',
      text: 'The commercial solar system has transformed our business operations. We\'ve reduced our energy costs by 75% and improved our sustainability profile.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      location: 'New York',
      text: 'From consultation to installation, the entire process was seamless. The monitoring system is fantastic, and customer support is always available.',
      rating: 4
    },
    {
      name: 'David Thompson',
      location: 'Florida',
      text: 'We\'ve had our solar system for three years now, and it has exceeded all expectations. The warranty coverage gives us complete peace of mind.',
      rating: 5
    },
    {
      name: 'Jennifer Williams',
      location: 'Arizona',
      text: 'The energy storage solution has been a game-changer during power outages. We now have reliable backup power and energy independence.',
      rating: 5
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How much can I save with solar panels?',
      answer: 'Savings vary based on your location, energy consumption, and system size, but most homeowners save between 50-90% on their electricity bills.'
    },
    {
      question: 'What is the lifespan of solar panels?',
      answer: 'Most solar panels come with a 25-year warranty and can continue to produce electricity for 30+ years with minimal degradation.'
    },
    {
      question: 'Do solar panels work during cloudy days?',
      answer: 'Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency. Modern panels are designed to work in various weather conditions.'
    },
    {
      question: 'What maintenance is required for solar panels?',
      answer: 'Solar panels require minimal maintenance, typically just occasional cleaning and an annual inspection to ensure optimal performance.'
    },
    {
      question: 'Can I install solar panels myself?',
      answer: 'While DIY installation is possible, we recommend professional installation to ensure safety, proper setup, and eligibility for warranties and incentives.'
    },
    {
      question: 'Are there government incentives for solar installation?',
      answer: 'Yes, there are federal tax credits, state rebates, and local incentives available. Our team will help you navigate all available programs.'
    }
  ];

  // Process steps
  const processSteps = [
    {
      icon: <FaCalendarAlt className="text-3xl text-primary" />,
      title: 'Consultation',
      description: 'Free energy assessment and customized quote'
    },
    {
      icon: <FaUserTie className="text-3xl text-primary" />,
      title: 'Design',
      description: 'Custom system design for your property'
    },
    {
      icon: <FaFileAlt className="text-3xl text-primary" />,
      title: 'Permitting',
      description: 'Handling all paperwork and permits'
    },
    {
      icon: <FaTools className="text-3xl text-primary" />,
      title: 'Installation',
      description: 'Professional installation by certified technicians'
    },
    {
      icon: <FaPlug className="text-3xl text-primary" />,
      title: 'Inspection',
      description: 'Final inspection and system activation'
    },
    {
      icon: <FaChartLine className="text-3xl text-primary" />,
      title: 'Monitoring',
      description: 'Ongoing performance monitoring and support'
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary" />,
      title: 'Reduce Energy Bills',
      description: 'Save up to 90% on your electricity costs'
    },
    {
      icon: <FaLeaf className="text-4xl text-primary" />,
      title: 'Environmental Impact',
      description: 'Reduce your carbon footprint significantly'
    },
    {
      icon: <FaHome className="text-4xl text-primary" />,
      title: 'Increase Property Value',
      description: 'Homes with solar sell for 4.1% more on average'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: 'Energy Independence',
      description: 'Protect against rising energy costs'
    },
    {
      icon: <FaAward className="text-4xl text-primary" />,
      title: 'Government Incentives',
      description: 'Take advantage of tax credits and rebates'
    },
    {
      icon: <FaBatteryFull className="text-4xl text-primary" />,
      title: 'Energy Storage',
      description: 'Store excess energy for later use'
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      bio: 'With over 15 years in renewable energy, Alex leads our vision for a sustainable future.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Sarah Williams',
      position: 'Chief Technology Officer',
      bio: 'Sarah ensures we stay at the forefront of solar technology and innovation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Installation',
      bio: 'Michael oversees all installations with a focus on quality and customer satisfaction.',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Customer Success Manager',
      bio: 'Emily ensures every customer has a smooth experience from consultation to installation.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Stats data
  const stats = [
    { value: '5000+', label: 'Happy Customers' },
    { value: '25', label: 'Years Warranty' },
    { value: '24/7', label: 'Support' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '50+', label: 'Expert Technicians' },
    { value: '12', label: 'States Served' }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    });
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
    
  const handleGetQuote = () => {
    navigate('/GetQuote');
  };

  return (
    <div className='  '>
      {/* Hero Section with background image */}
      <section id="home" className="pt-20 relative bg-gradient-to-br from-blue-50 to-green-50">
        {/* Background image with overlay */}
       <div className="absolute inset-0 z-0 overflow-hidden">
  <video
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source 
      src={baner} 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>

          <div className="absolute inset-0 bg-[#00000050] bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Time display */}
          <div className="flex justify-end mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full py-2 px-6 flex items-center text-[#000]">
              <FaClock className="mr-2" />
              <span className="font-mono text-lg">{formatTime(currentTime)}</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Power Your Home With 
                <span className="text-yellow-600"> Solar Energy</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Save up to 90% on your electricity bills with our premium solar panel systems. 
                Eco-friendly, reliable, and built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button   onClick={handleGetQuote}  className="bg-yellow-600 hover:bg-yellow-500 text-[#fff] font-bold text-lg px-8 py-4 rounded-lg transition duration-300">
                  Get Free Consultation
                </button>
                <a href='/products' className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition duration-300">
                  View Products
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">5000+</div>
                  <div className="text-gray-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">25</div>
                  <div className="text-gray-200">Years Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">24/7</div>
                  <div className="text-gray-200">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary  p-8 text-white ">
                <img src={baner1} className=' rounded-sm' alt="" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4">
          <div className="flex items-center space-x-3">
  <div
    className="w-3 h-3 bg-yellow-600 rounded-full"
    style={{
      animation: 'pulse-scale 1s infinite',
      transformOrigin: 'center',
    }}
  ></div>
  <span className="font-semibold">Live Monitoring</span>

  {/* Define keyframes inline */}
  <style>
    {`
      @keyframes pulse-scale {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.5); opacity: 0.6; }
      }
    `}
  </style>
</div>

              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">90%</div>
                  <div className="text-sm text-gray-600">Energy Savings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
         
        </div>
      </section>
<section> 
    <div className="container mx-auto px-4 py-1">
    <div className="grid md:grid-cols-3 gap-8 mt-1">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#fff] bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <div>
                    <h3 className="font-bold text-lg text-[#000]">{feature.title}</h3>
                    <p className="text-[#000]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div></section>

      {/* Navigation Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solar Solutions</h2>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-3 text-[#000] rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab
                      ? 'bg-primary text-[#000] shadow'
                      : 'text-[#000] hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-4">{tabContent[activeTab].title}</h3>
                  <p className="text-gray-600 mb-6">{tabContent[activeTab].description}</p>
                  <ul className="space-y-3 mb-6">
                    {tabContent[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary">
                    Learn More
                  </button>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={tabContent[activeTab].image} 
                    alt={tabContent[activeTab].title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Solar Energy</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover the numerous benefits of switching to solar power for your home or business
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Solar Installation Process</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            From consultation to activation, we make going solar simple and hassle-free
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solar Projects</h2>
          
          <div className="">
            <Slider {...sliderSettings}>
              <div className="px-2">
                <div className="rounded-xl overflow-hidden shadow-lg h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Solar Project 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="px-2">
                <div className="rounded-xl overflow-hidden shadow-lg h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Solar Project 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="px-2">
                <div className="rounded-xl overflow-hidden shadow-lg h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Solar Project 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Card Slider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="">
            <Slider {...cardSliderSettings}>
              {cardSliderData.map((service, index) => (
                <div key={index} className="px-4">
                  <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="text-primary font-medium hover:underline">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Hear from homeowners and businesses who have made the switch to solar energy
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...testimonialSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} text-xl mx-1`} 
                        />
                      ))}
                    </div>
                    <div className="text-center mb-6">
                      <FaQuoteLeft className="text-primary text-3xl inline-block mb-2" />
                      <p className="text-gray-600 italic text-lg">"{testimonial.text}"</p>
                      <FaQuoteRight className="text-primary text-3xl inline-block mt-2" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-dark">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our dedicated professionals are committed to providing the best solar solutions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center w-full">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Find answers to common questions about solar energy and our services
          </p>
          
          <div className="">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-white rounded-xl shadow-md overflow-hidden">
                <button 
                  className="w-full text-left p-6 font-bold text-lg flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-primary">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className=" bg-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Have questions about solar energy? Get in touch with our experts
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 ">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="industrial">Industrial Solar</option>
                    <option value="maintenance">Solar Maintenance</option>
                    <option value="storage">Energy Storage</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <button type="submit" className=" w-full bg-[#000] py-3  text-[#ffffff] rounded-md">
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <h3 className="text-xl font-bold text-dark mb-6">Get In Touch</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary text-[#000] rounded-full p-3 mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-[#000] rounded-full p-3 mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Email</h4>
                      <p className="text-gray-600">info@solarenergy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-[#000] rounded-full p-3 mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Office</h4>
                      <p className="text-gray-600">123 Solar Street, Green City, GC 12345</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-dark mb-4">Business Hours</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-dark mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary text-[#000] rounded-full p-3 hover:bg-primary-dark transition">
                      <FaFacebook />
                    </a>
                    <a href="#" className="bg-primary text-[#000] rounded-full p-3 hover:bg-primary-dark transition">
                      <FaTwitter />
                    </a>
                    <a href="#" className="bg-primary text-[#000] rounded-full p-3 hover:bg-primary-dark transition">
                      <FaInstagram />
                    </a>
                    <a href="#" className="bg-primary text-[#000] rounded-full p-3 hover:bg-primary-dark transition">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="bg-primary text-[#000] rounded-full p-3 hover:bg-primary-dark transition">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
       <div className="w-full mt-3">
    
  <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <iframe
          title="Our Location on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14232.121889133716!2d75.7469037!3d26.902528000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1760618615945!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;