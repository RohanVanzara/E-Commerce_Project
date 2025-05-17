import React, { useState } from "react";
import "./Watch.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
    {
        id: 1,
        name: "Noise Crew 1.38 Round Display with Bluetooth Calling, Metallic finish, IP68 Rating Smartwatch  (Blue Strap, Regular)",
        price: "₹3,999",
        oldPrice: "₹4,999",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/e/l/-original-imah6s6p747bvmxh.jpeg?q=70&crop=false",
        sale: true,
        path: "/Noisewatch"
    },
    {
        id: 2,
        name: "boAt Lunar Vista w/ 3.8 cm(1.52\") HD & Always On Display,BT Calling, Functional Crown Smartwatch  (Active Black Strap, Free Size)",
        price: "₹5,999",
        // oldPrice: "₹6999",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/y/p/x/-original-imah4rgecdbyhptn.jpeg?q=70&crop=false",
        sale: false,
        path: "/Boatwatch"
    },
    {
        id: 3,
        name: "Boult Striker Bluetooth Calling, Health Tracking, Zinc Alloy Frame, 100+ Sports Modes Smartwatch  (Black Strap, Free Size)",
        price: "₹6,999",
        oldPrice: "₹8,999",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/k/a/-original-imagn45yaww9gmwu.jpeg?q=70&crop=false",
        sale: true,
        path: "/Boultwatch"
    },
    {
        id: 4,
        name: "Fire-Boltt Clickk 54.1mm (2.12\" inch) AMOLED Display, Front Camera, Nano SIM Slot, 1000mAh Smartwatch  (Ashfire Grey Strap, Free Size)",
        price: "₹12,999",
        // oldPrice: "₹14999",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/u/t/y/-original-imah4sspg5njb7yq.jpeg?q=70&crop=false",
        sale: false,
        path: "/FireBoltt"
    },
    {
        id: 5,
        name: "CMF by Nothing Watch Pro 2, 1.32 AMOLED, auto-brightness,Gesture Control, 3D warmup guide,GPS Smartwatch  (Dark Grey Strap, Free Size)",
        price: "₹5,499",
        // oldPrice: "₹8999",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/y/q/h/-original-imah2gmfunhhascz.jpeg?q=70&crop=false",
        sale: false,
        path: "/CMFwatch"
    },
];

const WatchPage = () => {
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

      <div className="Watch-container">
        <aside className="Watch-sidebar">
          <h3>Browse by</h3>
          <ul className="Watch's-category-list">
            <li onClick={() => Navigate("/All")}>Shop All</li>
            <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
            <li  onClick={() => Navigate("/computer")}>Computers</li>
            <li onClick={() => Navigate("/Tablets")}>Tablet</li>
            <li onClick={() => Navigate("/Drone")}>Drones</li>
            <li onClick={() => Navigate("/Camera")}>Cameras</li>
            <li onClick={() => Navigate("/Headphone")}>Headphones</li>
            <li onClick={() => Navigate("/Mobile")}>Mobile</li>
            <li onClick={() => Navigate("/Speaker")}>Speakers</li>
            <li onClick={() => Navigate("/tv")}>Television</li>
            <li className="active" onClick={() => Navigate("/Watch")}>Watch</li>
            <li onClick={() => Navigate("/Sale")}>Sale</li>
          </ul>
        </aside>
        <main className="Watch's-product-list">
          <div className="Watch's-sorting">
            <h1>Watchs</h1>
            <div className="Watch's-sortby">
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
          <div className="Watch-grid">
            {products.map((product) => (
              <div key={product.id} className="Watch-card">
                {product.sale && <span className="Watch-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="Watch-image-wrapper">
                  <img src={product.image} alt={product.name} className="Watch-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="Watch-price">
                  {product.oldPrice && <span className="Watch's-old-price">{product.oldPrice}</span>}
                  <span className="Watch's-new-price">{product.price}</span>
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

export default WatchPage;
