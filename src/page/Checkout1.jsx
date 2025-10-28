import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import here
import { FaSolarPanel, FaCreditCard, FaTruck, FaCheckCircle } from "react-icons/fa";

export default function Checkout() {
  const navigate = useNavigate(); // ✅ useNavigate must be inside component

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    paymentMethod: "credit",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Navigate to success page after order placed
    navigate("/checkout-success");
  };

  return (
    <section className="bg-gradient-to-b from-yellow-50 to-green-50 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container px-5 mx-auto bg-white shadow-2xl p-8 rounded-3xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-3">
            <FaSolarPanel className="text-amber-600 text-5xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Proceed to Checkout
          </h2>
          <p className="text-gray-500">
            Finalize your solar purchase and join the green revolution 🌞
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Address
              </label>
              <textarea
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-green-50 p-6 rounded-2xl border border-green-200"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
              <FaTruck className="mr-2 text-green-600" /> Order Summary
            </h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Solar Panel 400W</span>
                <span>$299</span>
              </div>
              <div className="flex justify-between">
                <span>Installation Kit</span>
                <span>$49</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-amber-600">$348</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                <FaCreditCard className="mr-2 text-amber-600" /> Payment Method
              </h4>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-amber-500"
              >
                <option value="credit">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition duration-300"
            >
              <FaCheckCircle />
              <span>Confirm & Pay</span>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
