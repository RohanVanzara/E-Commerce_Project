import React, { useState } from "react";
import "./BestSeller.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: "Apple iPhone 15 (Blue, 128 GB)",
    price: "₹64,999",
    oldPrice: "₹69,900",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
    sale: true,
  },
  {
    id: 2,
    name: "Noise Crew 1.38 Round Display with Bluetooth Calling, Metallic finish, IP68 Rating Smartwatch  (Blue Strap, Regular)",
    price: "₹3,999",
    oldPrice: "₹4,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/e/l/-original-imah6s6p747bvmxh.jpeg?q=70&crop=false",
    sale: true,
    path: "/Noisewatch"
},
  {
    id: 3,
    name: "Apple iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi Only (Blue)",
    price: "₹25,900",
    oldPrice: "₹34,900",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/r/4/m/-original-imagj72vqsfqgzpf.jpeg?q=70",
    sale: true,
  },

  {
    id: 4,
    name: "OnePlus Bullets Wireless Z2 Bluetooth  (Magico Black, In the Ear)",
    price: "₹2,299",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70",
    sale: false,
  },
  {
    id: 5,
    name: "SAMSUNG New D Series Brighter Crystal 4K Vision Pro (2024 Edition) 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV with with 4K Upscaling | Multiple Voice Assistance Remote | Purcolor | HDR 10+ | Auto Game Mode | Q-Symphony | Knox Security  (UA43DUE76AKLXL)",
    price: "₹29,999",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/u/v/o/-original-imah2v2gamua43wz.jpeg?q=70",
    sale: false,
  },
  {
    id: 6,
    name: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: "₹1,44,999",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70",
    sale: false,
  },
  {
    id: 7,
    name: "SAMSUNG 138 cm (55 inch) Ultra HD (4K) Curved LED Smart Tizen TV  (UA55KS9000KLXL)",
    price: "₹2,41,599",
    oldPrice: "₹2,84,900",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/e/6/i/-original-imah4h8zzhaubrsz.jpeg?q=70",
    sale: true,
  },
  {
    id: 8,
    name: "boAt Aavante Bar 3500 with Bass & Treble Controls, EQ Modes & Master Remote Control 500 W Bluetooth Soundbar  (Premium Black, 5.1 Channel)",
    price: "₹9,999",
    oldPrice: null,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/j/q/v/-original-imagtnpuctjgnzrx.jpeg?q=70",
    sale: false,
  },
  {
    id: 9,
    name: "SAMSUNG Galaxy Book5 Pro AI PC Full Metal Chasis Intel Core Ultra 7 256V - (16 GB/1 TB SSD/Windows 11 Home) NP940XHA Thin and Light Laptop  (14 Inch, Gray, 1.23 Kg, With MS Office",
    price: "₹1,55,990",
    oldPrice: "₹1,87,190",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70",
    sale: true,
    path: "/GalaxyBook5"
  },
  {
    id: 10,
    name: "Apple AirPods (3rd generation) Bluetooth  (White, True Wireless)",
    price: "₹11,499",
    oldPrice: "₹15,900",
    image: "https://rukminim2.flixcart.com/image/612/612/kwdv3bk0/headphone/q/o/x/-original-imag92pgct73fbvx.jpeg?q=70",
    sale: true,
  },
  {
    id: 11,
    name: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)",
    price: "₹34,990",
    oldPrice: "₹47,995",
    image: "https://rukminim2.flixcart.com/image/312/312/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70",
    sale: true,
  },
];

const BestSellerPage = () => {
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

      <div className="BestSeller-container">
        <aside className="BestSeller-sidebar">
          <h3>Browse by</h3>
          <ul className="BestSeller's-category-list">
            <li onClick={() => Navigate("/All")}>Shop All</li>
            <li className="active" onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
            <li onClick={() => Navigate("/Computer")}>Computers</li>
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
        <main className="BestSeller's-product-list">
          <div className="BestSeller's-sorting">
            <h1>BestSellers</h1>
            <div className="BestSeller's-sortby">
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
          <div className="BestSeller-grid">
            {products.map((product) => (
              <div key={product.id} className="BestSeller-card">
                {product.sale && <span className="BestSeller-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="BestSeller-image-wrapper">
                  <img src={product.image} alt={product.name} className="BestSeller-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="BestSeller-price">
                  {product.oldPrice && <span className="BestSeller's-old-price">{product.oldPrice}</span>}
                  <span className="BestSeller's-new-price">{product.price}</span>
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

export default BestSellerPage;
