import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./FireBoltt.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Ashfire Grey ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/u/t/y/-original-imah4sspg5njb7yq.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/g/9/-original-imah4sspgnttnh9z.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/2/k/h/-original-imah4sskkvstz49e.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/6/b/-original-imah4sspv24t27z4.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/3/7/j/-original-imah4sspqrp2ghhn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/l/q/m/-original-imah4sspcmugreuu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/8/g/j/-original-imah4sskhtbvfnsp.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/v/b/g/-original-imah4ssp2fhabest.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/k/c/c/-original-imah4sspd7hy3kph.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/d/l/a/-original-imah4ssprxhgq2xn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/3/t/w/-original-imah4ssktmeqtgwd.jpeg?q=70&crop=false"
        ],
        // price: 4999,
        originalPrice: 12999
    },
    {
        name: "Dark Knight Black",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/b/s/l/-original-imah4ssktnjzcmfp.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/h/r/c/-original-imah4sskfdmrmzhh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/2/k/h/-original-imah4sskkvstz49e.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/a/y/b/-original-imah4ssk2hxdewd7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/9/m/-original-imah4sskwhcu7qtv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/p/q/p/-original-imah4sskn2c9efaa.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/8/g/j/-original-imah4sskhtbvfnsp.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/y/u/h/-original-imah4sskvjg4vuhh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/6/z/-original-imah4sskzfvcsjfh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/t/r/z/-original-imah4sskw6mtd944.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/3/t/w/-original-imah4ssktmeqtgwd.jpeg?q=70&crop=false"

        ],
        // price: 5499,
        originalPrice: 13999
    },
    {
        name: "Skyline Pulse ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/c/h/8/-original-imah4sszckzhaqcg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/s/j/j/-original-imah4sszpzpghvz9.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/2/k/h/-original-imah4sskkvstz49e.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/6/b/d/-original-imah4sszewcqvzgd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/z/i/u/-original-imah4sszrmypzffz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/t/h/6/-original-imah4ssz5gus2wf7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/8/g/j/-original-imah4sskhtbvfnsp.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/k/q/2/-original-imah4sszywmupnpv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/6/z/-original-imah4sskzfvcsjfh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/l/t/q/-original-imah4ssz58ffxgjc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/3/t/w/-original-imah4ssktmeqtgwd.jpeg?q=70&crop=false"

        ],
        // price: 5299,
        originalPrice: 12999
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
        const itemExists = cartItems.some(item => item.name === `FireBoltt ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `FireBoltt ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Ashfire Grey ": "#232624",  
        "Dark Knight Black": "#232D36 ",
        "Skyline Pulse ": "#5D7D9A"  
    };
    return (
        <>
            <div className="FireBoltt-product-container">
                <div className="FireBoltt-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="FireBoltt-thumbnail-gallery">
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
                    <div className="FireBoltt-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="FireBoltt-product-name">
                <h1> Fire-Boltt Clickk 54.1mm (2.12 inch) AMOLED Display, Front Camera, Nano SIM Slot, 1000mAh Smartwatch  ({selectedVariant.name} Strap, Free Size)</h1>

                    {/* Price Section */}
                    <div className="FireBoltt-product-pricing">
                        <h2><span className="FireBoltt-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        {/* <h2><span className="FireBoltt-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>
                    {discount > 0 && <p className="FireBoltt-discount-text">Discount Applied: {discount}%</p>}

                    <div className="FireBoltt-brand-size-section">
                        <p><strong>Brand:</strong> FireBoltt</p>
                        <p><strong>Size:</strong> 54.1 mm </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="FireBoltt-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="FireBoltt-color-option"
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
                    <div className="FireBoltt-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="FireBoltt-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="FireBoltt-Product-Info">

                <div className="FireBoltt-tabs-container">
                    <button
                        className={`FireBoltt-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`FireBoltt-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`FireBoltt-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="FireBoltt-product-Detail">
                    {activeTab === "General" && (
                        <div className="FireBoltt-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "Smartwatch, Charging Cable, Manual, Warranty Card" },
                                    { label: "Model Number", value: "BSW221 (2G)" },
                                    { label: "Model Name", value: "Clickk 54.1mm (2.12 inch) AMOLED Display, Front Camera, Nano SIM Slot, 1000mAh" },
                                    { label: "Dial Shape", value: "Square" },
                                    { label: "Strap Color", value: selectedVariant.name },
                                    { label: "Strap Material", value: "Silicone" },
                                    { label: "Size", value: "Free Size" },
                                    { label: "Touchscreen", value: "Yes" },
                                    { label: "Water Resistant", value: "Yes" },
                                    { label: "Water Resistance Depth", value: "1 m" },
                                    { label: "Usage", value: "Fitness & Outdoor, Health & Medical" },
                                    { label: "Dial Material", value: "Zinc Alloy" },
                                    { label: "Ideal For", value: "Men & Women" },
                                    { label: "Compatible OS", value: "Android & iOS" }
                                ].map((item, index) => (
                                    <li key={index} className="FireBoltt-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="FireBoltt-product-section">

                            <ul>
                                {[
                                    { label: "Closure", value: "Buckle" },
                                    { label: "Sensor", value: "Support HX3605, With High Precision Support Dynamic Heart, True Blood Oxygen, HRV, Support/With 3-Axis Acceleration Sensor" },
                                    { label: "Display Resolution", value: "410 x 502 Pixels" },
                                    { label: "Display Size", value: "54.102 mm" },
                                    { label: "Other Display Features", value: "2.13 AMOLED Square Display with 410x502 px High Resolution" },
                                    { label: "Scratch Resistant", value: "Yes" },
                                    { label: "Notification", value: "Smart Notification" },
                                    { label: "Notification", value: "Call, SMS, Whatsapp, Facebook, Twiter, Other Social Apps, Sedentary Reminder, Goal Completion" },
                                    { label: "Notification Type", value: "Vibrate" },
                                    { label: "Battery Type", value: "Lithium Ion" },
                                    { label: "Stand By Time", value: "36 Hr" }
                                ].map((item, index) => (
                                    <li key={index} className="FireBoltt-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="FireBoltt-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "Covers Manufacturing Defects" },
                                    { label: "Warranty Service Type", value: "Customer Support" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="FireBoltt-product-item">
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
