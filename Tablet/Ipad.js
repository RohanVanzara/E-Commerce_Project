import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Ipad.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Blue",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/z/u/o/-original-imagj72tg8dj3sgx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/w/p/v/-original-imagj72tg8wnjx2h.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/l/e/q/-original-imagj72t2hbnde8j.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/t/e/b/-original-imagj72trbzxfq6g.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/r/c/2/-original-imagj72twwjurfjg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/i/9/j/-original-imagj72tr6j2v2qh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/r/f/a/-original-imagj72tvhvgtmud.jpeg?q=70&crop=false",
        ],
        price: 44900,
        originalPrice: 49900
    },
    {
        name: "Pink",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/m/z/d/-original-imagj72twxxe5rgz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/w/p/v/-original-imagj72tg8wnjx2h.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/l/e/q/-original-imagj72t2hbnde8j.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/t/e/b/-original-imagj72trbzxfq6g.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/r/c/2/-original-imagj72twwjurfjg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/i/9/j/-original-imagj72tr6j2v2qh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/n/j/a/-original-imagj72tu4aahxcg.jpeg?q=70&crop=false",
        ],
        price: 44900,
        originalPrice: 49900
    },
    {
        name: "Silver",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/x/z/7/-original-imagj72tqndg7rps.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/w/p/v/-original-imagj72tg8wnjx2h.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/l/e/q/-original-imagj72t2hbnde8j.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/t/e/b/-original-imagj72trbzxfq6g.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/r/c/2/-original-imagj72twwjurfjg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/i/9/j/-original-imagj72tr6j2v2qh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/y/e/g/-original-imagj72tn3d4j9ec.jpeg?q=70&crop=false",
        ],
        price: 44900,
        originalPrice: 49900
    },
    {
        name: "Yellow",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/a/x/v/-original-imagj72tu9qfjzrm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/w/p/v/-original-imagj72tg8wnjx2h.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/l/e/q/-original-imagj72t2hbnde8j.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/t/e/b/-original-imagj72trbzxfq6g.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/r/c/2/-original-imagj72twwjurfjg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/i/9/j/-original-imagj72tr6j2v2qh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/w/v/d/-original-imagj72thqwzwjtp.jpeg?q=70&crop=false",
        ],
        price: 44900,
        originalPrice: 49900
    }
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Apple ${selectedVariant.name} Ipad `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Apple ${selectedVariant.name} Ipad `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Blue": "#637A9D",
        "Pink": "#BF546A",
        "Silver": "#A7B1C0 ",
        "Yellow": "#BAA848 ",
    };
    return (
        <>
            <div className="Ipad-product-container">
                <div className="Ipad-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Ipad-thumbnail-gallery">
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
                    <div className="Ipad-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Ipad-product-name">
                    <h1> Apple iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi+5G ({selectedVariant.name})</h1>

                    {/* Price Section */}
                    <div className="Ipad-product-pricing">
                        <h2><span className="Ipad-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="Ipad-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {/* {discount > 0 && <p className="Ipad-discount-text">Discount Applied: {discount}%</p>} */}

                    <div className="Ipad-brand-size-section">
                    <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90" alt="Iphone Logo" className="iphonelogo" />
                    </p>                        <p><strong>Size:</strong> 27.69 cm  </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="Ipad-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="Ipad-color-option"
                                onClick={() => {
                                    setSelectedVariant(variant);
                                    setSelectedImage(variant.images[0]);
                                }}
                                style={{
                                    backgroundColor: selectedVariant.name === variant.name ? colorMap[variant.name] : "white",
                                    color: selectedVariant.name === variant.name ? "white" : "black",
                                    border: "2px solid gray"
                                }}
                            >
                                {variant.name}
                            </button>
                        ))}
                    </div>

                    {/* Quantity Selector */}
                    <div className="Ipad-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Ipad-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Ipad-Product-Info">

                <div className="Ipad-tabs-container">
                    <button
                        className={`Ipad-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Ipad-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Ipad-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Ipad-product-Detail">
                    {activeTab === "General" && (
                        <div className="Ipad-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "Smartwatch, User Manual, Warranty Card" },
                                    { label: "Model Number", value: "MQ6M3HN/A" },
                                    { label: "Model Name", value: "iPad (10th Gen)" },
                                    { label: "Ideal Usage", value: "Entertainment, For Kids, Reading and Browsing" },
                                    { label: "Color", value: selectedVariant.name },
                                    { label: "Connectivity", value: "Wi-Fi+5G" },
                                    { label: "OS", value: "iPadOS" },
                                    { label: "Voice Call", value: "No" },
                                    { label: "Display Resolution Type", value: "Full HD" },
                                    { label: "Operating System Version", value: "16" },
                                    { label: "Supported Network", value: "5G, 4G LTE, UMTS, GSM" },
                                    { label: "Processor Type", value: "A14 Bionic Chip (64-bit Architecture) with Neural Engine" },

                                ].map((item, index) => (
                                    <li key={index} className="Ipad-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Ipad-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "27.69 cm (10.9 inch)" },
                                    { label: "Sales Package", value: "iPad, USB Type C Charge Cable (1 metre), 20 W USB Type C Power Adapter" },
                                    { label: "Display Resolution", value: "2360 x 1640 Pixel" },
                                    { label: "Primary Camera", value: "12 megapixels" },
                                    { label: "Video Recording Resolution", value: "4K, 1080P, 720P pixels" },
                                    { label: "Internal Storage", value: "64 GB" },
                                    { label: "Sim Size", value: "Nano SIM" },
                                    { label: "Sensors", value: "Touch ID, Three‐axis gyro, Accelerometer, Barometer, Ambient light sensor" },
                                    { label: "Sim Type", value: "Single Sim" },
                                    { label: "ROM", value: "64 GB" },
                                ].map((item, index) => (
                                    <li key={index} className="Ipad-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Ipad-product-section">

                            <ul>
                                {[
                                    { label: "Warranty", value: "1 Year " },
                                    { label: "Warranty Summary", value: "1 Year Limited Hardware Warranty" },
                                    { label: "Warranty Service Type", value: "Carry In" },
                                    { label: "Domestic Warranty", value: "1 Year" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Warranty Period", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="Ipad-product-item">
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
