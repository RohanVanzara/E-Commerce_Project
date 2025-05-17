import React, { useState } from "react";
import { useCart } from "../Navbar/Cart/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

const PlaceOrder = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    // Get discount and shipping information from location state
    const discount = location.state?.discount || 0;
    const isShippingFree = location.state?.isShippingFree || false;
    const promoCode = location.state?.promoCode || "";

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        pincode: "",
        paymentMethod: "Card",
        cardNumber: "",
        upiId: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Mobile validation
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Please enter a valid 10-digit mobile number";
        }

        if (!formData.address.trim()) newErrors.address = "Address is required";

        // Pincode validation
        if (!formData.pincode.trim()) {
            newErrors.pincode = "Pincode is required";
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = "Please enter a valid 6-digit pincode";
        }

        // Card number validation - must be exactly 16 digits
        if (formData.paymentMethod === "Card") {
            if (!formData.cardNumber.trim()) {
                newErrors.cardNumber = "Card number is required";
            } else if (!/^\d{16}$/.test(formData.cardNumber)) {
                newErrors.cardNumber = "Card number must be exactly 16 digits";
            }
        }

        // UPI ID validation - must contain @ and bank name
        if (formData.paymentMethod === "UPI") {
            if (!formData.upiId.trim()) {
                newErrors.upiId = "UPI ID is required";
            } else if (!formData.upiId.includes('@')) {
                newErrors.upiId = "UPI ID must contain @ symbol and bank name (e.g. username@bankname)";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const orderData = {
            ...formData,
            cartItems,
            totalPrice,
            shippingFee,
            salesTax,
            discount,
            discountAmount,
            promoCode,
            grandTotal
        };

        try {
            fetch("http://localhost:8081/placeorder", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });
            alert("Order placed successfully!");
            navigate("/Bill", {
                state: {
                    userData: formData,
                    cartItems,
                    totalPrice,
                    shippingFee,
                    salesTax,
                    discount,
                    promoCode,
                    grandTotal
                }
            });
        } catch (error) {
            alert("Failed to place order.");
        }
    };

    // Calculate totals with discount
    const totalPrice = cartItems.reduce((total, item) => total + (item.originalPrice || item.price) * item.quantity, 0);
    const discountAmount = totalPrice * discount;
    const shippingFee = isShippingFree ? 0 : 50;
    const salesTax = (totalPrice - discountAmount) * 0.05;
    const grandTotal = totalPrice - discountAmount + shippingFee + salesTax;

    return (
        <div style={containerStyle}>
            <div style={formContainer}>
                <h2 style={titleStyle}>Place Your Order</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={inputStyle} />
                    {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}

                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} style={inputStyle} />
                    {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}

                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}

                    <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} style={inputStyle} />
                    {errors.mobile && <p style={errorStyle}>{errors.mobile}</p>}

                    <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} style={{ ...inputStyle, height: "80px" }}></textarea>
                    {errors.address && <p style={errorStyle}>{errors.address}</p>}

                    <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} style={inputStyle} />
                    {errors.pincode && <p style={errorStyle}>{errors.pincode}</p>}

                    <h3>Payment Method</h3>
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="Card">Card</option>
                        <option value="UPI">UPI</option>
                        <option value="COD">Cash on Delivery</option>
                    </select>

                    {formData.paymentMethod === "Card" && (
                        <>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number (16 digits)"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                maxLength="16"
                                style={inputStyle}
                            />
                            {errors.cardNumber && <p style={errorStyle}>{errors.cardNumber}</p>}
                        </>
                    )}

                    {formData.paymentMethod === "UPI" && (
                        <>
                            <input
                                type="text"
                                name="upiId"
                                placeholder="Enter UPI ID (e.g. username@bankname)"
                                value={formData.upiId}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                            {errors.upiId && <p style={errorStyle}>{errors.upiId}</p>}
                            {/* <div style={qrContainer}>
                                <p>Scan QR Code to Pay:</p>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/QR_Code_example.png" alt="UPI QR Code" style={qrCodeStyle} />
                            </div> */}
                        </>
                    )}

                    <button type="submit" style={buttonStyle}>Place Order</button>
                </form>
            </div>

            {/* Order Summary */}
            <div style={summaryContainer}>
                <h3 style={summaryTitle}>Order Summary</h3>
                <div style={priceSummaryStyle}>
                    <p>Subtotal: ₹{totalPrice.toFixed(2)}</p>

                    {discount > 0 && (
                        <p style={discountStyle}>Discount ({discount * 100}%): - ₹{discountAmount.toFixed(2)}</p>
                    )}

                    <p>Shipping Fee: {isShippingFree ?
                        <span>₹0.00 <em style={promoTextStyle}>(Free Shipping)</em></span> :
                        <span>₹{shippingFee.toFixed(2)}</span>}
                    </p>

                    <p>Sales Tax (5%): <span>₹{Math.round(salesTax)}.00</span></p>

                    <hr />
                    <h3>Grand Total: <span>₹{Math.round(grandTotal)}.00</span></h3>
                </div>
            </div>
        </div>
    );
};

// Styles
const containerStyle = { display: "flex", justifyContent: "space-between", padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "auto", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" };
const formContainer = { width: "55%", paddingRight: "20px" };
const summaryContainer = { width: "40%", backgroundColor: "#E8E8E8", marginLeft: "10px", borderRadius: "10px", padding: "15px" };
const titleStyle = { textAlign: "center", marginBottom: "20px", color: "#333" };
const summaryTitle = { textAlign: "center", marginBottom: "15px", fontSize: "20px", fontWeight: "bold", color: "#333" };
const inputStyle = { width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" };
const buttonStyle = { width: "100%", padding: "12px", background: "black", color: "white", fontSize: "18px", fontWeight: "bold", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "15px" };
const priceSummaryStyle = { textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "#333" };
const errorStyle = { color: "red", fontSize: "14px", marginBottom: "10px" };
// const qrContainer = { textAlign: "center", marginTop: "10px" };
// const qrCodeStyle = { width: "120px", height: "120px", borderRadius: "5px" };
const promoTextStyle = { color: "#007bff", fontStyle: "italic" };
const discountStyle = { color: "#28a745" };

export default PlaceOrder;