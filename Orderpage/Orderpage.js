import React from "react";
import "./Orderpage.css";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const orderedItems = location.state?.orderedItems || [];

  const currentStep = 2; // This can be made dynamic later
  const steps = ["Ordered", "Packed", "Shipped", "Delivered"];

  return (
    <div className="order-container">
      <h2 className="order-title">Your Order Status</h2>

      {/* Order Tracker */}
      <div className="order-tracker">
        {steps.map((step, index) => (
          <div className="step-wrapper" key={index}>
            <div className={`step-circle ${index <= currentStep ? "active" : ""}`}>
              {index + 1}
            </div>
            <p className={`step-label ${index <= currentStep ? "active" : ""}`}>
              {step}
            </p>
            {index < steps.length - 1 && (
              <div className={`step-line ${index < currentStep ? "active" : ""}`} />
            )}
          </div>
        ))}
      </div>

      {/* Order Details */}
      <div className="order-details">
        <h3>Order Details</h3>
        {orderedItems.map((item, index) => (
          <div key={index}>
            <p><strong>Product:</strong> {item.name}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Price:</strong> ₹{(item.originalPrice || item.price).toFixed(2)}</p>
            <p><strong>Total:</strong> ₹{((item.originalPrice || item.price) * item.quantity).toFixed(2)}</p>
            <hr />
          </div>
        ))}
        <p><strong>Expected Delivery:</strong> April 15, 2025</p>
      </div>
    </div>
  );
};

export default OrderPage;
