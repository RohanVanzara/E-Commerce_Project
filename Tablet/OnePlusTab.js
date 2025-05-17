import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./OnePlusTab.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Twin Mint",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/v/w/t/-original-imagu2mdexmnb7bw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/l/0/t/-original-imagy4xuku6fwjuq.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/c/f/n/-original-imagu2mdphy922pk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/j/u/e/-original-imagu2mdkfjkgacz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/i/o/l/-original-imagu2mdeyzhgynu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/i/a/u/-original-imagu2mdttvng3cb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/u/o/u/-original-imagu2mdk2ynpghv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/c/a/w/-original-imagu2mdhpdytgjs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/z/b/r/-original-imagu2mdantfzenr.jpeg?q=70&crop=false",
        ],
        price: 24999,
        originalPrice: 1999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `OnePlus Pad Go  ${selectedVariant.name}  `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `OnePlus Pad Go  ${selectedVariant.name}  `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Twin Mint": "#697F67",

    };
    return (
        <>
            <div className="OneplusTab-product-container">
                <div className="OneplusTab-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="OneplusTab-thumbnail-gallery">
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
                    <div className="OneplusTab-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="OneplusTab-product-name">
                    <h1> OnePlus Pad Go 8 GB RAM 128 GB ROM 11.35 inch with Wi-Fi Only Tablet ({selectedVariant.name})</h1>

                    {/* Price Section */}
                    <div className="OneplusTab-product-pricing">
                        <h2><span className="OneplusTab-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="OneplusTab-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {/* {discount > 0 && <p className="OneplusTab-discount-text">Discount Applied: {discount}%</p>} */}

                    <div className="OneplusTab-brand-size-section">
                        <p><strong>Brand:</strong> OnePlus</p>
                        <p><strong>Size:</strong> 28.83 cm   </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="OneplusTab-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="OneplusTab-color-option"
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
                    <div className="OneplusTab-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="OneplusTab-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="OneplusTab-Product-Info">

                <div className="OneplusTab-tabs-container">
                    <button
                        className={`OneplusTab-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`OneplusTab-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`OneplusTab-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="OneplusTab-product-Detail">
                    {activeTab === "General" && (
                        <div className="OneplusTab-product-section">

                            <ul>
                                {[
                                    { label: "Model Number", value: "OPD2305" },
                                    { label: "Model Name", value: "Pad Go" },
                                    { label: "Ideal Usage", value: "Entertainment, Gaming, Reading and Browsing, For Kids, Business" },
                                    { label: "Color", value: selectedVariant.name }, // or "Twin Mint" if not dynamic
                                    { label: "Connectivity", value: "Wi-Fi Only" },
                                    { label: "OS", value: "Android" },
                                    { label: "Operating System Version", value: "Oxygen OS 13.2" },
                                    { label: "RAM", value: "8 GB" },
                                    { label: "Voice Call", value: "No" },
                                    { label: "Video Call", value: "Yes" },
                                    { label: "Processor Type", value: "Mediatek Helio G99" }

                                ].map((item, index) => (
                                    <li key={index} className="OneplusTab-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="OneplusTab-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "28.83 cm (11.35 inch)" },
                                    { label: "Sales Package", value: "OnePlus Pad, Type-C cable, Safety Instructions & Warranty Card, Quick start guide, Red cable club welcome card" },
                                    { label: "Display Resolution", value: "2408 x 1720 Pixels" },
                                    { label: "Primary Camera", value: "8 megapixels" },
                                    { label: "Internal Storage", value: "128 GB" },
                                    { label: "Sensors", value: "Geomagnetic Sensor, Light Sensor, Acceleration Sensor, Gravity Sensor, Gyroscope, Color Temperature Sensor, Hall Sensor" },
                                    { label: "Sim Type", value: "No Sim" },
                                    { label: "ROM", value: "128 GB" },
                                    { label: "Battery Capacity", value: "8000 mAH" }
                                ].map((item, index) => (
                                    <li key={index} className="OneplusTab-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="OneplusTab-product-section">

                            <ul>
                                {[
                                    { label: "Warranty", value: "1 Year" },
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty" },
                                    { label: "Warranty Service Type", value: "Contact : Ph : 1800 102 8411 / Mail : onepluscare@oneplus.com" },
                                    { label: "Domestic Warranty", value: "1 Year" },
                                    { label: "Not Covered in Warranty", value: "Physical Damages" },
                                    { label: "Warranty Period", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="OneplusTab-product-item">
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
