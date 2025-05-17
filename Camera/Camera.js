import React, { useState } from "react";
import "./Camera.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: "Canon EOS 3000D DSLR Camera 1 Body, 18 - 55 mm Lens  (Black)",
    price: "₹34,990",
    // oldPrice: "₹47,995",
    image: "https://rukminim2.flixcart.com/image/832/832/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70&crop=false",
    sale: false,
    path: "/Canon3000D"
  },
  {
    id: 2,
    name: "Canon EOS R10 Mirrorless Camera Body with RF-S 18 - 150 mm f/3.5 - 6.3 IS STM Lens Kit  (Black)",
    price: "₹1,12,139",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/832/832/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=70&crop=false",
    sale: false,
    path: "/CanonR10"
  },
  {
    id: 3,
    name: "TP-Link Tapo C500 1080p Outdoor Pan/Tilt Security WiFi Smart Camera Security Camera  (512 GB, 1 Channel)",
    price: "₹5,449",
    oldPrice: "₹6,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/y/k/k/1-tapo-c500-indoor-security-camera-tp-link-original-imah754d95epb2uf.jpeg?q=70&crop=false",
    sale: true,
    path: "/TapoCctv"
  },
  {
    id: 4,
    name: "Mi by Xiaomi 3MP Camera 2K (1296p) High Resolution AI Human Detection PTZ 360° Smart Home Security Camera  (1 Channel)",
    price: "₹3,999",
    oldPrice: "₹4,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/j/l/k/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh54yy9qfeq.jpeg?q=70&crop=false",
    sale: true,
    path: "/XiaomiCctv"
  },
  {
    id: 5,
    name: "Panasonic DMC-G85HAGWK Mirrorless Camera Body with 14 - 140 mm/F3.5-5.6 ASPH Lens  (Black)",
    price: "₹79,990",
    oldPrice: "₹94,990",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/b/x/1/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknqmjh6sxem.jpeg?q=70",
    sale: true,
    path: "/PanasonicCamera"
  },
];

const CameraPage = () => {
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

      <div className="Camera-container">
        <aside className="Camera-sidebar">
          <h3>Browse by</h3>
          <ul className="Camera's-category-list">
            <li onClick={() => Navigate("/All")}>Shop All</li>
            <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
            <li onClick={() => Navigate("/computer")}>Computers</li>
            <li onClick={() => Navigate("/Tablets")}>Tablet</li>
            <li onClick={() => Navigate("/Drone")}>Drones</li>
            <li className="active" onClick={() => Navigate("/Camera")}>Cameras</li>
            <li onClick={() => Navigate("/Headphone")}>Headphones</li>
            <li onClick={() => Navigate("/Mobile")}>Mobile</li>
            <li onClick={() => Navigate("/Speaker")}>Speakers</li>
            <li onClick={() => Navigate("/tv")}>Television</li>
            <li onClick={() => Navigate("/Watch")}>Watch</li>
            <li onClick={() => Navigate("/Sale")}>Sale</li>
          </ul>
        </aside>
        <main className="Camera's-product-list">
          <div className="Camera's-sorting">
            <h1>Cameras</h1>
            <div className="Camera's-sortby">
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
          <div className="Camera-grid">
            {products.map((product) => (
              <div key={product.id} className="Camera-card">
                {product.sale && <span className="Camera-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="Camera-image-wrapper">
                  <img src={product.image} alt={product.name} className="Camera-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="Camera-price">
                  {product.oldPrice && <span className="Camera's-old-price">{product.oldPrice}</span>}
                  <span className="Camera's-new-price">{product.price}</span>
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

export default CameraPage;
