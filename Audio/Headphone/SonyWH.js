import React, { useState } from "react";
import { useCart } from "../../Cart/CartContext";
import "./SonyWH.css";
import Footer from "../../../Footer/Footer";


const colorVariants = [
    {
        name: "Black",
        id:"WH-CH720",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/z/s/p/-original-imahfcgvebshxyvd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/a/r/s/-original-imagz2d8wrjpvwfq.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/b/a/m/-original-imagz2d8fjrcy5sy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/j/k/-original-imagz2d8nfskxzhb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/a/3/f/-original-imagz2d8cyxfjrbw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/p/d/j/-original-imagz2d8m8n8cbb2.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/y/m/i/wh-ch720-sony-original-imagnjvhs8f4tgpk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/k/o/s/-original-imagz2d8ehekafdn.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/q/i/n/-original-imagz2d8k2ufngwb.jpeg?q=70&crop=false",

        ],
        price: 14990,
        originalPrice: 10499
    },
    {
        name: "Blue",
        id:"WH-CH720",

        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/m/q/s/-original-imagz2d82zhzwpvy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/k/a/x/-original-imahfcgyxfjhhh7r.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/9/5/m/-original-imagz2d8ypggakxb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/e/2/s/-original-imagz2d8hknwdw3g.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/d/e/s/-original-imagz2d8kgywga6f.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/w/u/a/-original-imagz2d86yxzhvvy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/g/l/m/wh-ch720-sony-original-imagnsptbt49nhhz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/a/z/i/wh-ch720-sony-original-imagnsptbrhgzxyz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/h/5/y/wh-ch720-sony-original-imagnsptadtgg7e9.jpeg?q=70&crop=false"
        ],
        price: 14990,
        originalPrice: 10599
    },
    {
        name: "White",
        id:"YY2966",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/y/o/i/-original-imagz2d8cnqggynk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/b/p/k/-original-imahfgfk7rffntqf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/x/i/-original-imagz2d8gvefzp6j.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/4/l/o/-original-imagz2d8zgghcjty.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/g/w/h/-original-imagz2d8mh46tekk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/i/i/q/-original-imagz2d8zfhftqja.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/d/7/j/wh-ch720-sony-original-imagnspvgdxu6uwt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/6/7/l/wh-ch720-sony-original-imagnspvyrzcnag7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/q/h/4/wh-ch720-sony-original-imagnspv9snutgnm.jpeg?q=70&crop=false"
        ],
        price: 14990,
        originalPrice: 9499
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); 
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `SONY WH-CH720N  ${selectedVariant.name} Bluetooth Headphone `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `SONY WH-CH720N  ${selectedVariant.name} Bluetooth Headphone `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Black": "#000000",
        "Blue": "#6C7C8D",
        "White": "#E5E9EA",
    };
    return (
        <>
            <div className="sonywh-product-container">
                <div className="sonywh-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="sonywh-thumbnail-gallery">
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
                    <div className="sonywh-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="sonywh-product-name">
                    <h1>SONY WH-CH720N Active Noise Cancelling, 50 Hrs. Battery life, Multipoint Connection Bluetooth  ({selectedVariant.name}, On the Ear)
                    </h1>

                    {/* Price Section */}
                    <div className="sonywh-product-pricing">
                        <h2><span className="sonywh-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="sonywh-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>

                    <div className="sonywh-brand-size-section">
                        <p><strong>Brand:</strong> SONY</p>
                        <p><strong>Weight:</strong> 192 g</p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="sonywh-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="sonywh-color-option"
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
                    <div className="sonywh-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="sonywh-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="sonywh-Product-Info">

                <div className="sonywh-tabs-container">
                    <button
                        className={`sonywh-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`sonywh-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`sonywh-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="sonywh-product-Detail">
                    {activeTab === "General" && (
                        <div className="sonywh-product-section">

                            <ul>
                                {[
                                    { label: "Model ID", value: selectedVariant.id },
                                    { label: "Color", value: selectedVariant.name },
                                    { label: "Headphone Type", value: "On the Ear" },
                                    { label: "Inline Remote", value: "Yes" },
                                    { label: "Sales Package", value: "1 Headphone, USB Type-C Charging Cable, 3.5 mm Audio Cable, Operating Instruction, Instruction Manual" },
                                    { label: "Connectivity", value: "Bluetooth" },
                                    { label: "Headphone Design", value: "Foldable Over the Head" },
                                    { label: "Compatible Devices", value: "Laptop, Mobile, Tablet" },
                                ].map((item, index) => (
                                    <li key={index} className="sonywh-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="sonywh-product-section">

                            <ul>
                                {[
                                    { label: "Sweat Proof", value: "No" },
                                    { label: "Foldable/Collapsible", value: "Yes" },
                                    { label: "Deep Bass", value: "Yes" },
                                    { label: "Water Resistant", value: "No" },
                                    { label: "Wireless Range", value: "10 m" },
                                    { label: "Series", value: "CH Series" },
                                    { label: "Circumaural/Supraaural", value: "Circumaural" },
                                    { label: "Open/Closed Back", value: "Closed" },
                                    { label: "Connector Size", value: "3.5 mm" },
                                    { label: "Indicators", value: "Battery Indicator (Charge Indication)" },
                                    { label: "Controls", value: "Volume Control, Adaptive Control, Ambient Sound Control" },
                                    { label: "Technology Used", value: "DSEE" },
                                    { label: "Headphone Driver Units", value: "30 mm" },
                                    { label: "Cord Type", value: "Cable" },
                                    { label: "Battery Life", value: "35 hrs" },
                                    { label: "Battery Capacity", value: "520 mAh" },
                                    { label: "Play Time", value: "35 hrs" },
                                    { label: "Bluetooth Version", value: "5.2" }
                                ].map((item, index) => (
                                    <li key={index} className="sonywh-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="sonywh-product-section">

                            <ul>
                                {[
                                      { label: "Domestic Warranty", value: "1 Year" },
                                      { label: "Warranty Summary", value: "12 Months Brand Warranty" },
                                      { label: "Warranty Service Type", value: "Contact : Ph : 1800-103-7799 / Mail : https://web.sony-asia.com/in/contact-us/" },
                                      { label: "Covered in Warranty", value: "Except Physical Damage" },
                                      { label: "Not Covered in Warranty", value: "Physical Damage" }
                                ].map((item, index) => (
                                    <li key={index} className="sonywh-product-item">
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
