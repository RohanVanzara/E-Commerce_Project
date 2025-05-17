import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const BillSummary = () => {
  const location = useLocation();
  const { 
    userData, 
    cartItems, 
    totalPrice, 
    shippingFee, 
    salesTax, 
    discount, 
    // promoCode, 
    grandTotal 
  } = location.state || {};
  
  const billRef = useRef();
  const [billDownloaded, setBillDownloaded] = useState(false);
  const navigate = useNavigate();

  // Calculate discount amount if discount percentage is available
  const discountAmount = discount ? totalPrice * discount : 0;
  const isShippingFree = shippingFee === 0;

  const handleDownload = () => {
    const input = billRef.current;
    const buttons = input.querySelectorAll("button"); // Select all buttons
  
    // Hide buttons before capturing
    buttons.forEach(button => button.style.display = "none");
  
    html2canvas(input, { scale: 2 }).then((canvas) => {
      // Restore buttons after capturing
      buttons.forEach(button => button.style.display = "block");
  
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Order_Bill.pdf");
      setBillDownloaded(true);
    });
  };
  
  if (billDownloaded) {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Thank You for Your Order!</h1>
        <p style={subTitleStyle}>Your bill has been downloaded successfully.</p>
      </div>
    );
  }

  return (
    <div style={containerStyle} ref={billRef}>
      <h1 style={titleStyle}>SRS CART</h1>
      <p style={subTitleStyle}>Thank you for your order, {userData?.firstName}!</p>
      
      <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>Delivery Information</h3>
        <p><strong>Name:</strong> {userData?.firstName} {userData?.lastName}</p>
        <p><strong>Email:</strong> {userData?.email}</p>
        <p><strong>Phone:</strong> {userData?.mobile}</p>
        <p><strong>Address:</strong> {userData?.address}, {userData?.pincode}</p>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>Order Details</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Item</th>
              <th style={thTdStyle}>Price</th>
              <th style={thTdStyle}>Quantity</th>
              <th style={thTdStyle}>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{item.name}</td>
                <td style={thTdStyle}>₹{(item.originalPrice || item.price).toFixed(2)}</td>
                <td style={thTdStyle}>{item.quantity}</td>
                <td style={thTdStyle}>₹{((item.originalPrice || item.price) * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={summaryStyle}>
        <p><strong>Subtotal:</strong> ₹{totalPrice?.toFixed(2)}</p>
        
        {discount > 0 && (
          <p style={discountStyle}><strong>Discount ({discount * 100}%):</strong> - ₹{discountAmount.toFixed(2)}</p>
        )}
        
        <p><strong>Shipping Fee:</strong> {isShippingFree ? 
          <span>₹0.00 <em style={promoTextStyle}>(Free Shipping)</em></span> : 
          <span>₹{shippingFee?.toFixed(2)}</span>}
        </p>
        
        <p><strong>Sales Tax (5%):</strong> ₹{salesTax?.toFixed(2)}</p>
        
        {/* {promoCode && (
          <p style={promoTextStyle}><strong>Applied Promo Code:</strong> {promoCode}</p>
        )} */}
        
        <h2 style={grandTotalStyle}><strong>Grand Total:</strong> ₹{grandTotal?.toFixed(2)}</h2>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>Payment Information</h3>
        <p><strong>Payment Method:</strong> {userData?.paymentMethod}</p>
        {userData?.paymentMethod === "Card" && (
          <p><strong>Card Number:</strong> XXXX-XXXX-XXXX-{userData?.cardNumber?.slice(-4)}</p>
        )}
        {userData?.paymentMethod === "UPI" && (
          <p><strong>UPI ID:</strong> {userData?.upiId}</p>
        )}
      </div>
      
      <div style={buttonContainer}>
        <button style={buttonStyle} onClick={handleDownload}>Download Bill</button>
        <button onClick={() => navigate("/Feedbackpage")} style={buttonStyle}>Provide Feedback</button>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  maxWidth: "800px",
  margin: "auto",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "bold",
};

const subTitleStyle = {
  textAlign: "center",
  fontSize: "16px",
  marginBottom: "20px",
};

const sectionStyle = {
  padding: "15px",
  borderBottom: "1px solid #ddd",
};

const sectionHeaderStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px",
};

const thTdStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center",
};

const summaryStyle = {
  padding: "15px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  fontSize: "16px",
  marginTop: "15px",
};

const grandTotalStyle = {
  marginTop: "10px",
  paddingTop: "10px",
  borderTop: "1px solid #ddd",
  fontSize: "20px",
};

const discountStyle = {
  color: "#28a745",
};

const promoTextStyle = {
  color: "#007bff",
  fontStyle: "italic",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "20px",
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default BillSummary;