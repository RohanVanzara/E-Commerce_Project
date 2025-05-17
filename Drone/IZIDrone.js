import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./IZIDrone.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Drone",
        images: [
            "https://m.media-amazon.com/images/I/71BEFuoEo-L._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71f6-5GkZsL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/712qHeFcdyL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61Z-HkzZXLL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81u2SUblepL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/719VfJnOi5L._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oTgPdyRyL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71jPdKLuYSL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71pWVDkNvxL._SL1500_.jpg",

        ],
        price: 69999,
        originalPrice: 54999
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
        const itemExists = cartItems.some(item => item.name === `IZI Mini X Nano Fly  ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `IZI Mini X Nano Fly  ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="IziDrone-product-container">
                <div className="IziDrone-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="IziDrone-thumbnail-gallery">
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
                    <div className="IziDrone-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="IziDrone-product-name">
                    <h1>IZI Mini X Nano Fly More Combo 4K Drone with camera UHD 20MP CMOS, 93-min Flight Time, 4KM Live Video, GPS, 3-Axis Gimbal, 10+ Flight Modes, 3 x Smart Battery, Fast Tri-Charger, 249g
                    </h1>

                    {/* Price Section */}
                    <div className="IziDrone-product-pricing">
                        <h2><span className="IziDrone-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="IziDrone-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="IziDrone-discount-text">Discount Applied: {discount}%</p>}

                    <div className="IziDrone-brand-size-section">
                        <p><strong>Brand:</strong> IZI</p>
                        <p><strong>Weight:</strong> 249 Grams</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="IziDrone-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="IziDrone-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="IziDrone-Product-Info">

                <div className="IziDrone-tabs-container">
                    <button
                        className={`IziDrone-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`IziDrone-tab-button ${activeTab === "Product Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Features")}
                    >
                        Product Features
                    </button>

                </div>

                {/*Content */}
                <div className="IziDrone-product-Detail">
                    {activeTab === "General" && (
                        <div className="IziDrone-product-section">

                            <ul>
                                {[
                                    { label: "Special Feature", value: "Auto Follow, Image Stabilization, One Button Return" },
                                    { label: "Color", value: "Dark Green" },
                                    { label: "Video Capture Resolution", value: "4K" },
                                    { label: "Connectivity Technology", value: "Wi-Fi" },
                                    { label: "Included Components", value: "User Manual, Propeller, Battery" },
                                    { label: "Skill Level", value: "All" },
                                    { label: "Item Weight", value: "249 Grams" },
                                    { label: "Battery Capacity", value: "2600 Milliamp Hours" },
                                    { label: "Battery Cell Composition", value: "Lithium Ion" }
                                ].map((item, index) => (
                                    <li key={index} className="IziDrone-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Features" && (
                        <div className="IziDrone-product-section">

                            <ul>
                                {[
                                    { label: "Product Dimensions", value: "18L x 22W x 11H Centimeters" },
                                    { label: "Manufacturer", value: "IZI, India" },
                                    { label: "Batteries", value: "3 Lithium Ion batteries required. (included)" },
                                    { label: "Item Part Number", value: "IZI-MiniX-FMC" },
                                    { label: "Manufacturer Part Number", value: "IZI-MiniX-FMC" },
                                    { label: "Special Features", value: "Auto Follow, Image Stabilization, One Button Return" },
                                    { label: "Country of Origin", value: "India" },
                                    { label: "Item Weight", value: "249 g" }
                                ].map((item, index) => (
                                    <li key={index} className="IziDrone-product-item">
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
