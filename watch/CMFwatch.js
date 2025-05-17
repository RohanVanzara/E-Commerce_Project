import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./CMFwatch.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Dark Grey",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/y/q/h/-original-imah2gmfunhhascz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/j/c/m/-original-imah2gmfgu3uvbt4.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/l/q/v/-original-imah2gmfbuz3mpuc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/8/u/s/-original-imah2gmf2s5njefh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/p/w/b/-original-imah2gmfcsyazh3x.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/r/k/-original-imah2gmfcyatrqym.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/g/h/-original-imah2gmfgahncqqt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/j/y/-original-imah2gmfcgjpbd6h.jpeg?q=70&crop=false "

        ],
        // price: 4999,
        originalPrice: 5499
    },
    {
        name: "Blue",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/c/q/c/-original-imah2gmfzgu5eape.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/i/4/s/-original-imah2gmf4cmdjnvf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/l/q/v/-original-imah2gmfbuz3mpuc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/8/u/s/-original-imah2gmf2s5njefh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/p/w/b/-original-imah2gmfcsyazh3x.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/r/k/-original-imah2gmfcyatrqym.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/g/h/-original-imah2gmfgahncqqt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/j/y/-original-imah2gmfcgjpbd6h.jpeg?q=70&crop=false "
        ],
        // price: 5499,
        originalPrice: 6999
    },
    {
        name: "Ash Grey ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/u/6/4/-original-imah2gmfhxptrz9y.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/v/p/v/-original-imah2gmfhphwyw34.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/8/u/s/-original-imah2gmf2s5njefh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/p/w/b/-original-imah2gmfcsyazh3x.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/r/k/-original-imah2gmfcyatrqym.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/g/h/-original-imah2gmfgahncqqt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/j/y/-original-imah2gmfcgjpbd6h.jpeg?q=70&crop=false "
        ],
        // price: 5299,
        originalPrice: 4299
    }
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();
    const [discount] = useState(0);

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `cmfwatch ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `cmfwatch ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Dark Grey": "#4B4B4B",
        "Blue": "#0000FF",
        "Ash Grey ": "#A9A9A9"
    };
    return (
        <>
            <div className="cmfwatch-product-container">
                <div className="cmfwatch-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="cmfwatch-thumbnail-gallery">
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
                    <div className="cmfwatch-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="cmfwatch-product-name">
                    <h1> CMF by Nothing Watch Pro 2, 1.32" AMOLED, auto-brightness,Gesture Control, 3D warmup guide,GPS Smartwatch  ({selectedVariant.name} Strap, Free Size)                    </h1>

                    {/* Price Section */}
                    <div className="cmfwatch-product-pricing">
                        <h2><span className="cmfwatch-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        {/* <h2><span className="cmfwatch-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>
                    {discount > 0 && <p className="cmfwatch-discount-text">Discount Applied: {discount}%</p>}

                    <div className="cmfwatch-brand-size-section">
                        <p><strong>Brand:</strong> CMF by Nothing </p>
                        <p><strong>Size:</strong> 33.5 mm</p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="cmfwatch-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="cmfwatch-color-option"
                                onClick={() => {
                                    setSelectedVariant(variant);
                                    setSelectedImage(variant.images[0]);
                                }}
                                style={{
                                    backgroundColor: selectedVariant.name === variant.name ? colorMap[variant.name] : "white",
                                    color: selectedVariant.name === variant.name ? "white" : "black",
                                    border: "2px solid gray"
                                }}
                            >
                                {variant.name}
                            </button>
                        ))}
                    </div>

                    {/* Quantity Selector */}
                    <div className="cmfwatch-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="cmfwatch-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="cmfwatch-Product-Info">

                <div className="cmfwatch-tabs-container">
                    <button
                        className={`cmfwatch-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`cmfwatch-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`cmfwatch-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="cmfwatch-product-Detail">
                    {activeTab === "General" && (
                        <div className="cmfwatch-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "Smartwatch, Charging Line, User Guide & Safety Information and Warranty Information" },
                                    { label: "Model Number", value: "D398" },
                                    { label: "Model Name", value: "Watch Pro 2, 1.32\" AMOLED, auto-brightness,Gesture Control, 3D warmup guide,GPS" },
                                    // { label: "Dial Color", value: selectedVariant.name },
                                    { label: "Dial Shape", value: "Round" },
                                    { label: "Strap Color", value: selectedVariant.name },
                                    { label: "Strap Material", value: "Silicone" },
                                    { label: "Size", value: "Free Size" },
                                    { label: "Touchscreen", value: "Yes" },
                                    { label: "Water Resistant", value: "Yes" },
                                    { label: "Water Resistance Depth", value: "1.5 m" },
                                    { label: "Usage", value: "Fitness & Outdoor, Health & Medical, Notifier, Safety & Security, Watchphone" },
                                    { label: "Dial Material", value: "Metal Aluminum Alloy" },
                                    { label: "Ideal For", value: "Men & Women" },
                                    { label: "Compatible OS", value: "Android & iOS" }
                                ].map((item, index) => (
                                    <li key={index} className="cmfwatch-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="cmfwatch-product-section">

                            <ul>
                                {[
                                    // { label: "Closure", value: "Buckle" },
                                    { label: "Sensor", value: "Accelerometer Sensor, Ambient Light Sensor, Heart Rate & SpO2 Blood Oxygen Saturation Sensor" },
                                    { label: "Compatible Device", value: "All Andriod 8 or Above Devices, All iOS 13 or Above Devices" },
                                    { label: "Notification", value: "Smart Notifications (Calls, Text, Email, Social Media App Alerts, Weather, Alarm Clock, Calendar Alerts)" },
                                    { label: "Notification Type", value: "Vibration" },
                                    { label: "Battery Type", value: "Lithium Polymer" },
                                    { label: "Charge Time", value: "100 min" },
                                    { label: "Battery Life", value: "11 Days" },
                                    { label: "Charger Type", value: "USB Cable" }
                                ].map((item, index) => (
                                    <li key={index} className="cmfwatch-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="cmfwatch-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 year warranty provided from the date of purchase" },
                                    { label: "Warranty Service Type", value: "Offsite" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="cmfwatch-product-item">
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
