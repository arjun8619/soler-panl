import React from 'react'
import {  FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from './../assets/img/logo.png'
const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '/Contact' },
  ]

  const services = [
    'Residential Solar',
    'Commercial Solar',
    'Solar Maintenance',
    'System Monitoring',
    'Consultation'
  ]

  return (
    <footer className="bg-[#5a5b5d] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className=" w-40 h-12 ">
                    <img src={logo} className='w-full h-full object-contain' alt="" />
                      </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading the solar revolution with innovative, reliable, and affordable 
              solar solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#"  className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-gray-400 text-gray-300 
                 hover:bg-indigo-500 hover:text-white transition-all duration-500 ease-in-out"
  >
                <FaFacebook size={20} />
              </a>
              <a href="#"  className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-gray-400 text-gray-300 
                 hover:bg-indigo-500 hover:text-white transition-all duration-500 ease-in-out"
  >
                <FaTwitter size={20} />
              </a>
              <a href="#"  className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-gray-400 text-gray-300 
                 hover:bg-indigo-500 hover:text-white transition-all duration-500 ease-in-out"
  >
                <FaInstagram size={20} />
              </a>
              <a href="#"  className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-gray-400 text-gray-300 
                 hover:bg-indigo-500 hover:text-white transition-all duration-500 ease-in-out"
  >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

<div></div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                            className="relative text-gray-300 hover:text-indigo-500 transition-colors duration-300 group cursor-pointer  font-semibold"

                  >
                    {link.name}
                      <span
          className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-500 transition-all duration-500 ease-in-out group-hover:w-full"
        ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" 
                                              className="relative text-gray-300 hover:text-indigo-500 transition-colors duration-300 group cursor-pointer  font-semibold"
>
                    {service}
                              <span
          className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-500 transition-all duration-500 ease-in-out group-hover:w-full"
        ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new products and special offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full btn-primary py-2"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 SolarTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-primary text-sm transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-primary text-sm transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-primary text-sm transition duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer