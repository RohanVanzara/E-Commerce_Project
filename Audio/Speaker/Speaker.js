import React, { useState } from "react";
import "./Speaker.css"
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
    {
        id: 1,
        name: "boAt Stone Opus with 12 Hrs Battery, Multilink, Built-in Subwoofers & Premium Design 80 W Bluetooth Speaker  (Sea Green, Mono Channel)",
        price: "₹19,999",
        oldPrice: "₹24,990",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/t/t/s/-original-imah8s3swwu76jfv.jpeg?q=70&crop=false",
        sale: true,
        path: "/StoneOpus"
    },
    {
        id: 2,
        name: "boAt Aavante Bar 3500 with Bass & Treble Controls, EQ Modes & Master Remote Control 500 W Bluetooth Soundbar  (Premium Black, 5.1 Channel)",
        price: "₹14,999",
        oldPrice: null,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/j/q/v/-original-imagtnpuctjgnzrx.jpeg?q=70",
        sale: false,
        path: "/AavanteBar"
    },
];

const SpeakerPage = () => {
    const Navigate = useNavigate();
    const [products, setProducts] = useState(productsData);
    const [sortOption, setSortOption] = useState("default");

    const handleSortChange = (event) => {
        const sortValue = event.target.value;
        setSortOption(sortValue);

        let sortedProducts = [...products];

        const cleanPrice = (priceStr) =>
            parseInt(priceStr.replace(/[₹,]/g, ""));

        switch (sortValue) {
            case "low-high":
                sortedProducts.sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
                break;
            case "high-low":
                sortedProducts.sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
                break;
            case "a-z":
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "z-a":
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                sortedProducts = [...productsData];
        }

        setProducts(sortedProducts);
    };


    return (
        <>

            <div className="Speaker-container">
                <aside className="Speaker-sidebar">
                    <h3>Browse by</h3>
                    <ul className="Speaker's-category-list">
                        <li onClick={() => Navigate("/All")}>Shop All</li>
                        <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
                        <li  onClick={() => Navigate("/computer")}>Computers</li>
                        <li onClick={() => Navigate("/Tablets")}>Tablet</li>
                        <li onClick={() => Navigate("/Drone")}>Drones</li>
                        <li onClick={() => Navigate("/Camera")}>Cameras</li>
                        <li onClick={() => Navigate("/Headphone")}>Headphones</li>
                        <li onClick={() => Navigate("/Mobile")}>Mobile</li>
                        <li className="active" onClick={() => Navigate("/Speaker")}>Speakers</li>
                        <li onClick={() => Navigate("/tv")}>Television</li>
                        <li onClick={() => Navigate("/Watch")}>Watch</li>
                        <li onClick={() => Navigate("/Sale")}>Sale</li>
                    </ul>
                </aside>
                <main className="Speaker's-product-list">
                    <div className="Speaker's-sorting">
                        <h1>Speakers</h1>
                        <div className="Speaker's-sortby">
                            <label>Sort by:</label>
                            <select value={sortOption} onChange={handleSortChange}>
                                <option value="default">Default</option>
                                <option value="low-high">Price: Low to High</option>
                                <option value="high-low">Price: High to Low</option>
                                <option value="a-z">Name: A-Z</option>
                                <option value="z-a">Name: Z-A</option>
                            </select>
                        </div>
                    </div>
                    <p> {products.length} Products</p>
                    <div className="Speaker-grid">
                        {products.map((product) => (
                            <div key={product.id} className="Speaker-card">
                                {product.sale && <span className="Speaker-discount">SALE</span>}
                                <div onClick={() => Navigate(product.path)} className="Speaker-image-wrapper">
                                    <img src={product.image} alt={product.name} className="Speaker-image" />
                                </div>
                                <h4>
                                    {product.name.split(" ").slice(0, 7).join(" ")}
                                    {product.name.split(" ").length > 7 && "..."}
                                </h4>
                                <p className="Speaker-price">
                                    {product.oldPrice && <span className="Speaker's-old-price">{product.oldPrice}</span>}
                                    <span className="Speaker's-new-price">{product.price}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default SpeakerPage;
