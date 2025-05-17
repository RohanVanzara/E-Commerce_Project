import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Onsale.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "vivo V50 5G (Titanium Grey, 512 GB)  (12 GB RAM)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/j/8/-original-imah94g8jz9x8ruf.jpeg?q=70",
    oldPrice: "₹48,999",
    newPrice: "₹40,999",
    sale: true,
    path:"/Vivov50"
  },
  {
    name: "boAt Stone Opus with 12 Hrs Battery, Multilink, Built-in Subwoofers & Premium Design 80 W Bluetooth Speaker  (Sea Green, Mono Channel)",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/t/t/s/-original-imah8s3swwu76jfv.jpeg?q=70",
    oldPrice: "₹24,990",
    newPrice: "₹8,999",
    sale: true,
    path:"/StoneOpus"
  },
  {
    name: "Apple iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi Only (Blue)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/r/4/m/-original-imagj72vqsfqgzpf.jpeg?q=70",
    oldPrice: "₹34,900",
    newPrice: "₹28,740",
    sale: true,
    path:"/Ipad"

  },
  {
    name: "SAMSUNG 138 cm (55 inch) Ultra HD (4K) Curved LED Smart Tizen TV  (UA55KS9000KLXL)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/e/6/i/-original-imah4h8zzhaubrsz.jpeg?q=70",
    oldPrice: "₹2,84,900",
    newPrice: "₹2,41,599",
    sale: true,
    path:"/Curved"

  },
  {
    name: "Boult Striker Bluetooth Calling, Health Tracking, Zinc Alloy Frame, 100+ Sports Modes Smartwatch  (Black Strap, Free Size)",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/k/a/-original-imagn45yaww9gmwu.jpeg?q=70&crop=false",
    oldPrice: "₹8,999",
    newPrice: "₹6,999",
    sale: true,
    path: "/Boultwatch"

  },
  {
    name: "DELL 68.58 cm (27 inch) Quad HD LED Backlit IPS Panel with 2xDisplayPort, 1xHDMI, 2xThunderbolt, 2xUSB-Type C, 4xUSB Type-A, Audio line Out, RJ45, Adjustability-Height, Tilt, Swivel UltraSharp Hub Monitor (U2724DE)  (Response Time: 5 ms, 120 Hz Refresh Rate)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/6/a/m/-original-imahymzghhb3bs3s.jpeg?q=70",
    oldPrice: "₹73,154",
    newPrice: "₹29,999",
    sale: true,
    path: "/Dell"

  },

  {
    name: "SONY WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic Bluetooth  (Black, On the Ear)",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/u/f/t/wh-ch720n-wireless-over-ear-active-noise-cancellation-headphones-original-imah76g48gbzgfuz.jpeg?q=70",
    oldPrice: "₹14,990",
    newPrice: "₹10,499",
    sale: true,
    path: "/SonyWH"

  },
  {
    name: "SAMSUNG Galaxy Book5 Pro AI PC Full Metal Chasis Intel Core Ultra 7 256V - (16 GB/1 TB SSD/Windows 11 Home) NP940XHA Thin and Light Laptop  (14 Inch, Gray, 1.23 Kg, With MS Office",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70",
    oldPrice: "₹1,87,190",
    newPrice: "₹1,55,990",
    sale: true,
    path: "/GalaxyBook5"

  },

];
const ProductCard = ({ name, image, oldPrice, newPrice, sale, path }) => {
  const navigate = useNavigate();

  return (
    <div className="product-carrd" onClick={() => navigate(path)} style={{ cursor: 'pointer' }}>
      {sale && <span className="sale-badge">SALE</span>}
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
  const Navigate = useNavigate();

  return (
    <div className="best-sellers">
      <h2>On Sale</h2>
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
      <button onClick={() => Navigate("/Sale")} className="view-all">View All</button>
    </div>
  );
};

export default BestSellers;
