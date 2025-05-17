import React, { useState } from "react";
import "./Sale.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: "vivo V50 5G (Titanium Grey, 512 GB)  (12 GB RAM)",
    price: "₹40,999",
    oldPrice: "₹48,999",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/j/8/-original-imah94g8jz9x8ruf.jpeg?q=70",
    sale: true,
    path: "/Vivov50"
  },
  {
    id: 2,
    name: "SAMSUNG Galaxy Book5 Pro AI PC Full Metal Chasis Intel Core Ultra 7 256V - (16 GB/1 TB SSD/Windows 11 Home) NP940XHA Thin and Light Laptop  (14 Inch, Gray, 1.23 Kg, With MS Office",
    price: "₹1,55,990",
    oldPrice: "₹1,87,190",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70",
    sale: true,
    path: "/GalaxyBook5"
  },
  {
    id: 3,
    name: "Noise Crew 1.38 Round Display with Bluetooth Calling, Metallic finish, IP68 Rating SmartAll  (Blue Strap, Regular)",
    price: "₹3,999",
    oldPrice: "4,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/e/l/-original-imah6s6p747bvmxh.jpeg?q=70&crop=false",
    sale: true,
    path: "/Noisewatch"
  },
  {
    id: 4,
    name: "Apple iPhone 15 (Black, 128 GB)",
    price: "₹64,999",
    oldPrice: "₹69,900",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false",
    sale: true,
    path: "/Iphone15"
  },
  {
    id: 5,
    name: "Apple iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi+5G (Blue)",
    price: "₹49,490",
    oldPrice: "₹49,900",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/z/u/o/-original-imagj72tg8dj3sgx.jpeg?q=70&crop=false",
    sale: true,
    path: "/Ipad"
  },
  {
    id: 6,
    name: "SAMSUNG 138 cm (55 inch) Ultra HD (4K) Curved LED Smart Tizen TV  (UA55KS9000KLXL)",
    price: "₹2,41,599",
    oldPrice: "₹2,84,900",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/e/6/i/-original-imah4h8zzhaubrsz.jpeg?q=70",
    sale: true,
    path: "/Curved"
  },
  {
    id: 7,
    name: "boAt Stone Opus with 12 Hrs Battery, Multilink, Built-in Subwoofers & Premium Design 80 W Bluetooth Speaker  (Sea Green, Mono Channel)",
    price: "₹19,999",
    oldPrice: "₹24,990",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/t/t/s/-original-imah8s3swwu76jfv.jpeg?q=70&crop=false",
    sale: true,
    path: "/StoneOpus"
  },
  {
    id: 8,
    name: "Boult Striker Bluetooth Calling, Health Tracking, Zinc Alloy Frame, 100+ Sports Modes SmartAll  (Black Strap, Free Size)",
    price: "₹6999",
    oldPrice: "₹8999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/k/a/-original-imagn45yaww9gmwu.jpeg?q=70&crop=false",
    sale: true,
    path: "/Boultwatch"
  },
  {
    id: 9,
    name: "DELL 68.58 cm (27 inch) Quad HD LED Backlit IPS Panel with 2xDisplayPort, 1xHDMI, 2xThunderbolt, 2xUSB-Type C, 4xUSB Type-A, Audio line Out, RJ45, Adjustability-Height, Tilt, Swivel UltraSharp Hub Monitor (U2724DE)  (Response Time: 5 ms, 120 Hz Refresh Rate)",
    price: "₹64,999",
    oldPrice: "₹73,499",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/6/a/m/-original-imahymzghhb3bs3s.jpeg?q=70",
    sale: true,
    path: "/Dell"
  },
  {
    id: 10,
    name: "SONY WH-CH720N Active Noise Cancelling, 50 Hrs. Battery life, Multipoint Connection Bluetooth  (Black, On the Ear)",
    price: "₹10,499",
    oldPrice: "₹14,990",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70",
    sale: true,
    path: "/SonyWH"
  },
  {
    id: 11,
    name: "Amitasha Remote Control Drone with Dual Camera 4k 1080p RC Obstacle Avoidance Drone Wi-Fi Selfie Gesture with Brushless Motor One Key Take-off & Landing 2 x 3000mAh Battery)",
    price: "₹61,199",
    oldPrice: "₹99,991",
    image: "https://m.media-amazon.com/images/I/715-wvNEVCL._AC_UL480_FMwebp_QL65_.jpg",
    sale: true,
    path: "/AmitashaDrone"
  },
  {
    id: 12,
    name: "rionix Gaming & Editind INTEL CORE i5 7TH (16 GB RAM/4 GB NVIDEA Graphics/1 TB Hard Disk/256 GB SSD Capacity/Windows 11 Pro/4 GB Graphics Memory) Gaming Tower with MS Office",
    price: "₹59,999",
    oldPrice: "₹75,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/cpu/k/x/9/512-3-core-i5-2nd-gaming-0-rionix-original-imah5r8yfdmcgttc.jpeg?q=70&crop=false",
    sale: true,
    path: "/Rionix"
  },
  {
    id: 13,
    name: "ASUS AiO A3 Series, All in One Desktop, Intel 13th Gen Core i5 (8 GB DDR5/Windows 11 Home/23.8 Inch Screen/A3402WVA-BPC002WS)  (Black)",
    price: "₹54,990",
    oldPrice: "₹79,990",
    image: "  https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/i/g/k/-original-imah4qspqmbg7txu.jpeg?q=70",
    sale: true,
    path: "/Asus"
  },
  {
    id: 14,
    name: "OnePlus Pad Go 8 GB RAM 128 GB ROM 11.35 inch with Wi-Fi Only Tablet (Twin Mint)",
    price: "₹19,999",
    oldPrice: "₹24,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/v/w/t/-original-imagu2mdexmnb7bw.jpeg?q=70&crop=false",
    sale: true,
    path: "/OnePlusTab"
  },
  {
    id: 15,
    name: "IZI Mini X Nano Fly More Combo 4K Drone with camera UHD 20MP CMOS, 93-min Flight Time, 4KM Live Video, GPS, 3-Axis Gimbal, 10+ Flight Modes, 3 x Smart Battery, Fast Tri-Charger, 249g",
    price: "₹54,999",
    oldPrice: "₹69,999",
    image: "https://m.media-amazon.com/images/I/71BEFuoEo-L._SL1500_.jpg",
    sale: true,
    path: "/IZIDrone"
  },
  {
    id: 16,
    name: "GoPro HERO12 DualLCDScreens 5.3K60 UltraHDVideo HyperSmooth 6.0withAutoBoostWaterproof Sports and Action Camera  (Black, 27 MP",
    price: "₹40,499",
    oldPrice: "₹45,000",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/y/r/u/-original-imahyxtgj2g8uqvn.jpeg?q=70&crop=false",
    sale: true,
    path: "/Hero12GoPro"
  },
  {
    id: 17,
    name: "GoPro Hero11 Waterproof Sports and Action Camera  (Black, 23 MP)",
    price: "₹40,000",
    oldPrice: "₹51,500",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/sports-action-camera/f/3/y/-original-imahyxtgqseqwhzr.jpeg?q=70",
    sale: true,
    path: "/Hero11GoPro"
  },
  {
    id: 18,
    name: "TP-Link Tapo C500 1080p Outdoor Pan/Tilt Security WiFi Smart Camera Security Camera  (512 GB, 1 Channel)",
    price: "₹5,449",
    oldPrice: "₹6,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/y/k/k/1-tapo-c500-indoor-security-camera-tp-link-original-imah754d95epb2uf.jpeg?q=70&crop=false",
    sale: true,
    path: "/TapoCctv"
  },
  {
    id: 19,
    name: "Mi by Xiaomi 3MP Camera 2K (1296p) High Resolution AI Human Detection PTZ 360° Smart Home Security Camera  (1 Channel)",
    price: "₹3,999",
    oldPrice: "₹4,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/j/l/k/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh54yy9qfeq.jpeg?q=70&crop=false",
    sale: true,
    path: "/XiaomiCctv"
  },
  {
    id: 20,
    name: "Panasonic DMC-G85HAGWK Mirrorless Camera Body with 14 - 140 mm/F3.5-5.6 ASPH Lens  (Black)",
    price: "₹79,990",
    oldPrice: "₹94,990",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/b/x/1/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknqmjh6sxem.jpeg?q=70",
    sale: true,
    path: "/PanasonicCamera"
  },
  {
    id: 21,
    name: "Noise Airwave Max 5, 80 Hours Playtime, HFA Tech, Adaptive ANC (50dB) & Dual pairing Bluetooth  (Calm Beige, On the Ear)",
    price: "₹4,999",
    oldPrice: "₹5,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/w/r/-original-imah2zf3f6uttfse.jpeg?q=70&crop=false",
    sale: true,
    path: "/NoiseAirwave"
  },

  {
    id: 22,
    name: "TCL P71B Pro 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV Hands Free Voice Control |Dolby Vision- Atmos | DTS Virtual : X, ONKYO 2.1ch |120Hz Game Accelerator (55P71B Pro)  (55P71B Pro)",
    price: "₹64,999",
    oldPrice: "₹79,990",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/television/t/4/q/-original-imah9m5y4cmf4dcs.jpeg?q=70&crop=false",
    sale: true,
    path: "/Tcltv"
  },
  {
    id: 23,
    name: "Lenovo Tab M11 LTE with Pen 8 GB RAM 128 GB ROM 11.0 inch with 4G Tablet (Seafoam Green)",
    price: "28,000",
    oldPrice: "35,000",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/c/h/l/-original-imagz928a7gkav6j.jpeg?q=70&crop=false",
    sale: true,
    path: "/LenovoTab"
  },
  
];

const SalePage = () => {
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

      <div className="Sale-container">
        <aside className="Sale-sidebar">
          <h3>Browse by</h3>
          <ul className="Sale's-category-list">
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
            <li onClick={() => Navigate("/Watch")}>Watch</li>
            <li className="active" onClick={() => Navigate("/Sale")}>Sale</li>
          </ul>
        </aside>
        <main className="Sale's-product-list">
          <div className="Sale's-sorting">
            <h1>Sales</h1>
            <div className="Sale's-sortby">
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
          <div className="Sale-grid">
            {products.map((product) => (
              <div key={product.id} className="Sale-card">
                {product.sale && <span className="Sale-discount">SALE</span>}
                <div onClick={() => Navigate(product.path)} className="Sale-image-wrapper">
                  <img src={product.image} alt={product.name} className="Sale-image" />
                </div>
                <h4>
                  {product.name.split(" ").slice(0, 7).join(" ")}
                  {product.name.split(" ").length > 7 && "..."}
                </h4>
                <p className="Sale-price">
                  {product.oldPrice && <span className="Sale's-old-price">{product.oldPrice}</span>}
                  <span className="Sale's-new-price">{product.price}</span>
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

export default SalePage;
