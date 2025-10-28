import React from "react";
import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaBolt,
  FaTools,
  FaHome,
  FaBatteryFull,
  FaLeaf,
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function Services() {
  const navigate = useNavigate();

const handleGetQuote = () => {
    navigate('/GetQuote');
  };
const handleSavings = () => {
    navigate('/Savings');
  };

  const services = [
    {
      id: 1,
      icon: <FaSolarPanel className="text-amber-600 text-5xl mb-4" />,
      title: "Solar Panel Installation",
      description:
        "We provide high-quality solar panel installation for homes and businesses, ensuring maximum energy efficiency and long-term savings.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 2,
      icon: <FaBolt className="text-yellow-500 text-5xl mb-4" />,
      title: "Solar Inverter Setup",
      description:
        "Get the most from your panels with efficient inverters that convert solar energy into usable electricity with minimal loss.",
      image:
        "https://images.unsplash.com/photo-1611691546305-9c66c25b4efb?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 3,
      icon: <FaBatteryFull className="text-green-600 text-5xl mb-4" />,
      title: "Battery Storage Solutions",
      description:
        "Store excess solar power for night use or power outages. We offer high-capacity, long-lasting battery systems.",
      image:
        "https://images.unsplash.com/photo-1603791452906-e3e2c8c17f6f?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 4,
      icon: <FaTools className="text-blue-600 text-5xl mb-4" />,
      title: "Maintenance & Repair",
      description:
        "Our expert technicians provide regular maintenance and repair services to keep your solar system performing at its best.",
      image:
        "https://images.unsplash.com/photo-1598550880863-3fc1d3bb1cde?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 5,
      icon: <FaHome className="text-orange-600 text-5xl mb-4" />,
      title: "Residential Solar Solutions",
      description:
        "Reduce your electricity bills and make your home sustainable with our customized solar energy systems.",
      image:
        "https://images.unsplash.com/photo-1581093588401-22e6d2b95b09?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 6,
      icon: <FaLeaf className="text-emerald-600 text-5xl mb-4" />,
      title: "Green Energy Consulting",
      description:
        "Our experts help you plan the best eco-friendly energy strategy tailored to your home or business needs.",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 flex flex-col">
      {/* 🔆 Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[350px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Solar Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Empowering homes and businesses with sustainable solar energy
            solutions.
          </p>
        </motion.div>
      </motion.section>

      {/* ⚡ Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className=" container mx-auto px-6 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="p-6 text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ☀️ CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-amber-600 to-yellow-500 py-16 text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Go Solar?
        </h2>
        <p className="text-lg text-amber-100 mb-6">
          Join thousands of customers saving money with clean solar energy.
        </p>
       <div className=" flex gap-2.5 justify-center items-center flex-wrap">
         <button 
            onClick={handleGetQuote}
          className="bg-white text-amber-700 font-bold py-3 px-8 rounded-xl shadow-md hover:bg-yellow-100 transition-all duration-300">
          Get Free Consultation
        </button>
        
         <button
         onClick={handleSavings} 
          className="bg-white text-amber-700 font-bold py-3 px-8 rounded-xl shadow-md hover:bg-yellow-100 transition-all duration-300">
           Free savings
        </button>

       </div>
      </motion.section>
    </div>
  );
}
