import React, { useState } from "react";
import { useCart } from '../../Cart/CartContext';
import "./StoneOpus.css";
import Footer from '../../../Footer/Footer';


const Product = [
    {
        name: "Bluetooth Speaker",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/t/t/s/-original-imah8s3swwu76jfv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/z/a/k/-original-imah8s3swpftvyuf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/1/j/l/-original-imah8s3sh2rersru.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/e/w/h/-original-imah8s3sgfbbxfhp.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/z/z/t/-original-imah8s3sf8vghj6w.jpeg?q=70&crop=false",
        ],
        price: 24999,
        originalPrice: 19999
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
        const itemExists = cartItems.some(item => item.name === `boAt Stone Opus ${selectedVariant.name}  `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `boAt Stone Opus ${selectedVariant.name}  `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="stoneopus-product-container">
                <div className="stoneopus-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="stoneopus-thumbnail-gallery">
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
                    <div className="stoneopus-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="stoneopus-product-name">
                    <h1>boAt Stone Opus with 12 Hrs Battery, Multilink, Built-in Subwoofers & Premium Design 80 W Bluetooth Speaker  (Sea Green, Mono Channel)</h1>

                    {/* Price Section */}
                    <div className="stoneopus-product-pricing">
                        <h2><span className="stoneopus-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="stoneopus-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="stoneopus-discount-text">Discount Applied: {discount}%</p>}

                    <div className="stoneopus-brand-size-section">
                        <p><strong>Brand:</strong> <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/164752bf18d354f1de5b2451fb11c381da8a6570cd227b9e4828917f34e7e7c6.jpg?q=90" alt="Samsung Logo" className="samsunglogo" />
                        </p>
                        {/* <p><strong>Weight:</strong> 390 Grams</p> */}
                    </div>


                    {/* Quantity Selector */}
                    <div className="stoneopus-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="stoneopus-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="stoneopus-Product-Info">

                <div className="stoneopus-tabs-container">
                    <button
                        className={`stoneopus-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`stoneopus-tab-button ${activeTab === "Product Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Features")}
                    >
                        Product Features
                    </button>
                    <button
                        className={`stoneopus-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>

                </div>

                {/*Content */}
                <div className="stoneopus-product-Detail">
                    {activeTab === "General" && (
                        <div className="stoneopus-product-section">

                            <ul>
                                {[
                                    { label: "Sales Package", value: "1 Speaker, Charging Cable, User Manual, Warranty Card" },
                                    { label: "Model Number", value: "Stone Opus" },
                                    { label: "Model Name", value: "Stone Opus with 12 Hrs Battery, Multilink, Built-in Subwoofers & Premium Design" },
                                    { label: "Type", value: "Mobile/Tablet Speaker" },
                                    { label: "Bluetooth", value: "Yes" },
                                    { label: "Configuration", value: "Mono" },
                                    { label: "Power Output (RMS)", value: "80 W" },
                                    { label: "Color", value: "Green" }

                                ].map((item, index) => (
                                    <li key={index} className="stoneopus-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Features" && (
                        <div className="stoneopus-product-section">

                            <ul>
                                {[
                                    { label: "Configuration", value: "Mono Channel" },
                                    { label: "Compatible Devices", value: "Mobile, Laptop, Tablet" }
                                ].map((item, index) => (
                                    <li key={index} className="stoneopus-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Warranty" && (
                        <div className="stoneopus-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Service Type", value: "In Case Any Query Customer Need to Mail at Info@imaginemarketingindia.com or Call on +912269181920" },
                                    { label: "Warranty Summary", value: "1 Year Warranty" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damages" }
                                ].map((item, index) => (
                                    <li key={index} className="stoneopus-product-item">
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
