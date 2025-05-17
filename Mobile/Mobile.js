import React, { useState } from "react";
import "./Mobile.css"
import Footer from "../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const productsData = [
    {
        id: 1,
        name: "Apple iPhone 15 (Black, 128 GB)",
        price: "₹64,999",
        oldPrice: "₹69,900",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=",
        sale: true,
        path: "/Iphone15"
    },
    {
        id: 2,
        name: "vivo V50 5G (Titanium Grey, 512 GB)  (12 GB RAM)",
        price: "₹40,999",
        oldPrice: "₹48,999",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/j/8/-original-imah94g8jz9x8ruf.jpeg?q=70",
        sale: true,
        path: "/Vivov50"
    },
    {
        id: 3,
        name: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
        price: "₹1,44,999",
        oldPrice: null,
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70",
        sale: false,
        path: "/Galaxys24ultra"
    },
    {
        id: 4,
        name: "SAMSUNG Galaxy S25 5G (Silver Shadow, 256 GB)  (12 GB RAM)",
        price: "₹94,999",
        oldPrice: null,
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/i/s/-original-imah8pdgwdu5b2hz.jpeg?q=70",
        sale: false,
        path: "/Galaxys25"
    },

];

const MobilePage = () => {
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

            <div className="Mobile-container">
                <aside className="Mobile-sidebar">
                    <h3>Browse by</h3>
                    <ul className="Mobile's-category-list">
                        <li onClick={() => Navigate("/All")}>Shop All</li>
                        <li onClick={() => Navigate("/BestSeller")}>Best Sellers</li>
                        <li onClick={() => Navigate("/computer")}>Computers</li>
                        <li onClick={() => Navigate("/Tablets")}>Tablet</li>
                        <li onClick={() => Navigate("/Drone")}>Drones</li>
                        <li onClick={() => Navigate("/Camera")}>Cameras</li>
                        <li onClick={() => Navigate("/Headphone")}>Headphones</li>
                        <li className="active" onClick={() => Navigate("/Mobile")}>Mobile</li>
                        <li onClick={() => Navigate("/Speaker")}>Speakers</li>
                        <li onClick={() => Navigate("/tv")}>Television</li>
                        <li onClick={() => Navigate("/Watch")}>Watch</li>
                        <li onClick={() => Navigate("/Sale")}>Sale</li>
                    </ul>
                </aside>
                <main className="Mobile's-product-list">
                    <div className="Mobile's-sorting">
                        <h1>Mobiles</h1>
                        <div className="Mobile's-sortby">
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
                    <div className="Mobile-grid">
                        {products.map((product) => (
                            <div key={product.id} className="Mobile-card">
                                {product.sale && <span className="Mobile-discount">SALE</span>}
                                <div onClick={() => Navigate(product.path)} className="Mobile-image-wrapper">
                                    <img src={product.image} alt={product.name} className="Mobile-image" />
                                </div>
                                <h4>
                                    {product.name.split(" ").slice(0, 7).join(" ")}
                                    {product.name.split(" ").length > 7 && "..."}
                                </h4>
                                <p className="Mobile-price">
                                    {product.oldPrice && <span className="Mobile's-old-price">{product.oldPrice}</span>}
                                    <span className="Mobile's-new-price">{product.price}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
            </div >
            <Footer />
        </>
    );
};

export default MobilePage;
