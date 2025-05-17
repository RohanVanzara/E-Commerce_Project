import React, { useState } from "react";
import "./Headphone.css"
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: "SONY WH-CH720N Active Noise Cancelling, 50 Hrs. Battery life, Multipoint Connection Bluetooth  (Black, On the Ear)",
    price: "₹10,499",
    oldPrice: "₹14,990",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70",
    sale: true,
    path: "/SonyWH"
  },

  {
    id: 2,
    name: "OnePlus Bullets Wireless Z2 Bluetooth  (Magico Black, In the Ear)",
    price: "2,299",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70",
    sale: false,
    path: "/OnePlusBullets"

  },
  {
    id: 3,
    name: "Apple AirPods Pro (2nd generation) with MagSafe Case (USB-C) Bluetooth  (White, True Wireless)",
    price: "₹21,999",
    // oldPrice: "₹15,900",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=70&crop=false",
    sale: false,
    path: "/AirPodsPro"

  },
  {
    id: 4,
    name: "Noise Airwave Max 5, 80 Hours Playtime, HFA Tech, Adaptive ANC (50dB) & Dual pairing Bluetooth  (Calm Beige, On the Ear)",
    price: "₹4,999",
    oldPrice: "₹5,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/w/r/-original-imah2zf3f6uttfse.jpeg?q=70&crop=false",
    sale: true,
    path: "/NoiseAirwave"

  },
];

const HeadphonePage = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState(productsData);
  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortOption(sortValue);

    let sortedProducts = [...products];

    const cleanPrice = (priceStr) =>
      parseInt(priceStr.replace(/[₹,]/g, ""));

    switch (sortValue) {
      case "low-high":
        sortedProducts.sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
        break;
      case "high-low":
        sortedProducts.sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
        break;
      case "a-z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedProducts = [...productsData];
    }

    setProducts(sortedProducts);
  };


  return (
    <>

      <div className="Headphone-container">
        <aside className="Headphone-sidebar">
          <h3>Browse by</h3>
          <ul className="Headphone's-category-list">
            <li onClick={() => Navigate("/All")}>Shop All</li>
            <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
            <li onClick={() => Navigate("/computer")}>Computers</li>
            <li onClick={() => Navigate("/Tablets")}>Tablet</li>
            <li onClick={() => Navigate("/Drone")}>Drones</li>
            <li onClick={() => Navigate("/Camera")}>Cameras</li>
            <li className="active" onClick={() => Navigate("/Headphone")}>Headphones</li>
            <li onClick={() => Navigate("/Mobile")}>Mobile</li>
            <li onClick={() => Navigate("/Speaker")}>Speakers</li>
            <li onClick={() => Navigate("/tv")}>Television</li>
            <li onClick={() => Navigate("/Watch")}>Watch</li>
            <li onClick={() => Navigate("/Sale")}>Sale</li>
          </ul>
        </aside>
        <main className="Headphone's-product-list">
          <div className="Headphone's-sorting">
            <h1>Headphones</h1>
            <div className="Headphone's-sortby">
              <label>Sort by:</label>
              <select value={sortOption} onChange={handleSortChange}>
                <option value="default">Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="a-z">Name: A-Z</option>
                <option value="z-a">Name: Z-A</option>
              </select>
            </div>
          </div>
          <p> {products.length} Products</p>
          <div className="Headphone-grid">
            {products.map((product) => (
              <div key={product.id} className="Headphone-card">
                {product.sale && <span className="Headphone-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="Headphone-image-wrapper">
                  <img src={product.image} alt={product.name} className="Headphone-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="Headphone-price">
                  {product.oldPrice && <span className="Headphone's-old-price">{product.oldPrice}</span>}
                  <span className="Headphone's-new-price">{product.price}</span>
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HeadphonePage;
