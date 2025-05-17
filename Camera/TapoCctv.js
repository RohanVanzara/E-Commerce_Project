import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./TapoCctv.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Security Camera  ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/y/k/k/1-tapo-c500-indoor-security-camera-tp-link-original-imah754d95epb2uf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/m/t/e/1-tapo-c500-indoor-security-camera-tp-link-original-imah754dhzy3hbgs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/v/q/c/1-tapo-c500-indoor-security-camera-tp-link-original-imah754dmpjkast8.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/m/b/z/1-tapo-c500-indoor-security-camera-tp-link-original-imah754dazhahqfh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/1/n/i/1-tapo-c500-indoor-security-camera-tp-link-original-imah754djx8psfdv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/m/h/y/1-tapo-c500-indoor-security-camera-tp-link-original-imah754dvnwgevnb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/s/0/o/1-tapo-c500-indoor-security-camera-tp-link-original-imah754dubhayrc3.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/j/c/k/1-tapo-c500-indoor-security-camera-tp-link-original-imah754dbfszv9b6.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/p/z/k/1-tapo-c500-indoor-security-camera-tp-link-original-imah754daftb23bx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/w/n/z/1-tapo-c500-indoor-security-camera-tp-link-original-imah754djusgcehv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/c/t/q/1-tapo-c500-indoor-security-camera-tp-link-original-imah754drrpdymsx.jpeg?q=70&crop=false",
        ],
        price: 5449,
        originalPrice: 6999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `TP-Link Tapo C500  ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `TP-Link Tapo C500  ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="Tapo-product-container">
                <div className="Tapo-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Tapo-thumbnail-gallery">
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
                    <div className="Tapo-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Tapo-product-name">
                    <h1>TP-Link Tapo C500 1080p Outdoor Pan/Tilt Security WiFi Smart Camera Security Camera  (512 GB, 1 Channel)</h1>

                    {/* Price Section */}
                    <div className="Tapo-product-pricing">
                        <h2><span className="Tapo-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="Tapo-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>

                    <div className="Tapo-brand-size-section">
                        <p><strong>Brand:</strong> Tapo</p>
                        {/* <p><strong>Weight:</strong> 739 g</p> */}
                    </div>


                    {/* Quantity Selector */}
                    <div className="Tapo-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Tapo-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Tapo-Product-Info">

                <div className="Tapo-tabs-container">
                    <button
                        className={`Tapo-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Tapo-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Tapo-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Tapo-product-Detail">
                    {activeTab === "General" && (
                        <div className="Tapo-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "1 Home Security Camera, DC Power Adapter, Anchors and Screws, Mounting Template, Waterproof Seal, Quick Start Guide" },
                                    { label: "Model Number", value: "Tapo C500" },
                                    { label: "Number of Channels", value: "1" },
                                    { label: "Camera Type", value: "IP" },
                                    { label: "Video Output", value: "MP4" },
                                    { label: "Video Recording Resolution", value: "1920 x 1080" },
                                    { label: "Video Recording Frame Rate", value: "30 fps" }
                                ].map((item, index) => (
                                    <li key={index} className="Tapo-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Tapo-product-section">

                            <ul>
                                {[
                                    { label: "Recording Formats", value: "H.264" },
                                    { label: "HDD Available", value: "No" },
                                    { label: "Motion Triggered Recording", value: "Yes" },
                                    { label: "Power Source", value: "DC" },
                                    { label: "Sound Triggered Recording", value: "Yes" },
                                    { label: "Camera Resolution", value: "2 MP" }

                                ].map((item, index) => (
                                    <li key={index} className="Tapo-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Warranty" && (
                        <div className="Tapo-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "2 Year Domestic warranty" },
                                    { label: "Warranty Service Type", value: "Customer needs to contact on toll free no 18002094168 for RMA confirmation. After confirmation, customer needs to bring the product to the service centre." },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damages, Water Damages" },
                                    { label: "Domestic Warranty", value: "2 Year" }

                                ].map((item, index) => (
                                    <li key={index} className="Tapo-product-item">
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
