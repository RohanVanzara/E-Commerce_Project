import React from 'react';
import './AboutUs.css';
import Footer from "../Footer/Footer";


const AboutPage = () => {
    return (
        <>

            <div className="about-page">
                <div className="about-hero">
                    <h1>About SRS CART</h1>
                    <p>Your trusted destination for the latest and greatest in electronics</p>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At <strong>SRS CART</strong>, we strive to provide a seamless and affordable online shopping experience for electronic products. Whether it’s the latest gadgets, home appliances, or accessories, we are committed to delivering quality and value to every customer.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>✔ Wide range of top-quality electrical products</li>
                        <li>✔ Fast and secure checkout process</li>
                        <li>✔ Transparent tracking and responsive support</li>
                        <li>✔ Exclusive discounts and promo offers</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>Our Vision</h2>
                    <p>
                        To become India’s most customer-centric online electronics store — where people can discover, explore, and buy products with confidence.
                    </p>
                </div>

                <div className="about-footer">
                    <p>Thank you for choosing <strong>SRS CART</strong>. We’re glad to power up your life!</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
