import React, { useState } from 'react';
import './Helpcenter.css';
import Footer from "../Footer/Footer";


const HelpCenter = () => {
    const [searchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('faq');
    const [expandedFaq, setExpandedFaq] = useState(null);

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Register' button in the top right corner of the homepage. Fill in your username, email address, phone number, and create a password. Once you've completed the form, click 'Register Now' and you'll receive a confirmation email."
        },

        {
            id: 2,
            question: "How can I view my order history?",
            answer: "To view your order history, go to your account dashboard and click on the 'Order History' tab. Here you'll find a list of all your past orders, including order status, dates, and details."
        },
        {
            id: 3,
            question: "What payment methods do you accept?",
            answer: "We accept major cards (Credit Card, Debit Card), UPI, and Cash On Delivery. All payment information is securely processed and encrypted."
        },
        {
            id: 4,
            question: "How do I contact customer support?",
            answer: "You can contact our customer support team through email at support@example.com, by phone at 1-800-123-4567 (Monday-Friday, 9am-5pm), or through the contact form in the 'Contact Us' section of this help center."
        }
    ];

    // Filter FAQs based on search query
    const filteredFaqs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Toggle FAQ item expansion
    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };


    return (
        <>
            <div className="help-center-container">
                <div className="help-center-header">
                    <h1>Help Center</h1>
                    <p>Find answers to common questions and get the support you need</p>

                </div>

                <div className="help-center-tabs">
                    <button
                        className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
                        onClick={() => setActiveTab('faq')}
                    >
                        FAQs
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contact')}
                    >
                        Contact Us
                    </button>

                </div>

                <div className="help-center-content">
                    {/* FAQs Tab */}
                    {activeTab === 'faq' && (
                        <div className="faq-section">
                            <h2>Frequently Asked Questions</h2>
                            {searchQuery && filteredFaqs.length === 0 ? (
                                <div className="no-results">
                                    <p>No results found for "{searchQuery}"</p>
                                    <p>Try using different keywords or browse through our categories</p>
                                </div>
                            ) : (
                                <div className="faq-list">
                                    {filteredFaqs.map(faq => (
                                        <div className="faq-item" key={faq.id}>
                                            <div
                                                className="faq-question"
                                                onClick={() => toggleFaq(faq.id)}
                                            >
                                                <h3>{faq.question}</h3>
                                                <span className={`expand-icon ${expandedFaq === faq.id ? 'expanded' : ''}`}>
                                                    {expandedFaq === faq.id ? '−' : '+'}
                                                </span>
                                            </div>
                                            {expandedFaq === faq.id && (
                                                <div className="faq-answer">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Contact Us Tab */}
                    {activeTab === 'contact' && (
                        <div className="contact-section">
                            <h2>Contact Our Support Team</h2>
                            <div className="contact-options">
                                <div className="contact-card">
                                    <div className="contact-icon">📧</div>
                                    <h3>Email Support</h3>
                                    <p>Get a response within 24 hours</p>
                                    <a href="mailto:support@srscart.com">support@srscart.com</a>
                                </div>
                                <div className="contact-card">
                                    <div className="contact-icon">📞</div>
                                    <h3>Phone Support</h3>
                                    <p>Monday-Friday, 9am-5pm</p>
                                    <a href="tel:18001234567">1-800-123-4567</a>
                                </div>

                            </div>

                            <div className="contact-form">
                                <h3>Send us a message</h3>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" placeholder="Your name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="Your email address" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" placeholder="What's this about?" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" rows="5" placeholder="Tell us how we can help you" required></textarea>
                                    </div>
                                    <button type="submit" className="submit-button">Send Message</button>
                                </form>
                            </div>
                        </div>
                    )}

                </div>

                
            </div>
            <Footer />
        </>

    );
};

export default HelpCenter;