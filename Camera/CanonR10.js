import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./CanonR10.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Camera",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l5fnhjk0/dslr-camera/z/e/u/eos-r10-24-2-r10-canon-original-imagg42fuyju6jbb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/d/e/h/-original-imaggjusqbj7rgq9.jpeg?q=70&crop=false",
        ],
        // price: 74999,
        originalPrice: 112139
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Canon EOS R10 Mirrorless ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Canon EOS R10 Mirrorless ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="CanonR10-product-container">
                <div className="CanonR10-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="CanonR10-thumbnail-gallery">
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
                    <div className="CanonR10-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="CanonR10-product-name">
                    <h1>Canon EOS R10 Mirrorless Camera Body with RF-S 18 - 150 mm f/3.5 - 6.3 IS STM Lens Kit  (Black)</h1>

                    {/* Price Section */}
                    <div className="CanonR10-product-pricing">
                        <h2><span className="CanonR10-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="CanonR10-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>

                    <div className="CanonR10-brand-size-section">
                        <p><strong>Brand:</strong> Canon</p>
                        <p><strong>Weight:</strong> 739 g</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="CanonR10-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="CanonR10-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="CanonR10-Product-Info">

                <div className="CanonR10-tabs-container">
                    <button
                        className={`CanonR10-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`CanonR10-tab-button ${activeTab === "Sensor & Lens Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Sensor & Lens Features")}
                    >
                        Sensor & Lens Features
                    </button>
                    <button
                        className={`CanonR10-tab-button ${activeTab === "Video & Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Video & Display Features")}
                    >
                        Video & Display Features
                    </button>
                    <button
                        className={`CanonR10-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="CanonR10-product-Detail">
                    {activeTab === "General" && (
                        <div className="CanonR10-product-section">

                            <ul>
                                {[
                                    { label: "Brand", value: "Canon" },
                                    { label: "Model Number", value: "R10" },
                                    { label: "Series", value: "EOS" },
                                    { label: "Model Name", value: "EOS R10" },
                                    { label: "SLR Variant", value: "Body with RF-S 18 - 150 mm f/3.5 - 6.3 IS STM Lens Kit" },
                                    { label: "Brand Color", value: "Black" },
                                    { label: "Type", value: "Mirrorless" },
                                    { label: "Color", value: "Black" },
                                    { label: "Effective Pixels", value: "24.2 MP" },
                                    { label: "Shooting Modes", value: "A Plus/Special Scene Mode/Creative Filters/Fv/P/Tv/Av/M/B/C1/C2" },
                                    { label: "Tripod Socket", value: "Yes" },
                                    { label: "Wifi", value: "Yes" },
                                    { label: "Face Detection", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="CanonR10-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Sensor & Lens Features" && (
                        <div className="CanonR10-product-section">

                            <ul>
                                {[
                                    { label: "Sensor Type", value: "CMOS" },
                                    { label: "Image Sensor Size", value: "22.3 x 14.9" },
                                    { label: "ISO Rating", value: "Stills: 100 - 32,000 (H:51,200), Movie: 100 - 12,800, HDR PQ Movies: ISO 100 - 12,800" },
                                    { label: "Lens Mount", value: "Canon RF" },
                                    { label: "Dust Reduction", value: "Yes" }

                                ].map((item, index) => (
                                    <li key={index} className="CanonR10-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Video & Display Features" && (
                        <div className="CanonR10-product-section">

                            <ul>
                                {[
                                    { label: "Video Resolution", value: "3840 x 2160" },
                                    { label: "Video Quality", value: "4K" },
                                    { label: "Display Type", value: "LCD" },
                                    { label: "Display Size", value: "3 inch" },
                                    { label: "Touch Screen", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="CanonR10-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="CanonR10-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "2 Years Domestic Warranty" },
                                    { label: "Service Type", value: "Carry-in" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Any Physical Damages will Not Covered in Warranty" }

                                ].map((item, index) => (
                                    <li key={index} className="CanonR10-product-item">
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
