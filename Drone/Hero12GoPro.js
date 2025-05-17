import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Hero12GoPro.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "GoPro",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/y/r/u/-original-imahyxtgj2g8uqvn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/4/1/k/-original-imahyxtgumyuzcqe.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/6/5/2/-original-imahyxtgwpxykywz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/j/b/d/-original-imahyxtgs5rwqzg7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/y/s/v/-original-imahyxtg9u2zrm5m.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/a/m/6/-original-imahyxtga4uhbcmc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/5/t/v/-original-imahyxtgzzjmhx2f.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/6/b/i/-original-imahyxtgybcv7gsg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/v/h/i/-original-imahyxtgzaxdaqpf.jpeg?q=70&crop=false",
        ],
        price: 45000,
        originalPrice: 40499
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
        const itemExists = cartItems.some(item => item.name === `Hero12 ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Hero12 ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="Hero12-product-container">
                <div className="Hero12-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Hero12-thumbnail-gallery">
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
                    <div className="Hero12-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Hero12-product-name">
                    <h1>GoPro HERO12 DualLCDScreens 5.3K60 UltraHDVideo HyperSmooth 6.0withAutoBoostWaterproof Sports and Action Camera  (Black, 27 MP)
                    </h1>

                    {/* Price Section */}
                    <div className="Hero12-product-pricing">
                        <h2><span className="Hero12-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="Hero12-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {/* {discount > 0 && <p className="Hero12-discount-text">Discount Applied: {discount}%</p>} */}

                    <div className="Hero12-brand-size-section">
                        <p><strong>Brand:</strong> GoPro</p>
                        <p><strong>Weight:</strong> 260 g </p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="Hero12-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Hero12-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Hero12-Product-Info">

                <div className="Hero12-tabs-container">
                    <button
                        className={`Hero12-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Hero12-tab-button ${activeTab === "Video & Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Video & Display Features")}
                    >
                        Video & Display Features
                    </button>
                    <button
                        className={`Hero12-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Hero12-product-Detail">
                    {activeTab === "General" && (
                        <div className="Hero12-product-section">

                            <ul>
                                {[
                                    { label: "Brand", value: "GoPro" },
                                    { label: "Model Number", value: "HERO12" },
                                    { label: "Series", value: "NA" },
                                    { label: "Model Name", value: "HERO12 DualLCDScreens 5.3K60 UltraHDVideo HyperSmooth 6.0withAutoBoostWaterproof" },
                                    { label: "Brand Color", value: "Black" },
                                    { label: "Color", value: "Black" },
                                    { label: "Effective Pixels", value: "27 MP" },
                                    { label: "Shooting Modes", value: "Times Laps, Video, Photo Modes" },
                                    { label: "Ports", value: "USB-C Port" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero12-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Video & Display Features" && (
                        <div className="Hero12-product-section">

                            <ul>
                                {[
                                    { label: "Video Resolution", value: "5120 × 2880" },
                                    { label: "Video Quality", value: "5K" },
                                    { label: "Frames Per Second", value: "60::50 fps" },
                                    { label: "Video Format", value: "MP4" },
                                    { label: "Display Type", value: "LCD Display" },
                                    { label: "Display Size", value: "2.27 inch" },
                                    { label: "Display Resolution", value: "1080p" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero12-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Hero12-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "2 Years Warranty" },
                                    { label: "Warranty Service Type", value: "For any warranty related issues, please call the Customer Support -[1800111776]" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical and Water Damages" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero12-product-item">
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
