import React, { useState } from "react";
import { useCart } from "../../Cart/CartContext";
import "./NoiseAirwave.css";
import Footer from "../../../Footer/Footer";


const colorVariants = [
    {
        name: "Calm Beige",
        id:"4",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/w/r/-original-imah2zf3f6uttfse.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/u/v/p/-original-imah2zf3qzzzupgh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/i/p/y/-original-imah2zf3dqa8fzsm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/l/r/p/-original-imah2zf3dc3jhtjt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/a/l/t/-original-imah2zf3rgmrpp6h.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/h/s/d/-original-imah2zf3fyqshwuh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/r/g/d/-original-imah2zf3kbydf9zz.jpeg?q=70&crop=false",

        ],
        price: 5999,
        originalPrice: 4999
    },
    {
        name: "Carbon Black",
        id:"4",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/n/s/-original-imah2zf3ejsznzmz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/u/v/p/-original-imah2zf3qzzzupgh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/o/h/g/-original-imah2zf3phadxwks.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/c/r/p/-original-imah2zf3hakppvzf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/t/x/p/-original-imah2zf3vu3xsbxa.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/f/e/b/-original-imah2zf3n5y8ktvh.jpeg?q=70&crop=false",
        ],
        price: 5999,
        originalPrice: 4499
    },
    {
        name: "Tropical Teal",
        id:"AUD-HDPHN-4-TEAL",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/z/i/s/aud-hdphn-4-teal-noise-original-imah4zh6xfz2d66k.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/r/l/v/aud-hdphn-4-teal-noise-original-imah4zh6fy6zgnrm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/d/b/2/aud-hdphn-4-teal-noise-original-imah4zh69uqsanbh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/r/l/s/aud-hdphn-4-teal-noise-original-imah4zh6agcffxmu.jpeg?q=70&crop=false",
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
        const itemExists = cartItems.some(item => item.name === `Noise Airwave Max 4  ${selectedVariant.name} Bluetooth Headphone `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Noise Airwave Max 4  ${selectedVariant.name} Bluetooth Headphone `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Calm Beige": "#EFE5D8",
        "Carbon Black": "#2B2B2B",
        "Tropical Teal": "#48747C",
    };
    return (
        <>
            <div className="airwave-product-container">
                <div className="airwave-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="airwave-thumbnail-gallery">
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
                    <div className="airwave-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="airwave-product-name">
                    <h1>Noise Airwave Max 4 with 70 Hours Playtime,ENC wiith Dual pairing & Ultra-low latency Bluetooth  ({selectedVariant.name}, On the Ear)</h1>

                    {/* Price Section */}
                    <div className="airwave-product-pricing">
                        <h2><span className="airwave-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="airwave-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>

                    <div className="airwave-brand-size-section">
                        <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/bd912110afd2d1be7215a19f2316e57abe301cc38e4ca3b569a374988790355a.jpg?q=90" alt="Noise Logo" className="NoiseLogo" />
                        </p>
                        {/* <p><strong>Weight:</strong> 192 g</p> */}
                    </div>

                    {/* Select Color Variant */}
                    <div className="airwave-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="airwave-color-option"
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
                    <div className="airwave-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="airwave-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="airwave-Product-Info">

                <div className="airwave-tabs-container">
                    <button
                        className={`airwave-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`airwave-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`airwave-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="airwave-product-Detail">
                    {activeTab === "General" && (
                        <div className="airwave-product-section">

                            <ul>
                                {[
                                     { label: "Model ID", value: selectedVariant.id },
                                     { label: "Color", value: selectedVariant.name },
                                     { label: "Headphone Type", value: "On the Ear" },
                                     { label: "Inline Remote", value: "Yes" },
                                     { label: "Sales Package", value: "1 Headphone, Charging Cable, Aux Cable, User Manual, Warranty Card" },
                                     { label: "Connectivity", value: "Bluetooth" },
                                     { label: "Headphone Design", value: "Foldable Over the Head" },
                                     { label: "Compatible Devices", value: "Laptop, Mobile, Tablet" }
                                ].map((item, index) => (
                                    <li key={index} className="airwave-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="airwave-product-section">

                            <ul>
                                {[
                                      { label: "Sweat Proof", value: "Yes" },
                                      { label: "Deep Bass", value: "No" },
                                      { label: "Water Resistant", value: "Yes" },
                                      { label: "Headphone Driver Units", value: "40 mm" },
                                      { label: "With Microphone", value: "Yes" },
                                      { label: "Bluetooth Version", value: "5.4" },
                                      { label: "Bluetooth Range", value: "10 m" }
                                    
                                ].map((item, index) => (
                                    <li key={index} className="airwave-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="airwave-product-section">

                            <ul>
                                {[
                                      { label: "Domestic Warranty", value: "1 Year" },
                                      { label: "Warranty Summary", value: "1 Year Warranty" },
                                      { label: "Warranty Service Type", value: "If Any Query Customer Need to Reach Out Us at Help@nexxbase.com or Call on 8882132132" },
                                      { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                      { label: "Not Covered in Warranty", value: "Physical Damages" }
                                ].map((item, index) => (
                                    <li key={index} className="airwave-product-item">
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
