import React from 'react';
import './TermCondition.css';
import Footer from "../Footer/Footer";


const TermsAndConditions = () => {
  return (
    <>
    <div className="terms-page">
      <div className="terms-header">
        <h1>Terms & Conditions</h1>
        <p>Welcome to SRS CART. Please read our terms carefully before using our services.</p>
      </div>

      <div className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to comply with and be bound by these terms and conditions.
          If you disagree with any part, you may not use our services.
        </p>
      </div>

      <div className="terms-section">
        <h2>2. Use of the Website</h2>
        <p>
          You agree to use SRS CART only for lawful purposes and in a way that does not infringe the rights of others.
          Any unauthorized use may result in suspension or legal action.
        </p>
      </div>

      <div className="terms-section">
        <h2>3. Product Information</h2>
        <p>
          We strive to ensure all product details are accurate. However, we do not guarantee that all product descriptions,
          pricing, or other content is error-free or up-to-date.
        </p>
      </div>

      <div className="terms-section">
        <h2>4. Order & Payment</h2>
        <p>
          All payments must be made in full before shipment. SRS CART reserves the right to cancel any order due to errors
          or payment issues.
        </p>
      </div>

      <div className="terms-section">
        <h2>5. Limitation of Liability</h2>
        <p>
          SRS CART shall not be liable for any direct or indirect damages arising from the use or inability to use
          our website or products.
        </p>
      </div>

      <div className="terms-section">
        <h2>6. Changes to Terms</h2>
        <p>
          We may update these terms periodically. It is your responsibility to check for updates. Continued use means
          acceptance of any modifications.
        </p>
      </div>

      <div className="terms-section">
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about our Terms & Conditions, feel free to contact us at <a href="mailto:support@srscart.com">support@srscart.com</a>.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;
