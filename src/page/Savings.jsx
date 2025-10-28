import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaSun, FaMoneyBillWave, FaCalculator } from "react-icons/fa";

export default function Savings() {
  const [bill, setBill] = useState("");
  const [savings, setSavings] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!bill || bill <= 0) return;
    const monthlySavings = bill * 0.7; // assume 70% savings with solar
    const yearlySavings = monthlySavings * 12;
    setSavings({ monthly: monthlySavings, yearly: yearlySavings });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 flex flex-col">
      {/* 🔆 Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[300px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Calculate Your Solar Savings
          </h1>
          <p className="text-gray-100 text-lg">
            See how much you can save by switching to solar energy 🌞
          </p>
        </motion.div>
      </motion.div>

      {/* 💡 Calculator Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto w-full px-6 py-16"
      >
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-3 mb-6">
            <FaCalculator className="text-amber-600" /> Solar Savings Estimator
          </h2>

          <form onSubmit={handleCalculate} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Enter Your Average Monthly Electricity Bill (₹)
              </label>
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="e.g. 2500"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold py-3 rounded-xl shadow-lg hover:from-amber-700 hover:to-yellow-600 transition duration-300"
            >
              Calculate Savings
            </button>
          </form>

          {savings && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 bg-gradient-to-r from-amber-50 to-yellow-100 rounded-2xl p-8 text-center shadow-inner"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🌞 Estimated Savings
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="text-center">
                  <FaSun className="text-amber-600 text-4xl mb-2 mx-auto" />
                  <p className="text-gray-600 font-semibold">Monthly Savings</p>
                  <h4 className="text-3xl font-bold text-amber-700 mt-2">
                    ₹{savings.monthly.toFixed(0)}
                  </h4>
                </div>
                <div className="text-center">
                  <FaMoneyBillWave className="text-green-600 text-4xl mb-2 mx-auto" />
                  <p className="text-gray-600 font-semibold">Yearly Savings</p>
                  <h4 className="text-3xl font-bold text-green-700 mt-2">
                    ₹{savings.yearly.toFixed(0)}
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 mt-6 text-sm">
                *This is an approximate estimate. Actual savings depend on sunlight hours and system efficiency.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
