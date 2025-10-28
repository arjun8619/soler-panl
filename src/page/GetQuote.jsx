import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp message format
    const message = `🌞 *New Solar Quote Request* 🌞
------------------------------
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📍 *Location:* ${formData.location}
💬 *Message:* ${formData.message}
------------------------------
⚡ Sent from Solar Quote Form`;

    // Your WhatsApp number (with country code, 91 for India)
    const whatsappNumber = "917665864840";

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp chat window
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-100 to-green-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Animated Solar Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-40 -top-10 right-20 -z-10"
      ></motion.div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center mb-4">
          <FaSolarPanel className="text-amber-600 text-6xl drop-shadow-lg" />
        </div>
        <h1 className="text-4xl font-bold text-amber-700 mb-3">
          Get Your Free Solar Quote ☀️
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto">
          Fill in your details below, and our solar experts will get in touch with you
          to design the perfect energy solution for your home or business.
        </p>
      </motion.div>

      {/* Quote Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-amber-200"
      >
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-amber-500 outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-amber-500 outline-none transition-all"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-amber-500 outline-none transition-all"
          />
          <input
            type="text"
            name="location"
            placeholder="Your City or Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-amber-500 outline-none transition-all"
          />
          <textarea
            name="message"
            placeholder="Describe your solar energy needs..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-amber-500 outline-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 w-full bg-amber-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-amber-700 transition-all duration-300"
        >
          <FaPaperPlane />
          <span>Request Quote</span>
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-center text-gray-700"
      >
        <p className="flex justify-center items-center gap-2">
          <FaPhoneAlt className="text-amber-600" /> +91 76658 64840
        </p>
        <p className="flex justify-center items-center gap-2 mt-2">
          <FaEnvelope className="text-amber-600" /> support@solarpanel.com
        </p>
      </motion.div>

      {/* Floating Decorative Solar Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border-[12px] border-amber-200 rounded-full top-0 left-0 opacity-25"
      ></motion.div>
    </section>
  );
}
