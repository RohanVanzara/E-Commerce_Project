import React from 'react';
import './ReturnRefund.css';
import Footer from './Footer';

const ReturnRefundPolicy = () => {
    return (
        <>
            <div className="policy-page">
                <div className="policy-header">
                    <h1>Return & Refund Policy</h1>
                    <p>At SRS CART, your satisfaction is our priority.</p>
                </div>

                <div className="policy-section">
                    <h2>Returns</h2>
                    <p>
                        You can return most products within <strong>7 days of delivery</strong> if you are not satisfied.
                        Items must be unused, in original packaging, and in the same condition as received.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>Refunds</h2>
                    <p>
                        Once we receive and inspect your return, we will notify you via email. Approved returns will be
                        refunded within <strong>5-7 business days</strong> to the original payment method.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>Non-returnable Items</h2>
                    <ul>
                        <li> Items marked as "Final Sale"</li>
                        <li> Used electrical components</li>
                        <li> Gift cards</li>
                        <li> Downloadable software</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>Exchanges</h2>
                    <p>
                        We only replace items if they are defective or damaged. To exchange an item, contact us at <a href="mailto:support@srscart.com">support@srscart.com</a>.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>Need Help?</h2>
                    <p>
                        Contact our support team at <a href="mailto:support@srscart.com">support@srscart.com</a> for questions related to returns and refunds.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ReturnRefundPolicy;
