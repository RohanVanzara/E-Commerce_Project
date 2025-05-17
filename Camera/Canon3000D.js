import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Canon3000D.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Camera",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5hmepevckd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5hagaafttz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/jfbfde80/camera/n/r/n/canon-eos-3000d-original-imaf3t5hjrz6zzzc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/jmthle80-1/dslr-camera/n/r/n/eos-eos-3000d-canon-original-imaf9n6fqhmgt4cv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/jmthle80-1/dslr-camera/n/r/n/eos-eos-3000d-canon-original-imaf9n6fg2xkhqh3.jpeg?q=70&crop=false",
        ],
        // price: 74999,
        originalPrice: 34990
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();
    // const [discount] = useState(0);

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
            <div className="Canon3000D-product-container">
                <div className="Canon3000D-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Canon3000D-thumbnail-gallery">
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
                    <div className="Canon3000D-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Canon3000D-product-name">
                    <h1>Canon EOS 3000D DSLR Camera 1 Body, 18 - 55 mm Lens  (Black)</h1>

                    {/* Price Section */}
                    <div className="Canon3000D-product-pricing">
                        <h2><span className="Canon3000D-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="Canon3000D-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>

                    <div className="Canon3000D-brand-size-section">
                        <p><strong>Brand:</strong> Canon</p>
                        <p><strong>Weight:</strong> 475 g</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="Canon3000D-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Canon3000D-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Canon3000D-Product-Info">

                <div className="Canon3000D-tabs-container">
                    <button
                        className={`Canon3000D-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Canon3000D-tab-button ${activeTab === "Sensor & Lens Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Sensor & Lens Features")}
                    >
                        Sensor & Lens Features
                    </button>
                    <button
                        className={`Canon3000D-tab-button ${activeTab === "Video & Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Video & Display Features")}
                    >
                        Video & Display Features
                    </button>
                    <button
                        className={`Canon3000D-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Canon3000D-product-Detail">
                    {activeTab === "General" && (
                        <div className="Canon3000D-product-section">

                            <ul>
                                {[
                                    { label: "Brand", value: "Canon" },
                                    { label: "Model Number", value: "EOS 3000D" },
                                    { label: "Model Name", value: "EOS" },
                                    { label: "SLR Variant", value: "1 Body, 18 - 55 mm Lens" },
                                    { label: "Brand Color", value: "Black" },
                                    { label: "Type", value: "DSLR" },
                                    { label: "Color", value: "Black" },
                                    { label: "Effective Pixels", value: "18 MP" },
                                    { label: "Tripod Socket", value: "Yes" },
                                    { label: "WiFi", value: "Yes" },
                                    { label: "GPS", value: "No" }
                                ].map((item, index) => (
                                    <li key={index} className="Canon3000D-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Sensor & Lens Features" && (
                        <div className="Canon3000D-product-section">

                            <ul>
                                {[
                                    { label: "Sensor Type", value: "CMOS" },
                                    { label: "Image Sensor Size", value: "22.3 x 14.9mm" },
                                    { label: "Optical Zoom", value: "35x" },
                                    { label: "Lens Mount", value: "Canon EF Mount" },
                                    { label: "Dust Reduction", value: "Yes" },

                                ].map((item, index) => (
                                    <li key={index} className="Canon3000D-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Video & Display Features" && (
                        <div className="Canon3000D-product-section">

                            <ul>
                                {[
                                    { label: "Video Resolution", value: "1920 x 1080" },
                                    { label: "Video Quality", value: "Full HD" },
                                    { label: "Display Type", value: "Digital, single-lens reflex, AF / AE camera with built-in flash" },
                                    { label: "Display Size", value: "2 inch" },
                                    { label: "Touch Screen", value: "No" }

                                ].map((item, index) => (
                                    <li key={index} className="Canon3000D-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Canon3000D-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)" },
                                    { label: "Service Type", value: "Carry In" },
                                    { label: "Covered in Warranty", value: "Warranty of the product is limited to only manufacturing defect on camera body & lens." },
                                    { label: "Not Covered in Warranty", value: "Warranty does not cover any external accessories (such as battery, cable, carrying bag), damage caused to the product due to improper installation by customer." }

                                ].map((item, index) => (
                                    <li key={index} className="Canon3000D-product-item">
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
