import React, {useState} from "react";
import { useCart } from "../Cart/CartContext";
import "./Dell.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "Monitor",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/6/a/m/-original-imahymzghhb3bs3s.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/o/2/1/-original-imahymzgng4kyhcy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/y/x/q/-original-imahymzgeh83jd9g.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/v/0/q/-original-imahymzgh5tf8hmw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/g/l/t/-original-imahymzga3n3bw5n.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/4/g/x/-original-imahymzgs8zrgwg3.jpeg?q=70&crop=false",
        ],
        price: 74999,
        originalPrice: 64999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General"); // Track selected tab
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();
    // const [discount] = useState(0);

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Dell ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Dell ${selectedVariant.name}`, 
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="dell-product-container">
                <div className="dell-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="dell-thumbnail-gallery">
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
                    <div className="dell-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="dell-product-name">
                    <h1>DELL 68.58 cm (27 inch) Quad HD LED Backlit IPS Panel with 2xDisplayPort, 1xHDMI, 2xThunderbolt, 2xUSB-Type C, 4xUSB Type-A, Audio line Out, RJ45, Adjustability-Height, Tilt, Swivel UltraSharp Hub Monitor (U2724DE)  (Response Time: 5 ms, 120 Hz Refresh Rate)</h1>

                    {/* Price Section */}
                    <div className="dell-product-pricing">
                        <h2><span className="dell-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="dell-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>

                    <div className="dell-brand-size-section">
                        <p><strong>Brand:</strong> Dell</p>
                        <p><strong>Size:</strong> 68.58 cm </p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="dell-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="dell-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="dell-Product-Info">

                <div className="dell-tabs-container">
                    <button
                        className={`dell-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`dell-tab-button ${activeTab === "Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display Features")}
                    >
                        Display Features
                    </button>
                    <button
                        className={`dell-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="dell-product-Detail">
                    {activeTab === "General" && (
                        <div className="dell-product-section">

                            <ul>
                                {[
                                    { label: "Model Name", value: "U2724DE" },
                                    { label: "Color", value: "Black, Grey" },
                                    { label: "Display", value: "68.58 cm (27 inch) LED Display" },
                                    { label: "Backlight", value: "Backlit Backlight" },
                                    { label: "Panel Type", value: "IPS Panel" },
                                    { label: "Screen Resolution Type", value: "Quad HD" },
                                    { label: "Sales Package", value: "1 Monitor, Power Cable, Display Port 1.4 Cable 1.8 m, USB Type-A to USB Type-C Gen 2 Cable 1.0 m, Thunderbolt 4 Cable - 1.0 m" },
                                    { label: "Screen Form Factor", value: "Flat" },
                                ].map((item, index) => (
                                    <li key={index} className="dell-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display Features" && (
                        <div className="dell-product-section">

                            <ul>
                                {[
                                    { label: "Maximum Refresh Rate", value: "120 Hz (Analog), 120 Hz (Digital)" },
                                    { label: "Aspect Ratio", value: "16:09" },
                                    { label: "Horizontal Viewing Angle", value: "178° (2D)" },
                                    { label: "Vertical Viewing Angle", value: "178° (2D)" },
                                    { label: "Response Time", value: "5 ms" },
                                    { label: "Brightness", value: "350 nits (2D)" },
                                    { label: "Touchscreen Support", value: "No" },
                                ].map((item, index) => (
                                    <li key={index} className="dell-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="dell-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "5 Years Warranty" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Domestic Warranty", value: "5 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="dell-product-item">
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
