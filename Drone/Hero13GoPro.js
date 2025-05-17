import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Hero13GoPro.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "GoPro",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/m/u/p/hero13-creator-edition-na-2-27-27-hero13-creator-edition-gopro-original-imah4cg9vvcyhmhx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/i/i/3/hero13-creator-edition-na-2-27-27-hero13-creator-edition-gopro-original-imah4cg9ncdujyxs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/p/v/l/hero13-creator-edition-na-2-27-27-hero13-creator-edition-gopro-original-imah4cg9qurrcgy2.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/s/5/x/hero13-creator-edition-na-2-27-27-hero13-creator-edition-gopro-original-imah4cg9hxwj5u4m.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/u/o/l/hero13-creator-edition-na-2-27-27-hero13-creator-edition-gopro-original-imah4cg9gahfd5jp.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/sports-action-camera/k/b/g/hero13-na-2-27-27-hero13-gopro-original-imah4cg7fc9ggkss.jpeg?q=70&crop=false",
        ],
        // price: 74999,
        originalPrice: 59999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `HERO13  ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `HERO13  ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="Hero13-product-container">
                <div className="Hero13-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Hero13-thumbnail-gallery">
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
                    <div className="Hero13-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Hero13-product-name">
                    <h1>GoPro HERO13 Creator Edition -Volta, Media Mod, Light Mod, Enduro Battery, Mount Sports and Action Camera  (Black, 27 MP)</h1>

                    {/* Price Section */}
                    <div className="Hero13-product-pricing">
                        <h2><span className="Hero13-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="Hero13-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>

                    <div className="Hero13-brand-size-section">
                        <p><strong>Brand:</strong> GoPro</p>
                        <p><strong>Weight:</strong> 1.23 kg</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="Hero13-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Hero13-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Hero13-Product-Info">

                <div className="Hero13-tabs-container">
                    <button
                        className={`Hero13-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Hero13-tab-button ${activeTab === "Video & Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Video & Display Features")}
                    >
                        Video & Display Features
                    </button>
                    <button
                        className={`Hero13-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Hero13-product-Detail">
                    {activeTab === "General" && (
                        <div className="Hero13-product-section">

                            <ul>
                                {[
                                    { label: "Model Number", value: "Hero13 Creator Edition" },
                                    { label: "Series", value: "NA" },
                                    { label: "Model Name", value: "HERO13 Creator Edition - Volta, Media Mod, Light Mod, Enduro Battery, Mount" },
                                    { label: "Brand Color", value: "Black" },
                                    { label: "Color", value: "Black" },
                                    { label: "Effective Pixels", value: "27 MP" },
                                    { label: "Shooting Modes", value: "Time Lapse, Video, Photo Modes, Slow Motion" },
                                    { label: "Ports", value: "USB-C" },
                                    { label: "Slow Motion", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero13-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Video & Display Features" && (
                        <div className="Hero13-product-section">

                            <ul>
                                {[
                                    { label: "Video Resolution", value: "5.3K" },
                                    { label: "Video Quality", value: "5.3K (at 30p)" },
                                    { label: "Frames Per Second", value: "60::50 fps" },
                                    { label: "Video Format", value: "MP4" },
                                    { label: "Display Type", value: "LCD" },
                                    { label: "Display Size", value: "2.27 inch" },
                                    { label: "Display Resolution", value: "1920 x 1080" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero13-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Hero13-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "2 Years Warranty" },
                                    { label: "Warranty Service Type", value: "Carry-in" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damages" }
                                ].map((item, index) => (
                                    <li key={index} className="Hero13-product-item">
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
