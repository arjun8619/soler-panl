import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import solarBanner from "./../assets/img/baner.jpg"; // <-- Add your solar panel image here

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Input handle function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit handler (WhatsApp Integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "7665864840"; // Your WhatsApp Number
    const message = `
🌞 *New SolarTech Contact Form Submission*
----------------------------------------
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
⚙️ *Service Interest:* ${formData.service}
💬 *Message:* ${formData.message}
----------------------------------------
📅 Sent from SolarTech Website
    `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      {/* 🌞 BANNER SECTION */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${solarBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0000002c] bg-opacity-60"></div>
        <div className="relative text-center z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with SolarTech
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Power your future with clean and renewable solar energy. Contact our
            experts today!
          </p>
        
        </div>
      </section>

      {/* 📨 CONTACT FORM SECTION */}
      <section className="bg-white" id="contact-form">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Have questions about solar energy? Get in touch with our experts
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Solar">Residential Solar</option>
                    <option value="Commercial Solar">Commercial Solar</option>
                    <option value="Industrial Solar">Industrial Solar</option>
                    <option value="Solar Maintenance">Solar Maintenance</option>
                    <option value="Energy Storage">Energy Storage</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-300"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>

            {/* RIGHT: Info */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-yellow-400 text-black rounded-full p-3 mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-400 text-black rounded-full p-3 mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-600">info@solarenergy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-400 text-black rounded-full p-3 mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-bold">Office</h4>
                      <p className="text-gray-600">
                        123 Solar Street, Green City, GC 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Business Hours</h4>
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
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="bg-yellow-400 text-black rounded-full p-3 hover:bg-yellow-500 transition"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full mt-12">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <iframe
                title="Our Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14232.121889133716!2d75.7469037!3d26.902528000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1760618615945!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
