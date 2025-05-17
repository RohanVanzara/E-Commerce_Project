import React, { useState } from "react";
import "./Computer.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';


const productsData = [
  {
    id: 1,
    name: "DELL 68.58 cm (27 inch) Quad HD LED Backlit IPS Panel with 2xDisplayPort, 1xHDMI, 2xThunderbolt, 2xUSB-Type C, 4xUSB Type-A, Audio line Out, RJ45, Adjustability-Height, Tilt, Swivel UltraSharp Hub Monitor (U2724DE)  (Response Time: 5 ms, 120 Hz Refresh Rate)",
    price: "₹64,999",
    oldPrice: "₹73,499",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/6/a/m/-original-imahymzghhb3bs3s.jpeg?q=70",
    sale: true,
    path: "/Dell"
  },
  {
    id: 2,
    name: "Apple Mac Mini (MXNF2HN/A) Core i3 (8 GB RAM/Intel UHD Graphics 630 Graphics/256 GB SSD Capacity/Mac OS Catalina) Mini Tower",
    price: "₹70,990",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/832/832/k9bo9e80/cpu/h/2/d/mac-mini-mxnf2hn-a-apple-original-imafr5ad2sjxtsgh.jpeg?q=70&crop=false",
    sale: false,
    path: "/MacMini"
  },
  {
    id: 3,
    name: "SAMSUNG Galaxy Book5 Pro AI PC Full Metal Chasis Intel Core Ultra 7 256V - (16 GB/1 TB SSD/Windows 11 Home) NP940XHA Thin and Light Laptop  (14 Inch, Gray, 1.23 Kg, With MS Office",
    price: "₹1,55,990",
    oldPrice: "₹1,87,190",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70",
    sale: true,
    path: "/GalaxyBook5"
  },
  {
    id: 4,
    name: "rionix Gaming & Editind INTEL CORE i5 7TH (16 GB RAM/4 GB NVIDEA Graphics/1 TB Hard Disk/256 GB SSD Capacity/Windows 11 Pro/4 GB Graphics Memory) Gaming Tower with MS Office",
    price: "₹59,999",
    oldPrice: "₹75,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/cpu/k/x/9/512-3-core-i5-2nd-gaming-0-rionix-original-imah5r8yfdmcgttc.jpeg?q=70&crop=false",
    sale: true,
    path: "/Rionix"
  },

  {
    id: 5,
    name: "ASUS AiO A3 Series, All in One Desktop, Intel 13th Gen Core i5 (8 GB DDR5/Windows 11 Home/23.8 Inch Screen/A3402WVA-BPC002WS)  (Black)",
    price: "₹54,990",
    oldPrice: "₹79,990",
    image: "  https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/i/g/k/-original-imah4qspqmbg7txu.jpeg?q=70",
    sale: true,
    path: "/Asus"
  },
];

const ComputerPage = () => {
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

      <div className="Computer-container">
        <aside className="Computer-sidebar">
          <h3>Browse by</h3>
          <ul className="Computer's-category-list">
            <li onClick={() => Navigate("/All")}>Shop All</li>
            <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
            <li className="active" onClick={() => Navigate("/computer")}>Computers</li>
            <li onClick={() => Navigate("/Tablets")}>Tablet</li>
            <li onClick={() => Navigate("/Drone")}>Drones</li>
            <li onClick={() => Navigate("/Camera")}>Cameras</li>
            <li onClick={() => Navigate("/Headphone")}>Headphones</li>
            <li onClick={() => Navigate("/Mobile")}>Mobile</li>
            <li onClick={() => Navigate("/Speaker")}>Speakers</li>
            <li onClick={() => Navigate("/tv")}>Television</li>
            <li onClick={() => Navigate("/Watch")}>Watch</li>
            <li onClick={() => Navigate("/Sale")}>Sale</li>
          </ul>
        </aside>
        <main className="Computer's-product-list">

          <div className="Computer's-sorting">
            <h1>Computers</h1>
            <div className="Computer's-sortby">
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
          <div className="Computer-grid">
            {products.map((product) => (
              <div key={product.id} className="Computer-card">
                {product.sale && <span className="Computer-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="Computer-image-wrapper">
                  <img src={product.image} alt={product.name} className="Computer-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="Computer-price">
                  {product.oldPrice && <span className="Computer's-old-price">{product.oldPrice}</span>}
                  <span className="Computer's-new-price">{product.price}</span>
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

export default ComputerPage;
