import React from "react";
import "./Brands.css"; // Importing the CSS file

// Sample brand names (Replace with images if needed)
const brands = ["SAMSUNG", "Apple", "boAt", "Dell", "HP"];

const BrandSection = () => {
  return (
    <div className="brand-container">
      <h2 className="brand-title">Top Brands</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div className="brand-box" key={index}>
            <span className="brand-name">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
