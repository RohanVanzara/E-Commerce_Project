import React from 'react';
import './PaymentMethod.css';
import Footer from "../Footer/Footer";


const PaymentMethodPage = () => {
    return (
        <>
            <div className="payment-method-container">
                <h1>Payment Methods</h1>
                <p>At SRS CART, we offer secure and convenient payment options for your shopping experience.</p>

                <div className="payment-methods">
                    <div className="payment-card">
                        <h2>💳 Credit / Debit Cards</h2>
                        <p>We accept Visa, MasterCard, RuPay, and American Express cards. Your card details are encrypted and protected.</p>
                    </div>

                    <div className="payment-card">
                        <h2>📱 UPI Payments</h2>
                        <p>Pay directly from your bank account using UPI apps such as Google Pay, PhonePe, Paytm, BHIM, etc.</p>
                    </div>



                    <div className="payment-card">
                        <h2>💼 Cash on Delivery (COD)</h2>
                        <p>Pay with cash when your order is delivered. Available for select pin codes and orders under ₹10,000.</p>
                    </div>

                </div>

                <div className="security-note">
                    <h3>🔒 Payment Security</h3>
                    <p>All transactions are SSL encrypted and processed securely. We do not store your card or bank information.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PaymentMethodPage;
