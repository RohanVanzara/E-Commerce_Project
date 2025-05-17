import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Hero11GoPro.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "GoPro",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/f/3/y/-original-imahyxtgqseqwhzr.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/6/q/t/-original-imahyxtg7dzuda5n.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/w/d/j/-original-imahyxtgtk8zks5t.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/9/w/k/-original-imahyxtgfz2j2txs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/h/b/v/-original-imahyxtgpxmyhep3.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/1/v/m/-original-imahyxtgccdcqtgb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/x/f/k/-original-imahyxtgjerb7jwt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/6/b/j/-original-imahyxtgxqzevmap.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/2/v/a/-original-imahyxtgfxg5zvp3.jpeg?q=70&crop=false",
        ],
        price: 51500,
        originalPrice: 40000
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();
    const [discount] = useState(0);

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Hero11 ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Hero11 ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="Hero11-product-container">
                <div className="Hero11-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Hero11-thumbnail-gallery">
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
                    <div className="Hero11-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Hero11-product-name">
                    <h1>GoPro Hero11 Waterproof Sports and Action Camera  (Black, 23 MP)</h1>

                    {/* Price Section */}
                    <div className="Hero11-product-pricing">
                        <h2><span className="Hero11-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="Hero11-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {/* {discount > 0 && <p className="Hero11-discount-text">Discount Applied: {discount}%</p>} */}

                    <div className="Hero11-brand-size-section">
                        <p><strong>Brand:</strong> GoPro</p>
                        <p><strong>Weight:</strong> 500 g</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="Hero11-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Hero11-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Hero11-Product-Info">

                <div className="Hero11-tabs-container">
                    <button
                        className={`Hero11-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Hero11-tab-button ${activeTab === "Video & Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Video & Display Features")}
                    >
                        Video & Display Features
                    </button>
                    <button
                        className={`Hero11-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Hero11-product-Detail">
                    {activeTab === "General" && (
                        <div className="Hero11-product-section">

                            <ul>
                                {[
                                    { label: "Brand", value: "GoPro" },
                                    { label: "Model Number", value: "CHDHX-111-RW/CHDHX-112-RW" },
                                    { label: "Series", value: "Hero11" },
                                    { label: "Model Name", value: "Waterproof" },
                                    { label: "Brand Color", value: "Black" },
                                    { label: "Color", value: "Black" },
                                    { label: "Effective Pixels", value: "23 MP" },
                                    { label: "Shooting Modes", value: "SuperPhoto, HDR, Changing the FOV (Field of View) to Linear or Narrow, Digital Zoom, Time-lapse Photo and Night Lapse Photo when the Interval is Less than 5 Seconds" },
                                    { label: "Ports", value: "Action Camera" },
                                    { label: "Water Resistance Depth", value: "10 m" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero11-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Video & Display Features" && (
                        <div className="Hero11-product-section">

                            <ul>
                                {[
                                    { label: "Video Resolution", value: "5.3K" },
                                    { label: "Video Quality", value: "5.3K" },
                                    { label: "Frames Per Second", value: "60, 120 fps" },
                                    { label: "Video Format", value: "MP4" },
                                    { label: "Display Type", value: "LCD" },
                                    { label: "Display Size", value: "2.27 inch" },
                                    { label: "Display Resolution", value: "27" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero11-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Hero11-product-section">

                            <ul>
                                {[
                                 { label: "Warranty Summary", value: "1 year international + 1 year local India warranty. For 1 Year extended warranty please visit brand website" },
                                 { label: "Service Type", value: "For any warranty related issues, please call the Customer Support -[1800111776]" },
                                 { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                 { label: "Not Covered in Warranty", value: "Physical Damage" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero11-product-item">
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
