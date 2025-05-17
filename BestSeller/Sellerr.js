import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Sellers.css";
import { useNavigate } from 'react-router-dom';

const products = [
  {
    name: "Apple iPhone 15 (Black, 128 GB)",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false",
    oldPrice: "₹69,900",
    newPrice: "₹64,999",
    sale: true,
    Path:"/Iphone15"
  },
  {
    name: "Noise Crew 1.38 Round Display with Bluetooth Calling, Metallic finish, IP68 Rating Smartwatch  (Blue Strap, Regular)",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/e/l/-original-imah6s6p747bvmxh.jpeg?q=70&crop=false",
    oldPrice: "₹4,999",
    newPrice: "₹3,999",
    sale: true,
    Path:"/Noisewatch"

  },
  {
    name: "Apple iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi Only (Blue)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/r/4/m/-original-imagj72vqsfqgzpf.jpeg?q=70",
    oldPrice: "₹34,900",
    newPrice: "₹25,900",
    sale: true,
    Path:"/Ipad"

  },
  {
    name: "OnePlus Bullets Wireless Z2 Bluetooth  (Magico Black, In the Ear)",
    image: "https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70",
    oldPrice: "",
    newPrice: "2,299",
    sale: false,
    Path:"/onePlusBullets"


  },
  {
    name: "SAMSUNG New D Series Brighter Crystal 4K Vision Pro (2024 Edition) 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV with with 4K Upscaling | Multiple Voice Assistance Remote | Purcolor | HDR 10+ | Auto Game Mode | Q-Symphony | Knox Security  (UA43DUE76AKLXL)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/u/v/o/-original-imah2v2gamua43wz.jpeg?q=70",
    oldPrice: "",
    newPrice: "₹29,999",
    sale: false,
    Path:"/Crystaltv"


  },
  {
    name: "SAMSUNG 138 cm (55 inch) Ultra HD (4K) Curved LED Smart Tizen TV  (UA55KS9000KLXL)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/e/6/i/-original-imah4h8zzhaubrsz.jpeg?q=70",
    oldPrice: "₹2,84,900",
    newPrice: "₹2,41,599",
    sale: true,
    Path:"/Curved"

  },
  {
    name: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70",
    oldPrice: "",
    newPrice: "₹1,44,999",
    sale: false,
    Path:"/Galaxys24ultra"


  },
  {
    name: "boAt Aavante Bar 3500 with Bass & Treble Controls, EQ Modes & Master Remote Control 500 W Bluetooth Soundbar  (Premium Black, 5.1 Channel)",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/j/q/v/-original-imagtnpuctjgnzrx.jpeg?q=70",
    oldPrice: "",
    newPrice: "₹14,999",
    sale: false,
    Path:"/AavanterBar"


  },
  {
    name: "SAMSUNG Galaxy Book5 Pro AI PC Full Metal Chasis Intel Core Ultra 7 256V - (16 GB/1 TB SSD/Windows 11 Home) NP940XHA Thin and Light Laptop  (14 Inch, Gray, 1.23 Kg, With MS Office",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70",
    oldPrice: "₹1,87,190",
    newPrice: "₹1,87,190",
    sale: true,
    Path:"/GalaxyBook5"

  },
  {
    name: "Apple AirPods Pro (2nd generation) with MagSafe Case (USB-C) Bluetooth  (White, True Wireless)",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=70&crop=false",
    // oldPrice: "₹15,900",
    newPrice: "₹21,999",
    sale: false,
    Path:"/AirPodsPro"

  },
  {
    name: "Canon EOS 3000D DSLR Camera 1 Body, 18 - 55 mm Lens  (Black)",
    image: "https://rukminim2.flixcart.com/image/832/832/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70&crop=false",
    // oldPrice: "₹47,995",
    newPrice: "₹34,990",
    sale: false,
    Path:"/Canon3000D"

  },
];

const ProductCard = ({ name, image, oldPrice, newPrice, sale, Path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (Path) navigate(Path);
  };

  return (
    <div className="seller-carrd" onClick={handleClick} style={{ cursor: "pointer" }}>
      {sale && <span className="discount-badge">SALE</span>}
      <img src={image} alt={name} />
      <p>{name.split(" ").slice(0, 7).join(" ")}{name.split(" ").length > 5 ? "..." : ""}</p>
      <p className="price">
        {oldPrice && <span className="old-price">{oldPrice}</span>}
        <span className="new-price">{newPrice}</span>
      </p>
    </div>
  );
};
const BestSellers = () => {
  const navigate = useNavigate();
  return (
    <div className="best-sellers">
      <h2>Best Sellers</h2>
      <Swiper

        modules={[Navigation]}
        navigation
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="view-all" onClick={() => navigate("/BestSeller")} >View All</button>
    </div>
  );
};

export default BestSellers;