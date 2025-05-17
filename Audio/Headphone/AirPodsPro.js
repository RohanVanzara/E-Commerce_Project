import React, { useState } from "react";
import { useCart } from "../../Cart/CartContext";
import "./AirPodsPro.css";
import Footer from "../../../Footer/Footer";


const colorVariants = [
    {
        name: "White",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/u/r/y/-original-imagtc44zcupzhqh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/j/0/o/-original-imagtcfghamt7x4z.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/i/z/k/-original-imagtc447zmxjdpq.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/6/6/h/-original-imagtdqgnhzehtgm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/9/k/m/-original-imagtdqgzfnjwwqp.jpeg?q=70&crop=false",

        ],
        // price: 14990,
        originalPrice: 21999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Apple AirPods Pro  ${selectedVariant.name} `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Apple AirPods Pro  ${selectedVariant.name} `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "White": "#E7E6EB",
    };
    return (
        <>
            <div className="airpods-product-container">
                <div className="airpods-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="airpods-thumbnail-gallery">
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
                    <div className="airpods-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="airpods-product-name">
                    <h1>Apple AirPods Pro (2nd generation) with MagSafe Case (USB-C) Bluetooth  ({selectedVariant.name}, True Wireless)</h1>

                    {/* Price Section */}
                    <div className="airpods-product-pricing">
                        <h2><span className="airpods-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="airpods-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>

                    <div className="airpods-brand-size-section">
                        <p><strong>Brand:</strong> Apple</p>
                        {/* <p><strong>Weight:</strong> 192 g</p> */}
                    </div>

                    {/* Select Color Variant */}
                    <div className="airpods-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="airpods-color-option"
                                onClick={() => {
                                    setSelectedVariant(variant);
                                    setSelectedImage(variant.images[0]);
                                }}
                                style={{
                                    backgroundColor: selectedVariant.name === variant.name ? colorMap[variant.name] : "white",
                                    color: selectedVariant.name === variant.name ? "black" : "white",
                                    border: "2px solid gray"
                                }}
                            >
                                {variant.name}
                            </button>
                        ))}
                    </div>

                    {/* Quantity Selector */}
                    <div className="airpods-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="airpods-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="airpods-Product-Info">

                <div className="airpods-tabs-container">
                    <button
                        className={`airpods-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`airpods-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`airpods-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="airpods-product-Detail">
                    {activeTab === "General" && (
                        <div className="airpods-product-section">

                            <ul>
                                {[
                                    { label: "Model ID", value: "MTJV3HN/A" },
                                    { label: "Color", value: "White" },
                                    { label: "Headphone Type", value: "True Wireless" },
                                    { label: "Inline Remote", value: "Yes" },
                                    { label: "Sales Package", value: "Charging Case, Cable" },
                                    { label: "Connectivity", value: "Bluetooth" },
                                    { label: "Headphone Design", value: "Earbud" },
                                    { label: "Compatible Devices", value: "Laptop, Mobile, Tablet" }

                                ].map((item, index) => (
                                    <li key={index} className="airpods-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="airpods-product-section">

                            <ul>
                                {[
                                    { label: "Deep Bass", value: "No" },
                                    { label: "With Microphone", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="airpods-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="airpods-product-section">

                            <ul>
                                {[
                                    { label: "Domestic Warranty", value: "1 Year" },
                                    { label: "Warranty Summary", value: "1 Year Warranty" },
                                    { label: "Warranty Service Type", value: "bangalore_admin@.com 918040455150" },
                                    { label: "Covered in Warranty", value: "Manufacturing defect" },
                                    { label: "Not Covered in Warranty", value: "Physical damage" }
                                ].map((item, index) => (
                                    <li key={index} className="airpods-product-item">
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
