import React, { useState } from "react";
import { useCart } from "../../Cart/CartContext";
import "./OnePlusBullets.css";
import Footer from "../../../Footer/Footer";


const colorVariants = [
    {
        name: "Magico Black",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l0sgyvk0/headphone/f/2/o/buds-z2-oneplus-original-imagcg5ghj3ptrpg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l0sgyvk0/headphone/z/r/d/buds-z2-oneplus-original-imagcg5gexhhhgzs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l0sgyvk0/headphone/v/p/p/buds-z2-oneplus-original-imagcg5gtdthutbj.jpeg?q=70&crop=false",

        ],
        // price: 14990,
        originalPrice: 2299
    },
    {
        name: "Acoustic Red",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/l4ei1e80/headphone/b/j/w/bullets-wireless-z2-oneplus-original-imagfaww7ga6nshz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l4ei1e80/headphone/z/p/z/bullets-wireless-z2-oneplus-original-imagfawwyhzekuga.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l4ei1e80/headphone/f/y/a/bullets-wireless-z2-oneplus-original-imagfawwrbsdhvna.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l4ei1e80/headphone/v/k/j/bullets-wireless-z2-oneplus-original-imagfawwz5uvmjvm.jpeg?q=70&crop=false",
            
        ],
        // price: 14990,
        originalPrice: 2199 
    },
    {
        name: "Beam Blue",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/l0sgyvk0/headphone/m/b/c/buds-z2-oneplus-original-imagcg5stg9fzes6.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l0sgyvk0/headphone/e/8/4/buds-z2-oneplus-original-imagcg5sugeg2qbk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l0sgyvk0/headphone/j/5/l/buds-z2-oneplus-original-imagcg5szcsncnpb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/l0sgyvk0/headphone/w/w/k/buds-z2-oneplus-original-imagcg5sragbg8qn.jpeg?q=70&crop=false",
            
        ],
        // price: 14990,
        originalPrice: 1499
    },
    {
        name: "Jazz Green",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/7/a/8/bullets-wireless-z2-oneplus-original-imagpgskyzj6zhte.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/p/f/r/bullets-wireless-z2-oneplus-original-imagpgskq5yb5nkv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/8/6/o/bullets-wireless-z2-oneplus-original-imagpgskhpwjv2bg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/b/g/e/bullets-wireless-z2-oneplus-original-imagpgskurnag86x.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/r/f/o/bullets-wireless-z2-oneplus-original-imagpgskzqfzf73p.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/h/w/3/bullets-wireless-z2-oneplus-original-imagpgskm2z3zhzn.jpeg?q=70&crop=false",
            
        ],
        // price: 14990,
        originalPrice: 1299
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `OnePlus Bullets Wireless   ${selectedVariant.name} Neckband `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `OnePlus Bullets Wireless   ${selectedVariant.name} Neckband `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Magico Black": "#000000",
        "Acoustic Red": "#DE0C1D",
        "Beam Blue": "#253A95",
        "Jazz Green": "#B9CE4D",
    };
    return (
        <>
            <div className="Bullets-product-container">
                <div className="Bullets-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="Bullets-thumbnail-gallery">
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
                    <div className="Bullets-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="Bullets-product-name">
                    <h1>OnePlus Bullets Wireless Z2 Bluetooth  ({selectedVariant.name}, In the Ear) </h1>

                    {/* Price Section */}
                    <div className="Bullets-product-pricing">
                        <h2><span className="Bullets-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="Bullets-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>

                    <div className="Bullets-brand-size-section">
                        <p><strong>Brand:</strong> SONY</p>
                        <p><strong>Weight:</strong> 192 g</p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="Bullets-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="Bullets-color-option"
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
                    <div className="Bullets-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="Bullets-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="Bullets-Product-Info">

                <div className="Bullets-tabs-container">
                    <button
                        className={`Bullets-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`Bullets-tab-button ${activeTab === "Product Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Product Details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`Bullets-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="Bullets-product-Detail">
                    {activeTab === "General" && (
                        <div className="Bullets-product-section">

                            <ul>
                                {[
                                    { label: "Model ID", value: "E305A / E305B" },
                                    { label: "Color", value: selectedVariant.name },
                                    { label: "Headphone Type", value: "In the Ear" },
                                    { label: "Inline Remote", value: "Yes" },
                                    { label: "Sales Package", value: "1 Neckband, Type C Cable, Additional Pair of Eartips, User Guide, Warranty Card" },
                                    { label: "Connectivity", value: "Bluetooth" },
                                    { label: "Headphone Design", value: "Behind the Neck" },
                                    { label: "Compatible Devices", value: "Laptop, Mobile, Tablet" }
                                ].map((item, index) => (
                                    <li key={index} className="Bullets-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Product Details" && (
                        <div className="Bullets-product-section">

                            <ul>
                                {[
                                    { label: "Deep Bass", value: "Yes" },
                                    { label: "Water Resistant", value: "Yes" },
                                    { label: "With Microphone", value: "Yes" },
                                    { label: "Bluetooth Version", value: "5" },
                                    { label: "Battery Life", value: "30 Hrs" },
                                    { label: "Charging Time", value: "10 min" }

                                ].map((item, index) => (
                                    <li key={index} className="Bullets-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="Bullets-product-section">

                            <ul>
                                {[
                                    { label: "Domestic Warranty", value: "1 Year" },
                                    { label: "Warranty Summary", value: "1 Year Warranty on Product" },
                                    { label: "Warranty Service Type", value: "Contact : Ph : 1800 102 8411 / Mail : onepluscare@oneplus.com" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects" },
                                    { label: "Not Covered in Warranty", value: "Physical Damages" }
                                ].map((item, index) => (
                                    <li key={index} className="Bullets-product-item">
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
