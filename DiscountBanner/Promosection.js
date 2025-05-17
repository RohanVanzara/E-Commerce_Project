import React from "react";
import "./Promosection.css"; 
import { useNavigate } from 'react-router-dom';


const PromoSection = () => {
  const Navigate = useNavigate(); 

  return (
    <div className="containerr">
      {/* For Smartphones */}
      <div className="promo-card bg-color1">
        <div className="content">
          <h4 className="subtitlee">Summer Season</h4>
          <h2 className="titlee">Up to 30% off</h2>
          <p className="textt">Selected Smartphone Brands</p>
          <button className="buttonn" onClick={()=>Navigate("/Mobile")}>Shop</button>
        </div>
        <div className="imagephone">
          <img
            src="https://media-hosting.imagekit.io//f2be56b5de06450a/3126834-cover-removebg-preview.png?Expires=1836040598&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vSzFubQDC-Wy6bvHbDLRkW8XCaUianHMRHPZDTnuXmImuvSm0imDHD--tNQASOWgujk0-I8libGWY6QicBVaU6LKwbQfyzKpRxRwspV9eDTYm9jX0Ns-pqTCeZr3fFgH2R63wXTnTD6ljUBcyF8d1vGEh7oBrLZE-MbYs5yWSVYlVNO79GkI~2Z6Q2b5X~0q4p3nzxNd4aZFiLW041Y4nQXydnlKsZGBqMC6S9araJMKIUnn8yuGYXRRgJLFHyDeqsc~91vTeVgVsn~4wcc1m4PL4S9VJwRH~-nk4OOh0W-LGDeF2g3dSHH0I3nQfbpdfOGTpUxGtQQ2OIKu6ZdZ9g__"
            alt="Smartphone"
            className="images"
          />
        </div>
      </div>

      {/* For Headphones */}
      <div className="promo-card bg-color2">
        <div className="content">
          <h2 className="titlee">Take Your Sound Anywhere</h2>
          <p className="textt">Top Headphone Brands</p>
          <button className="buttonn" onClick={()=>Navigate("/Headphone")}>Shop</button>
        </div>
        <div className="imageheadphone">
          <img
            src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-a-man-wearing-headphones-and-tan-jacket-png-image_12470528.png"
            alt="Headphones"
            className="images"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
