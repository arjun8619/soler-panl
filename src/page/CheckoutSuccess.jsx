import React from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function CheckoutSuccess() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-100 via-amber-50 to-green-100 text-center p-6">
      
      {/* Solar Glow Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-amber-200 blur-3xl opacity-50 animate-pulse"></div>
        <FaSolarPanel className="text-amber-600 text-8xl relative z-10" />
      </motion.div>

      {/* Success Icon */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6"
      >
        <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800">
          Payment Confirmed!
        </h1>
        <p className="text-gray-600 mt-2 text-lg max-w-md mx-auto">
          Thank you for choosing <span className="text-amber-600 font-semibold">Solar Energy</span>. 
          Your order has been successfully placed and will be delivered soon 🌞
        </p>
      </motion.div>

      {/* Floating Cards Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl"
      >
        {[
          {
            title: "Clean Energy",
            desc: "Save money and help the planet with every watt.",
          },
          {
            title: "Fast Installation",
            desc: "Our technicians will contact you shortly for setup.",
          },
          {
            title: "Warranty",
            desc: "Enjoy a 25-year performance guarantee.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-amber-100 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-10"
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          <span>Return to Home</span>
          <FaArrowRight />
        </a>
      </motion.div>

      {/* Footer Text */}
      <p className="text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Solar Energy Co. — Brightening the Future ☀️
      </p>
    </section>
  );
}
