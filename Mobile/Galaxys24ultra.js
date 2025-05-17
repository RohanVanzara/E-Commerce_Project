import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Galaxys24ultra.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Titanium Gray",
        id: "SM-S928BZTQINS",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/o/s/c/-original-imagx9pfuguwhfhe.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/q/k/-original-imagx9pff4gxepfy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/f/y/-original-imagx9pf7dd5ny7n.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/b/h/-original-imagx9pfdevtsjey.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/6/r/-original-imagx9egwjgtgwqf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/1/t/a/-original-imagx9egkfqux8qh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/u/o/-original-imagx9egvraqxfeh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/u/a/-original-imagx9egd2csrur5.jpeg?q=70&crop=false",
        ],
        // price: 14990,
        originalPrice: 144999
    },
    {
        name: "Titanium Black",
        id: "SM-S928BZKQINS",

        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/e/8/-original-imahyvntxfrpuw6g.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/o/s/c/-original-imagx9pfuguwhfhe.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/q/k/-original-imagx9pff4gxepfy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/f/y/-original-imagx9pf7dd5ny7n.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/x/0/z/-original-imagx9pghjasnh75.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/c/c/-original-imagx9egf2vuraf3.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/5/v/-original-imagx9egnznhbc6u.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/e/y/-original-imagx9egzjg3phgs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/x/l/-original-imagx9eg5yqjvhzg.jpeg?q=70&crop=false",
        ],
        // price: 14990,
        originalPrice: 144999
    },

];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Samsung Galaxy S24 Ultra  ${selectedVariant.name} `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Samsung Galaxy S24 Ultra  ${selectedVariant.name} `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Titanium Gray": "#9A928C",
        "Titanium Black": "#424242",
    };
    return (
        <>
            <div className="galaxys24ultra-product-container">
                <div className="galaxys24ultra-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="galaxys24ultra-thumbnail-gallery">
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
                    <div className="galaxys24ultra-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="galaxys24ultra-product-name">
                    <h1>SAMSUNG S25 Ultra 5G ({selectedVariant.name}, 512 GB)  (12 GB RAM)</h1>

                    {/* Price Section */}
                    <div className="galaxys24ultra-product-pricing">
                        <h2><span className="galaxys24ultra-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="galaxys24ultra-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>

                    <div className="galaxys24ultra-brand-size-section">
                        <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9a95c8afa921a5b7f48302b1cb9d994a0a5e9f5b718ebab4affbae158c9a0068.jpg?q=90" alt="Samsung Logo" className="samsunglogo" />
                        </p>
                        <p><strong>Weight:</strong> 232 g</p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="galaxys24ultra-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="galaxys24ultra-color-option"
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
                    <div className="galaxys24ultra-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="galaxys24ultra-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="galaxys24ultra-Product-Info">

                <div className="galaxys24ultra-tabs-container">
                    <button
                        className={`galaxys24ultra-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`galaxys24ultra-tab-button ${activeTab === "Display & Camera Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display & Camera Details")}
                    >
                        Display & Camera Details
                    </button>
                    <button
                        className={`galaxys24ultra-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="galaxys24ultra-product-Detail">
                    {activeTab === "General" && (
                        <div className="galaxys24ultra-product-section">

                            <ul>
                                {[
                                  { label: "In The Box", value: "Handset, Data Cable (Type C-to-C), Sim Ejector Pin, S-Pen" },
                                  { label: "Model Number", value: selectedVariant.id },
                                  { label: "Model Name", value: "S24 Ultra 5G" },
                                  { label: "Color", value: selectedVariant.name },
                                  { label: "Browse Type", value: "Smartphones" },
                                  { label: "SIM Type", value: "Dual Sim" },
                                  { label: "Hybrid Sim Slot", value: "No" },
                                  { label: "Touchscreen", value: "Yes" },
                                  { label: "OTG Compatible", value: "Yes" },
                                  { label: "Quick Charging", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="galaxys24ultra-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display & Camera Details" && (
                        <div className="galaxys24ultra-product-section">

                            <ul>
                                {[
                                     { label: "Display Size", value: "17.27 cm (6.8 inch)" },
                                     { label: "Resolution", value: "3120 x 1440 Pixels" },
                                     { label: "Resolution Type", value: "Quad HD+" },
                                     { label: "Display Type", value: "Dynamic AMOLED 2X" },
                                     { label: "HD Game Support", value: "Yes" },
                                     { label: "Display Colors", value: "16 Million" },
                                     { label: "Other Display Features", value: "Max Refresh Rate: 120 Hz, Peak Brightness: 2600 nits" },
                                     { label: "Primary Camera Available", value: "Yes" },
                                     { label: "Primary Camera", value: "200MP + 50MP + 12MP + 10MP" },
                                     { label: "Primary Camera Features", value: "Quad Camera Setup: 200MP Wide Angle (f/1.7) + 50MP Telephoto (f/3.4) + 12MP Ultra Angle (f/2.2) + 10MP Telephoto (f/2.4), Auto Focus, OIS, Optical Zoom 3X and 5X, Optical Quality Zoom 2X and 10X, Quad Tele Zoom System, Nightography, Super HDR, Generative Edit, Edit Suggestion" },
                                     { label: "Optical Zoom", value: "Yes" },
                                     { label: "Secondary Camera Available", value: "Yes" },
                                     { label: "Secondary Camera", value: "12MP Front Camera" },
                                     { label: "Secondary Camera Features", value: "12MP (f/2.2), Fixed Focus" },
                                     { label: "Flash", value: "Rear Camera" }
                                ].map((item, index) => (
                                    <li key={index} className="galaxys24ultra-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="galaxys24ultra-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects Only" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="galaxys24ultra-product-item">
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
