import React, { useState } from "react";
import { useCart } from '../Cart/CartContext';
import "./Tcltv.css";
import Footer from '../../Footer/Footer';

const Product = [
    {
        name: "Tv ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/t/4/q/-original-imah9m5y4cmf4dcs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/u/g/r/-original-imah4fckayvxanqy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/m/t/z/-original-imahyh39qwdmdkfg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/3/d/n/-original-imah32t3ztumueyx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/t/f/1/-original-imah32t3mysqajfb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/i/i/o/-original-imah32t3dgb5sjjf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/i/i/x/-original-imahyh39qxkhveec.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/i/i/o/-original-imah32t3dgb5sjjf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/f/k/i/-original-imahyr9h4bsupzzv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/d/d/c/55c655-tcl-original-imah2hf7mbexe2tx.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/h/4/o/-original-imahyr9hzqwuws8f.jpeg?q=70&crop=false",
        ],
        price: 72990,
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
        const itemExists = cartItems.some(item => item.name === `TCL P71B Pro Smart Google  ${selectedVariant.name}  `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `TCL P71B Pro Smart Google  ${selectedVariant.name}  `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="tcltv-product-container">
                <div className="tcltv-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="tcltv-thumbnail-gallery">
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
                    <div className="tcltv-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="tcltv-product-name">
                    <h1>TCL P71B Pro 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV Hands Free Voice Control |Dolby Vision- Atmos | DTS Virtual : X, ONKYO 2.1ch |120Hz Game Accelerator (55P71B Pro)  (55P71B Pro)
                    </h1>

                    {/* Price Section */}
                    <div className="tcltv-product-pricing">
                        <h2><span className="tcltv-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="tcltv-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="tcltv-discount-text">Discount Applied: {discount}%</p>}

                    <div className="tcltv-brand-size-section">
                        <p><strong>Brand:</strong> <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/3629877d0de9ff0d18b8bcaeea90517b7b266e101568f9c7021de879f3d78118.png?q=90" alt="TCL Logo" className="samsunglogo" />
                        </p>
                        <p><strong>Weight:</strong> 10.5 kg</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="tcltv-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="tcltv-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>

                </div>
            </div>
            {/* Product Info */}
            <div className="tcltv-Product-Info">

                <div className="tcltv-tabs-container">
                    <button
                        className={`tcltv-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`tcltv-tab-button ${activeTab === "Display Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display Features")}
                    >
                        Display Features
                    </button>
                    <button
                        className={`tcltv-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>

                </div>

                {/*Content */}
                <div className="tcltv-product-Detail">
                    {activeTab === "General" && (
                        <div className="tcltv-product-section">

                            <ul>
                                {[
                                    { label: "Smart TV", value: "Yes" },
                                    { label: "Launch Year", value: "2024" },
                                    { label: "Model Name", value: "55P71B Pro" },
                                    { label: "Series", value: "P71B Pro" },
                                    { label: "Color", value: "Black" }
                                ].map((item, index) => (
                                    <li key={index} className="tcltv-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display Features" && (
                        <div className="tcltv-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "139 cm (55 inch)" },
                                    { label: "Display Technology", value: "QLED" },
                                    { label: "Resolution", value: "Ultra HD (4K) (3840 x 2160)" },
                                    { label: "LED Arrangement", value: "DLED" },
                                    { label: "Viewing Angle", value: "178 Degree" },
                                    { label: "Brightness", value: "350 nits" },
                                    { label: "Contrast Ratio", value: "5000:01:00 (Static)" },
                                    { label: "Aspect Ratio", value: "16:09" }
                                ].map((item, index) => (
                                    <li key={index} className="tcltv-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Warranty" && (
                        <div className="tcltv-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "2 Years Comprehensive Warranty" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Damages Resulting from Un-authorised Adaptations or Adjustment. External Accessories (Such as Battery, Cable Etc). Damages Caused to the Product by Accident, Lightening, Ingress of Water, Fire, Dropping or Excessive Shock. If Product Serial No has been Altered, Removed or Defaced. Damages Caused by Improper Installation, 3rd Party Equipment or Software and Media Used. If Product is Used in Commercial, Business, Industrial, Educational and Rental Applications" },
                                    { label: "Warranty Service Type", value: "For any warranty-related issues, Please call Customer Support Toll Free: 180-0102-0622, 180-0419-0622, Email to indiasupport@tcl.com" }

                                ].map((item, index) => (
                                    <li key={index} className="tcltv-product-item">
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
