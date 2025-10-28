import { useState } from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Header from './page/Header'
import Footer from './page/Footer'
import Home from "./page/home";
import Products from "./page/Products";
import About from "./page/About";
import ShoppingCart from "./page/ShoppingCart";
import Contact from "./page/Contact";
import Checkout from "./page/Checkout1";
import CheckoutSuccess from "./page/CheckoutSuccess";
import NotFound from "./page/NotFound";
import GetQuote from "./page/GetQuote";
import Services from "./page/Services";
import Savings from "./page/Savings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
   
      <Header/>

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/GetQuote" element={<GetQuote />} />
        <Route path="/Savings" element={<Savings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* ✅ Footer */}
      <Footer/>
    </Router>
  );
}

export default App;
