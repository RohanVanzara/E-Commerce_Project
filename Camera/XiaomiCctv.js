import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./XiaomiCctv.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Security Camera  ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/j/l/k/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh54yy9qfeq.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/q/s/g/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh5ah5vxhhu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/i/j/1/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh5kbjvtmns.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/r/p/j/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh5qymfr5nn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/i/b/p/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh5ng2hgmcv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/z/2/t/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh5gs36qbfu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/h/7/2/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh5hhhfsmtc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/l/a/3/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh5nbrggf4s.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/u/z/u/1-mjsxj18cm-indoor-outdoor-security-camera-mi-original-imah6vh5krrhk2tk.jpeg?q=70&crop=false",
        ],
        price: 4999,
        originalPrice: 3999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Mi by Xiaomi 3MP  ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Mi by Xiaomi 3MP  ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="Xiaomi-product-container">
                <div className="Xiaomi-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Xiaomi-thumbnail-gallery">
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
                    <div className="Xiaomi-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Xiaomi-product-name">
                    <h1>Mi by Xiaomi 3MP Camera 2K (1296p) High Resolution AI Human Detection PTZ 360° Smart Home Security Camera  (1 Channel)</h1>

                    {/* Price Section */}
                    <div className="Xiaomi-product-pricing">
                        <h2><span className="Xiaomi-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="Xiaomi-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>

                    <div className="Xiaomi-brand-size-section">
                        <p><strong>Brand:</strong> Xiaomi</p>
                        {/* <p><strong>Weight:</strong> 739 g</p> */}
                    </div>


                    {/* Quantity Selector */}
                    <div className="Xiaomi-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Xiaomi-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Xiaomi-Product-Info">

                <div className="Xiaomi-tabs-container">
                    <button
                        className={`Xiaomi-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Xiaomi-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Xiaomi-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Xiaomi-product-Detail">
                    {activeTab === "General" && (
                        <div className="Xiaomi-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "1 Home Security Camera, Power Adapter, Charging Cable, Wall Mounting Kit, User Manual" },
                                    { label: "Model Number", value: "MJSXJ18CM" },
                                    { label: "Number of Channels", value: "1" },
                                    { label: "Camera Type", value: "IP" },
                                    { label: "Video Output", value: "HDMI" },
                                    { label: "Video Recording Resolution", value: "1296p" },
                                    { label: "Video Recording Frame Rate", value: "20fps per Channel" }
                                ].map((item, index) => (
                                    <li key={index} className="Xiaomi-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Xiaomi-product-section">

                            <ul>
                                {[
                                    { label: "Recording Formats", value: "H.265" },
                                    { label: "Image Sensor", value: "CMOS" },
                                    { label: "Shutter Type", value: "Auto" },
                                    { label: "IR Distance", value: "10 m" },
                                    { label: "HDD Available", value: "No" },
                                    { label: "Power Source", value: "AC" },
                                    { label: "Sound Triggered Recording", value: "Yes" },
                                    { label: "Audio Output", value: "Speaker & Microphone" },
                                    { label: "Camera Resolution", value: "2 MP" }

                                ].map((item, index) => (
                                    <li key={index} className="Xiaomi-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Xiaomi-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Year Warranty" },
                                    { label: "Warranty Service Type", value: "Contact : Ph : 1800-103-6286 / Mail : https://privacy.mi.com/support" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damages" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="Xiaomi-product-item">
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
