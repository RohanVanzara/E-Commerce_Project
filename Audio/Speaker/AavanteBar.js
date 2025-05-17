import React, { useState } from "react";
import { useCart } from '../../Cart/CartContext';
import "./AavanteBar.css";
import Footer from '../../../Footer/Footer';


const Product = [
    {
        name: "Bluetooth Soundbar  ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/j/q/v/-original-imagtnpuctjgnzrx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/y/g/w/-original-imah4gpfg5j6yf5x.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/g/j/g/-original-imah4gpfjhzsjvzy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/o/l/q/-original-imah4gpfqgjqhvkn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/r/n/9/-original-imah4gpft2nth6tc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/y/z/y/-original-imah4gpfzrzdncrz.jpeg?q=70&crop=false",
        ],
        // price: 24999,
        originalPrice: 14999
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
        const itemExists = cartItems.some(item => item.name === `boAt Aavante ${selectedVariant.name}  `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `boAt Aavante ${selectedVariant.name}  `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="aavantebar-product-container">
                <div className="aavantebar-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="aavantebar-thumbnail-gallery">
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
                    <div className="aavantebar-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="aavantebar-product-name">
                    <h1>boAt Aavante Bar 3500 with Bass & Treble Controls, EQ Modes & Master Remote Control 500 W Bluetooth Soundbar  (Premium Black, 5.1 Channel)
                    </h1>

                    {/* Price Section */}
                    <div className="aavantebar-product-pricing">
                        <h2><span className="aavantebar-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        {/* <h2><span className="aavantebar-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>
                    {discount > 0 && <p className="aavantebar-discount-text">Discount Applied: {discount}%</p>}

                    <div className="aavantebar-brand-size-section">
                        <p><strong>Brand:</strong> <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/164752bf18d354f1de5b2451fb11c381da8a6570cd227b9e4828917f34e7e7c6.jpg?q=90" alt="boAt Logo" className="samsunglogo" />
                        </p>
                        {/* <p><strong>Weight:</strong> 390 Grams</p> */}
                    </div>


                    {/* Quantity Selector */}
                    <div className="aavantebar-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="aavantebar-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="aavantebar-Product-Info">

                <div className="aavantebar-tabs-container">
                    <button
                        className={`aavantebar-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`aavantebar-tab-button ${activeTab === "Product Deatil" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Deatil")}
                    >
                        Product Deatil
                    </button>
                    <button
                        className={`aavantebar-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>

                </div>

                {/*Content */}
                <div className="aavantebar-product-Detail">
                    {activeTab === "General" && (
                        <div className="aavantebar-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "1 X Soundbar, 1 X Subwoofer, 1 X User Manual" },
                                    { label: "Model Number", value: "Aavante Bar 3500/Aavante Bar 3600" },
                                    { label: "Model Name", value: "Aavante Bar 3500 with Bass & Treble Controls, EQ Modes & Master Remote Control" },
                                    { label: "Type", value: "Soundbar" },
                                    { label: "Bluetooth", value: "Yes" },
                                    { label: "Configuration", value: "5.1" },
                                    { label: "Power Output (RMS)", value: "500 W" },
                                    { label: "Color", value: "Black" }
                                ].map((item, index) => (
                                    <li key={index} className="aavantebar-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Deatil" && (
                        <div className="aavantebar-product-section">

                            <ul>
                                {[
                                     { label: "Configuration", value: "5.1 Channel" },
                                     { label: "Width", value: "90 cm" },
                                     { label: "Height", value: "6.9 cm" },
                                     { label: "Depth", value: "9.3 cm" }
                                ].map((item, index) => (
                                    <li key={index} className="aavantebar-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Warranty" && (
                        <div className="aavantebar-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Service Type", value: "If Any Query Customer Need to Reach Out Us at info@imaginemarketingindia.com or Call on 912269181920" },
                                    { label: "Warranty Summary", value: "1 Year Warranty" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damages" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="aavantebar-product-item">
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
