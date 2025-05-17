import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Boatwatch.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Black",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/y/p/x/-original-imah4rgecdbyhptn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/j/q/f/-original-imah4rgemjj4f6sh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/x/s/2/-original-imah4rgehcdunhwx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/s/f/7/-original-imah4rgexedkghgf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/q/c/-original-imah4rgettdqzpfc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/u/l/w/-original-imah4rgefg7rrbhq.jpeg?q=70&crop=false",

        ],
        // price: 5999,
        originalPrice: 5999
    },
    {
        name: "Green",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/4/b/s/-original-imah4rgez7pdfnuk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/p/j/d/-original-imah4rge8dmdcfzg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/e/b/n/-original-imah4rgewfzgyfy7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/7/q/3/-original-imah4rge8cgby8wf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/e/x/h/-original-imah4rgeazyvgdgk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/c/w/a/-original-imah4rges2mftfwq.jpeg?q=70&crop=false"
        ],
        // price: 5499,
        originalPrice: 5499
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();
    const [discount] = useState(0);

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Boatwatch ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Boatwatch ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Black": "#000000",       
        "Green": "#008000",  
    };
    return (
        <>
            <div className="Boatwatch-product-container">
                <div className="Boatwatch-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Boatwatch-thumbnail-gallery">
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
                    <div className="Boatwatch-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Boatwatch-product-name">
                <h1> boAt Lunar Vista w/ 3.8 cm(1.52") HD & Always On Display,BT Calling, Functional Crown Smartwatch  ({selectedVariant.name} Strap, Free Size)</h1>

                    {/* Price Section */}
                    <div className="Boatwatch-product-pricing">
                        <h2><span className="Boatwatch-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        {/* <h2><span className="Boatwatch-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>
                    {discount > 0 && <p className="Boatwatch-discount-text">Discount Applied: {discount}%</p>}

                    <div className="Boatwatch-brand-size-section">
                        <p><strong>Brand:</strong> Boatwatch</p>
                        <p><strong>Size:</strong> 3.8 cm </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="Boatwatch-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="Boatwatch-color-option"
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
                    <div className="Boatwatch-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Boatwatch-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Boatwatch-Product-Info">

                <div className="Boatwatch-tabs-container">
                    <button
                        className={`Boatwatch-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Boatwatch-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Boatwatch-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Boatwatch-product-Detail">
                    {activeTab === "General" && (
                        <div className="Boatwatch-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "Smartwatch, Charging Cable, User Manual" },
                                    { label: "Model Number", value: "Lunar Vista" },
                                    { label: "Model Name", value: "Lunar Vista w/ 3.8 cm(1.52) HD & Always On Display,BT Calling, Functional Crown" },
                                    { label: "Dial Shape", value: "Round" },
                                    { label: "Strap Color", value: selectedVariant.name },
                                    { label: "Strap Material", value: "Silicone" },
                                    { label: "Size", value: "Free Size" },
                                    { label: "Touchscreen", value: "Yes" },
                                    { label: "Water Resistant", value: "Yes" },
                                    { label: "Usage", value: "Fitness & Outdoor" },
                                    { label: "Ideal For", value: "Men & Women" },
                                    { label: "Compatible OS", value: "Android & iOS" }
                                ].map((item, index) => (
                                    <li key={index} className="Boatwatch-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Boatwatch-product-section">

                            <ul>
                                {[
                                    // { label: "Closure", value: "Buckle" },
                                    { label: "Sensor", value: "HR, & G-sensor" },
                                    { label: "Battery Life", value: "Upto 7 days" },
                                    { label: "Call Function", value: "Yes" },
                                    { label: "Bluetooth", value: "Yes" },
                                    { label: "Display Resolution", value: "360 x 360 Pixels" },
                                    { label: "Display Size", value: "38.6 mm" },
                                    // { label: "Notification Type", value: "Vibration" },
                                ].map((item, index) => (
                                    <li key={index} className="Boatwatch-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Boatwatch-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 year warranty from the date of purchase" },
                                    { label: "Warranty Service Type", value: "Reach out to us at info@imaginemarketingindia.com" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    // { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="Boatwatch-product-item">
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
