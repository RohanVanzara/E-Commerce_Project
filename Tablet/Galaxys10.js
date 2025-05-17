import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Galaxys10.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Moonstone Gray",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/f/n/g/sm-x820-samsung-original-imah5fwggq7x8acr.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/c/f/w/sm-x820-samsung-original-imah5fwgv3czfhng.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/p/2/l/sm-x820-samsung-original-imah5fwgekn9p8rz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/b/t/d/sm-x820-samsung-original-imah5fwgjzaffmg9.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/g/o/s/sm-x820-samsung-original-imah5fwghmaxa9wf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/b/3/k/sm-x820-samsung-original-imah5fwgqzj7frkg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/p/h/h/sm-x820-samsung-original-imah5fwgxeq5tgd7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/h/q/r/sm-x820-samsung-original-imah5fwgxyzasrhp.jpeg?q=70&crop=false",
        ],
        // price: 44900,
        originalPrice: 104999
    },
    {
        name: "Platinum Silver",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/m/0/f/-original-imah52rthghhc9d4.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/c/f/w/sm-x820-samsung-original-imah5fwgv3czfhng.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/p/2/l/sm-x820-samsung-original-imah5fwgekn9p8rz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/a/t/y/-original-imah52rtpfrpfszv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/x/e/7/-original-imah52rtbh2umc3x.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/b/3/k/sm-x820-samsung-original-imah5fwgqzj7frkg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/p/h/h/sm-x820-samsung-original-imah5fwgxeq5tgd7.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/h/q/r/sm-x820-samsung-original-imah5fwgxyzasrhp.jpeg?q=70&crop=false",
        ],
        // price: 44900,
        originalPrice: 109999
    },

];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Apple ${selectedVariant.name} Galaxys10 `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Apple ${selectedVariant.name} Galaxys10 `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Moonstone Gray": "#646772",
        "Platinum Silver": "#D6D6D6",
    };
    return (
        <>
            <div className="Galaxys10-product-container">
                <div className="Galaxys10-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Galaxys10-thumbnail-gallery">
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
                    <div className="Galaxys10-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Galaxys10-product-name">
                    <h1> SAMSUNG Galaxy Tab S10+ 12 GB RAM 256 GB ROM 12.4 inch with Wi-Fi Only Gaming Tablet ({selectedVariant.name})</h1>

                    {/* Price Section */}
                    <div className="Galaxys10-product-pricing">
                        <h2><span className="Galaxys10-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="Galaxys10-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>
                    {/* {discount > 0 && <p className="Galaxys10-discount-text">Discount Applied: {discount}%</p>} */}

                    <div className="Galaxys10-brand-size-section">
                    <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9a95c8afa921a5b7f48302b1cb9d994a0a5e9f5b718ebab4affbae158c9a0068.jpg?q=90" alt="Samsung Logo" className="samsunglogo" />
                    </p>
                        <p><strong>Size:</strong> 31.5 cm   </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="Galaxys10-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="Galaxys10-color-option"
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
                    <div className="Galaxys10-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Galaxys10-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Galaxys10-Product-Info">

                <div className="Galaxys10-tabs-container">
                    <button
                        className={`Galaxys10-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Galaxys10-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Galaxys10-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Galaxys10-product-Detail">
                    {activeTab === "General" && (
                        <div className="Galaxys10-product-section">

                            <ul>
                                {[
                                    { label: "Model Number", value: "SM-X820" },
                                    { label: "Model Name", value: "Galaxy Tab S10+" },
                                    { label: "Color", value: selectedVariant.name }, // dynamically shows selected color
                                    { label: "Connectivity", value: "Wi-Fi Only" },
                                    { label: "OS", value: "Android" },
                                    { label: "Operating System Version", value: "14" },
                                    { label: "RAM", value: "12 GB" },
                                    { label: "Voice Call", value: "No" },
                                    { label: "Display Resolution Type", value: "WQXGA+" },
                                    { label: "Video Call", value: "Yes" },
                                    { label: "HD Video Call", value: "Yes" },
                                    { label: "In-build Keypad", value: "No" },
                                    { label: "Processor Type", value: "MediaTek Dimensity 9300" },
                                    { label: "User Interface", value: "Touch Interface" }

                                ].map((item, index) => (
                                    <li key={index} className="Galaxys10-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Galaxys10-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "31.5 cm (12.4 inch)" },
                                    { label: "Sales Package", value: "Tablet, S Pen, USB Type C Cable, Quick Start Guide, Ejection Pin" },
                                    { label: "Display Resolution", value: "2800 x 1752 Pixels" },
                                    { label: "Primary Camera", value: "13 Megapixels" },
                                    { label: "Internal Storage", value: "256 GB" },
                                    { label: "Processor Speed", value: "3.4 GHz" },
                                    { label: "Secondary Clock Speed", value: "2.8 GHz" },
                                    { label: "USP", value: "3.4 GHz Processor with Android 14 OS, 13 MP Primary Camera" },
                                    { label: "Sensors", value: "Accelerometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, RGB Light Sensor" },
                                    { label: "Sim Type", value: "No Sim" },
                                    { label: "Battery Capacity", value: "10090 mAh" },
                                    { label: "Battery Type", value: "Lithium Ion" }
                                ].map((item, index) => (
                                    <li key={index} className="Galaxys10-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Galaxys10-product-section">

                            <ul>
                                {[
                                    { label: "Warranty", value: "1 Year" },
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty for Device and 6 Months for in-box accessories" },
                                    { label: "Warranty Service Type", value: "Manufacturer Defects Only" },
                                    { label: "Domestic Warranty", value: "1 Year" },
                                    { label: "Covered in Warranty", value: "Manufacturer Defects Only" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Warranty Period", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="Galaxys10-product-item">
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
