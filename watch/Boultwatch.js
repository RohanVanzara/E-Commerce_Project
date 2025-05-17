import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Boultwatch.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Black",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/k/a/-original-imagn45yaww9gmwu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/0/o/-original-imagxxfx82vr4g44.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/d/g/q/-original-imagn5c5qhgtakfr.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/v/b/9/-original-imagn45yqbhdvqzd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/i/q/z/-original-imagn45yz4ezwqcq.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/t/k/c/-original-imagn45yffsszrj9.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/i/j/a/-original-imagn45ycpmthxvb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/q/p/l/-original-imagn45ycrfewg5v.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/k/j/a/-original-imagn5c5znnqy7m9.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/r/6/-original-imagn45ybhghsrnx.jpeg?q=70&crop=false"
        ],
        price: 8999,
        originalPrice: 6999
    },
    {
        name: "Blue",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/3/w/u/-original-imagn45fgbrrvhht.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/d/g/q/-original-imagn5c5qhgtakfr.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/z/k/x/-original-imagn45fzxxtpumk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/k/k/b/-original-imagn45fzzzmgbht.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/0/m/j/-original-imagn45fgfzhd9kd.jpeg?q=70&crop=false ",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/n/e/1/-original-imagn45ffeeg7pfy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/k/z/v/-original-imagn45ffzz7avz5.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/f/q/4/-original-imagn45f5xczs3ym.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/c/r/a/-original-imagn5c5wy7z7kay.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/r/6/-original-imagn45ybhghsrnx.jpeg?q=70&crop=false",
        ],
        price: 8999,
        originalPrice: 6499
    },
    {
        name: "Cream",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/a/0/-original-imagxxfx3eqpf6qu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/d/g/q/-original-imagn5c5qhgtakfr.jpeg?q=70&crop=false ",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/0/a/-original-imagn45fcnczvpwc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/l/r/1/-original-imagn45faddenykk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/d/b/9/-original-imagn45fem8jkpf4.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/q/y/6/-original-imagn45fh9kjt6g7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/q/h/e/-original-imagn45f2gwudfez.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/8/u/-original-imagn45fcy7yeaek.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/p/k/-original-imagn5c7m8gpbzga.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/r/6/-original-imagn45ybhghsrnx.jpeg?q=70&crop=false"
        ],
        price: 8999,
        originalPrice: 5999
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
        const itemExists = cartItems.some(item => item.name === `Boultwatch ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Boultwatch ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Black": "#000000",
        "Blue": "#0000FF",
        "Cream": "#D2B48C  ",

    };
    return (
        <>
            <div className="Boultwatch-product-container">
                <div className="Boultwatch-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Boultwatch-thumbnail-gallery">
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
                    <div className="Boultwatch-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Boultwatch-product-name">
                    <h1> Boult Striker Bluetooth Calling, Health Tracking, Zinc Alloy Frame, 100+ Sports Modes Smartwatch  ({selectedVariant.name}, Free Size)
                    </h1>

                    {/* Price Section */}
                    <div className="Boultwatch-product-pricing">
                        <h2><span className="Boultwatch-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="Boultwatch-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="Boultwatch-discount-text">Discount Applied: {discount}%</p>}

                    <div className="Boultwatch-brand-size-section">
                        <p><strong>Brand:</strong> Boultwatch</p>
                        <p><strong>Size:</strong> 33.02 mm </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="Boultwatch-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="Boultwatch-color-option"
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
                    <div className="Boultwatch-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Boultwatch-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Boultwatch-Product-Info">

                <div className="Boultwatch-tabs-container">
                    <button
                        className={`Boultwatch-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Boultwatch-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Boultwatch-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Boultwatch-product-Detail">
                    {activeTab === "General" && (
                        <div className="Boultwatch-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "Smartwatch, User Manual, Charging Cable, Warranty Card" },
                                    { label: "Model Number", value: "Striker" },
                                    { label: "Model Name", value: "Striker Bluetooth Calling, Health Tracking, Zinc Alloy Frame, 100+ Sports Modes" },
                                    { label: "Dial Color", value: "Multicolour" },
                                    { label: "Dial Shape", value: "Round" },
                                    { label: "Strap Color", value: selectedVariant.name },
                                    { label: "Strap Material", value: "Silicone" },
                                    { label: "Size", value: "Free Size" },
                                    { label: "Touchscreen", value: "Yes" },
                                    { label: "Water Resistant", value: "Yes" },
                                    { label: "Water Resistance Depth", value: "1 m" },
                                    { label: "Usage", value: "Fitness & Outdoor" },
                                    { label: "Dial Material", value: "Polycarbonate" },
                                    { label: "Ideal For", value: "Men & Women" },
                                    { label: "Compatible OS", value: "Android & iOS" },
                                    { label: "Brand Strap Color", value: selectedVariant.name }
                                ].map((item, index) => (
                                    <li key={index} className="Boultwatch-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Boultwatch-product-section">

                            <ul>
                                {[
                                    { label: "Sensor", value: "Real Heart Rate, Real SPO2, Pedometer" },
                                    { label: "Notification", value: "Social Media, Messages, Incoming Calls, Emails, Water Drink reminder, sedentary reminder" },
                                    { label: "Notification Type", value: "Vibrate" },
                                    { label: "Charger Type", value: "Magnetic Charging Cable" },
                                    { label: "Display Resolution", value: "240 x 240 pixel" },
                                    { label: "Display Size", value: "33.02 mm" },
                                    { label: "Display Type", value: "TFT LED" },
                                    { label: "Scratch Resistant", value: "NO" },
                                    { label: "Battery Life", value: "Upto 7 Days" }
                                ].map((item, index) => (
                                    <li key={index} className="Boultwatch-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Boultwatch-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Year Warranty from the date of purchase" },
                                    { label: "Warranty Service Type", value: "Repair or Replace" },
                                    { label: "Covered in Warranty", value: "Any kind of technical issue" },
                                    { label: "Not Covered in Warranty", value: "Physical damage, loss of smartwatch or any accessories." },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="Boultwatch-product-item">
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
