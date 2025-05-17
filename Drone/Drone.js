import React, { useState } from "react";
import "./Drone.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: "Amitasha Remote Control Drone with Dual Camera 4k 1080p RC Obstacle Avoidance Drone Wi-Fi Selfie Gesture with Brushless Motor One Key Take-off & Landing 2 x 3000mAh Battery)",
    price: "₹61,199",
    oldPrice: "₹99,991",
    image: "https://m.media-amazon.com/images/I/715-wvNEVCL._AC_UL480_FMwebp_QL65_.jpg",
    sale: true,
    path: "/AmitashaDrone"
  },
  {
    id: 2,
    name: "GoPro HERO13 Creator Edition -Volta, Media Mod, Light Mod, Enduro Battery, Mount Sports and Action Camera  (Black, 27 MP)",
    price: "₹59,990",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/sports-action-camera/m/u/p/hero13-creator-edition-na-2-27-27-hero13-creator-edition-gopro-original-imah4cg9vvcyhmhx.jpeg?q=70",
    sale: false,
    path: "/Hero13GoPro"
  },
  {
    id: 3,
    name: "IZI Mini X Nano Fly More Combo 4K Drone with camera UHD 20MP CMOS, 93-min Flight Time, 4KM Live Video, GPS, 3-Axis Gimbal, 10+ Flight Modes, 3 x Smart Battery, Fast Tri-Charger, 249g",
    price: "₹54,999",
    oldPrice: "₹69,999",
    image: "https://m.media-amazon.com/images/I/71BEFuoEo-L._SL1500_.jpg",
    sale: true,
    path: "/IZIDrone"

  },
  {
    id: 4,
    name: "GoPro HERO12 DualLCDScreens 5.3K60 UltraHDVideo HyperSmooth 6.0withAutoBoostWaterproof Sports and Action Camera  (Black, 27 MP",
    price: "₹40,499",
    oldPrice: "₹45,000",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/y/r/u/-original-imahyxtgj2g8uqvn.jpeg?q=70&crop=false",
    sale: true,
    path: "/Hero12GoPro"

  },

  {
    id: 5,
    name: "GoPro Hero11 Waterproof Sports and Action Camera  (Black, 23 MP)",
    price: "₹40,000",
    oldPrice: "₹51,500",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/sports-action-camera/f/3/y/-original-imahyxtgqseqwhzr.jpeg?q=70",
    sale: true,
    path: "/Hero11GoPro"

  },
];

const DronePage = () => {
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

      <div className="Drone-container">
        <aside className="Drone-sidebar">
          <h3>Browse by</h3>
          <ul className="Drone's-category-list">
            <li onClick={() => Navigate("/All")}>Shop All</li>
            <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
            <li onClick={() => Navigate("/computer")}>Computers</li>
            <li onClick={() => Navigate("/Tablets")}>Tablet</li>
            <li className="active" onClick={() => Navigate("/Drone")}>Drones</li>
            <li onClick={() => Navigate("/Camera")}>Cameras</li>
            <li onClick={() => Navigate("/Headphone")}>Headphones</li>
            <li onClick={() => Navigate("/Mobile")}>Mobile</li>
            <li onClick={() => Navigate("/Speaker")}>Speakers</li>
            <li onClick={() => Navigate("/tv")}>Television</li>
            <li onClick={() => Navigate("/Watch")}>Watch</li>
            <li onClick={() => Navigate("/Sale")}>Sale</li>
          </ul>
        </aside>
        <main className="Drone's-product-list">
          <div className="Drone's-sorting">
            <h1>Drones</h1>
            <div className="Drone's-sortby">
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
          <div className="Drone-grid">
            {products.map((product) => (
              <div key={product.id} className="Drone-card">
                {product.sale && <span className="Drone-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="Drone-image-wrapper">
                  <img src={product.image} alt={product.name} className="Drone-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="Drone-price">
                  {product.oldPrice && <span className="Drone's-old-price">{product.oldPrice}</span>}
                  <span className="Drone's-new-price">{product.price}</span>
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

export default DronePage;
