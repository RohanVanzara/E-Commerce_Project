const mongoose = require("mongoose");

// const CustomerSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     contact: { type: String, required: true },
//     password: { type: String, required: true },
// }, { timestamps: true });


const CustomerSchema = new mongoose.Schema({
    username: String,
    email:  String,
    contact:  String,
    password: String,
}, { timestamps: true });

const CustomerModel = mongoose.model("customer",CustomerSchema)
module.exports = CustomerModel
