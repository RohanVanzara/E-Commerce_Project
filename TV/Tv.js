import React, { useState } from "react";
import "./Tv.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
    {
        id: 1,
        name: "SAMSUNG New D Series Brighter Crystal 4K Vision Pro (2024 Edition) 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV with with 4K Upscaling | Multiple Voice Assistance Remote | Purcolor | HDR 10+ | Auto Game Mode | Q-Symphony | Knox Security  (UA55DUE76AKLXL)#JustHere",
        price: "₹44,999",
        oldPrice: null,
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/u/v/o/-original-imah2v2gamua43wz.jpeg?q=70",
        sale: false,
        path:"/Crystaltv"
    },
    {
        id: 2,
        name: "SAMSUNG 138 cm (55 inch) Ultra HD (4K) Curved LED Smart Tizen TV  (UA55KS9000KLXL)",
        price: "₹2,41,599",
        oldPrice: "₹2,84,900",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/e/6/i/-original-imah4h8zzhaubrsz.jpeg?q=70",
        sale: true,
        path:"/Curved"
    },
    {
        id: 3,
        name: "TCL P71B Pro 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV Hands Free Voice Control |Dolby Vision- Atmos | DTS Virtual : X, ONKYO 2.1ch |120Hz Game Accelerator (55P71B Pro)  (55P71B Pro)",
        price: "₹64,999",
        oldPrice: "₹79,990",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/television/t/4/q/-original-imah9m5y4cmf4dcs.jpeg?q=70&crop=false",
        sale: true,
        path:"/Tcltv"
    },
];

const TvPage = () => {
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

      <div className="Tv-container">
        <aside className="Tv-sidebar">
          <h3>Browse by</h3>
          <ul className="Tv's-category-list">
            <li onClick={() => Navigate("/All")}>Shop All</li>
            <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
            <li  onClick={() => Navigate("/computer")}>Computers</li>
            <li onClick={() => Navigate("/Tablets")}>Tablet</li>
            <li onClick={() => Navigate("/Drone")}>Drones</li>
            <li onClick={() => Navigate("/Camera")}>Cameras</li>
            <li onClick={() => Navigate("/Headphone")}>Headphones</li>
            <li onClick={() => Navigate("/Mobile")}>Mobile</li>
            <li onClick={() => Navigate("/Speaker")}>Speakers</li>
            <li className="active" onClick={() => Navigate("/tv")}>Television</li>
            <li onClick={() => Navigate("/Watch")}>Watch</li>
            <li onClick={() => Navigate("/Sale")}>Sale</li>
          </ul>
        </aside>
        <main className="Tv's-product-list">
          <div className="Tv's-sorting">
            <h1>Television</h1>
            <div className="Tv's-sortby">
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
          <div className="Tv-grid">
            {products.map((product) => (
              <div key={product.id} className="Tv-card">
                {product.sale && <span className="Tv-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="Tv-image-wrapper">
                  <img src={product.image} alt={product.name} className="Tv-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="Tv-price">
                  {product.oldPrice && <span className="Tv's-old-price">{product.oldPrice}</span>}
                  <span className="Tv's-new-price">{product.price}</span>
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

export default TvPage;
