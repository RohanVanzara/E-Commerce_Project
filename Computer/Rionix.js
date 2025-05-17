import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Rionix.css";
import Footer from "../../Footer/Footer";


const Product = [
    {
        name: "CPU",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/cpu/k/x/9/512-3-core-i5-2nd-gaming-0-rionix-original-imah5r8yfdmcgttc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/cpu/7/g/x/512-3-core-i5-2nd-gaming-0-rionix-original-imah5r8yvwjsydtu.jpeg?q=70&crop=false",

        ],
        price: 75999,
        originalPrice: 59999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();
    const [discount] = useState(0);

    const [selectedVariant] = useState(Product[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Rionix ${selectedVariant.name}`);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Rionix ${selectedVariant.name}`,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="rionix-product-container">
                <div className="rionix-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="rionix-thumbnail-gallery">
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
                    <div className="rionix-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="rionix-product-name">
                    <h1>rionix Gaming & Editind INTEL CORE i5 7TH (16 GB RAM/4 GB NVIDEA Graphics/1 TB Hard Disk/256 GB SSD Capacity/Windows 11 Pro/4 GB Graphics Memory) Gaming Tower with MS Office
                    </h1>

                    {/* Price Section */}
                    <div className="rionix-product-pricing">
                        <h2><span className="rionix-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="rionix-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="rionix-discount-text">Discount Applied: {discount}%</p>}

                    <div className="rionix-brand-size-section">
                        <p><strong>Brand:</strong> Rionix</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="rionix-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="rionix-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="rionix-Product-Info">

                <div className="rionix-tabs-container">
                    <button
                        className={`rionix-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`rionix-tab-button ${activeTab === "Performance Features" ? "active" : ""}`}
                        onClick={() => setActiveTab("Performance Features")}
                    >
                        Performance Features

                    </button>
                    <button
                        className={`rionix-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="rionix-product-Detail">
                    {activeTab === "General" && (
                        <div className="rionix-product-section">

                            <ul>
                                {[
                                    { label: "Model Name", value: "Gaming & Editind" },
                                    { label: "Part Number", value: "gaming tower core i5 7th" },
                                    { label: "Operating System", value: "Windows 11 Pro" },
                                    { label: "Suitable For", value: "Gaming" },
                                    { label: "Graphics", value: "4 GB NVIDEA" },
                                    { label: "Graphics Memory", value: "4 GB" },
                                    { label: "external Graphics", value: "NVIDEA 4GB" },
                                    { label: "Sound Card", value: "YES" },
                                    { label: "Color", value: "Black" },
                                    { label: "Expansion Slots", value: "YES" },
                                ].map((item, index) => (
                                    <li key={index} className="rionix-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Performance Features" && (
                        <div className="rionix-product-section">

                            <ul>
                                {[
                                    { label: "Processor Name", value: "Intel" },
                                    { label: "Processor Type", value: "INTEL CORE i5 7TH" },
                                    { label: "Number of Cores", value: "4" },
                                    { label: "Processor Generation", value: "7th Gen" },
                                    { label: "Processor Speed", value: "3.4 GHz" },
                                    { label: "Chipset", value: "INTEL" },
                                    { label: "Number of Installed Processors", value: "1" },
                                ].map((item, index) => (
                                    <li key={index} className="rionix-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="rionix-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 YEAR Manufacture Warranty of Parts We Replace Only Defective Parts (No Software warranty) by courier diagnosis by customer at own cost customer support 8955879778" },
                                    { label: "Service Type", value: "1 YEAR Manufacture carry in Warranty of Parts We Replace Only Defective Parts (No Software warranty) by courier diagnosis by customer at own cost customer support 8955879778" },
                                    { label: "Covered in Warranty", value: "1 YEAR Manufacture Warranty of Parts We Replace Only Defective Parts (No Software warranty) by courier diagnosis by customer at own cost customer support 8955879778" },
                                    { label: "Not Covered in Warranty", value: "damaged and burned case" },
                                ].map((item, index) => (
                                    <li key={index} className="rionix-product-item">
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
