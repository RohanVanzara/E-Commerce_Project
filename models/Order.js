// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   mobile: String,
//   address: String,
//   pincode: String,
//   paymentMethod: String,
//   cardNumber: String,
//   upiId: String,
//   cartItems: Array,
//   totalPrice: Number,
//   shippingFee: Number,
//   salesTax: Number,
//   grandTotal: Number,
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Order", OrderSchema);


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  address: String,
  pincode: String,
  paymentMethod: String,
  cardNumber: String,
  upiId: String,
  cartItems: Array,
  totalPrice: Number,
  shippingFee: Number,
  salesTax: Number,
  discount: Number,
  discountAmount: Number,
  promoCode: String,
  grandTotal: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
