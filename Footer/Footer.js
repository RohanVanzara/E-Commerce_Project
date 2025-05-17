import React, { useState } from 'react';
import "./footer.css";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const Navigate = useNavigate();
    const [isAudioHover, setIsAudioHover] = useState(false);

    return (
        <footer className="footer">
            <div className="help-text">
                <h2>Need Help? Check Out Our Help Center</h2>
                <p>
                    Click here to add your own text. Let your users get to know you.
                </p>
                <button onClick={() => Navigate("/Helpcenter")} className="help-btn">Go to Help Center</button>
            </div>
            <div className="footer-container">
                {/* Store Location */}
                <div className="footer-section">
                    <div className="store-location">
                        <h3>Store Location</h3>
                        <p>Sunrise Mall, Building No. 7, 3rd Floor</p>
                        <p>Vashi, Navi Mumbai, Maharashtra 400703</p>
                        <p>support@srscart.com</p>
                        <p>1-800-123-4567 </p>
                        <div className="social-images">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000" alt="Facebook" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/?size=100&id=YfCbGWCWcuar&format=png&color=000000" alt="X (Twitter)" />
                            </a>
                        </div>

                    </div>
                </div>

                {/* Shop */}
                <div className="footer-section">
                    <div className="Footer-Shop">
                        <h3>Shop</h3>
                        <ul>
                            <li onClick={() => Navigate("/All")}>All</li>
                            <li onClick={() => Navigate("/Computer")}>Computers</li>
                            <li onClick={() => Navigate("/Tablets")}>Tablets</li>
                            <li onClick={() => Navigate("/Drone")}>Drones</li>
                            <li onClick={() => Navigate("/Camera")}>Cameras</li>
                            <li
                                className="Footer-audio-dropleft"
                                onMouseEnter={() => setIsAudioHover(true)}
                                onMouseLeave={() => setIsAudioHover(false)}
                            >
                                <li>Audio</li>
                                {isAudioHover && (
                                    <ul className="Footer-dropleft-menu">
                                        <li onClick={() => Navigate("/Headphone")}>Headphone</li>
                                        <li onClick={() => Navigate("/Speaker")}>Speaker</li>
                                    </ul>
                                )}
                            </li>

                            <li onClick={() => Navigate("/Mobile")}>Mobile</li>
                            <li onClick={() => Navigate("/tv")}>TV & Home Cinema</li>
                            <li onClick={() => Navigate("/Watch")}>Watch</li>
                            <li onClick={() => Navigate("/Sale")}>Sale</li>
                        </ul>
                    </div>
                </div>

                {/* Customer Support */}
                <div className="footer-section">
                    <h3>Customer Support</h3>
                    <ul>
                        <li onClick={() => Navigate("/Feedbackpage")}>Customer Feedback</li>
                        <li onClick={() => Navigate("/Helpcenter")}>Help Center</li>
                        <li onClick={() => Navigate("/AboutUs")}>About Us</li>
                    </ul>
                </div>

                {/* Policy */}
                <div className="footer-section">
                    <h3>Policy</h3>
                    <ul>
                        <li onClick={() => Navigate("/ReturnRefund")}>Returns & Refund </li>
                        <li onClick={() => Navigate("/TermCondition")}>Terms & Conditions</li>
                        <li onClick={() => Navigate("/PaymentMethod")}>Payment Methods</li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="help-center-footer">
                <div className="footer-links">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Feedback</a>
                </div>
                <p>© 2025 SRS CART. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
