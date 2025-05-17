import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Vivov50.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Titanium Grey",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/j/8/-original-imah94g8jz9x8ruf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/s/k/a/-original-imah94g87cm9ghds.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/h/z/-original-imah94g8hsjbvywd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/b/n/-original-imah94g8dwe7whyu.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/e/y/-original-imah94g8rqtgcpcs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/s/8/v/-original-imah9gtbx9hfhzzd.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/4/p/h/-original-imah9gtbezjnbxfp.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/u/1/-original-imah9gtbcfngkzbg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/s/c/3/-original-imah9gtbxv2pxftc.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/o/b/2/-original-imah9gtbyqwzjpaw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/3/c/-original-imah9gtbe6swsxvx.jpeg?q=70&crop=false",

        ],
        price: 48999,
        originalPrice: 45999
    },
    {
        name: "Rose Red",

        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/q/v/-original-imah94g87zqhhrsw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/o/q/k/-original-imah94g8zfedpghz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/s/7/4/-original-imah94g8zenzvtdm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/c/u/-original-imah9hf5wrznvphs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/l/n/-original-imah94g8gyadrmya.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/4/a/z/-original-imah94g8h6cfqh4h.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/j/p/-original-imah9gtb3tk3fqt2.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/e/s/-original-imah9gtbpzrywxru.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/r/v/-original-imah9gtbawpmq9nf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/o/b/2/-original-imah9gtbyqwzjpaw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/w/s/-original-imah9gtbk2xvn5qq.jpeg?q=70&crop=false",
        ],
        price: 48999,
        originalPrice: 42999
    },
   

];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `vivo V50 ${selectedVariant.name} `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `vivo V50 ${selectedVariant.name} `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Titanium Grey": "#666666",
        "Rose Red": "#804756",
    };
    return (
        <>
            <div className="vivov50-product-container">
                <div className="vivov50-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="vivov50-thumbnail-gallery">
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
                    <div className="vivov50-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="vivov50-product-name">
                    <h1>vivo V50 5G ({selectedVariant.name}, 256 GB) (12 GB RAM)</h1>

                    {/* Price Section */}
                    <div className="vivov50-product-pricing">
                        <h2><span className="vivov50-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        <h2><span className="vivov50-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>

                    <div className="vivov50-brand-size-section">
                        <p><strong>Brand:</strong><img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/735573b150767c4283024f60bff169359722a950d6dfde40537bbeaaab58ff0d.jpg?q=90" alt="Vivo Logo" className="vivologo" /></p>
                        <p><strong>Weight:</strong>199 g</p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="vivov50-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="vivov50-color-option"
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
                    <div className="vivov50-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="vivov50-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="vivov50-Product-Info">

                <div className="vivov50-tabs-container">
                    <button
                        className={`vivov50-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`vivov50-tab-button ${activeTab === "Display & Camera Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display & Camera Details")}
                    >
                        Display & Camera Details
                    </button>
                    <button
                        className={`vivov50-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="vivov50-product-Detail">
                    {activeTab === "General" && (
                        <div className="vivov50-product-section">

                            <ul>
                                {[
                                    { label: "In The Box", value: "Handset, Quick Start Guide, USB Cable, Charger, Eject Tool, Phone Case, Protective Film (Applied), Warranty Card" },
                                    { label: "Model Number", value: "V2427" },
                                    { label: "Model Name", value: "V50 5G" },
                                    { label: "Color", value: selectedVariant.name },
                                    { label: "Browse Type", value: "Smartphones" },
                                    { label: "SIM Type", value: "Dual Sim" },
                                    { label: "Hybrid Sim Slot", value: "No" },
                                    { label: "Touchscreen", value: "Yes" },
                                    { label: "OTG Compatible", value: "Yes" },
                                    { label: "Quick Charging", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="vivov50-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display & Camera Details" && (
                        <div className="vivov50-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "17.2 cm (6.77 inch)" },
                                    { label: "Resolution", value: "2392 x 1080 Pixels" },
                                    { label: "Resolution Type", value: "AMOLED" },
                                    { label: "Other Display Features", value: "Refresh Rate: 60 Hz/90 Hz/120 Hz, Local Peak Brightness: 4500 nits, Color Gamut: P3 Wide Color Gamut Supported, Light Emitting Material: VM7" },
                                    { label: "Primary Camera Available", value: "Yes" },
                                    { label: "Primary Camera", value: "50MP + 50MP" },
                                    { label: "Primary Camera Features", value: "Dual Camera Setup: 50MP Main Camera (f/1.88 Aperture, FOV: 84 Degree, 6P Lens, OIS, Features: Photo, Portrait, Night, Video, Micro Movie, High Resolution, Pano, Ultra HD Document, Slo-Mo, Timelapse, Supermoon, Astro, Pro, Snapshot, Food, Dual View, Live Photo) + 50MP Wide Angle Lens Camera (f/2.0 Aperture, FOV: 119.4 Degree, 5P Lens, Autofocus, Features: Photo, Night, Video, Timelapse, Pro, High Resolution, Ultra HD Document)" },
                                    { label: "Secondary Camera Available", value: "Yes" },
                                    { label: "Secondary Camera", value: "50MP Front Camera" },
                                    { label: "Secondary Camera Features", value: "Front Camera Setup: 50MP Super Wide Angle Camera Focus Lens (f/2.0 Aperture, FOV: 92 Degree, 5P Lens, Auto Focus, Features: Photo, Portrait, Night, Video, Micro Movie, High Resolution, Dual View, Live Photo)" }
                                ].map((item, index) => (
                                    <li key={index} className="vivov50-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="vivov50-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty for Device and 6 Months Warranty for Inbox Accessories" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="vivov50-product-item">
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
