import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "./Galaxys25.css";
import Footer from "../../Footer/Footer";


const colorVariants = [
    {
        name: "Silver Shadow",
        id: "SM-S931BZSCINS",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/i/s/-original-imah8pdgwdu5b2hz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/b/8/-original-imah8pdgvxdznyes.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/4/o/-original-imah8pdgzr3tqyhm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/p/s/-original-imah8pdgc6vduxqv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/7/a/-original-imah8pdgzhyfdveh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/o/z/-original-imah8pdgyxyf8tma.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/w/-original-imah8wffkprttkvw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/l/l/-original-imah8wffnmejdzyy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/i/z/-original-imah8pdgs7uuggqr.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/x/f/-original-imah9sqqf2ejrpps.jpeg?q=70&crop=false",

        ],
        // price: 14990,
        originalPrice: 94999
    },
    {
        name: "Navy",
        id: "SM-S931BDBCINS",

        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/e/r/-original-imah8pdgedd5whgs.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/b/8/-original-imah8pdgvxdznyes.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/4/o/-original-imah8pdgzr3tqyhm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/p/s/-original-imah8pdgc6vduxqv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/7/a/-original-imah8pdgzhyfdveh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/x/x/-original-imah8pdgdzuf73yf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/w/-original-imah8wffkprttkvw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/l/l/-original-imah8wffnmejdzyy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/9/4/-original-imah8pdg7hnzyzjh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/x/f/-original-imah9sqqf2ejrpps.jpeg?q=70&crop=false",
        ],
        // price: 14990,
        originalPrice: 90000
    },
    {
        name: "Mint",
        id: "SM-S931BLGCINS",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/l/p/n/-original-imah8pdgxbfqzkfb.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/b/8/-original-imah8pdgvxdznyes.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/4/o/-original-imah8pdgzr3tqyhm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/p/s/-original-imah8pdgc6vduxqv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/7/a/-original-imah8pdgzhyfdveh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/8/1/-original-imah8pdgckhgdudh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/w/-original-imah8wffkprttkvw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/l/l/-original-imah8wffnmejdzyy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/w/j/-original-imah8pdgehnfxxer.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/x/f/-original-imah9sqqf2ejrpps.jpeg?q=70&crop=false",
        ],
        // price: 14990,
        originalPrice: 85000
    },
    {
        name: "Icyblue",
        id: "SM-S931BLBCINS",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/k/g/-original-imah8pdgqmc2mg26.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/b/8/-original-imah8pdgvxdznyes.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/4/o/-original-imah8pdgzr3tqyhm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/p/s/-original-imah8pdgc6vduxqv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/7/a/-original-imah8pdgzhyfdveh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/4/5/-original-imah8pdgnafyrqza.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/w/-original-imah8wffkprttkvw.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/l/l/-original-imah8wffnmejdzyy.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/s/n/b/-original-imah8pdg5ysndcs8.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/x/f/-original-imah9sqqf2ejrpps.jpeg?q=70&crop=false",
        ],
        // price: 14990,
        originalPrice: 93999
    },
];
const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [quantity, setQuantity] = useState(1);
    const { addToCart, cartItems } = useCart();

    const [selectedVariant, setSelectedVariant] = useState(colorVariants[0]);
    const [selectedImage, setSelectedImage] = useState(selectedVariant.images[0]);

    const handleAddToCart = () => {
        const itemExists = cartItems.some(item => item.name === `Samsung Galaxy S25  ${selectedVariant.name} `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `Samsung Galaxy S25  ${selectedVariant.name} `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };

    const colorMap = {
        "Silver Shadow": "#C2C2C4",
        "Navy": "#2A406D",
        "Mint": "#6C7C8D",
        "Icyblue": "#E5E9EA",
    };
    return (
        <>
            <div className="galaxys25-product-container">
                <div className="galaxys25-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="galaxys25-thumbnail-gallery">
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
                    <div className="galaxys25-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="galaxys25-product-name">
                    <h1>SAMSUNG S25 5G ({selectedVariant.name}, 256 GB)  (12 GB RAM)</h1>

                    {/* Price Section */}
                    <div className="galaxys25-product-pricing">
                        <h2><span className="galaxys25-original-price">₹{(selectedVariant.originalPrice)}</span></h2>
                        {/* <h2><span className="galaxys25-discounted-price">₹{selectedVariant.price}</span></h2> */}
                    </div>

                    <div className="galaxys25-brand-size-section">
                        <p><strong>Brand:</strong>   <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9a95c8afa921a5b7f48302b1cb9d994a0a5e9f5b718ebab4affbae158c9a0068.jpg?q=90" alt="Samsung Logo" className="samsunglogo" />
                        </p>
                        <p><strong>Weight:</strong>162 g</p>
                    </div>

                    {/* Select Color Variant */}
                    <div className="galaxys25-color-selector">
                        <h3>Select Color:</h3>
                        {colorVariants.map((variant, index) => (
                            <button
                                key={index}
                                className="galaxys25-color-option"
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
                    <div className="galaxys25-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="galaxys25-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>



                </div>
            </div>
            {/* Product Info */}
            <div className="galaxys25-Product-Info">

                <div className="galaxys25-tabs-container">
                    <button
                        className={`galaxys25-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`galaxys25-tab-button ${activeTab === "Display & Camera Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display & Camera Details")}
                    >
                        Display & Camera Details
                    </button>
                    <button
                        className={`galaxys25-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>
                </div>

                {/*Content */}
                <div className="galaxys25-product-Detail">
                    {activeTab === "General" && (
                        <div className="galaxys25-product-section">

                            <ul>
                                {[
                                    { label: "In The Box", value: "Handset, Data Cable (Type C to C), Sim Ejection Pin" },
                                    { label: "Model Number", value: selectedVariant.id },
                                    { label: "Model Name", value: "S25 5G" },
                                    { label: "Color", value: selectedVariant.name },
                                    { label: "Browse Type", value: "Smartphones" },
                                    { label: "SIM Type", value: "Dual Sim" },
                                    { label: "Hybrid Sim Slot", value: "No" },
                                    { label: "Touchscreen", value: "Yes" },
                                    { label: "OTG Compatible", value: "Yes" },
                                    { label: "Quick Charging", value: "Yes" }
                                ].map((item, index) => (
                                    <li key={index} className="galaxys25-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display & Camera Details" && (
                        <div className="galaxys25-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "15.75 cm (6.2 inch)" },
                                    { label: "Resolution", value: "2340 x 1080 Pixels" },
                                    { label: "Resolution Type", value: "Full HD+" },
                                    { label: "GPU", value: "Adreno 830" },
                                    { label: "Display Type", value: "Dynamic AMOLED 2X" },
                                    { label: "HD Game Support", value: "Yes" },
                                    { label: "Display Colors", value: "16 Million" },
                                    { label: "Other Display Features", value: "Aspect Ratio: 19.5:9, Refresh Rate: 120Hz" },
                                    { label: "Primary Camera Available", value: "Yes" },
                                    { label: "Primary Camera", value: "50MP + 10MP + 12MP" },
                                    { label: "Primary Camera Features", value: "Bixby Vision, Dual Recording, Food, Hyperlapse, Night, Panorama, Photo, Portrait, Portrait Video, Pro, Pro Video, Single Take, Slow Motion, Video" },
                                    { label: "Optical Zoom", value: "Yes" },
                                    { label: "Secondary Camera Available", value: "Yes" },
                                    { label: "Secondary Camera", value: "12MP Front Camera" },
                                    { label: "Secondary Camera Features", value: "Fixed Focus" }
                                ].map((item, index) => (
                                    <li key={index} className="galaxys25-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Warranty" && (
                        <div className="galaxys25-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects Only" },
                                    { label: "Domestic Warranty", value: "1 Year" }
                                ].map((item, index) => (
                                    <li key={index} className="galaxys25-product-item">
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
