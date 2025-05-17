import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./PanasonicCamera.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Camera",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/b/x/1/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknqmjh6sxem.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/o/n/k/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknqzfx55ygh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/a/m/o/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknqvhzheyhj.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/6/q/h/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknqph3rvxga.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/b/n/k/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknquyu9ytkn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/d/o/j/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknqrpcjx5hu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/u/t/k/dmc-g85hagwk-16-dmc-g85hagwk-panasonic-original-imagzknqbzyhtcqw.jpeg?q=70&crop=false",
        ],
        price: 94990,
        originalPrice: 79990
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Canon EOS 3000D DSLR  ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Canon EOS 3000D DSLR  ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="Panasonic-product-container">
                <div className="Panasonic-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Panasonic-thumbnail-gallery">
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
                    <div className="Panasonic-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Panasonic-product-name">
                    <h1>Canon EOS 3000D DSLR Camera 1 Body, 18 - 55 mm Lens  (Black)</h1>

                    {/* Price Section */}
                    <div className="Panasonic-product-pricing">
                        <h2><span className="Panasonic-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="Panasonic-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>

                    <div className="Panasonic-brand-size-section">
                        <p><strong>Brand:</strong> Canon</p>
                        <p><strong>Weight:</strong> 475 g</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="Panasonic-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Panasonic-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Panasonic-Product-Info">

                <div className="Panasonic-tabs-container">
                    <button
                        className={`Panasonic-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Panasonic-tab-button ${activeTab === "Sensor & Lens Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Sensor & Lens Features")}
                    >
                        Sensor & Lens Features
                    </button>
                    <button
                        className={`Panasonic-tab-button ${activeTab === "Focus, Exposure & Shutter Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Focus, Exposure & Shutter Features")}
                    >
                        Focus, Exposure & Shutter Features
                    </button>
                    <button
                        className={`Panasonic-tab-button ${activeTab === "Video & Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Video & Display Features")}
                    >
                        Video & Display Features
                    </button>
                    <button
                        className={`Panasonic-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Panasonic-product-Detail">
                    {activeTab === "General" && (
                        <div className="Panasonic-product-section">

                            <ul>
                                {[
                                    { label: "Brand", value: "Panasonic" },
                                    { label: "Model Number", value: "DMC-G85HAGWK" },
                                    { label: "Model Name", value: "Lumix DMC-G85HAGWK" },
                                    { label: "SLR Variant", value: "Body with 14 - 140 mm/F3.5-5.6 ASPH Lens" },
                                    { label: "Brand Color", value: "Black" },
                                    { label: "Type", value: "Mirrorless" },
                                    { label: "Color", value: "Black" },
                                    { label: "Effective Pixels", value: "16 MP" },
                                    { label: "Tripod Socket", value: "Yes" },
                                    { label: "Wifi", value: "Yes" },
                                    { label: "GPS", value: "No" },
                                    { label: "Face Detection", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="Panasonic-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Sensor & Lens Features" && (
                        <div className="Panasonic-product-section">

                            <ul>
                                {[
                                    { label: "Sensor Type", value: "MOS" },
                                    { label: "Image Sensor Size", value: "17.3 x 13 mm" },
                                    { label: "Lens Mount", value: "MFT" },
                                    { label: "Dust Reduction", value: "Yes" },
                                    { label: "Compatible Lens", value: "MFT Mount" },
                                    { label: "Manual Focus", value: "Yes" }

                                ].map((item, index) => (
                                    <li key={index} className="Panasonic-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Focus, Exposure & Shutter Features" && (
                        <div className="Panasonic-product-section">

                            <ul>
                                {[
                                    { label: "Focus Mode", value: "AFS (Single), AFF (Flexible), AFC (Continuous), MF" },
                                    { label: "Metering Modes", value: "Multiple, Center Weighted, Spot" },
                                    { label: "Auto Focus", value: "Yes" },
                                    { label: "Exposure Mode", value: "Manual, Automatic" },
                                    { label: "Manual Exposure", value: "Yes" },
                                    { label: "Shutter Speed", value: "1/16000 sec" },
                                    { label: "Self-timer", value: "Yes" },
                                    { label: "Shutter Type", value: "Electronically Control Focal Plane Shutter" }

                                ].map((item, index) => (
                                    <li key={index} className="Panasonic-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Video & Display Features" && (
                        <div className="Panasonic-product-section">

                            <ul>
                                {[
                                    { label: "Video Resolution", value: "3840 x 2160" },
                                    { label: "Video Quality", value: "1920 x 1080" },
                                    { label: "Display Type", value: "TFT LCD Monitor with Static Touch Control" },
                                    { label: "Display Size", value: "3 inch" },
                                    { label: "Touch Screen", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="Panasonic-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Panasonic-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "2 Years Warranty" },
                                    { label: "Warranty Service Type", value: "Carry On" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage and Liquid Damage" }

                                ].map((item, index) => (
                                    <li key={index} className="Panasonic-product-item">
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
