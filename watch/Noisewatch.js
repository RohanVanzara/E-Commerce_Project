import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Noisewatch.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Blue",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/g/e/l/-original-imah6s6p747bvmxh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/9/4/-original-imagtdqkhz3xdkdt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/d/a/0/-original-imagnfynxugzr5ym.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/w/h/2/-original-imagnfynyndwkrcg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/v/1/u/-original-imagnfyny7fgy2ky.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/c/n/k/-original-imagnfynbytzggzf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/k/e/2/-original-imagnfyncrgza3s9.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/2/q/h/-original-imagnfynpnhhjvvf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/t/t/7/-original-imagnfynegfgc3hd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/l/e/d/-original-imagnfynezfpvpxg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/b/q/f/-original-imagnfyn4hy7dkwf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/8/b/n/-original-imah44hw9uu86nbc.jpeg?q=70&crop=false",

        ],
        price: 4999,
        originalPrice: 3999
    },
    {
        name: "Black",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/c/t/x/-original-imah6s6prqw3w883.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/s/a/c/-original-imagtdqkakpuy5mg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/j/u/y/-original-imagnfyngametuxr.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/n/o/-original-imagnfynty2dpcnw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/v/1/u/-original-imagnfyny7fgy2ky.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/c/i/c/-original-imagnfynzvddyewk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/l/s/3/-original-imagnfynchdytjxc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/4/s/a/-original-imagnfyn5v9ufsqr.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/8/b/n/-original-imah44hw9uu86nbc.jpeg?q=70&crop=false"
        ],
        price: 5499,
        originalPrice: 4499
    },
    {
        name: "Black Line",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/y/z/i/-original-imahygbpyxnzyyyq.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/e/i/k/-original-imahygbph8hefxzc.jpeg?q=70&crop=false",
            " https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/y/d/6/-original-imahycqrrc3hcvbk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/p/k/r/-original-imahycqrnhpc5vx2.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/3/i/9/-original-imahygbpxnfh9hzb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/e/x/w/-original-imahygbpfmhpz5q2.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/e/t/q/-original-imahygbpqnmd6hv8.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/v/q/g/-original-imahycqrzyzvwf5g.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/z/d/k/-original-imahygbphnsvzzwk.jpeg?q=70&crop=false"
        ],
        price: 5299,
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
        const itemExists = cartItems.some(item => item.name === `Noisewatch ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Noisewatch ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Blue": "#0000FF",
        "Black": "#000000",
        "Black Line": "#222222 ",
    };
    return (
        <>
            <div className="Noisewatch-product-container">
                <div className="Noisewatch-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Noisewatch-thumbnail-gallery">
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
                    <div className="Noisewatch-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Noisewatch-product-name">
                <h1> Noise Crew 1.38 Round Display with Bluetooth Calling, Metallic finish, IP68 Rating Smartwatch  ({selectedVariant.name}, Regular)</h1>

                    {/* Price Section */}
                    <div className="Noisewatch-product-pricing">
                        <h2><span className="Noisewatch-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="Noisewatch-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="Noisewatch-discount-text">Discount Applied: {discount}%</p>}

                    <div className="Noisewatch-brand-size-section">
                        <p><strong>Brand:</strong> Noisewatch</p>
                        <p><strong>Size:</strong> 35.052 mm </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="Noisewatch-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="Noisewatch-color-option"
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
                    <div className="Noisewatch-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Noisewatch-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Noisewatch-Product-Info">

                <div className="Noisewatch-tabs-container">
                    <button
                        className={`Noisewatch-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Noisewatch-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Noisewatch-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Noisewatch-product-Detail">
                    {activeTab === "General" && (
                        <div className="Noisewatch-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "Smartwatch, User Manual, Warranty Card" },
                                    { label: "Model Number", value: "wrb-sw-crew-std-slvr_blu" },
                                    { label: "Model Name", value: "Crew 1.38 Round Display with Bluetooth Calling, Metallic finish, IP68 Rating" },
                                    // { label: "Dial Color", value: selectedVariant.name },
                                    { label: "Dial Shape", value: "Round" },
                                    { label: "Strap Color", value: selectedVariant.name },
                                    { label: "Strap Material", value: "Silicone" },
                                    { label: "Size", value: "Regular" },
                                    { label: "Touchscreen", value: "Yes" },
                                    { label: "Water Resistant", value: "Yes" },
                                    { label: "Usage", value: "Fitness & Outdoor" },
                                    { label: "Dial Material", value: "Polycarbonate" },
                                    { label: "Ideal For", value: "Men & Women" },
                                    { label: "Compatible OS", value: "Android & iOS" }
                                ].map((item, index) => (
                                    <li key={index} className="Noisewatch-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Noisewatch-product-section">

                            <ul>
                                {[
                                    { label: "Closure", value: "Buckle" },
                                    { label: "Sensor", value: "Heart Rate, SpO2, Sleep Monitor, Stress" },
                                    { label: "Display Resolution", value: "240 x 240 pixel" },
                                    { label: "Display Size", value: "35.052 mm" },
                                    { label: "Scratch Resistant", value: "Yes" },
                                    { label: "Notification", value: "Smart Notification" },
                                    { label: "Notification Type", value: "Vibration" },
                                    { label: "Battery Life", value: "7 Days" }
                                ].map((item, index) => (
                                    <li key={index} className="Noisewatch-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Noisewatch-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty" },
                                    { label: "Warranty Service Type", value: "Contact - help@nexxbase.com | support.gonoise.in | +91 8882132132" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="Noisewatch-product-item">
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
