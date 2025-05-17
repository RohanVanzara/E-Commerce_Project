import React, { useState } from "react";
import { useCart } from '../Cart/CartContext';
import "./Crystaltv.css";
import Footer from '../../Footer/Footer';

const Product = [
    {
        name: "Smart Tv ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/u/v/o/-original-imah2v2gamua43wz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/k/i/u/-original-imah3fhyk8y76v8p.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/v/o/5/-original-imah45eczvmdwfxm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/f/9/m/-original-imagzu9u8ctrppn5.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/d/u/b/-original-imah45ebgpthgfbh.jpeg?q=70&crop=false",
        ],
        // price: 24999,
        originalPrice: 44999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();
    const [discount] = useState(0);

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `SAMSUNG New D Series Brighter Crystal 4K  ${selectedVariant.name}  `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `SAMSUNG New D Series Brighter Crystal 4K  ${selectedVariant.name}  `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="aavantebar-product-container">
                <div className="aavantebar-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="aavantebar-thumbnail-gallery">
                        {selectedVariant.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className={selectedImage === img ? "active" : ""}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="aavantebar-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="aavantebar-product-name">
                    <h1>SAMSUNG New D Series Brighter Crystal 4K Vision Pro (2024 Edition) 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV with with 4K Upscaling | Multiple Voice Assistance Remote | Purcolor | HDR 10+ | Auto Game Mode | Q-Symphony | Knox Security  (UA55DUE76AKLXL)#JustHere</h1>

                    {/* Price Section */}
                    <div className="aavantebar-product-pricing">
                        <h2><span className="aavantebar-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        {/* <h2><span className="aavantebar-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>
                    {discount > 0 && <p className="aavantebar-discount-text">Discount Applied: {discount}%</p>}

                    <div className="aavantebar-brand-size-section">
                        <p><strong>Brand:</strong> <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9a95c8afa921a5b7f48302b1cb9d994a0a5e9f5b718ebab4affbae158c9a0068.jpg?q=90" alt="Samsung Logo" className="samsunglogo" />
                        </p>
                        <p><strong>Weight:</strong> 13.7 kg</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="aavantebar-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="aavantebar-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>

                </div>
            </div>
            {/* Product Info */}
            <div className="aavantebar-Product-Info">

                <div className="aavantebar-tabs-container">
                    <button
                        className={`aavantebar-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`aavantebar-tab-button ${activeTab === "Display Size" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display Size")}
                    >
                        Display Size
                    </button>
                    <button
                        className={`aavantebar-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>

                </div>

                {/*Content */}
                <div className="aavantebar-product-Detail">
                    {activeTab === "General" && (
                        <div className="aavantebar-product-section">

                            <ul>
                                {[
                                    { label: "Smart TV", value: "Yes" },
                                    { label: "Launch Year", value: "2024" },
                                    { label: "Model Name", value: "UA55DUE76AKLXL" },
                                    { label: "Series", value: "New D Series Brighter Crystal 4K Vision Pro (2024 Edition)" },
                                    { label: "Color", value: "Black" }
                                ].map((item, index) => (
                                    <li key={index} className="aavantebar-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display Size" && (
                        <div className="aavantebar-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "138 cm (55 inch)" },
                                    { label: "Display Technology", value: "LED" },
                                    { label: "Resolution", value: "Ultra HD (4K) (3840 x 2160)" },
                                    { label: "LED Arrangement", value: "LED" },
                                    { label: "Viewing Angle", value: "178 Degree" },
                                    { label: "Aspect Ratio", value: "16:09" }
                                ].map((item, index) => (
                                    <li key={index} className="aavantebar-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Warranty" && (
                        <div className="aavantebar-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "2 Year Warranty (1 Year Standard Warranty + 1 Year additional warranty on Panel)" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Parts and Labour Costs are Covered under Warranty Against Any Defect Arising Out of Faulty or Defective Material or Workmanship." },
                                    { label: "Warranty Service Type", value: "For any warranty related issues, please call the Customer Support - 1800 40 7267864 / https://www.samsung.com/in/microsite/samsung-mall/contact-us/" }

                                ].map((item, index) => (
                                    <li key={index} className="aavantebar-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;
