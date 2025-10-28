import React from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-100 via-amber-50 to-green-100 text-center overflow-hidden relative">
      
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-30 -z-10"
      ></motion.div>

      {/* Solar Panel Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center mb-6"
      >
        <FaSolarPanel className="text-amber-600 text-8xl drop-shadow-lg" />
      </motion.div>

      {/* 404 Number Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-8xl font-extrabold text-amber-700 mb-4"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-700 text-lg max-w-lg mx-auto"
      >
        Oops! Looks like the sunlight couldn’t reach this page.  
        Let’s get you back on the bright path ☀️
      </motion.p>

      {/* Floating Animation for Decorative Solar Rays */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border-[12px] border-amber-200 rounded-full top-10 opacity-30"
      ></motion.div>

      {/* Back Button */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
      >
        <FaHome />
        <span>Back to Home</span>
      </motion.a>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Solar Energy Co. — Empowering a Brighter Future 🔋
      </p>
    </section>
  );
}
