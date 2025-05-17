import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./MacMini.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Apple",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/k9bo9e80/cpu/h/2/d/mac-mini-mxnf2hn-a-apple-original-imafr5ad2sjxtsgh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/k9bo9e80/cpu/v/c/5/mac-mini-mxng2hn-a-apple-original-imafr5adczyjzdmf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/k9bo9e80/cpu/v/c/5/mac-mini-mxng2hn-a-apple-original-imafr5adzdtfeazd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/k9bo9e80/cpu/v/c/5/mac-mini-mxng2hn-a-apple-original-imafr5adfjredehg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/k9bo9e80/cpu/h/2/d/mac-mini-mxnf2hn-a-apple-original-imafr5adygy9fxub.jpeg?q=70&crop=false",
        ],
        price: 74999,
        originalPrice: 64999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();
    const [discount] = useState(0);

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `${selectedVariant.name} MacMini `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: ` ${selectedVariant.name} MacMini `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="MacMini-product-container">
                <div className="MacMini-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="MacMini-thumbnail-gallery">
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
                    <div className="MacMini-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="MacMini-product-name">
                    <h1>Apple Mac Mini (MXNF2HN/A) Core i3 (8 GB RAM/Intel UHD Graphics 630 Graphics/256 GB SSD Capacity/Mac OS Catalina) Mini Tower
                    </h1>

                    {/* Price Section */}
                    <div className="MacMini-product-pricing">
                        <h2><span className="MacMini-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="MacMini-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="MacMini-discount-text">Discount Applied: {discount}%</p>}

                    <div className="MacMini-brand-size-section">
                        <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90" alt="Iphone Logo" className="iphonelogo" />
                        </p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="MacMini-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="MacMini-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="MacMini-Product-Info">

                <div className="MacMini-tabs-container">
                    <button
                        className={`MacMini-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`MacMini-tab-button ${activeTab === "Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display Features")}
                    >
                        Display Features
                    </button>
                    <button
                        className={`MacMini-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="MacMini-product-Detail">
                    {activeTab === "General" && (
                        <div className="MacMini-product-section">

                            <ul>
                                {[
                                    { label: "Model Name", value: "U2724DE" },
                                    { label: "Color", value: "Black, Grey" },
                                    { label: "Display", value: "68.58 cm (27 inch) LED Display" },
                                    { label: "Backlight", value: "Backlit Backlight" },
                                    { label: "Panel Type", value: "IPS Panel" },
                                    { label: "Screen Resolution Type", value: "Quad HD" },
                                    { label: "Sales Package", value: "1 Monitor, Power Cable, Display Port 1.4 Cable 1.8 m, USB Type-A to USB Type-C Gen 2 Cable 1.0 m, Thunderbolt 4 Cable - 1.0 m" },
                                    { label: "Screen Form Factor", value: "Flat" },
                                ].map((item, index) => (
                                    <li key={index} className="MacMini-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display Features" && (
                        <div className="MacMini-product-section">

                            <ul>
                                {[
                                    { label: "Maximum Refresh Rate", value: "120 Hz (Analog), 120 Hz (Digital)" },
                                    { label: "Aspect Ratio", value: "16:09" },
                                    { label: "Horizontal Viewing Angle", value: "178° (2D)" },
                                    { label: "Vertical Viewing Angle", value: "178° (2D)" },
                                    { label: "Response Time", value: "5 ms" },
                                    { label: "Brightness", value: "350 nits (2D)" },
                                    { label: "Touchscreen Support", value: "No" },
                                ].map((item, index) => (
                                    <li key={index} className="MacMini-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="MacMini-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "5 Years Warranty" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Domestic Warranty", value: "5 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="MacMini-product-item">
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
