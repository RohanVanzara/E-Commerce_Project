import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Asus.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Monitor",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/i/g/k/-original-imah4qspqmbg7txu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/n/b/j/-original-imah4qspfyxfruzr.jpeg?q=70&crop=falsefalse",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/p/k/4/-original-imah4qspazynp5ck.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/b/s/1/-original-imah4qspc2gb4cjd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/f/q/u/-original-imah4qspqgtnw2kx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/o/t/w/-original-imah4qsp7akhgj7z.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/o/w/c/-original-imah4qspye8v5hwa.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/z/3/x/-original-imah4qspnehnn59h.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/e/k/k/-original-imah4qspxsuwsukb.jpeg?q=70&crop=false",
        ],
        price: 74999,
        originalPrice: 64999
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
        const itemExists = cartItems.some(item => item.name === `Asus ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Asus ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="Asus-product-container">
                <div className="Asus-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Asus-thumbnail-gallery">
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
                    <div className="Asus-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Asus-product-name">
                    <h1>ASUS AiO A3 Series, All in One Desktop, Intel 13th Gen Core i5 (8 GB DDR5/Windows 11 Home/23.8 Inch Screen/A3402WVA-BPC002WS)  (Black)
                    </h1>

                    {/* Price Section */}
                    <div className="Asus-product-pricing">
                        <h2><span className="Asus-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="Asus-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="Asus-discount-text">Discount Applied: {discount}%</p>}

                    <div className="Asus-brand-size-section">
                        <p><strong>Brand:</strong> Asus</p>
                        <p><strong>Size:</strong> 23.8 inch</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="Asus-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Asus-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Asus-Product-Info">

                <div className="Asus-tabs-container">
                    <button
                        className={`Asus-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Asus-tab-button ${activeTab === "System Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("System Features")}
                    >
                        System Features
                    </button>
                    <button
                        className={`Asus-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Asus-product-Detail">
                    {activeTab === "General" && (
                        <div className="Asus-product-section">

                            <ul>
                                {[
                                    { label: "Model Name", value: "A3402WVA-BPC002WS" },
                                    { label: "Series", value: "AiO A3 Series, All in One Desktop, Intel 13th Gen" },
                                    { label: "Part Number", value: "90PT03T2-M01DF0" },
                                    { label: "Colour", value: "Black" },
                                ].map((item, index) => (
                                    <li key={index} className="Asus-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "System Features" && (
                        <div className="Asus-product-section">

                            <ul>
                                {[
                                    { label: "Processor Name", value: "Core i5" },
                                    { label: "Processor Brand", value: "Intel" },
                                    { label: "Processor Frequency", value: "4.6 GHz" },
                                    { label: "Operating System", value: "Windows 11 Home" },
                                    { label: "Processor Model", value: "Intel Core i5-1335U" },
                                ].map((item, index) => (
                                    <li key={index} className="Asus-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Asus-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Years Warranty" },

                                ].map((item, index) => (
                                    <li key={index} className="Asus-product-item">
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
