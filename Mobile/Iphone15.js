import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Iphone15.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Black",
        id: "MTP03HN/A",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/p/n/-original-imagtc5fxzdrdvyc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/m/3/-original-imagtc5ffhbausfy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/k/t/-original-imah4xe6cff8cejm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/v/k/-original-imagtc5fx9jzazdy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/h/z/-original-imagtc5fbxefnjtj.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/l/g/s/-original-imah4xe6e9gsvyeh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/g/k/-original-imagtc5f2k44dgax.jpeg?q=70&crop=false",

        ],
        price: 69900,
        originalPrice: 64999
    },
    {
        name: "Blue",
        id: "MTP43HN/A",

        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/7/h/-original-imagtc5fyznz42bx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/m/3/-original-imagtc5ffhbausfy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/k/t/-original-imah4xe6cff8cejm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/v/k/-original-imagtc5fx9jzazdy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/h/z/-original-imagtc5fbxefnjtj.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/l/g/s/-original-imah4xe6e9gsvyeh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/s/1/-original-imagtc5fxxhhgtrz.jpeg?q=70&crop=false",
        ],
        price: 69900,
        originalPrice: 64999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Iphone 15  ${selectedVariant.name} 128GB `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Iphone 15  ${selectedVariant.name} 128GB `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Black": "#4C4E50",
        "Blue": "#90D5FF ",
    };
    return (
        <>
            <div className="iphone15-product-container">
                <div className="iphone15-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="iphone15-thumbnail-gallery">
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
                    <div className="iphone15-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="iphone15-product-name">
                    <h1>Apple iPhone 15 ({selectedVariant.name}, 128 GB)</h1>

                    {/* Price Section */}
                    <div className="iphone15-product-pricing">
                        <h2><span className="iphone15-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="iphone15-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>

                    <div className="iphone15-brand-size-section">
                        <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90" alt="Iphone Logo" className="iphonelogo" />
                        </p>
                        <p><strong>Weight:</strong>171 g</p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="iphone15-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="iphone15-color-option"
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
                    <div className="iphone15-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="iphone15-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="iphone15-Product-Info">

                <div className="iphone15-tabs-container">
                    <button
                        className={`iphone15-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`iphone15-tab-button ${activeTab === "Display & Camera Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display & Camera Details")}
                    >
                        Display & Camera Details
                    </button>
                    <button
                        className={`iphone15-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="iphone15-product-Detail">
                    {activeTab === "General" && (
                        <div className="iphone15-product-section">

                            <ul>
                                {[
                                   { label: "In The Box", value: "Handset, USB C Charge Cable (1m), Documentation" },
                                   { label: "Model Number", value: selectedVariant.id },
                                   { label: "Model Name", value: "iPhone 15" },
                                   { label: "Color", value: selectedVariant.name },
                                   { label: "Browse Type", value: "Smartphones" },
                                   { label: "SIM Type", value: "Dual Sim(Nano + eSIM)" },
                                   { label: "Hybrid Sim Slot", value: "No" },
                                   { label: "Touchscreen", value: "Yes" },
                                   { label: "OTG Compatible", value: "No" },
                                   { label: "Sound Enhancements", value: "Built-in Stereo Speaker" }
                                ].map((item, index) => (
                                    <li key={index} className="iphone15-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display & Camera Details" && (
                        <div className="iphone15-product-section">

                            <ul>
                                {[
                                     { label: "Display Size", value: "15.49 cm (6.1 inch)" },
                                     { label: "Resolution", value: "2556 x 1179 Pixels" },
                                     { label: "Resolution Type", value: "Super Retina XDR Display" },
                                     { label: "GPU", value: "5 Core" },
                                     { label: "Display Type", value: "All Screen OLED Display" },
                                     { label: "Primary Camera Available", value: "Yes" },
                                     { label: "Primary Camera", value: "48MP + 12MP" },
                                     { label: "Optical Zoom", value: "Yes" },
                                     { label: "Secondary Camera Available", value: "Yes" },
                                     { label: "Secondary Camera", value: "12MP Front Camera" },
                                     { label: "Digital Zoom", value: "10X" },
                                     { label: "Frame Rate", value: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps" },
                                     { label: "Dual Camera Lens", value: "Primary Camera" }
                                ].map((item, index) => (
                                    <li key={index} className="iphone15-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="iphone15-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 year warranty for phone and 1 year warranty for in Box Accessories." },
                                    { label: "Warranty Service Type", value: "Contact : Ph : (+91)8040455150 / Mail : bangalore_admin@apple.com" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="iphone15-product-item">
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
