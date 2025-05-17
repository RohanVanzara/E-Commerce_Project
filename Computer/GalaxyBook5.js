import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./GalaxyBook5.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Samsung",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/m/i/t/-original-imaha9gqhv9kjpk9.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/q/m/9/-original-imaha9gqcy4ghf3a.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/q/o/b/-original-imaha9gq76xufcwb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/e/v/w/-original-imaha9gq4rqcmztg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/o/m/k/-original-imaha9gqz5nv4chx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/i/b/i/-original-imaha9gqy37hnttt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/h/x/4/-original-imaha9gqzgsuy7hk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/m/a/u/-original-imaha9gqwyzd6gj3.jpeg?q=70&crop=false",
        ],
        price: 187190,
        originalPrice: 155990
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
        const itemExists = cartItems.some(item => item.name === ` ${selectedVariant.name} Galaxy Book5 Pro `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: ` ${selectedVariant.name} Galaxy Book5 Pro `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="galaxybook-product-container">
                <div className="galaxybook-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="galaxybook-thumbnail-gallery">
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
                    <div className="galaxybook-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="galaxybook-product-name">
                    <h1>SAMSUNG Galaxy Book5 Pro AI PC Full Metal Chasis Intel Core Ultra 7 256V - (16 GB/1 TB SSD/Windows 11 Home) NP940XHA Thin and Light Laptop  (14 Inch, Gray, 1.23 Kg, With MS Office)
                    </h1>

                    {/* Price Section */}
                    <div className="galaxybook-product-pricing">
                        <h2><span className="galaxybook-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="galaxybook-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="galaxybook-discount-text">Discount Applied: {discount}%</p>}

                    <div className="galaxybook-brand-size-section">
                        <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9a95c8afa921a5b7f48302b1cb9d994a0a5e9f5b718ebab4affbae158c9a0068.jpg?q=90" alt="Samsung Logo" className="samsunglogo" />
                        </p>
                        <p><strong>Size:</strong> 35.56 cm  </p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="galaxybook-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="galaxybook-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="galaxybook-Product-Info">

                <div className="galaxybook-tabs-container">
                    <button
                        className={`galaxybook-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`galaxybook-tab-button ${activeTab === "Processor And Memory Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Processor And Memory Features")}
                    >
                        Processor And Memory Features

                    </button>
                    <button
                        className={`galaxybook-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="galaxybook-product-Detail">
                    {activeTab === "General" && (
                        <div className="galaxybook-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "1 Laptop, 1 65W Charger, 1 Data Cable(USB-C to C, 1.8m), 1 Quick Start Guide" },
                                    { label: "Model Number", value: "NP940XHA" },
                                    { label: "Part Number", value: "NP940XHA-LG4IN" },
                                    { label: "Model Name", value: "Galaxy Book5 Pro" },
                                    { label: "Series", value: "Galaxy Book5 Pro AI PC Full Metal Chasis" },
                                    { label: "Color", value: "Gray" },
                                    { label: "Type", value: "Thin and Light Laptop" },
                                    { label: "Suitable For", value: "Processing & Multitasking" },
                                    { label: "Battery Backup", value: "Upto 8.7 Hours" },
                                    { label: "MS Office Provided", value: "Yes" },
                                ].map((item, index) => (
                                    <li key={index} className="galaxybook-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Processor And Memory Features" && (
                        <div className="galaxybook-product-section">

                            <ul>
                                {[
                                    { label: "Processor Brand", value: "Intel" },
                                    { label: "Processor Name", value: "Core Ultra 7" },
                                    { label: "SSD", value: "Yes" },
                                    { label: "SSD Capacity", value: "1 TB" },
                                    { label: "RAM", value: "16 GB" },
                                    { label: "RAM Type", value: "LPDDR5X" },
                                    { label: "Processor Variant", value: "256V" },
                                    { label: "Graphic Processor", value: "Intel Integrated Arc" },
                                    { label: "Storage Type", value: "SSD" },
                                    { label: "Operating System", value: "Windows 11 Home" },

                                ].map((item, index) => (
                                    <li key={index} className="galaxybook-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="galaxybook-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Years Warranty" },
                                    { label: "Warranty Service Type", value: "Onsite" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects Only" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                ].map((item, index) => (
                                    <li key={index} className="galaxybook-product-item">
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
