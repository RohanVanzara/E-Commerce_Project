import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./AmitashaDrone.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Drone ",
        images: [
            "https://m.media-amazon.com/images/I/715-wvNEVCL._SL1360_.jpg",
            "https://m.media-amazon.com/images/I/61i5R5sK0TL._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61WhxbnGLJL._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71fhYdCFG6L._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71x3B5xcifL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61T7iAzi9qL._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61aXKRlIoYL._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61jwlOKTU7L._SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61I9qcd+4AL._SL1000_.jpg",
        ],
        price: 24999,
        originalPrice: 19999
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
        const itemExists = cartItems.some(item => item.name === `Amitasha Remote Control  ${selectedVariant.name}  `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Amitasha Remote Control  ${selectedVariant.name}  `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="AmitashaDrone-product-container">
                <div className="AmitashaDrone-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="AmitashaDrone-thumbnail-gallery">
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
                    <div className="AmitashaDrone-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="AmitashaDrone-product-name">
                    <h1>Amitasha Remote Control Drone with Dual Camera 4k 1080p RC Obstacle Avoidance Drone Wi-Fi Selfie Gesture with Brushless Motor One Key Take-off & Landing 2 x 3000mAh Battery
                    </h1>

                    {/* Price Section */}
                    <div className="AmitashaDrone-product-pricing">
                        <h2><span className="AmitashaDrone-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="AmitashaDrone-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="AmitashaDrone-discount-text">Discount Applied: {discount}%</p>}

                    <div className="AmitashaDrone-brand-size-section">
                        <p><strong>Brand:</strong> Amitasha</p>
                        <p><strong>Weight:</strong> 390 Grams</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="AmitashaDrone-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="AmitashaDrone-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="AmitashaDrone-Product-Info">

                <div className="AmitashaDrone-tabs-container">
                    <button
                        className={`AmitashaDrone-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`AmitashaDrone-tab-button ${activeTab === "Product Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Features")}
                    >
                        Product Features
                    </button>

                </div>

                {/*Content */}
                <div className="AmitashaDrone-product-Detail">
                    {activeTab === "General" && (
                        <div className="AmitashaDrone-product-section">

                            <ul>
                                {[{ label: "Model Name", value: "JS39P-Drone" },
                                { label: "Special Features", value: "Gyroscopic Stabilization, High Speed Rotate, GPS Control, Long Battery Life, First Person View (FPV), Crash Resistant, Obstacle Avoidance, Long Distance Control, One Button Return, One Key Rotate, Portable, Rechargeable, Foldable, Speed Adjustment, Brushless Motor, 360 Degree Flip, Adjustable, Auto Follow, Auto Landing, Compact" },
                                { label: "Color", value: "JS39P-Drone" },
                                { label: "Video Capture Resolution", value: "1080p, 4K" },
                                { label: "Effective Still Resolution", value: "2 MP" },
                                { label: "Connectivity Technology", value: "Wi-Fi" },
                                { label: "Included Components", value: "Carrying Case, User Manual, USB Charging Cable, 2 x Battery, Extra Parts, Camera Drone with Obstacle Avoidance" },
                                { label: "Skill Level", value: "All" },
                                { label: "Item Weight", value: "390 Grams" },
                                { label: "Material", value: "Plastic" },
                                { label: "Battery Cell Composition", value: "Lithium Polymer" }

                                ].map((item, index) => (
                                    <li key={index} className="AmitashaDrone-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Features" && (
                        <div className="AmitashaDrone-product-section">

                            <ul>
                                {[
                                    { label: "Product Dimensions", value: "15L x 15W x 5H Centimeters" },
                                    { label: "Manufacturer", value: "Amitasha Enterprises" },
                                    { label: "Batteries Required", value: "AA batteries required." },
                                    { label: "Item Part Number", value: "JS39P-Drone" },
                                    { label: "Manufacturer Part Number", value: "JS39P-Drone" },
                                    { label: "Item Weight", value: "390 g" }
                                ].map((item, index) => (
                                    <li key={index} className="AmitashaDrone-product-item">
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
