import React from "react";
import "./DiscountBanner.css";
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: "https://rukminim2.flixcart.com/image/312/312/l5fnhjk0/dslr-camera/g/t/7/eos-r10-24-2-r10-canon-original-imagg4y52cybasdr.jpeg?q=70",
    title: "Cameras",
    discount: "Min. 30% Off",
    Path: "/Camera"
  },
  {
    id: 2,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/a/c/x/-original-imah9m5yb79utnfw.jpeg?q=70",
    title: "Televisions",
    discount: "Min. 30% Off",
    Path: "/Tv"
  },
];

const HomePage = () => {
  const Navigate = useNavigate(); 

  return (
    <div className="container">
      {/* Left Section */}
      <div className="products-section">
        <h2>Summer Offer</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card" 
              onClick={() => Navigate(product.Path)} 
              style={{ cursor: 'pointer' }} 
            >
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="discount">{product.discount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="Watche-banner">
        <img src="https://www.layers.shop/cdn/shop/files/screenshot-2024-08-28-at-51508-pm-2-673478231b654.webp?v=1731491936&width=3500" alt="" />
        <h2>Exclusive Smart Watches </h2>
        <p>Minimum 30% Off</p>
        <button onClick={() => Navigate("/Watch")} className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default HomePage;
