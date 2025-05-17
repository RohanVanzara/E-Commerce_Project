import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Galaxys9.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Gray",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/z/l/8/-original-imagu28sxtrba9b2.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/0/h/q/-original-imagu28sbthyksbk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/a/j/5/-original-imah4kzrmvrkcvee.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/v/r/r/-original-imagu28s9djgg97h.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/a/q/u/-original-imagu28zusnfhjam.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/b/k/0/-original-imagu28zzkawhbyf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/t/7/o/-original-imagu28sfzawqkpz.jpeg?q=70&crop=false",
        ],
        // price: 44900,
        originalPrice: 54999
    },
    {
        name: "Lavender",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/a/c/1/-original-imah5vxtpcyth4fz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/m/q/r/-original-imah5vxtmp7shuzj.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/6/m/j/-original-imah5vxtzysgu5za.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/8/6/j/-original-imah5vxtzdf3rxba.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/r/c/2/-original-imagj72twwjurfjg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/f/d/8/-original-imah5vxttwfnsfsa.jpeg?q=70&crop=false",
        ],
        // price: 44900,
        originalPrice: 56999
    },
    {
        name: "Mint",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/2/h/u/-original-imah5vxu9neqhuvf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/e/s/e/-original-imah5vxuuzkddahf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/x/m/z/-original-imah5vxu593qdgcu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/j/v/y/-original-imah5vxuwd7rfeeg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/w/r/d/-original-imah5vxuaakuzrgv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/n/k/o/-original-imah5vxu5nr5zjkm.jpeg?q=70&crop=false",
        ],
        // price: 44900,
        originalPrice: 59999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `SAMSUNG Galaxy Tab S9 ${selectedVariant.name} `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `SAMSUNG Galaxy Tab S9 ${selectedVariant.name} `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Gray": "#7B8595",
        "Lavender": "#E3D4DE",
        "Mint": "#C3D1E0 ",
    };
    return (
        <>
            <div className="Galaxys9-product-container">
                <div className="Galaxys9-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Galaxys9-thumbnail-gallery">
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
                    <div className="Galaxys9-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Galaxys9-product-name">
                    <h1> SAMSUNG Galaxy Tab S9 FE 6 GB RAM 128 GB ROM 10.9 inch with Wi-Fi Only Tablet ({selectedVariant.name})</h1>

                    {/* Price Section */}
                    <div className="Galaxys9-product-pricing">
                        <h2><span className="Galaxys9-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="Galaxys9-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>
                    {/* {discount > 0 && <p className="Galaxys9-discount-text">Discount Applied: {discount}%</p>} */}

                    <div className="Galaxys9-brand-size-section">
                    <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9a95c8afa921a5b7f48302b1cb9d994a0a5e9f5b718ebab4affbae158c9a0068.jpg?q=90" alt="Samsung Logo" className="samsunglogo" />
                    </p>
                        <p><strong>Size:</strong> 27.69 cm  </p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="Galaxys9-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="Galaxys9-color-option"
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
                    <div className="Galaxys9-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Galaxys9-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Galaxys9-Product-Info">

                <div className="Galaxys9-tabs-container">
                    <button
                        className={`Galaxys9-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Galaxys9-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Galaxys9-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Galaxys9-product-Detail">
                    {activeTab === "General" && (
                        <div className="Galaxys9-product-section">

                            <ul>
                                {[
                                  { label: "Model Number", value: "SM-X510" },
                                  { label: "Model Name", value: "Galaxy Tab S9 FE" },
                                  { label: "Ideal Usage", value: "Entertainment, Gaming, Reading and Browsing, For Kids, Business" },
                                  { label: "Color", value: selectedVariant.name },
                                  { label: "Connectivity", value: "Wi-Fi Only" },
                                  { label: "OS", value: "Android" },
                                  { label: "Operating System Version", value: "12" },
                                  { label: "RAM", value: "6 GB" },
                                  { label: "Voice Call", value: "No" },
                                  { label: "Display Resolution Type", value: "WQXGA" },
                                  { label: "Video Call", value: "Yes" },
                                  { label: "Processor Type", value: "Exynos 1380" },
                                  { label: "Series", value: "Galaxy Tab S9 FE" },

                                ].map((item, index) => (
                                    <li key={index} className="Galaxys9-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Galaxys9-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "27.69 cm (10.9 inch)" },
                                    { label: "Sales Package", value: "Tablet, S Pen, USB, Pin, Guide Book" },
                                    { label: "Display Resolution", value: "2304 x 1440 Pixels" },
                                    { label: "Primary Camera", value: "8.0 megapixels" },
                                    { label: "Internal Storage", value: "128 GB" },
                                    { label: "Processor Speed", value: "2.4 GHz" },
                                    { label: "Secondary Clock Speed", value: "2 GHz" },
                                    { label: "Sensors", value: "Accelerometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, RGB Light Sensor" },
                                    { label: "Sim Type", value: "No Sim" },
                                    { label: "ROM", value: "128 GB" },
                                ].map((item, index) => (
                                    <li key={index} className="Galaxys9-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Galaxys9-product-section">

                            <ul>
                                {[
                                    { label: "Warranty", value: "1 Year" },
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories Including Batteries from the Date of Purchase" },
                                    { label: "Warranty Service Type", value: "Carry In" },
                                    { label: "Domestic Warranty", value: "1 Year" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damage" },
                                    { label: "Warranty Period", value: "1 Year" },
                                ].map((item, index) => (
                                    <li key={index} className="Galaxys9-product-item">
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
