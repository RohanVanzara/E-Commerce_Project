import React, { useState } from "react";
import { useCart } from '../Cart/CartContext';
import "./Curved.css";
import Footer from '../../Footer/Footer';

const Product = [
    {
        name: "Tv ",
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/e/6/i/-original-imah4h8zzhaubrsz.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/e/4/s/-original-imah4h8yawfthh3v.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/j/h/e/-original-imah4h8zyh2u9txk.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/f/o/3/-original-imah4h8zrmhu8pgg.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/m/i/c/-original-imah4h8zyhgsq6xj.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/j/2/3/-original-imah4h8zuxy7ygjt.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/w/0/k/-original-imah4h8z3akz8tuv.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/y/u/t/-original-imah4h8zeedhshbf.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/television/f/r/e/-original-imah4h8zwtf7hzhz.jpeg?q=70&crop=false",
        ],
        price: 284900,
        originalPrice: 241599
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
        const itemExists = cartItems.some(item => item.name === `SAMSUNG Curved LED Smart Tizen  ${selectedVariant.name}  `);

        if (itemExists) {
            alert("Item already in cart!");
        } else {
            addToCart({
                name: `SAMSUNG Curved LED Smart Tizen  ${selectedVariant.name}  `,
                originalPrice: selectedVariant.originalPrice,
                price: selectedVariant.price,
                image: selectedImage,
                quantity: quantity
            });
        }
    };


    return (
        <>
            <div className="curvedtv-product-container">
                <div className="curvedtv-Both-Image">
                    {/* Left Sidebar (Gallery) */}
                    <div className="curvedtv-thumbnail-gallery">
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
                    <div className="curvedtv-product-image">
                        <img src={selectedImage} alt="Product" className="product-image" />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="curvedtv-product-name">
                    <h1>SAMSUNG 138 cm (55 inch) Ultra HD (4K) Curved LED Smart Tizen TV  (UA55KS9000KLXL)</h1>

                    {/* Price Section */}
                    <div className="curvedtv-product-pricing">
                        <h2><span className="curvedtv-original-price">₹{(selectedVariant.originalPrice - (selectedVariant.originalPrice * discount) / 100).toFixed(0)}</span></h2>
                        <h2><span className="curvedtv-discounted-price">₹{selectedVariant.price}</span></h2>
                    </div>
                    {discount > 0 && <p className="curvedtv-discount-text">Discount Applied: {discount}%</p>}

                    <div className="curvedtv-brand-size-section">
                        <p><strong>Brand:</strong> <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9a95c8afa921a5b7f48302b1cb9d994a0a5e9f5b718ebab4affbae158c9a0068.jpg?q=90" alt="Samsung Logo" className="samsunglogo" />
                        </p>
                        <p><strong>Weight:</strong> 20 kg</p>
                    </div>


                    {/* Quantity Selector */}
                    <div className="curvedtv-quantity-selector">
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    {/* Buttons */}
                    <button className="curvedtv-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>

                </div>
            </div>
            {/* Product Info */}
            <div className="curvedtv-Product-Info">

                <div className="curvedtv-tabs-container">
                    <button
                        className={`curvedtv-tab-button ${activeTab === "General" ? "active" : ""}`}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </button>
                    <button
                        className={`curvedtv-tab-button ${activeTab === "Display Size" ? "active" : ""}`}
                        onClick={() => setActiveTab("Display Size")}
                    >
                        Display Size
                    </button>
                    <button
                        className={`curvedtv-tab-button ${activeTab === "Warranty" ? "active" : ""}`}
                        onClick={() => setActiveTab("Warranty")}
                    >
                        Warranty
                    </button>

                </div>

                {/*Content */}
                <div className="curvedtv-product-Detail">
                    {activeTab === "General" && (
                        <div className="curvedtv-product-section">

                            <ul>
                                {[
                                    { label: "Smart TV", value: "Yes" },
                                    { label: "Launch Year", value: "2016" },
                                    { label: "Model Name", value: "UA55KS9000KLXL" },
                                ].map((item, index) => (
                                    <li key={index} className="curvedtv-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "Display Size" && (
                        <div className="curvedtv-product-section">

                            <ul>
                                {[
                                    { label: "Display Size", value: "138 cm (55 inch)" },
                                    { label: "Display Technology", value: "LED" },
                                    { label: "Resolution", value: "Ultra HD (4K) (3840 x 2160)" },
                                    { label: "LED Arrangement", value: "LED" },
                                    { label: "Contrast Ratio", value: "1000000:1 (Dynamic)" },
                                    { label: "Picture Engine", value: "SUHD Remastering" },
                                    { label: "Digital TV Reception", value: "DVB-T2" },
                                    { label: "Refresh Rate", value: "120 Hz" }
                                ].map((item, index) => (
                                    <li key={index} className="curvedtv-product-item">
                                        <span>{item.label}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Warranty" && (
                        <div className="curvedtv-product-section">

                            <ul>
                                {[
                                    { label: "Warranty Summary", value: "1 Year Manufacturer Warranty" },
                                    { label: "Covered in Warranty", value: "Manufacturing Defects Covered in Warranty" },
                                    { label: "Not Covered in Warranty", value: "No Warranty on Accessories and Transit Damages" },
                                    { label: "Warranty Service Type", value: "On-site" }
                                ].map((item, index) => (
                                    <li key={index} className="curvedtv-product-item">
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
