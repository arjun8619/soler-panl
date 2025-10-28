import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/Products' },
    { name: 'About', href: '/About' },
    { name: 'Services', href: '/Services' },
    { name: 'Contact', href: '/Contact' },
  ];

  const handleGetQuote = () => {
    navigate('/GetQuote');
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-40 h-12">
            <img src={logo} className="w-full h-full object-contain" alt="Solar Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[#000] hover:text-indigo-500 transition-colors duration-300 group cursor-pointer font-semibold"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleGetQuote} 
              className="bg-yellow-600 w-full h-10 rounded-sm text-white font-semibold p-1 hover:bg-yellow-700 transition-all duration-300"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-indigo-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  handleGetQuote();
                  setIsMenuOpen(false);
                }} 
                className="bg-yellow-600 text-white font-semibold py-2 rounded hover:bg-yellow-700 transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
