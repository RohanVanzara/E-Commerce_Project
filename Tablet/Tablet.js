import React, { useState } from "react";
import "./Tablet.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: "Apple iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi+5G (Blue)",
    price: "₹49,490",
    oldPrice: "₹49,900",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/z/u/o/-original-imagj72tg8dj3sgx.jpeg?q=70&crop=false",
    sale: true,
    path: "/Ipad"
  },
  {
    id: 2,
    name: "SAMSUNG Galaxy Tab S9 FE 6 GB RAM 128 GB ROM 10.9 inch with Wi-Fi Only Tablet (Gray)",
    price: "₹54,999",
    // oldPrice: "₹44,999",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/a/y/2/-original-imahyge2z8upt35h.jpeg?q=70",
    sale: false,
    path: "/Galaxys9"

  },
  {
    id: 3,
    name: "Lenovo Tab M11 LTE with Pen 8 GB RAM 128 GB ROM 11.0 inch with 4G Tablet (Seafoam Green)",
    price: "28,000",
    oldPrice: "35,000",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/c/h/l/-original-imagz928a7gkav6j.jpeg?q=70&crop=false",
    sale: true,
    path: "/LenovoTab"
  },
  {
    id: 4,
    name: "SAMSUNG Galaxy Tab S10+ 12 GB RAM 256 GB ROM 12.4 inch with Wi-Fi+5G Gaming Tablet (Moonstone Gray)",
    price: "₹1,04,999",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/f/n/g/sm-x820-samsung-original-imah5fwggq7x8acr.jpeg?q=70",
    sale: false,
    path: "/Galaxys10"

  },

  {
    id: 5,
    name: "OnePlus Pad Go 8 GB RAM 128 GB ROM 11.35 inch with Wi-Fi Only Tablet (Twin Mint)",
    price: "₹19,999",
    oldPrice: "₹24,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/v/w/t/-original-imagu2mdexmnb7bw.jpeg?q=70&crop=false",
    sale: true,
    path: "/OnePlusTab"

  },
];

const TabletPage = () => {
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

      <div className="Tablet-container">
        <aside className="Tablet-sidebar">
          <h3>Browse by</h3>
          <ul className="Tablet's-category-list">
            <li onClick={() => Navigate("/All")}>Shop All</li>
            <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
            <li onClick={() => Navigate("/Computer")}>Computers</li>
            <li className="active" onClick={() => Navigate("/Tablets")}>Tablets</li>
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
        <main className="Tablet's-product-list">
          <div className="Tablet's-sorting">
            <h1>Tablets</h1>
            <div className="Tablet's-sortby">
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
          <div className="Tablet-grid">
            {products.map((product) => (
              <div key={product.id} className="Tablet-card">
                {product.sale && <span className="Tablet-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="Watch-image-wrapper">
                  <img src={product.image} alt={product.name} className="Watch-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="Tablet-price">
                  {product.oldPrice && <span className="Tablet's-old-price">{product.oldPrice}</span>}
                  <span className="Tablet's-new-price">{product.price}</span>
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

export default TabletPage;
