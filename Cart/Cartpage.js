// // CartPage.jsx
// import React, { useState, useEffect } from "react";
// import { useCart } from "./CartContext";
// import "./Cartpage.css";
// import { Link, useNavigate } from "react-router-dom";

// const CartPage = () => {
//     const { cartItems, setCartItems } = useCart();
//     const navigate = useNavigate();

//     const [promoCode, setPromoCode] = useState("");
//     const [discount, setDiscount] = useState(0);

//     // Update localStorage on cart change
//     useEffect(() => {
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }, [cartItems]);

//     const totalOriginalPrice = cartItems.reduce(
//         (acc, item) => acc + (item.originalPrice || item.price) * item.quantity,
//         0
//     );

//     const discountAmount = totalOriginalPrice * discount;
//     const shippingCharge = cartItems.length > 0 ? 50 : 0;
//     const salesTax = (totalOriginalPrice - discountAmount) * 0.05;
//     const estimatedTotal = totalOriginalPrice - discountAmount + shippingCharge + salesTax;

//     const removeItem = (index) => {
//         const updatedCart = cartItems.filter((_, i) => i !== index);
//         setCartItems(updatedCart);
//     };

//     const updateQuantity = (index, amount) => {
//         const updatedCart = [...cartItems];
//         updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + amount);
//         setCartItems(updatedCart);
//     };

//     const handleApplyPromoCode = () => {
//         const totalBeforeDiscount = totalOriginalPrice;

//         if (promoCode === "SAVE10") {
//             if (totalBeforeDiscount > 3000) {
//                 setDiscount(0.10);
//                 alert("Promo code applied!");
//             } else {
//                 alert("SAVE10 is only applicable for totals above ₹3000.");
//                 setDiscount(0);
//             }
//         } else if (promoCode === "SAVE20") {
//             if (totalBeforeDiscount > 10000) {
//                 setDiscount(0.20);
//                 alert("Promo code applied!");
//             } else {
//                 alert("SAVE20 is only applicable for totals above ₹10,000.");
//                 setDiscount(0);
//             }
//         } else {
//             setDiscount(0);
//             alert("Invalid promo code");
//         }
//     };

//     const handlePlaceOrder = () => {
//         if (cartItems.length === 0) {
//             alert("Your cart is empty. Add items before placing an order.");
//             return;
//         }
//         navigate("/Placeorder", {
//         state: {
//             orderedItems: cartItems
//         }
//     });
//     };

//     return (
//         <div className="cart-container">
//             <h1>My Shopping Cart</h1>

//             {cartItems.length === 0 ? (
//                 <div className="empty-cart">
//                     <h2>Your cart is empty 🛒</h2>
//                     <Link to="/" className="continue-shopping">Continue Shopping</Link>
//                 </div>
//             ) : (
//                 <div className="cart-content">
//                     {/* Cart Items Table */}
//                     <div className="cart-items">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>PRODUCT</th>
//                                     <th>PRICE</th>
//                                     <th>QTY</th>
//                                     <th>TOTAL</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {cartItems.map((item, index) => (
//                                     <tr key={index} className="cart-item">
//                                         <td className="product-info">
//                                             <img src={item.image} alt={item.name} className="cart-item-image" />
//                                             <div className="cart-item-details">
//                                                 <h3>{item.name}</h3>
//                                                 <p>
//                                                     <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
//                                                 </p>
//                                             </div>
//                                         </td>
//                                         <td>
//                                             {item.originalPrice && (
//                                                 <>
//                                                     <span className="original-price">₹{item.originalPrice}</span><br />
//                                                 </>
//                                             )}
//                                             <span className="discounted-price">₹{item.price}</span>
//                                         </td>
//                                         <td className="quantity">
//                                             <button onClick={() => updateQuantity(index, -1)}>-</button>
//                                             <span>{item.quantity}</span>
//                                             <button onClick={() => updateQuantity(index, 1)}>+</button>
//                                         </td>
//                                         <td>
//                                             <span className="total-price">
//                                                 ₹{(item.originalPrice || item.price) * item.quantity}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>

//                     {/* Summary Section */}
//                     <div className="cart-summary">
//                         <h2>SUMMARY</h2>

//                         <div className="promo-code">
//                             <label>Do you have a promo code?</label>
//                             <input
//                                 type="text"
//                                 placeholder="Ex. SAVE10"
//                                 value={promoCode}
//                                 onChange={(e) => setPromoCode(e.target.value)}
//                             />
//                             <button className="apply-btn" onClick={handleApplyPromoCode}>APPLY</button>
//                         </div>

//                         <div className="summary-details">
//                             <p>SUBTOTAL: <span>₹{totalOriginalPrice.toFixed(2)}</span></p>

//                             {discount > 0 && (
//                                 <p>Promo Discount ({discount * 100}%): <span>- ₹{discountAmount.toFixed(2)}</span></p>
//                             )}

//                             <p>Shipping: <span>₹{shippingCharge}</span></p>
//                             <p>Sales Tax (5%): <span>₹{Math.round(salesTax)}.00</span></p>
//                             <hr />
//                             <h3>ESTIMATED TOTAL: <span>₹{Math.round(estimatedTotal)}.00</span></h3>
//                         </div>

//                         <button className="checkout-btn" onClick={handlePlaceOrder}>CHECKOUT</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;


import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import "./Cartpage.css";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cartItems, setCartItems } = useCart();
    const navigate = useNavigate();

    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [savedItems, setSavedItems] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [availableCoupons] = useState([
        { code: "SAVE10", description: "10% off on orders above ₹30000" },
        { code: "SAVE20", description: "20% off on orders above ₹50000" },
        { code: "FREESHIP", description: "Free shipping on any order" }
    ]);

    // Update localStorage on cart change
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("savedItems", JSON.stringify(savedItems));
    }, [cartItems, savedItems]);

    // Load saved items from localStorage on component mount
    useEffect(() => {
        const saved = localStorage.getItem("savedItems");
        if (saved) {
            setSavedItems(JSON.parse(saved));
        }
    }, []);

    const totalOriginalPrice = cartItems.reduce(
        (acc, item) => acc + (item.originalPrice || item.price) * item.quantity,
        0
    );

    const discountAmount = totalOriginalPrice * discount;
    const shippingCharge = promoCode === "FREESHIP" ? 0 : (cartItems.length > 0 ? 50 : 0);
    const salesTax = (totalOriginalPrice - discountAmount) * 0.05;
    const estimatedTotal = totalOriginalPrice - discountAmount + shippingCharge + salesTax;

    const removeItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
    };

    const updateQuantity = (index, amount) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + amount);
        setCartItems(updatedCart);
    };

    const handleApplyPromoCode = () => {
        const totalBeforeDiscount = totalOriginalPrice;

        if (promoCode === "SAVE10") {
            if (totalBeforeDiscount > 30000) {
                setDiscount(0.10);
                alert("Promo code applied!");
            } else {
                alert("This Coupons is only applicable when totals above ₹30000.");
                setDiscount(0);
            }
        } else if (promoCode === "SAVE20") {
            if (totalBeforeDiscount > 50000) {
                setDiscount(0.20);
                alert("Promo code applied!");
            } else {
                alert("This Coupons is only applicable when totals above ₹50,000.");
                setDiscount(0);
            }
        } else if (promoCode === "FREESHIP") {
            alert("Free shipping applied!");
        } else {
            setDiscount(0);
            alert("Invalid promo code");
        }
    };


    // const moveToCart = (index) => {
    //     const itemToMove = savedItems[index];
    //     setCartItems([...cartItems, itemToMove]);
    //     const updatedSavedItems = savedItems.filter((_, i) => i !== index);
    //     setSavedItems(updatedSavedItems);
    // };

    // const removeSavedItem = (index) => {
    //     const updatedSavedItems = savedItems.filter((_, i) => i !== index);
    //     setSavedItems(updatedSavedItems);
    // };

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty. Add items before placing an order.");
            return;
        }

        // Show confirmation first
        setShowConfirmation(true);
    };

    const confirmOrder = () => {
        navigate("/Placeorder", {
            state: {
                orderedItems: cartItems,
                totalAmount: Math.round(estimatedTotal),
                discount: discount,
                discountAmount: discountAmount,
                isShippingFree: promoCode === "FREESHIP",
                promoCode: promoCode
            }
        });
    };
    const cancelOrder = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="cart-container">
            <h1>My Shopping Cart <span className="cart-count">{cartItems.length}</span></h1>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty 🛒</h2>
                    <Link to="/" className="continue-shopping">Continue Shopping</Link>
                </div>
            ) : (
                <div className="cart-content">
                    {/* Cart Items Table */}
                    <div className="cart-items">
                        <table>
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QTY</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index} className="cart-item">
                                        <td className="product-info">
                                            <img src={item.image} alt={item.name} className="cart-item-image" />
                                            <div className="cart-item-details">
                                                <h3>{item.name}</h3>
                                                <div className="item-actions">
                                                    <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
                                                    {/* <button className="save-later-btn" onClick={() => saveForLater(index)}>Save for Later</button> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.originalPrice && (
                                                <>
                                                    <span className="original-price">₹{item.originalPrice}</span><br />
                                                </>
                                            )}
                                            <span className="discounted-price">₹{item.price}</span>
                                        </td>

                                        <td className="quantity">
                                            <button onClick={() => updateQuantity(index, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(index, 1)}>+</button>
                                        </td>
                                        <td>
                                            <span className="total-price">
                                                ₹{(item.originalPrice || item.price) * item.quantity}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="cart-actions">
                            <Link to="/" className="continue-shopping">Continue Shopping</Link>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="cart-summary">
                        <h2>SUMMARY</h2>

                        <div className="promo-code">
                            <label>Do you have a promo code?</label>
                            <div className="promo-input">
                                <input
                                    type="text"
                                    placeholder="Ex. SAVE10"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                />
                                <button className="apply-btn" onClick={handleApplyPromoCode}>APPLY</button>
                            </div>
                        </div>

                        <div className="available-coupons">
                            <h4>Available Coupons</h4>
                            <ul>
                                {availableCoupons.map((coupon, index) => (
                                    <li key={index} onClick={() => setPromoCode(coupon.code)} className="coupon-item">
                                        <span className="coupon-code">{coupon.code}</span>
                                        <span className="coupon-description">{coupon.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="summary-details">
                            <p>SUBTOTAL: <span>₹{totalOriginalPrice.toFixed(2)}</span></p>

                            {discount > 0 && (
                                <p>Promo Discount ({discount * 100}%): <span>- ₹{discountAmount.toFixed(2)}</span></p>
                            )}

                            <p>Shipping: <span>₹{shippingCharge}</span></p>
                            <p>Sales Tax (5%): <span>₹{Math.round(salesTax)}.00</span></p>
                            <hr />
                            <h3>ESTIMATED TOTAL: <span>₹{Math.round(estimatedTotal)}.00</span></h3>
                        </div>

                        <button className="checkout-btn" onClick={handlePlaceOrder}>CHECKOUT</button>
                    </div>
                </div>
            )}



            {/* Order Confirmation Modal */}
            {showConfirmation && (
                <div className="confirmation-modal">
                    <div className="modal-content">
                        <h2>Confirm Your Order</h2>
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <p>Total Items: {cartItems.length}</p>
                            <p>Total Amount: ₹{Math.round(estimatedTotal)}.00</p>
                            {discount > 0 && <p>Applied Discount: {discount * 100}%</p>}
                        </div>
                        <div className="modal-actions">
                            <button className="confirm-btn" onClick={confirmOrder}>Confirm Order</button>
                            <button className="cancel-btn" onClick={cancelOrder}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;