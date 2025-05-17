import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./LenovoTab.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Seafoam Green",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/c/h/l/-original-imagz928a7gkav6j.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/s/o/n/-original-imagz5nea6yh7ard.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/0/8/c/-original-imagz5nek5csn7m4.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/z/u/v/-original-imagz5negr4zqku7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/b/4/y/-original-imagz5nen6tfhhgn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/9/g/v/-original-imagz8xuh3qscnkb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/s/h/0/-original-imagz8xuygqymwuw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/h/p/t/-original-imagz8xu9uedzyeu.jpeg?q=70&crop=false",
        ],
        price: 35000,
        originalPrice: 28000
    },

];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Lenovo Tab M11 LTE  ${selectedVariant.name} `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Lenovo Tab M11 LTE  ${selectedVariant.name} `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Seafoam Green": "#C3CCC0",

    };
    return (
        <>
            <div className="LenovoTab-product-container">
                <div className="LenovoTab-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="LenovoTab-thumbnail-gallery">
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
                    <div className="LenovoTab-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="LenovoTab-product-name">
                    <h1> Lenovo Tab M11 LTE with Pen 8 GB RAM 128 GB ROM 11.0 inch with 4G Tablet ({selectedVariant.name})</h1>

                    {/* Price Section */}
                    <div className="LenovoTab-product-pricing">
                        <h2><span className="LenovoTab-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="LenovoTab-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {/* {discount > 0 && <p className="LenovoTab-discount-text">Discount Applied: {discount}%</p>} */}

                    <div className="LenovoTab-brand-size-section">
                        <p><strong>Brand:</strong> Lenovo </p>
                        <p><strong>Size:</strong> 27.74 cm  </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="LenovoTab-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="LenovoTab-color-option"
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
                    <div className="LenovoTab-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="LenovoTab-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="LenovoTab-Product-Info">

                <div className="LenovoTab-tabs-container">
                    <button
                        className={`LenovoTab-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`LenovoTab-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`LenovoTab-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="LenovoTab-product-Detail">
                    {activeTab === "General" && (
                        <div className="LenovoTab-product-section">

                            <ul>
                                {[
                                    { label: "Model Number", value: "ZADB0173IN" },
                                    { label: "Model Name", value: "Tab M11 LTE with Pen" },
                                    { label: "Color", value: selectedVariant.name }, // dynamically selected
                                    { label: "Connectivity", value: "4G" },
                                    { label: "OS", value: "Android" },
                                    { label: "Operating System Version", value: "13" },
                                    { label: "RAM", value: "8 GB" },
                                    { label: "Voice Call", value: "Yes" },
                                    { label: "Supported Network", value: "4G LTE" },
                                    { label: "Processor Type", value: "MediaTek Helio G88" },
                                    { label: "Series", value: "Tab M11" },

                                ].map((item, index) => (
                                    <li key={index} className="LenovoTab-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="LenovoTab-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "27.94 cm (11.0 inch)" },
                                    { label: "Sales Package", value: "Tablet, Lenovo Tab Pen, Charging Adapter, USB Type C Charging Cable, Sim Pin, Quick Start Guide and Safety Warranty" },
                                    { label: "Display Resolution", value: "1920 x 1200 pixels" },
                                    { label: "Primary Camera", value: "13 Megapixels" },
                                    { label: "Internal Storage", value: "128 GB" },
                                    { label: "Processor Speed", value: "2 GHz" },
                                    { label: "Sensors", value: "Accelerometer (G) sensor, Ambient light sensor (ALS), Gyroscope sensor, Hall sensor" },
                                    { label: "Sim Type", value: "Single Sim" },
                                    { label: "ROM", value: "128 GB" },
                                    { label: "Secondary Clock Speed", value: "1.8 GHz" }
                                ].map((item, index) => (
                                    <li key={index} className="LenovoTab-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="LenovoTab-product-section">

                            <ul>
                                {[
                                    { label: "Warranty", value: "1 Year" },
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty from the Date of Purchase" },
                                    { label: "Warranty Service Type", value: "Carry In" },
                                    { label: "Domestic Warranty", value: "1 Year" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Warranty Period", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="LenovoTab-product-item">
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
