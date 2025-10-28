import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PremiumSolarPanel from "./../assets/img/PremiumSolarPanel.jpg";
import SolarPowerKit5kW from "./../assets/img/SolarPowerKit5kW.jpg";
import PortableSolarKit200W from "./../assets/img/PortableSolarKit200W.jpg";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Premium Solar Panel 400W",
      description:
        "High-efficiency monocrystalline solar panel built for long-term residential use.",
      price: "$299",
      originalPrice: "$399",
      image: PremiumSolarPanel,
      features: [
        "25-Year Warranty",
        "21.5% Efficiency",
        "Weather Resistant",
        "Smart Power Output",
      ],
      rating: 4.8,
      reviews: 1247,
    },
    {
      id: 2,
      name: "Commercial Solar Panel 550W",
      description:
        "Durable solar module designed for industrial and commercial-grade power systems.",
      price: "$449",
      originalPrice: "$549",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      features: [
        "30-Year Warranty",
        "22.8% Efficiency",
        "Corrosion Resistant Frame",
        "Ideal for Warehouses",
      ],
      rating: 4.9,
      reviews: 892,
    },
    {
      id: 3,
      name: "Solar Power Kit 5kW",
      description:
        "Complete home solar system including inverter, wiring, and mounting hardware.",
      price: "$4,999",
      originalPrice: "$6,499",
      image: SolarPowerKit5kW,
      features: [
        "Complete System",
        "Easy Installation",
        "App Monitoring",
        "Hybrid Inverter",
      ],
      rating: 4.7,
      reviews: 563,
    },
    {
      id: 4,
      name: "Portable Solar Kit 200W",
      description:
        "Compact, lightweight solar charging system for outdoor and travel enthusiasts.",
      price: "$199",
      originalPrice: "$299",
      image: PortableSolarKit200W,
      features: [
        "Portable Design",
        "Fast Charging",
        "Foldable Panels",
        "USB Output Ports",
      ],
      rating: 4.6,
      reviews: 1289,
    },
  ];

  const handleCheckout = () => {
    navigate("/ShoppingCart"); // ✅ Navigate to cart page
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      {/* ✅ Banner Section */}
      <div
        className="w-full h-[550px] bg-cover bg-center mb-12 shadow-md"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="w-full h-full bg-black/50 flex items-center justify-center rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            Explore Our Advanced Solar Solutions ☀️
          </h2>
        </div>
      </div>

      {/* ✅ Product Grid */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our Solar Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Efficient, eco-friendly, and reliable — choose the perfect solar
            product for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100"
            >
              {/* ✅ Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  SAVE $
                  {parseInt(product.originalPrice.replace("$", "")) -
                    parseInt(product.price.replace("$", ""))}
                </div>
              </div>

              {/* ✅ Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-700" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-gray-500 text-sm">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-amber-700">
                      {product.price}
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* ✅ Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center space-x-2 group"
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
